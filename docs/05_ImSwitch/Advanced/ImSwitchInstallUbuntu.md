

### ImSwitch Installation Ubuntu


#### Step 1: Install Visual Studio Code (VS Code)

1. Open a web browser and navigate to the [VS Code download page](https://code.visualstudio.com/docs/?dv=linux64_deb).
2. Download the Debian package for your 64-bit system.
3. Once downloaded, open a terminal window and navigate to the directory where the `.deb` file is located.
4. Run the following command to install VS Code:
   ```bash
   sudo dpkg -i <filename>.deb
   sudo apt-get install -f
   ```

#### Step 2: Install Miniconda

1. Open a terminal window and run the following command to download Miniconda:
   ```bash
   wget https://repo.anaconda.com/miniconda/Miniconda3-py310_23.5.2-0-Linux-x86_64.sh
   ```
2. Make the script executable and run it:
   ```bash
   bash Miniconda3-py310_23.5.2-0-Linux-x86_64.sh
   ```
3. Follow the on-screen instructions to complete the installation.
4. Create a new environment named `imswitch` with Python 3.10:
   ```bash
   conda create -n imswitch python=3.10 -y
   ```

#### Step 3: Clone Necessary Repositories

1. Navigate to the Downloads directory:
   ```bash
   cd ~/Downloads
   ```
2. Clone the required repositories:
   ```bash
   git clone https://github.com/openUC2/UC2-REST
   git clone https://github.com/openUC2/ImSwitch
   git clone https://gitlab.com/bionanoimaging/nanoimagingpack
   ```

#### Step 4: Install ImSwitch and Related Packages

1. Activate the `imswitch` environment:
   ```bash
   conda activate imswitch
   ```
2. Navigate to the ImSwitch directory and install it:
   ```bash
   cd ~/Downloads/imswitch
   pip install -e .
   ```
3. Repeat for UC2-REST and nanoimagingpack:
   ```bash
   cd ~/Downloads/UC2-REST
   pip install -e .
   cd ~/Downloads/nanoimagingpack  # Correcting typo from original logs
   pip install -e .
   ```

#### Step 5: Install Camera Drivers

1. Clone the camera drivers:
   ```bash
   cd ~/Downloads
   git clone https://github.com/hongquanli/octopi-research/
   ```
2. Navigate to the camera drivers directory and run the installation script:
   ```bash
   cd octopi-research/software/drivers\ and\ libraries/daheng\ camera/Galaxy_Linux-x86_Gige-U3_32bits-64bits_1.2.1911.9122/
   ./Galaxy_camera.run
   ```

#### Step 6: Clone ImSwitch Configuration and Set Permissions

1. Navigate to the Documents directory:
   ```bash
   cd ~/Documents
   ```
2. Clone the ImSwitch configuration:
   ```bash
   git clone https://github.com/openUC2/ImSwitchConfig
   ```
3. Change the ownership of the device:
   ```bash
   sudo chown pi:pi /dev/ttyUSB0
   ```

## New way


  A more detailed explantion can be found here: https://openuc2.discourse.group/t/imswitch-installation-on-mac-and-windows/37

  1. **Set up your Python environment** (using Conda or Mamba):
     ``bash
     mamba create -n imswitchhackathon python=3.9 -y
     mamba activate imswitchhackathon
     ``

  2. **Install ImSwitch**:
     ``bash
     pip install https://github.com/openUC2/ImSwitch/archive/refs/heads/master.zip # this installs the lastest master
     # do the same if you want to update the system
     # alternative:
     git clone https://github.com/openUC2/ImSwitch/
     cd ImSwitch
     pip install -e .
     ``

  3. **Optional**: Install the required dependencies for QT and Napari:
     ``bash
     pip install pyqtgraph qdarkstyle
     ``

  This setup will allow you to run ImSwitch with full functionality, including graphical user interface (GUI) support for Napari.




  ### Step 3: Running the Microscope with ImSwitch

  1. **Launch ImSwitch**:
     ```bash
     python -m imswitch
     ```

  2. **Select the Configuration**:
     Upon launch, choose **"Virtual Microscope"** or load your custom configuration file, such as `uc2_hik_histo.json`.

  3. **Control the System**:
     Use the ImSwitch GUI to move the motorized stage, control the LED-matrix, and capture images. The interface allows you to automate tasks such as focus stacking and digital phase-contrast imaging.


You can also try tthis bash script to download all depenceices and pull the code:
https://github.com/openUC2/ImSwitchDockerInstall/blob/master/install_native.sh


```py
#!/bin/bash -eu
sudo apt-get update
sudo apt-get install -y git curl

# in case they don't exist create Download/Desktop folder (e.g. lite)
mkdir ~/Downloads
mkdir ~/Desktop

# Set timezone
export TZ=America/Los_Angeles
echo "Setting timezone to $TZ"
sudo ln -snf /usr/share/zoneinfo/"$TZ" /etc/localtime && echo "$TZ" >/etc/timezone

# Update and install necessary dependencies
echo "Updating system and installing dependencies"
sudo apt-get update && sudo apt-get install -y \
    wget \
    unzip \
    python3 \
    python3-pip \
    build-essential \
    git \
    mesa-utils \
    openssh-server \
    libhdf5-dev \
    usbutils

# Clean up apt caches
sudo apt-get clean
sudo rm -rf /var/lib/apt/lists/*

# Download and install the appropriate Hik driver
echo "Downloading and installing Hik driver"
cd /tmp
wget https://www.hikrobotics.com/cn2/source/support/software/MVS_STD_GML_V2.1.2_231116.zip
unzip MVS_STD_GML_V2.1.2_231116.zip

ARCH=$(uname -m)
if [ "$ARCH" = "aarch64" ]; then
    sudo dpkg -i MVS-2.1.2_aarch64_20231116.deb
elif [ "$ARCH" = "x86_64" ]; then
    sudo dpkg -i MVS-2.1.2_x86_64_20231116.deb
fi

# Create necessary directories
echo "Creating directories"
mkdir -p /opt/MVS/bin/fonts

# Source the bashrc file
echo "Sourcing .bashrc"
source ~/.bashrc

# Set environment variable for MVCAM_COMMON_RUNENV
echo "Setting environment variables"
export MVCAM_COMMON_RUNENV=/opt/MVS/lib
export LD_LIBRARY_PATH=/opt/MVS/lib/64:/opt/MVS/lib/32:$LD_LIBRARY_PATH

# Install Miniforge
echo "Installing Miniforge"
if [ "$ARCH" = "aarch64" ]; then
    wget https://github.com/conda-forge/miniforge/releases/latest/download/Miniforge3-Linux-aarch64.sh -O /tmp/miniforge.sh
elif [ "$ARCH" = "x86_64" ]; then
    wget https://github.com/conda-forge/miniforge/releases/latest/download/Miniforge3-Linux-x86_64.sh -O /tmp/miniforge.sh
fi
sudo bash /tmp/miniforge.sh -b -p /opt/conda
rm /tmp/miniforge.sh

# Update PATH environment variable
echo "Updating PATH"
export PATH=/opt/conda/bin:$PATH

# Create conda environment and install packages
echo "Creating conda environment and installing packages"
conda create -y --name imswitch311 python=3.11
conda install -n imswitch311 -y -c conda-forge h5py numcodecs scikit-image
conda clean --all -f -y

# Clone the config folder
echo "Cloning ImSwitchConfig"
git clone https://github.com/openUC2/ImSwitchConfig ~/ImSwitchConfig

# Clone the repository and install dependencies
echo "Cloning and installing imSwitch"
git clone https://github.com/openUC2/imSwitch ~/ImSwitch
cd ~/ImSwitch
git checkout master
source /opt/conda/bin/activate imswitch311 && pip install -e ~/ImSwitch

# Install UC2-REST
echo "Installing UC2-REST"
git clone https://github.com/openUC2/UC2-REST ~/UC2-REST
cd ~/UC2-REST
source /opt/conda/bin/activate imswitch311 && pip install -e ~/UC2-REST

# we want psygnal to be installed without binaries - so first remove it - raspi doesn't need this one
# source /opt/conda/bin/activate imswitch && pip uninstall psygnal -y
# source /opt/conda/bin/activate imswitch && pip install psygnal --no-binary :all:

# fix the version of OME-ZARR
source /opt/conda/bin/activate imswitch311 && pip install ome-zarr==0.9.0
source /opt/conda/bin/activate imswitch311 && conda install -c conda-forge --strict-channel-priority numpy scikit-image==0.19.3 -y

# fix numpy
source /opt/conda/bin/activate imswitch311 && python3 -m pip install numpy==1.26.4

# Expose SSH port and HTTP port
echo "Exposing ports 22, 8002 and 8001 and 8888"
sudo ufw allow 22
sudo ufw allow 8001
sudo ufw allow 8002
sudo ufw allow 8888

echo "Installation complete. To run the application, use the following command:"
echo "source /opt/conda/bin/activate imswitch311 && python3 ~/ImSwitch/main.py --headless --http-port 8001"

echo "source /opt/conda/bin/activate imswitch311" >>~/.bashrc
```

Congratulations! You have successfully installed ImSwitch and related dependencies.

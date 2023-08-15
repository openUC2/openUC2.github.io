

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

Congratulations! You have successfully installed ImSwitch and related dependencies.

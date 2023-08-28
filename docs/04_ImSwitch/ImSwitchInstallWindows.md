### ImSwitch Installation on Windows

#### Step 1: Install Visual Studio Code (VS Code)

1. Open a web browser and go to the [VS Code download page](https://code.visualstudio.com/Download).
2. Download the Windows Installer.
3. Once the download is complete, locate the installer and double-click to run it.
4. Follow the on-screen instructions to complete the installation.

#### Step 2: Install Miniconda

1. Open a web browser and navigate to the [Miniconda download page](https://docs.conda.io/en/latest/miniconda.html).
2. Download the Windows installer for the 64-bit version of Miniconda.
3. Run the installer by double-clicking the downloaded file.
4. Follow the installer prompts to install Miniconda to a directory of your choice (e.g., `C:\Miniconda3`).
5. During installation, ensure that the option to "Add Anaconda to my PATH environment variable" is selected.

#### Step 3: Clone Necessary Repositories

0. Ensure you have installed *GIT* for windows
1. Open the Command Prompt:
   - Press `Win + R`, type `cmd`, and press Enter.
2. Navigate to your preferred directory where you want to clone the repositories (e.g., `C:\Users\<YourUsername>\Downloads`):
   ```bash
   cd C:\Users\<YourUsername>\Downloads
   ```
3. Clone the required repositories:
   ```bash
   git clone https://github.com/openUC2/UC2-REST
   git clone https://github.com/openUC2/ImSwitch
   git clone https://gitlab.com/bionanoimaging/nanoimagingpack
   ```

#### Step 4: Install ImSwitch and Related Packages

1. Open the Command Prompt.
2. Create a new Conda environment named `imswitch` with Python 3.10:
   ```bash
   conda create -n imswitch python=3.10
   ```
3. Activate the `imswitch` environment:
   ```bash
   conda activate imswitch
   ```
4. Navigate to the ImSwitch directory and install it:
(The *e* just states to install the packages in editable mode)
   ```bash
   cd C:\Users\<YourUsername>\Downloads\ImSwitch
   pip install -e .
   ```
5. Repeat for UC2-REST and nanoimagingpack:
   ```bash
   cd C:\Users\<YourUsername>\Downloads\UC2-REST
   pip install -e .
   cd C:\Users\<YourUsername>\Downloads\nanoimagingpack
   pip install -e .
   ```

#### Step 5: Install Camera Drivers for Daheng Cameras

1. Download the galaxy camera sdk for windows here https://www.get-cameras.com/requestdownload
2. Double-click on the installation executable file (`Galaxy_camera.exe`) to run it.
3. Follow the on-screen instructions to complete the installation.

#### Step 6: Clone ImSwitch Configuration and Set Permissions

1. Navigate to the Documents directory using the Command Prompt:
   ```bash
   cd C:\Users\<YourUsername>\Documents
   ```
2. Clone the ImSwitch configuration:
   ```bash
   git clone https://github.com/openUC2/ImSwitchConfig
   ```

#### Step 7: Start

```bash
conda activate imswitch
imswitch
```

## Problems and Solutions

Very likely, there will be a PyQt issue.

Try:
```
pip install PyQt5 --force-reinstall
```


Congratulations! You have successfully installed ImSwitch and related dependencies on Windows.

# ImSwitch Installer

![License](https://img.shields.io/github/license/Ileriayo/markdown-badges?style=for-the-badge) ![Electron.js](https://img.shields.io/badge/Electron-191970?style=for-the-badge\&logo=Electron\&logoColor=white) ![Windows](https://img.shields.io/badge/Windows-0078D6?style=for-the-badge\&logo=windows\&logoColor=white) ![Mac OS](https://img.shields.io/badge/mac%20os-000000?style=for-the-badge\&logo=macos\&logoColor=F0F0F0) ![Linux](https://img.shields.io/badge/Linux-FCC624?style=for-the-badge\&logo=linux\&logoColor=black)

## Introduction

The ImSwitch Installer is an Electron-based application designed to streamline the installation process of the ImSwitch environment. It automates the download and setup of a Mamba environment along with all necessary dependencies from GitHub via pip. This tool simplifies the installation process, reducing it to a few clicks and eliminating the need for executing multiple complex commands.

**NEW:** ImSwitch now runs as a web-based application embedded within the installer window. No external browser required.



## Installation Process

### 1. Download the Installer

Go to the [ImSwitch Installer releases](https://github.com/openUC2/ImSwitchInstaller/releases/) page and download the appropriate version for your system (Windows, macOS ARM64/Intel, or Linux).

![](../IMAGES/Installer/Installer_2.png)
*Navigate to the GitHub release page and download the correct installer for your operating system.*

### 2. Run the Installer

**Windows:**

![](../IMAGES/Installer/Installer_3.png)
*When launching on Windows, you may encounter a security warning. Accept it to continue.*

**macOS:** Follow [Apple's instructions](https://support.apple.com/en-us/HT202491) to run unsigned apps.

### 3. Installation Begins

![](../IMAGES/Installer/Installer_4.png)
*The Electron app will start unpacking. Please wait until it's ready.*

![](../IMAGES/Installer/Installer_5.png)
*You’ll see the menu interface and a protocol logger for real-time feedback.*

### 4. Click Install

![](../IMAGES/Installer/Installer_6.png)
*Click the “Install ImSwitch” button to begin the environment setup.*

![](../IMAGES/Installer/Installer_7.png)
*You’ll be prompted again to confirm. Click the install button once more to proceed.*

### 5. Wait for Installation to Complete

![](../IMAGES/Installer/Installer_8.png)
*In case of failure, retry. All files are installed in `USER/.imswitch`, including a standalone Miniconda environment.*

![](../IMAGES/Installer/Installer_9.png)
*Don’t close the extra terminal window. If anything fails or looks suspicious, restart the installer.*

![](../IMAGES/Installer/Installer_10.png)
*Python and pip packages will now be installed. Make sure camera drivers are also installed from the menu.*

### 6. Start ImSwitch

![](../IMAGES/Installer/Installer_11.png)
*After installation, click the "Start ImSwitch Web Server" button.*

![](../IMAGES/Installer/Installer_12.png)
*Click again even if the loading spinner is active.*

![](../IMAGES/Installer/Installer_13.png)
*ImSwitch will start and load within the app. You can also access it via [http://localhost:8001/](http://localhost:8001/) in your browser.*

![](../IMAGES/Installer/Installer_14.png)
*Accept any firewall requests to allow local connections.*

![](../IMAGES/Installer/Installer_15.png)
*The application is fully accessible via [http://localhost:8001/](http://localhost:8001/).*

![](../IMAGES/Installer/Installer_16.png)
*If you are connecting to a secure version of ImSwitch, change the protocol from https to http in the left menu’s connection settings.*

![](../IMAGES/Installer/Installer_17.png)
*Activate the light source and live stream, then adjust intensity to view the simulated microscope image.*

![](../IMAGES/Installer/Installer_18.png)
*Explore the API documentation at [http://localhost:8001/docs](http://localhost:8001/docs) via Swagger UI.*

Watch the full installation process here (**OUTDATED**):
[![Installation Video](https://i3.ytimg.com/vi/N4P1sH2E9RU/maxresdefault.jpg)](https://www.youtube.com/watch?v=N4P1sH2E9RU?si=jyhAzLshAbg26YHu)

## Installer on Mac



![](../IMAGES/Installer/SETUP1.png)

![](../IMAGES/Installer/SETUP2.png)

![](../IMAGES/Installer/SETUP3.png)

![](../IMAGES/Installer/SETUP4.png)

![](../IMAGES/Installer/SETUP5.png)

![](../IMAGES/Installer/SETUP6.png)

![](../IMAGES/Installer/SETUP7.png)

## Features

* **One-Click Installation** with auto dependency resolution
* **Cross-platform:** macOS, Windows, Linux
* **Embedded Web UI:** No need for an external browser
* **Camera Driver Installation** via GUI
* **Configurable Git/PIP Update System**
* **Easy Uninstallation:** Just delete the ImSwitch folder



## Updating ImSwitch

* Update source code via Git (ImSwitch, UC2-REST)
* Update Python packages via pip (from GitHub archives or local path)
* `psygnal` is installed with `--no-binary` for compatibility

Just click **Update** in the installer to trigger this.



## Driver Installation

Use the "Driver Installation" button in the menu to install:

* Daheng camera drivers
* HIK Vision camera drivers

Make sure drivers are installed **before** starting ImSwitch.



## 💡 Upcoming Features

* Flash UC2 firmware directly from the installer
* Drag-and-drop GUI builder for hardware configurations



## Install from Source

```bash
# Clone repository
git clone https://github.com/openUC2/imswitchinstaller.git
cd imswitchinstaller

# Install dependencies
npm install

# Run app
npm start

# Build installers
npm run dist
```



## Automated Builds

GitHub Actions build the app for all platforms:

* **Windows:** `.exe` installer via NSIS
* **macOS:** `.dmg` for Intel and Apple Silicon
* **Linux:** `.AppImage` and `.deb`

Releases are created automatically for new commits on `main`. Pre-releases are available for testing pull requests.



## Debugging

### Python Environment Paths

* **Windows:** `C:\\Users\\YOURNAME\\ImSwitch\\miniforge\\python.exe`
* **macOS/Linux:** `/Users/YOURNAME/ImSwitch/miniforge/bin/python`
* **Package folder:** `.../site-packages/imswitch`
* **Conda usage:** `mamba install devbio-napari -c conda-forge`



## License and Attribution

This installer builds on [BellJar](https://github.com/danmarshall/belljar). Big thanks to the original authors for their open-source contribution!



## Feedback & Support

* Post issues on [GitHub](https://github.com/openUC2/ImSwitchInstaller/issues)
* Join the discussion at [openuc2.discourse.group](https://openuc2.discourse.group)
* Check the main website: [openUC2.com](https://openUC2.com)



Continue with [Configuration](../03_Configuration/README.md) to set up your specific hardware.

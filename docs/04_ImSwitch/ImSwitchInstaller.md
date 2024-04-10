---
id: ImSwitchInstaller
title: Install ImSwitch using the ImSwitch Installer (CONDA INSTALLER OUTDATED)
---

:::warn
This is a work-in-progress installer. Please have a look for updates or file an issue here https://github.com/openUC2/ImSwitchInstaller/issues
:::

# ImSwitch Installer


## Introduction

The ImSwitch Installer is an Electron-based application designed to streamline the installation process of the ImSwitch environment. It automates the download and setup of a Mamba environment along with all necessary dependencies from GitHub via pip. This tool simplifies the installation process, reducing it to a few clicks and eliminating the need for executing multiple complex commands.

## Installation Process

The following youtube video shows you how to install ImSwitch using the installer. 
[![IMAGE ALT TEXT HERE](https://i3.ytimg.com/vi/N4P1sH2E9RU/maxresdefault.jpg)](https://www.youtube.com/watch?v=N4P1sH2E9RU?si=jyhAzLshAbg26YHu)

## Features

- **Easy Installation:** Downloads and installs all necessary dependencies automatically.
- **Cross-Platform Support:** Available for ARM64 and Intel-based Mac, Windows, and Linux systems.
- **Simple Uninstallation:** Remove by deleting the ImSwitch folder.
- **Security:** Instructions provided for bypassing system security warnings due to unsigned code.
- **Update Mechanism:** Integrated update functionality to easily fetch the latest versions.

## Requirements

- **Disk Space:** Minimum of 5GB.
- **Memory:** 8GB RAM.
- **Processor:** Intel i5 or Apple Silicon.

## Installation Guide

1. **Download the Installer:** Choose the appropriate installer (ARM64 for Mac, Windows) from the [releases section](https://github.com/openUC2/ImSwitchInstaller/releases/).
2. **Run the Installer:** Double-click the downloaded file. Ignore any security warnings as the installer is not yet signed.
   - For macOS, follow [Apple's guide](https://support.apple.com/en-us/HT202491) for running unsigned code.
   - On Windows, grant permission to run the application.
3. **Installation Process:** The installer will set up a Python environment using Mamba in `/User/yourname/ImSwitch` and install all dependencies. This process may take between 10 to 30 minutes depending on your internet connection.
4. **Starting ImSwitch:** Once installed, launch ImSwitch by executing `start imswitch`.
https://camo.githubusercontent.com/d12b826a278a7dcb877c8524a22cc3408b82883a27edc9464f865b7d5403e6ef/68747470733a2f2f69332e7974696d672e636f6d2f76692f4e345031734832453952552f6d617872657364656661756c742e6a7067
![Installation Screen 1](https://raw.githubusercontent.com/openUC2/ImSwitchInstaller/main/assets/icons/Screen1.png)
![Installation Screen 2](https://raw.githubusercontent.com/openUC2/ImSwitchInstaller/main/assets/icons/Screen2.png)

## Updating ImSwitch

To update, click the update button within the application. This will download the latest ZIP from GitHub, unzip it, and execute `pip install -e .` within the Mamba base environment.

## Driver Installation

Drivers for Daheng and HIK Vision cameras can be found under the "Driver Installation" link provided within the installer.

## Upcoming Features

- Flashing the latest version of the UC2 firmware.
- Building the ImSwitch Hardware Configuration using a drag-and-drop GUI.

## Install from Source

For those interested in building from source:

```bash
# Clone the repository
git clone https://github.com/openuc2/imswitchinstaller.git

# Install dependencies (skip if you already have yarn)
npm install

# Run the Electron app
npm start
```

## Debugging

### Python Environment Locations

- **Windows Installation Path:** `C:\Users\UCadmin2\ImSwitch\miniforge\condabin`
- **Python Executable:** `C:\\Users\\UCadmin2\\ImSwitch\\miniforge\\python.exe`
- **ImSwitch Package Location:** `C:\\Users\\UCadmin2\\ImSwitch\\miniforge\\lib\\site-packages\\imswitch\\__init__.py'`
- **Conda Environment** `/Users/ImSwitch/miniforge/condabin/mamba install devbio-napari -c conda-forge`

# Disclaimer

This installer is based on the BellJar project. Thanks a lot for making it open-source! :)

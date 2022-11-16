---
id: uc2e8
title: Compiling from Scratch
---



<!----------------------------------------->
## Source-code, Compiling and Binaries
Duration:5

The current version of the firmware can be found here: https://github.com/openUC2/UC2-REST/tree/master/ESP32

Additional information on how to install and compile the board can be found in the [README](https://github.com/openUC2/UC2-REST/master/README.md)

Precompiled binaries that can be installed through ImSwitch (more information coming soon) or the `esptool.py`can be found here https://github.com/openUC2/UC2-REST/tree/master/ESP32/build

<!----------------------------------------->
## Install necessary software for UC2 rest (flash and interact)
Duration: 5

Here you learn how to install the necessary software (Arduino IDE, drivers, ESP-IDF, ARduino libraries) that are necessary for the system to be working. Everything is explained in the video below.

Additional information about the UC2 electronics and UC2-REST are provided here: https://github.com/openUC2/UC2-REST

### Download and install the software:


To simplify life, we host a [dropbox folder](https://www.dropbox.com/sh/pea63wifrq3edsl/AAChzXEGA55uUt2Kjxxfk_Dka?dl=0) containing all the necessary drivers and Software pieces for this workshop. It will run on a Windows 10 64 Bit system:

<p align="left">
<a href="https://www.dropbox.com/sh/pea63wifrq3edsl/AAChzXEGA55uUt2Kjxxfk_Dka?dl=0" name="logo"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Dropbox_Icon.svg/86px-Dropbox_Icon.svg.png" width="40"/></a>
</p>

### List of relevant files

*for the UC2-REST*
- **Arduino IDE:** `arduino-1.8.18-windows.exe`
- **ESP32 USB driver:** `CH341SER.exe`
- **UC2 Rest firmware:** `UC2-REST.zip`

*Alternative GitHub links that provide you with the **latest version** of the software:*

* https://github.com/openUC2/UC2-REST (=> firmware under ESP32/main; compile and flash on your ESP32 board)
* https://github.com/beniroquai/BenesArduinoLibraries (=> all libraries necessary to compile the software)
* https://learn.sparkfun.com/tutorials/how-to-install-ch340-drivers/all (=> CH340 drivers for the ESP32 board)

### Steps to install the software

0. Download all relevant files from the Dropbox folder above
1. Install the Arduino IDE (including all drivers if you are asked during the installation)
2. Install the CH340 USB Serial driver https://learn.sparkfun.com/tutorials/how-to-install-ch340-drivers/all
3. Extract `BenesArduinoLibraries-master.zip` to `/User/$USER$/Documents/Aduino/libraries`
4. Open the Arduino IDE and add the ESP32 board configuration. For this you need to add the following URL to the settings tag: `https://dl.espressif.com/dl/package_esp32_index.json, http://arduino.esp8266.com/stable/package_esp8266com_index.json`. For additional information please have a look in [this tutorial](https://randomnerdtutorials.com/installing-the-esp32-board-in-arduino-ide-windows-instructions/)
5. Once done, open the Board manager and add the `ESP32`version **1.0.6** (higher version have problems with the Bluetooth for the PS3/PS4 controller)
6. Unzip the folder `UC2-REST` and open the file `/ESP32/main/main.ino`
7. Select the board, the port and hit the compile and upload button

The system accepts different hardware configurations (pins, devices, etc.). All of this is defined in the `pindef_XXXX.h`. Please have a look in the UC2-REST repository for additional information: https://github.com/openUC2/UC2-REST

### VIDEO Tutorial: Steps to install the software

![https://www.youtube.com/watch?v=9doTdo5SW2E](https://www.youtube.com/watch?v=9doTdo5SW2E)


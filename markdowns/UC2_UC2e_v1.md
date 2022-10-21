


summary: A guide to get the UC2e electronics starting
id: uc2-electronics_v1-eng
Categories: UC2e
tags: UC2e, electronics, controller
Status: Published
authors: Benedict
Feedback Link: https://youseetoo.org


<span style="color:#85B918"> __YOU\.__ </span> <span style="color:#000000"> </span>
<span style="color:#1F9C7C"> __SEE\.__ </span> <span style="color:#000000"> </span>
<span style="color:#023773"> __TOO\.__ </span>

<p align="left">
<img src="./assets/UC2_LOGO.png" width="100">
</p>

# UC2e - A guide to use the UC2 Electronics

<!----------------------------------------->

## Overview
Duration:1

<div class="alert-danger">
<b>IMPORTANT</b> The system is under constant development and may be subjject to changes. If you find any bug or something feels unclear, you can help us improving the system! Feel lucky and file your issue today by opening one here: <a href="https://github.com/openUC2/UC2-REST/issues/new">GitHub: UC2-REST</a>
</div>


### What will you learn?
- How to connect the UC2 electronics?
- How to wire up the board with external components
- How to get the playstation controller working?

<!----------------------------------------->
## Introduction into the UC2e Board ("Standalone")
Duration: 5

For a microscsope you have several I/Os that need to be controlled via Software. This majorly concerns:

- Lasers
- Motors (e.g. for positioning)
- LEDs for changing the crontrast (e.g. LED Array)
- Sensors (e.g. Endstops)

There exist a number of boards that can do it by default. Here, we created our own driver electronics that is based on the Espressif ESP32 microcontroller unit (MCU) that has:

- 4x Stepper outputs
- 3x PWM outputs for e.g. Lasers
- 1x Neopixel Slot (for the LED Ring Array)
- 3x PWM amplified for e.g. power LEDs
- 1x I2C connection
- USB Serial connection
- 2x DAC (8Bit)

It is based on common "GRBL" boards that drive 3D printers, CNC routers or alike.

A fully assembled board with 12V power, the UC2 LED matrix and the linear stepper motor can be found below:

<p align="center">
<img src="./assets/UC2_Electronics_board0.jpg" width="400">
</p>

<!----------------------------------------->
## 🔌 Board layout and schematics
Duration:5
The board comes with 4 motor controllers (e.g. A4988 Bipolar Stepper controler), the ESP32 Dev Kit, a bunch of pins for in/outgoing connections, 3 darlington transistors (BD809) and the power distribution. It is inspired by the CNC shield and can

- run up to 4 steppers
- run multiple high power LEDs
- be controlled via PS3/PS4 Controllers
- drive Adafruits Neopixels
- Trigger a Camera
- provide scanning patterns for Galvos
- control/readout external devices using I2C

We use the ESP32 in order to ensure connectivity via
- Wifi
- Bluetooth
- USB Serial (mostly used)

<p align="center">
<img src="./assets/ELECTRONICS/UC2_electronics_board_Kicad_6.png" width="600">
</p>

<!----------------------------------------->
## ⚡ Wiring
Duration:5

All connectors are coming with 2.54mm spaced male pins that can connect to JST connectors (e.g. Motors and LED Array). In case the casing is blocking it mechanically, you can remove the case. Make sure you do not

<div class="alert-danger">
The polarity of the LED Array matters! The UC2 LED ring module comes with a JST connector where the 3 pins represent (5V, Data, GND) **RED** / Black / Black. Make sure the Red cable is connected to the 5V on the PCB
</div>


Below you can find a rendering of the PCB that is sitting inside the 3D printed Box with all its connectors.

<p align="center">
<img src="./assets/ELECTRONICS/UC2_electronics_board_Kicad_0.png" width="600">
</p>


For those who are keen to understand the wiring, please click on the schematics below. The sources of the board will be published soon.

<p align="center">
<img src="./assets/ELECTRONICS/UC2eSchematics.png" width="600">
</p>

<!----------------------------------------->
## UC2 LED Ring
Duration:2
As for the illumination, you can use a large variation of different light sources to get your sample in the right light. But sometimes you want to have the abbility to change the contrast by illuminating from oblique, only in the center, using a darkfield ring or change degree of coherence. An off-the-shelf LED Matrix is very sufficient in most cases, but it lacks the rotational symmetry. For this we have the UC2 LED Ring Module that fits directly in the Cube, has concentric rings and still offers all the degrees of freedom the Adafruit Neopixel give you (e.g. RGB, white, patterns..).

<p align="center">
<img src="./assets/ELECTRONICS/UC2_electronics_board2.jpg" width="600">
</p>

The 3 wires that leave the satellite board deliver 5V, Data and GND and directly connect to the UC2e via the LED pin:

<p align="center">
<img src="./assets/ELECTRONICS/UC2_electronics_board3.jpg" width="600">
</p>


<!----------------------------------------->
## Connect devices
Duration:5
Here you learn how to connect the ESP32 to the Arduino IDE, connect external hardware components (e.g. LED matrix) and control the electronics using the USB-serial interface. This is an older version of the ESP32, but the mechanism stays the same 🙃

![https://www.youtube.com/watch?v=v8Xx2iVbDck](https://www.youtube.com/watch?v=v8Xx2iVbDck)

<!----------------------------------------->
## ❌ Replacing parts
Duration:1
It can happen that either the ESP32 Dev Kit or one of the motor driver fails due to ESD. You can find alternatives here:

- A4988 Stepper driver ([Amazon](https://www.amazon.de/AZDelivery-A4988-Schrittmotor-Treiber-Modul-Parent/dp/B07ZQHN62Q))
- ESP32 Dev Kit ([Amazon](https://www.amazon.de/AZDelivery-Development-Compatible-Including-Successor/dp/B07Z83MF5W/ref=sr_1_2_sspa?crid=2VAY9L1U49HOM&keywords=ESP32+dev+kit&qid=1666383153&qu=eyJxc2MiOiI0LjAxIiwicXNhIjoiMy43NCIsInFzcCI6IjMuMzYifQ%3D%3D&s=industrial&sprefix=esp32+dev+kit%2Cindustrial%2C260&sr=1-2-spons&psc=1&smid=A1X7QLRQH87QA3))


<!----------------------------------------->
## Introduction into the ESP32 microcontroller firmware
Duration:5
The firmware that runs on the ESP32 is under constant development and subject to heavy changes! However, the core idea will remain the same and is inspired by the
 "REST-API", which deals with "endpoints" in the HTML world (e.g. "`/home`""). We implemented the follow functions:
 - `/*_act`-> this starts an action
 - `/*_get`-> this will return parameters or states
 - `/*_set`-> this will set parameters or states

The functions will work on different actuators and sensors e.g. motors, lasers, leds and so on.

The API is callable through USB Serial and/or Wifi. The ESP32 can connect to a nearby Wifi Hotspot or even create its own access point (AP). Additional documentation for this will follow soon.

<p align="center">
<img src="./assets/ELECTRONICS/UC2eREST.png" width="300">
</p>


In general, to interact with a device (e.g. stage), one has to send a JSON document, which is similar to the REST-API in the Internet world. A simple example to rotate a motor would be:

```
{"task": "/motor_act", "axis":1, "speed":1000, "position":1000, "isabsolute":1, "isblocking":1}
```

<!----------------------------------------->
## Controlling the ESP32

Duration: 5

The unified "REST-API" (inspired, not following full protocol), enables you to control the functionalities from multiple different clients (e.g. Python, Webrowser, Android Phone). The Core idea is to file post/get requests (serial/wifi) that send/receive JSON files that do "something".

<p align="center">
<img src="./assets/ELECTRONICS/UC2eConnectivity.png" width="600">
</p>

<div class="alert-success">
<b>Installing the USB Serial Driver</b> Install the CH340 USB Serial driver is explained in more detail here: <a href="https://learn.sparkfun.com/tutorials/how-to-install-ch340-drivers/all">Sparkfun</a>
</div>

<!----------------------------------------->
## 🐍 Python Bindings

In order to interact with the electronics, we implemented a Python library called `UC2-REST`, available [here](https://github.com/openUC2/UC2-REST/tree/master/uc2rest) that will help you to work with the device. The easiest way to install it would be:

```
pip install uc2-rest
```

It will automatically detect your UC2e (if the driver is installed), connect and will offer you the basic functionalities such as moving the motor, etc.

<p align="center">
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Jupyter_logo.svg/207px-Jupyter_logo.svg.png" width="60">
</p>


In order to give you a deep dive in what's possible, we provide a Jupyter Notebook that guides you through all the functionalities. You can find it [here](https://github.com/openUC2/UC2-REST/blob/master/uc2rest/UC2_REST_Tutorial_v0.ipynb)


<!----------------------------------------->
## 📲 Android APP

This is coming soon. You will be able to control the electronics using the Wifi connection of your Android phone.

<!----------------------------------------->
## 💻 Browser APP
If the ESP32 is offereing an access point or is connected to your wifi router, you can access the webserver running on the ESP32 using a browser. It offers limited control over the Endpoints by filing post and get requests.

More information are coning soon!

<!----------------------------------------->
## 🎮 Playstation 3 or Playstation 4 Controller
With the open-source libraries PS3Controller and PS4Controller we are able to make use of the Bluetooth-able joysticks from your beloved game console.

When a PS4 controller is 'paired' to a PS4 console, it just means that it has stored the console's Bluetooth MAC address, which is the only device the controller will connect to. Usually, this pairing happens when you connect the controller to the PS4 console using a USB cable, and press the PS button. This initiates writing the console's MAC address to the controller.

Therefore, if you want to connect your PS4 controller to the ESP32, you either need to figure out what the Bluetooth MAC address of your PS4 console is and set the ESP32's address to it, or change the MAC address stored in the PS4 controller.

Whichever path you choose, you might want a tool to read and/or write the currently paired MAC address from the PS4 controller. You can try using [sixaxispairer](https://github.com/user-none/sixaxispairer) for this purpose.

If you opted to change the ESP32's MAC address, you'll need to include the ip address in the ```PS4.begin()``` function during within the ```setup()``` Arduino function like below where ```1a:2b:3c:01:01:01``` is the MAC address (**note that MAC address must be unicast**):

```
void setup()
{
    PS4.begin("1a:2b:3c:01:01:01");
    Serial.println("Ready.");
}
```

<!----------------------------------------->
## Controlling using ImSwitch

Please have a look [here](https://github.com/openUC2/ImSwitch) for more information about how to install ImSwitch and [here](https://github.com/beniroquai/ImSwitchConfig) for the UC2-related setup files including the UC2-REST serial interface.

<p align="center">
<img src="./assets/ELECTRONICS/UC2eImSwitch.png" width="600">
</p>




<!----------------------------------------->
## Source-code, Compiling and Binaries
Duration:5

The current version of the firmware can be found here: https://github.com/openUC2/UC2-REST/tree/master/ESP32

Additional information on how to install and compile the board can be found in the [README](https://github.com/openUC2/UC2-REST/master/README.md)

Precompiled binaries that can be installed through ImSwitch (more information coming soon) or the `esptool.py`can be found here https://github.com/openUC2/UC2-REST/tree/master/ESP32/build

<!----------------------------------------->
## Install necessary software for UC2 rest (flash and interact)

Here you learn how to install the necessary software (Arduino IDE, drivers, ESP-IDF, ARduino libraries) that are necessary for the system to be working. Everything is explained in the video below.

Additional information about the UC2 electronics and UC2-REST are provided here: https://github.com/openUC2/UC2-REST

### Download and install the software:

To simplify life, we host a [dropbox folder](https://www.dropbox.com/sh/pea63wifrq3edsl/AAChzXEGA55uUt2Kjxxfk_Dka?dl=0) containing all the necessary drivers and Software pieces for this workshop. It will run on a Windows 10 64 Bit system:

<p align="left">
<a href="https://www.dropbox.com/sh/pea63wifrq3edsl/AAChzXEGA55uUt2Kjxxfk_Dka?dl=0" name="logo"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Dropbox_Icon.svg/86px-Dropbox_Icon.svg.png" width="40"></a>
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

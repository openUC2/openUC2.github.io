---
id: uc2e2v4
title: UC2 Standalone Board V4
---


<!----------------------------------------->
## 🔌 Board layout and schematics (UC2 Standalon v4)

The board comes with 4 motor controllers (e.g. A4988 Bipolar Stepper controller or TMC drivers with pololu pinout), the ESP32 Dev Kit, a bunch of pins for in/outgoing connections, 3 darlington transistors (BD809) and the power distribution. It is inspired by the CNC shield and can

- run up to 4 steppers
- run multiple high power LEDs
- be controlled via PS3/PS4 Controllers
- drive Adafruits Neopixels
- trigger a Camera
- provide scanning patterns for Galvos
- control/readout external devices using I2C

We use the ESP32 in order to ensure connectivity via
- Wifi
- Bluetooth
- USB Serial (mostly used)

![](./IMAGES/StandaloneBoard_V04.png)


### new jacks pinouts
![](./IMAGES/standalone-jacks-pinout_V04.jpg)


### connecting devices to the StandaloneBoard_V04:
coming soon

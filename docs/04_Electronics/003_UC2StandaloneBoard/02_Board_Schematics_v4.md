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


### pinouts
![](./IMAGES/standalone-jacks-pinout_V04.jpg)

## connecting devices - max. configuration for Discovery line products
- connect the LED-Matrix to the Mainboard at `LED1.
- Connect the Z-stage to the position `Z-Motor` on the main board. Ensure there's a motor driver.
- Connect the 3 Motors of the XYZ-Stage to the respective positions `A-Motor`, `X-Motor`, `Y-Motor`. Ensure there are motor drivers as well.
- Connect the single fluorescence LED at `PMW2`.
- Connect the single-color laser to the Mainboard at `XH 4-pin`or the dual-color laser at `XH 6-pin`. In the Webserial you control it with the PMW1 buttons
- Plug in the USB-micro/USB-C at your ESP32 and connect to your PC.(USB-type depends on ESP32-type)
- Plug in the 12V power cable.

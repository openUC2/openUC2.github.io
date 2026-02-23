---
sidebar_position: 10
---

# UC2 Standalone Board

The UC2 Standalone Board is the central control unit for automated UC2 microscopy systems. Based on the ESP32 microcontroller, this board provides comprehensive control over motors, LEDs, cameras, and external devices.

## Key Features

- **4 Motor Controllers:** Drive up to 4 stepper motors simultaneously (compatible with A4988 bipolar stepper drivers)
- **High-Power LED Control:** 3 Darlington transistors (BD809) for driving multiple high-power LEDs
- **Wireless Connectivity:** WiFi, Bluetooth, and USB Serial communication via ESP32
- **PS3/PS4 Controller Support:** Intuitive wireless control of your microscope
- **NeoPixel Support:** Control Adafruit's WS2812B RGB LED arrays
- **Camera Triggering:** Synchronize image acquisition with scanning
- **Galvo Scanning:** Generate scanning patterns for galvanometer mirrors
- **I2C Interface:** Control and read external devices

## Board Versions

Multiple versions of the board are available with different features and layouts:
- **UC2 Standalone V2:** Original design with 4 motor drivers
- **UC2 Standalone V3 (Beta):** Enhanced version with improved layout
- **UC2 Standalone V4:** Latest version with additional features

## Tutorials in this Section

- **Board Schematics V2** - Detailed layout and wiring for version 2
- **Board Schematics V3** - Beta version documentation
- **Board Schematics V4** - Latest board version guide

## Connectivity Options

- **WiFi:** Remote control and monitoring
- **Bluetooth:** Wireless PS4 controller connection
- **USB Serial:** Direct computer connection (most commonly used)

## Connected Components

- Stepper motors for XYZ stages
- LED arrays and matrices
- Cameras with trigger capability
- Galvanometer mirrors
- External sensors via I2C
- High-power laser diodes

## Important Notes

⚠️ **Power Safety:**
- Always disconnect 12V power before changing cables
- Do not power motor drivers without motors attached
- Ensure proper electric load to prevent driver damage

⚠️ **LED Array Polarity:**
- LED polarity matters! Connect carefully
- JST connector: RED (5V), Black (Data), Black (GND)
- WS2812B LEDs can survive reverse polarity but avoid it

## Technical Specifications

- **Microcontroller:** ESP32 Dev Kit
- **Motor Drivers:** 4x A4988 or compatible
- **LED Drivers:** 3x BD809 Darlington transistors
- **Input Voltage:** 12V DC
- **Connectors:** 2.54mm spaced male pins, JST compatible
- **Communication:** WiFi, Bluetooth, USB Serial, I2C

Perfect for building automated microscopy systems with comprehensive electronic control!

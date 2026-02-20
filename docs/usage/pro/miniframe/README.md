---
title: miniFRAME
---

# miniFRAME - Compact Microscopy Core

The miniFRAME (also called Inner Cube) is a compact, removable optical engine designed for the FRAME microscope system. It combines a Raspberry Pi computing hub with ESP32-based control electronics to create a coordinated microscopy platform.

## System Architecture

The miniFRAME integrates multiple components into a unified system:
- **Raspberry Pi:** Central compute and networking hub
- **ESP32 UC2 Board:** Low-level motion control, illumination, and sensor feedback
- **Cameras:** USB3 industrial cameras (HIK, Daheng) or Raspberry Pi CSI cameras
- **Motor Drivers:** TMC2209 or similar for precise positioning
- **Illumination:** LED matrices and optional laser sources

## Hardware Coordination

Modern microscopy requires more than just optics—it needs synchronized control of:
- Motorized axes (Z, XY, XYZ positioning)
- LEDs and lasers for illumination
- Cameras and sensors for detection
- Controllers for timing and synchronization
- Automated workflows and long-term experiments

The miniFRAME uses the Raspberry Pi as the central hub to coordinate all these components, enabling time-synchronized experiments via ImSwitch software.

## What You'll Learn

- Integration of Raspberry Pi with ESP32 control electronics
- Time-synchronized microscopy experiments
- Motorized stage control and coordination
- LED matrix illumination patterns
- Camera integration and triggering
- Software orchestration with ImSwitch
- Modular microscopy system design

## Experiments in this Section

- **miniFRAME DPC Module** - Differential Phase Contrast imaging with the miniFRAME system
- **miniFRAME Software** - Software setup and configuration

## Key Features

### Hardware Integration
- Unified power system (12V to 5V conversion)
- USB3 connectivity for cameras
- CAN bus for distributed control
- PWM control for illumination

### Software Coordination
- ImSwitch for coordinated control
- Reproducible experimental workflows
- Automated imaging sequences
- Long-term time-lapse capabilities

## Connection Architecture

```
Raspberry Pi (Central Hub)
    ├── USB → ESP32 UC2 Board
    │           ├── Motor Drivers (TMC2209)
    │           ├── LED Matrices (via CAN bus)
    │           └── Laser Control (PWM)
    └── USB3 → Camera(s)
```

The ESP32 board is powered by 12V and provides 5V/3A to the Raspberry Pi via DC-DC converter, creating an integrated power solution.

## Applications

- Differential Phase Contrast (DPC) microscopy
- Automated multi-position imaging
- Time-lapse experiments
- Fluorescence microscopy with synchronized illumination
- Portable research microscopy
- Educational microscopy systems

## Modular Design

The miniFRAME can operate:
- As a standalone system
- Integrated into the full FRAME microscope
- With different optical configurations
- As a testbed for new microscopy techniques

Perfect for researchers who need a compact, coordinated microscopy system with professional capabilities!

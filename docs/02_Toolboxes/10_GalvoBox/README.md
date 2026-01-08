# Galvo Box - Scanning Microscopy Interface

The Galvo Box (mAIkroscope Galvo Interface Board) brings advanced scanning capabilities to UC2 microscopes through precision galvanometer mirror control. This system enables laser scanning microscopy, time-resolved imaging, and synchronization with external detectors.

## What is Galvo Scanning?

Galvanometer mirrors are electrically controlled mirrors that can rapidly and precisely steer laser beams in 2D. By scanning a focused laser beam across a sample and synchronizing detection with the beam position, you can create high-resolution images or perform point-by-point measurements.

## Key Features

### Dual-Axis Galvo Control
- On-board 12-bit SPI DAC generates ±10V differential XY signals
- Compatible with low-cost Chinese galvo drivers
- Seeed XIAO ESP32-S3 MCU for scan synthesis

### Synchronized Triggering
- Three independent 50Ω trigger outputs (pixel, line, frame)
- U.FL laser blanking output
- Precise timing for detector synchronization

### CAN Bus Integration
- CAN 2.0B bus for remote control
- Compatible with UC2-CAN protocol
- Network multiple devices together

### Power System
- Integrated ±12V/3.3V/5V analog rails
- 2A output budget for external driver modules
- Complete power solution for galvo systems

## What You'll Learn

- Galvanometer mirror control and calibration
- Laser scanning microscopy principles
- DAC (Digital-to-Analog Converter) operation
- Trigger signal generation and synchronization
- CAN bus communication protocols
- High-speed image acquisition
- Integration with time-resolved detectors

## Applications

- Laser scanning microscopy
- Two-photon excitation microscopy
- Fluorescence lifetime imaging (FLIM)
- Point-scanning confocal microscopy
- Optogenetics with spatial control
- Material ablation and lithography
- Synchronized multi-modal imaging

## Technical Specifications

| Parameter | Value | Notes |
|-----------|-------|-------|
| Backbone input | 12V ±5% | via JST connector |
| Board consumption | ~50mA | excludes external drivers |
| Galvo supply | ±12V, 2A max | pass-through to drivers |
| DAC resolution | 12-bit | 4096 steps over ±10V |
| Output bandwidth | ~25kHz (-3dB) | limited by amplifier stage |
| Trigger level | 3.3V CMOS | 50Ω back-terminated |
| CAN bus | ISO11898-2, 1Mbit/s | 120Ω termination selectable |

## System Architecture

```
ESP32-S3 ↔ SPI ↔ MCP4822 DAC → Differential Amps → Galvo Drivers
    │                    │
    │                    ├─ Pixel/Line/Frame triggers
    │                    └─ Laser blanking
    └─ CAN bus → External control
```

## Required Components

- mAIkroscope Galvo Interface Board
- Dual-axis galvanometer mirror system
- External galvo drivers (±10V input)
- Laser source with blanking input
- Detector with trigger input (e.g., FLIM detector)
- 12V power supply
- UC2 mounting components

## Integration Examples

Successfully integrated with:
- **FLIMlabs.com** detector systems
- Pulsed laser sources
- Time-resolved photon counting systems
- Custom UC2-CAN networks

Perfect for researchers in advanced microscopy, biophysics, and anyone interested in high-speed laser scanning and time-resolved imaging techniques!

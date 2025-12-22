# OS-SIM - Optical Sectioning Structured Illumination Microscopy

Learn how to build a low-cost, DMD-based Structured Illumination Microscope (SIM) for optical sectioning. This system removes out-of-focus blur and dramatically improves image contrast in fluorescence microscopy.

## What is Optical Sectioning SIM?

Optical Sectioning SIM (OS-SIM) illuminates the sample with structured patterns (stripes) instead of uniform light. By acquiring multiple images with different pattern phases and combining them mathematically, you can extract in-focus information while suppressing out-of-focus background.

### The RMS Reconstruction Algorithm

Three images are acquired with phase shifts (0°, 120°, 240°), then combined:

$$I_{\text{SIM}}(x) = \sqrt{(I_1 - I_2)^2 + (I_2 - I_3)^2 + (I_1 - I_3)^2}$$

This computation removes out-of-focus blur, effectively creating optical sections without physically scanning.

## Two Configurations

### Direct Projection Setup
The DMD pattern is directly imaged onto the sample. Simple and easy to align, but includes all diffraction orders.

### 4f Interference Setup
Uses a Fourier filter to remove higher diffraction orders, creating cleaner interference patterns for improved optical sectioning.

## What You'll Learn

- Principles of structured illumination microscopy
- DMD (Digital Micromirror Device) control
- Optical sectioning without mechanical scanning
- Pattern projection and phase shifting
- Image reconstruction algorithms
- 4f optical relay systems
- Fourier filtering techniques

## Tutorials in this Section

- **OS-SIM Tutorial** - Complete guide to building a DMD-based SIM system

## Key Components

### Optical Components
- 488nm laser (fiber-coupled)
- 10× Plan Objective (NA = 0.25)
- Tube lens (f = 100mm)
- Projection lens (f = 200mm for direct setup)
- Relay lenses (2× f = 50mm for 4f setup)
- Dichroic mirror and emission filters
- Spatial filter (for 4f configuration)

### Electronics
- **DMD:** DLP300S chip + DLPC1438 controller (from Anycubic Photon Ultra)
- **Controller:** Raspberry Pi Zero 2
- **Interface:** Custom bridge board (based on OpenMLA)
- **Power:** 12V power supply

### Mechanical
- OpenUC2 cubes and mounting plates
- Custom DMD mounting parts

## How It Works

1. **Pattern Generation:** DMD creates structured patterns (stripes)
2. **Projection:** Pattern is imaged onto the sample
3. **Phase Shifting:** Pattern shifts in 3 steps (0°, 120°, 240°)
4. **Image Acquisition:** Camera captures one image per phase
5. **Reconstruction:** Mathematical combination removes out-of-focus light

## Safety Warning ⚠️

**Laser Safety:** This system uses a 488nm laser. Always wear appropriate safety goggles.

**DMD Diffraction:** The DMD acts as a grating, creating multiple diffraction orders. Ensure all stray beams are properly blocked to prevent eye exposure.

## Key Advantages

- **No Mechanical Scanning:** Purely electronic pattern switching
- **Low Cost:** Uses harvested DMD from 3D printers
- **UC2 Integration:** Works with existing UC2 fluorescence setups
- **True Optical Sectioning:** Removes out-of-focus blur computationally
- **Fast Acquisition:** Electronic pattern switching is rapid

## Applications

- Fluorescence microscopy with improved contrast
- Thick sample imaging without confocal scanning
- Live cell imaging with optical sectioning
- Educational demonstrations of computational microscopy
- Research into structured illumination techniques

## Technical Capabilities

- Optical sectioning without Z-scanning
- Pattern frequency adjustable via DMD programming
- Compatible with various fluorophores (488nm excitation)
- Real-time or post-processing reconstruction
- Integration with existing wide-field systems

Perfect for researchers and educators interested in advanced fluorescence microscopy techniques without the cost of commercial systems!

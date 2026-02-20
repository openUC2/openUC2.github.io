---
title: STORM
---

# STORM - Stochastic Optical Reconstruction Microscopy

Learn how to build a super-resolution STORM (Stochastic Optical Reconstruction Microscopy) system using UC2 components. STORM enables imaging below the diffraction limit by sequentially activating individual fluorescent molecules and precisely localizing them.

## What is STORM?

STORM is a super-resolution microscopy technique that achieves nanometer-scale resolution (typically 20-50nm) by:
1. Imaging individual fluorescent molecules one at a time
2. Precisely determining their positions (typically <20nm accuracy)
3. Reconstructing a high-resolution image from thousands of localizations

This bypasses the classical diffraction limit (~200nm) of conventional optical microscopy.

## System Components

### Illumination
High-intensity laser illumination is critical for STORM. The system uses:
- **638nm Red Laser Module (500mW)** for photoactivation and imaging
- **Optional beam magnifier** with rotating diffuser for homogeneous illumination
- **Telescopic lens arrangement** to shape the laser profile

### Stability
Nanometer-scale imaging requires exceptional mechanical stability:
- Vibration isolation systems
- Temperature-controlled environment
- Drift correction mechanisms
- Stable sample mounting

### Software
Specialized software for:
- Real-time molecule localization
- Image reconstruction algorithms
- Drift correction
- 3D STORM data processing

### Electronics
- Camera triggering and synchronization
- Laser intensity control via TTL modulation
- Motorized focus control
- Automated acquisition sequences

## What You'll Learn

- Super-resolution microscopy principles
- Single-molecule localization techniques
- High-intensity laser illumination systems
- Beam shaping and homogenization
- Mechanical stability requirements
- STORM image reconstruction
- Drift correction methods
- Sample preparation for STORM

## Tutorials in this Section

- **Main Introduction** - Overview of STORM system
- **Illumination Setup** - Laser configuration and beam shaping
- **Stability Considerations** - Achieving nanometer-scale stability
- **Software Configuration** - Acquisition and reconstruction software
- **Electronics Integration** - Synchronization and control
- **Results and Examples** - STORM imaging examples and analysis

## Key Techniques

### Laser Beam Shaping
A telescopic lens arrangement with a rotating diffuser creates homogeneous illumination:
- Removes hot spots in laser profile
- Ensures even excitation across field of view
- Critical for quantitative single-molecule localization

### Single-Molecule Localization
Individual fluorophores are:
1. Stochastically activated
2. Imaged until photobleached
3. Localized with sub-pixel precision (<20nm)
4. Compiled into super-resolution image

### Drift Correction
Long acquisition times (minutes to hours) require:
- Fiducial marker tracking
- Cross-correlation algorithms
- Real-time drift compensation

## Applications

- **Cell Biology:** Visualizing cellular nanostructures (cytoskeleton, organelles)
- **Neuroscience:** Mapping synaptic proteins at nanoscale
- **Membrane Biology:** Studying protein clustering and organization
- **DNA Imaging:** Visualizing chromatin structure
- **Materials Science:** Characterizing nanostructured materials

## Technical Specifications

- **Resolution:** 20-50nm lateral, 50-100nm axial (3D)
- **Laser Intensity:** High power density required (1-10 kW/cm²)
- **Acquisition Time:** Minutes to hours depending on density
- **Localization Precision:** <20nm per molecule
- **Frame Rate:** 20-100 Hz typical
- **Field of View:** Typically 50-100 μm

## Required Components

### Optical
- 638nm high-power laser (500mW)
- Telescopic lens arrangement
- Rotating diffuser (modified fan + cling film)
- High-NA objective (>1.4 NA recommended)
- Emission filters matched to fluorophore

### Mechanical
- Vibration isolation table or platform
- Stable sample mounting stage
- Optional motorized Z-stage for 3D imaging
- UC2 cubes and mounting components

### Electronic
- High-sensitivity EMCCD or sCMOS camera
- TTL control for laser modulation
- Synchronization electronics
- Computer for acquisition and processing

### Software
- Molecule localization algorithms
- Image reconstruction software
- Drift correction tools

## Challenges and Solutions

**High Laser Intensity:** Use beam expander and diffuser for homogeneous illumination
**Stability:** Implement vibration isolation and drift correction
**Long Acquisition:** Optimize buffer conditions and fluorophore selection
**Data Processing:** Use GPU-accelerated reconstruction algorithms

Perfect for researchers interested in pushing the boundaries of optical microscopy to achieve nanometer-scale resolution!

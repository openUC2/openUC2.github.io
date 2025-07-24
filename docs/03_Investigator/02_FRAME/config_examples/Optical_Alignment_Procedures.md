# Optical Alignment Procedures

## Overview

The FRAME system requires precise optical alignment to ensure optimal performance. This document provides detailed procedures for aligning the internal optics cube and calibrating the optical path.

## Internal Optics Cube Preparation

### Initial Setup Outside the FRAME

Before installing the internal optics cube in the FRAME, it must be properly aligned using a separate alignment setup.

#### Components to Align

The internal optics cube contains three main optical elements that must be aligned:
1. **Transmitted light module** with camera and folding mirror
2. **Fluorescence excitation module** 
3. **Objective mounting system**

#### Alignment Setup

1. **Create External Test Setup**:
   - Remove the internal optics cube from the FRAME
   - Build a test setup on top of the cube that mimics the FRAME's optical distances
   - Mount an objective in the test setup to maintain proper optical spacing

2. **Software Preparation**:
   - Start ImSwitch software to enable camera viewing
   - Ensure proper communication with the cube's electronics

### Fluorescence Module Alignment

#### Köhler Illumination Setup

1. **Fiber Light Source**:
   - Insert a fiber into the fiber holder to act as a point light source
   - This simulates the laser input for fluorescence excitation

2. **Collimating Lens System**:
   - The light is collimated by the first lens
   - A second auxiliary lens focuses the light into the back focal plane of the microscope
   - The focus must be positioned at the location of the future objective's back focal plane

3. **Field of View Adjustment**:
   - The opening angle/divergence angle at the back focal plane determines the illuminated field of view
   - Adjust this angle to match your sample area requirements

#### Mechanical Alignment

1. **Access Adjustment Screws**:
   - Use a 2.5mm hex key to access the three adjustment screws on the back of the cube
   - These screws control the position and angle of the optical elements

2. **Laser Centering**:
   - Ensure the laser focus is exactly centered where the objective will be positioned
   - The light beam must exit the internal cube parallel to the optical axis
   - This ensures proper Köhler illumination

3. **Objective Installation**:
   - Once aligned without objective, install the objective
   - Use a screen to track the beam path outside the objective
   - **Safety**: Do not look directly into the beam, even with the low-intensity calibration laser

4. **Final Beam Check**:
   - The beam must exit the objective centrally and collimated
   - The opening angle should be approximately 0° (parallel beam)
   - The beam bundle should be parallel

## FRAME Integration Alignment

### Objective-to-FRAME Alignment

After internal cube alignment, align the optical axis of the FRAME with the internal cube.

#### Available Adjustments

Two adjustment mechanisms are available:
1. **X-axis**: Objective can be moved along the X-axis using the slide mechanism
2. **Y-axis**: Internal cube can be moved relative to the FRAME using adjustment screws

#### LED Alignment Tool Setup

1. **Prepare LED Alignment Tool**:
   - Remove the camera from the FRAME
   - Install an LED with C-mount adapter in place of the camera
   - This creates a reference light source for alignment

2. **Pinhole Creation**:
   - Use a small pin to create a centered pinhole in front of the LED
   - This creates a point light source for propagation through the optical system

#### Alignment Procedure

1. **Initial Positioning**:
   - Remove the microscope objective temporarily
   - Turn on the LED alignment tool
   - Observe the point light source projected to the back focal plane

2. **Y-axis Alignment**:
   - Adjust the internal cube position along Y-axis using the adjustment screw
   - Move the light point to the center of the back focal plane
   - Use a piece of paper with crosshairs to mark the position

3. **X-axis Alignment (A-axis)**:
   - Use the electronic controls in ImSwitch to move the objective slide
   - Adjust the A-axis position using the plus/minus controls in the GUI
   - Center the point relative to the back focal plane

4. **Position Storage**:
   - Save the A-axis position for both objective slot 1 and slot 2
   - These values are stored permanently in EPROM
   - The system will automatically move to these positions when switching objectives

#### System Operation

- **Startup**: System homes to physical zero position, then moves to saved position for objective 1
- **Objective Switching**: Pressing objective 2 button automatically moves to saved position 2
- **Position Memory**: Positions are permanently stored and recalled on each startup

### Fluorescence Path Verification

1. **Test with Laser**:
   - Use the actual laser source to test the fluorescence excitation path
   - With objective removed, check focus position at back focal plane
   - The laser spot should be centered like the LED alignment point

2. **Final Verification**:
   - Install objectives and verify alignment
   - Test both transmitted and fluorescence illumination paths
   - Confirm proper image quality and illumination uniformity

### Final Assembly

Once all optical elements are properly aligned:

1. **Secure Internal Cube**:
   - Tighten the locking knobs to permanently secure the internal cube in the rail
   - Ensure the cube cannot move during operation

2. **System Testing**:
   - Perform comprehensive testing of all optical functions
   - Verify image quality across the full field of view
   - Test objective switching and focus mechanisms

## Troubleshooting Common Issues

### Poor Illumination Uniformity
- Check fiber coupling and position
- Verify collimating lens alignment
- Adjust Köhler illumination setup

### Image Quality Issues
- Verify objective mounting and alignment
- Check camera sensor alignment
- Ensure proper back focal distance

### Switching Problems
- Verify objective position storage
- Check mechanical alignment of slide system
- Confirm proper homing sequence

## Safety Considerations

- Always use appropriate laser safety procedures
- Never look directly into laser beams
- Use proper eye protection when working with UV or laser sources
- Ensure proper ventilation when using cleaning solvents

## Maintenance

- Regular cleaning of optical surfaces
- Periodic verification of alignment
- Check mechanical adjustments for wear
- Update position calibrations as needed
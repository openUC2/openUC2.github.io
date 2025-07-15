---
id: MichelsonInterferometer
title: Michelson Interferometer - Exploring Wave Interference
sidebar_position: 3
---

# Michelson Interferometer - Exploring Wave Interference

## Learning Objectives

By the end of this experiment, you will be able to:
- **Explain wave interference** in terms of constructive and destructive interference
- **Describe how path differences** create interference patterns
- **Operate a precision optical instrument** used in cutting-edge research
- **Connect historical experiments** to modern scientific discoveries
- **Analyze interference patterns** to measure microscopic distances

## Introduction

The Michelson Interferometer is one of the most important instruments in the history of physics. Invented by Albert Michelson in 1881, it has been used to:
- Measure the speed of light with unprecedented precision
- Prove that the "luminiferous ether" does not exist (Nobel Prize 1907)
- Detect gravitational waves in modern LIGO detectors
- Make ultra-precise distance measurements

In this experiment, we'll build our own Michelson interferometer using the UC2 modular system and explore how light waves interfere with each other.

## Background Physics: What is Wave Interference?

Before building our interferometer, let's understand the physics behind it.

### Light as a Wave

Light is an electromagnetic wave with specific properties:
- **Wavelength (λ)**: The distance between two peaks (for green light: ~532 nm)
- **Frequency (f)**: How many waves pass a point per second (~5.6 × 10¹⁴ Hz for green light)
- **Speed (c)**: All light travels at 299,792,458 m/s in vacuum

The relationship between these is: **c = f × λ**

### Wave Interference Principles

When two waves meet, they combine according to the **principle of superposition**:

**Constructive Interference** (Bright fringes):
- Waves arrive "in phase" (peaks align with peaks)
- Path difference = 0, λ, 2λ, 3λ... (whole number of wavelengths)
- Amplitudes add together → Maximum brightness

**Destructive Interference** (Dark fringes):
- Waves arrive "out of phase" (peaks align with troughs)
- Path difference = λ/2, 3λ/2, 5λ/2... (odd multiples of half wavelengths)
- Amplitudes cancel out → Minimum brightness

![Wave interference diagram](./IMAGES/Michelson_4.png)

### Why Do We Need Coherent Light?

For stable interference patterns, we need **coherent light** where:
- All light waves have the same wavelength (monochromatic)
- Waves maintain consistent phase relationships over time
- Laser light is ideal because it's highly coherent

## Materials and Equipment

### Components Needed

1. **Green laser diode** (532 nm, coherent light source)
2. **Beam splitter cube** (50/50 reflective coating)
3. **Three kinematic mirrors** (precise angular adjustment)
4. **Pinhole aperture** (spatial filtering)
5. **Camera system** (Hikrobot MV-CE060-10UC) with USB cable
6. **UC2 optical cubes** and base plates
7. **Screen** for visual observation
8. **Precision screwdriver** (1.5×60) for alignment

### Essential Safety Equipment
- Laser safety glasses (if required)
- Clean workspace free of reflective objects

![Michelson setup overview](./IMAGES/Michelson_1.png)

## How the Michelson Interferometer Works

### Basic Principle

The Michelson interferometer splits a single laser beam into two paths using a **beam splitter**:

1. **Beam splitting**: The beam splitter reflects ~50% of the light and transmits ~50%
2. **Separate paths**: The two beams travel to different mirrors (reference and movable)
3. **Reflection**: Both beams reflect back toward the beam splitter
4. **Recombination**: The beams recombine and interfere
5. **Detection**: The interference pattern is observed on a screen or camera

![Interferometer principle](./IMAGES/Michelson_2.png)

### Path Difference and Interference

The key to understanding the interference pattern is the **optical path difference** between the two arms:

- **Reference arm**: Fixed distance to mirror
- **Movable arm**: Variable distance (controlled by translation stage)

When the movable mirror moves by **λ/4** (quarter wavelength):
- Total path difference changes by **λ/2** (half wavelength)
- The interference switches from constructive to destructive (or vice versa)
- One complete fringe passes by as the mirror moves **λ/2**

### Mathematical Description

For two waves with the same amplitude A:
- **Constructive**: I = 4A² (maximum intensity)
- **Destructive**: I = 0 (minimum intensity)
- **General case**: I = 2A²(1 + cos(2πΔ/λ))

Where Δ is the path difference between the two arms.

![Mathematical representation](./IMAGES/Michelson_3.png)


## Historical Context: Measuring the Speed of Light

### Michelson's Revolutionary Experiment (1879)

Albert Michelson used his interferometer to make the most precise measurement of the speed of light in his era. His method was ingenious:

1. **Setup**: He measured the time difference for light traveling in two perpendicular directions
2. **Precision**: By counting interference fringes, he could detect path changes smaller than one wavelength of light
3. **Result**: He measured c = 299,853,400 m/s (amazingly close to the modern value!)

### The Michelson-Morley Experiment (1887)

This famous experiment aimed to detect Earth's motion through the "luminiferous ether" (the hypothetical medium for light waves):

- **Hypothesis**: If ether exists, light should travel at different speeds in different directions
- **Method**: Compare light travel times in perpendicular directions as Earth moves through space
- **Result**: No difference detected! This was crucial evidence that ether doesn't exist
- **Impact**: This null result helped inspire Einstein's special theory of relativity

### Modern Applications

Today, Michelson interferometers are used in:

**LIGO Gravitational Wave Detectors**:
- 4-kilometer-long arms detect distance changes smaller than 1/10,000th the width of a proton
- Successful detection of gravitational waves from black hole mergers (Nobel Prize 2017)

**Precision Metrology**:
- Industrial measurement of surface roughness
- Calibration of precision instruments
- Quality control in semiconductor manufacturing

![Modern applications](./IMAGES/Michelson_5.png)


## Step-by-Step Assembly Instructions

### Pre-Assembly Checklist

**Safety First**:
- ⚠️ **NEVER look directly at the laser beam**
- ⚠️ **Turn OFF laser when repositioning components**
- ⚠️ **Remove reflective jewelry** (watches, rings)
- ⚠️ **Clear workspace** of reflective objects (phones, coins)

**Materials Check**:
- Verify all components are present (see materials list above)
- Ensure screwdriver is available for fine adjustments
- Check that camera software is installed if using digital detection

### Assembly Procedure

#### Step 1: Create the Base Structure

Build a four-cube base plate configuration to hold:
- Laser diode
- Pinhole aperture
- Beam splitter
- Initial alignment mirror

**Important**: Keep the laser OFF throughout assembly!

![Base structure setup](./IMAGES/image65.png)
![Four-cube configuration](./IMAGES/image41.png)

#### Step 2: Install and Align the Pinhole

1. **Position**: Place the pinhole as far as possible from the laser diode position
2. **Purpose**: The pinhole acts as a spatial filter, improving beam quality
3. **Alignment**: We'll align this in the next step

![Pinhole placement](./IMAGES/image37.png)

#### Step 3: Adjust Pinhole Aperture

**Close the diaphragm** to create a small aperture:
- Start with the smallest opening
- This ensures only the highest quality portion of the laser beam passes through
- Improves interference contrast

![Pinhole aperture adjustment](./IMAGES/image102.jpg)

#### Step 4: Initial Laser Alignment

1. **Place screen** after the pinhole
2. **Turn laser ON** (briefly, for alignment only)
3. **Adjust laser mount screws** using the screwdriver
4. **Center the beam** on the pinhole opening
5. **Turn laser OFF** once aligned

**Critical**: The beam should travel parallel to the table surface!

![Screen placement](./IMAGES/image123.jpg)
![Laser alignment process](./IMAGES/image108.jpg)
![Centered beam](./IMAGES/image94.jpg)

#### Step 5: Install the First Kinematic Mirror

1. **Remove the pinhole** (carefully - don't disturb laser alignment)
2. **Install kinematic mirror** in the same position
3. **Purpose**: This redirects the beam toward the beam splitter

![Mirror installation](./IMAGES/image97.jpg)
![Kinematic mirror in place](./IMAGES/image51.jpg)
![Mirror positioning](./IMAGES/image23.jpg)

#### Step 6: Set Up Beam Splitter Path

1. **Install pinhole** two cubes away from the beam splitter
2. **Create straight line**: Laser → Mirror → Beam splitter → Pinhole → Screen
3. **Turn laser ON** briefly
4. **Align the kinematic mirror** so beam passes through pinhole center
5. **Turn laser OFF**

![Beam splitter alignment setup](./IMAGES/image60.jpg)
![Straight-line configuration](./IMAGES/image35.jpg)
![Beam centered on pinhole](./IMAGES/image73.jpg)

#### Step 7: Install Interferometer Arms

Now we create the two interference arms:

1. **Remove the pinhole** from the detection position
2. **Install reference mirror** (fixed position)
3. **Install movable mirror** (on translation stage)
4. **Replace pinhole at detection point**

This creates the classic Michelson geometry:
- Reference arm: Beam splitter → Fixed mirror → Back to beam splitter
- Variable arm: Beam splitter → Movable mirror → Back to beam splitter

![Interferometer arms setup](./IMAGES/image55.jpg)
![Reference and movable mirrors](./IMAGES/image29.jpg)
![Complete geometric layout](./IMAGES/image16.jpg)

#### Step 8: Achieve Initial Interference

1. **Place screen** after the detection pinhole
2. **Turn laser ON**
3. **Observe**: You should see TWO spots of light (one from each mirror)
4. **Adjust movable mirror** until the spots have similar brightness
5. **Goal**: Make the two beams as equal in intensity as possible

![Two beam spots visible](./IMAGES/image118.jpg)
![Intensity balancing](./IMAGES/image67.jpg)
![Equal brightness achieved](./IMAGES/image47.jpg)
![Optimized beam intensity](./IMAGES/image115.jpg)

#### Step 9: Overlap the Beams

**Critical step for interference**:

1. **Adjust reference mirror screws** carefully
2. **Goal**: Make the two light spots overlap perfectly
3. **Patience required**: Small adjustments have large effects
4. **Result**: Single, bright spot when perfectly aligned

![Reference mirror adjustment](./IMAGES/image91.jpg)
![Beam overlap process](./IMAGES/image88.jpg)

#### Step 10: Observe Interference Fringes

**The moment of discovery**:

1. **Remove the pinhole** from the detection path
2. **Expand to full beam size** on the screen
3. **Fine-tune reference mirror** for perfect overlap
4. **Observe**: Interference fringes should appear!
5. **Center the pattern** on the screen

![Extended beam observation](./IMAGES/image66.jpg)
![Interference fringes emerging](./IMAGES/image43.jpg)
![Centered fringe pattern](./IMAGES/image122.jpg)

### Understanding What You're Seeing

When interference fringes appear, you're directly observing the wave nature of light:
- **Bright fringes**: Constructive interference (waves in phase)
- **Dark fringes**: Destructive interference (waves out of phase)
- **Fringe movement**: Indicates path difference changes smaller than the wavelength of light!

## Digital Detection and Measurement

### Setting Up the Camera System

For quantitative measurements, we replace the screen with a digital camera:

#### Step 11: Install Camera Detection

1. **Remove the screen**
2. **Install Hikrobot camera** (MV-CE060-10UC) with base plates
3. **Connect USB cable** to computer
4. **Launch MVS software** ([Camera Software Tutorial](Camera_Software_tutorial.md))

![Camera installation](./IMAGES/image106.jpg)
![Camera mounting](./IMAGES/image42.jpg)
![USB connection](./IMAGES/image14.jpg)

#### Step 12: Optimize Camera Settings

**Exposure time adjustment**:
1. **Start with short exposure** to avoid saturation
2. **Gradually increase** until fringes are clearly visible
3. **Balance**: Too short = dark image, too long = washed out fringes
4. **Fine-tune reference mirror** to center the interference pattern

![Fringe pattern on camera](./IMAGES/image113.png)
![Optimized exposure settings](./IMAGES/image80.png)

### Understanding the Data

The camera captures interference fringes that provide quantitative information:

**Fringe Characteristics**:
- **Fringe spacing**: Related to the angle between the two beams
- **Fringe visibility**: Indicates how well the beams are aligned
- **Fringe movement**: Shows when the movable mirror position changes

**Measurement Capabilities**:
- **Distance measurement**: Each fringe corresponds to λ/2 mirror movement
- **Surface roughness**: Irregularities appear as fringe distortions
- **Vibration detection**: Environmental disturbances cause fringe motion

## Experimental Observations and Analysis

### What You Should Observe

**Successful Interference Pattern**:
![Complete UC2 interferometer](./IMAGES/IMG_20230812_144849.jpg)

**Newton Rings Pattern**:
When using divergent beams, you may observe circular fringes (Newton rings):
- **Circular symmetry**: Due to spherical wavefront interference
- **Central spot**: May be bright or dark depending on path difference
- **Ring spacing**: Decreases with radius

![Newton rings interference](./IMAGES/IMG_20230812_144127.jpg)

**Real-time Detection**:
![ESP32 camera detection](./IMAGES/IMG_20230812_144857.jpg)

### Experimental Investigations

#### Investigation 1: Fringe Counting
**Objective**: Measure microscopic distances

**Procedure**:
1. Count fringes as you move the translation stage
2. Calculate distance moved: d = (number of fringes) × λ/2
3. Compare with direct measurement if possible

**Example**: For green light (λ = 532 nm), 10 fringes = 2.66 μm movement

#### Investigation 2: Vibration Detection
**Objective**: Detect environmental disturbances

**Procedure**:
1. Observe stable fringe pattern
2. Gently tap the table
3. Observe fringe motion
4. Calculate table displacement from fringe shifts

**Learning**: Even tiny vibrations are detectable!

#### Investigation 3: Coherence Length
**Objective**: Understand laser coherence properties

**Procedure**:
1. Gradually increase path difference between arms
2. Observe when fringes become less distinct
3. Measure maximum path difference for visible fringes
4. This is the coherence length of your laser

### Data Analysis Techniques

#### Fringe Visibility Calculation
Visibility V = (Imax - Imin)/(Imax + Imin)

Where:
- Imax = maximum intensity in bright fringe
- Imin = minimum intensity in dark fringe
- Perfect visibility: V = 1
- No interference: V = 0

#### Phase Analysis
For advanced students, the intensity pattern follows:
I(x) = I₀[1 + V cos(2πx/Λ + φ)]

Where:
- Λ = fringe spacing
- φ = phase offset
- This can be analyzed to extract precise phase information

## Troubleshooting Guide

### Common Problems and Solutions

**Problem**: No interference fringes visible
- **Check**: Are both mirrors reflecting light back to the detector?
- **Solution**: Align mirrors so both beams reach the detection point

**Problem**: Very low fringe visibility
- **Check**: Are the beam intensities balanced?
- **Solution**: Adjust mirror angles to equalize beam intensities

**Problem**: Fringes moving constantly
- **Check**: Is the setup vibrationally stable?
- **Solution**: Isolate from vibrations, check for air currents

**Problem**: No circular fringes, only linear
- **Check**: Are the beams perfectly parallel?
- **Solution**: This is actually correct for good alignment!

### Alignment Tips

1. **Patience is key**: Small adjustments have large effects
2. **One adjustment at a time**: Don't change multiple things simultaneously
3. **Mark successful positions**: Use tape or markers for reference
4. **Work systematically**: Follow the assembly sequence carefully

## Extension Activities

### Advanced Experiments

#### White Light Interferometry
- **Challenge**: Use white LED instead of laser
- **Observation**: Colored fringes with limited visibility range
- **Learning**: Understand coherence length effects

#### Atmospheric Pressure Effects
- **Setup**: Seal one arm in a container
- **Experiment**: Change air pressure in the container
- **Observation**: Fringe shifts due to refractive index changes
- **Application**: How atmospheric pressure affects precision measurements

#### Temperature Sensitivity
- **Method**: Gently warm one mirror with your hand
- **Observation**: Thermal expansion causes fringe motion
- **Calculation**: Estimate thermal expansion coefficient

## Connections to Modern Science

### LIGO Gravitational Wave Detection

The Michelson interferometer in LIGO:
- **Scale**: 4 km arm length (vs. our ~20 cm)
- **Sensitivity**: Detects changes smaller than 1/10,000th of a proton width
- **Achievement**: First direct detection of gravitational waves (2015)
- **Impact**: Nobel Prize in Physics (2017)

### Industrial Applications

**Precision Manufacturing**:
- Surface roughness measurement
- Flatness testing of optical components
- Quality control in semiconductor industry

**Scientific Research**:
- Atomic force microscopy
- Stellar interferometry
- Precision spectroscopy

## Learning Assessment

### Key Concepts Check

Can you explain:
1. **Why** interference occurs when two light beams combine?
2. **How** path differences create bright and dark fringes?
3. **What** determines the spacing between interference fringes?
4. **Why** coherent light is necessary for stable interference?
5. **How** this instrument can measure distances smaller than the wavelength of light?

### Practical Skills Gained

You should now be able to:
- Align optical components systematically
- Balance beam intensities for optimal interference
- Interpret interference patterns quantitatively
- Troubleshoot optical alignment problems
- Connect experimental observations to wave theory

## Conclusion

Congratulations! You have successfully built and operated a Michelson interferometer - one of the most important instruments in the history of physics. Through this experiment, you have:

- **Directly observed** the wave nature of light through interference
- **Experienced** the precision possible with optical measurement techniques
- **Connected** fundamental physics concepts to cutting-edge research
- **Developed** skills in precision optical alignment and troubleshooting

This interferometer demonstrates the same physical principles used in:
- Gravitational wave detection (LIGO/Virgo)
- Precision manufacturing and quality control
- Advanced research in quantum optics
- Modern interferometric microscopy

The skills and understanding you've gained provide a foundation for exploring more advanced topics in optics, quantum mechanics, and precision measurement science.

**Next Steps**: Consider exploring the [Mach-Zender Interferometer](./04_mach-zender_interferometer.md) to see how interferometry can be applied to imaging and phase measurement!

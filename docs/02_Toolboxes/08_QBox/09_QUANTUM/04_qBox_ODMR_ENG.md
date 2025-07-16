---
id: odmr_experiment_eng
title: ODMR – Optically Detected Magnetic Resonance
---

# ODMR: Exploring Quantum Physics with Diamond Defects

## Learning Objectives

By the end of this experiment, you will be able to:
- Understand what quantum "spin" means and how it differs from everyday spinning
- Explain how defects in diamond crystals can be used as quantum sensors
- Describe how light, microwaves, and magnetic fields interact with quantum systems
- Build and operate an ODMR spectrometer using UC2 components
- Measure magnetic fields using quantum techniques
- Connect quantum physics concepts to real-world applications

## Key Concepts

- **Quantum spin**: A fundamental property of particles (like charge or mass) that can point "up" or "down"
- **NV center**: A special defect in diamond that acts like a tiny quantum magnet
- **Fluorescence**: When materials absorb one color of light and emit a different color
- **Magnetic resonance**: Using radio waves to flip quantum spins, like tuning a radio
- **Quantum sensors**: Using quantum properties to make incredibly precise measurements

## What is ODMR? The "Radio of the Quantum World"

Imagine you have a tiny radio inside a diamond that you can tune with magnetic fields. That's essentially what ODMR (Optically Detected Magnetic Resonance) does!

**The Amazing Process:**
1. **"Tuning in"**: We use microwaves (like radio waves) to flip quantum spins
2. **"Listening"**: We use laser light to "hear" if the spin flipped successfully  
3. **"Measuring"**: The brightness of the fluorescence tells us about magnetic fields

**Why This is Revolutionary:**
- We can measure magnetic fields smaller than Earth's magnetic field divided by a million!
- We can do this at room temperature (unlike most quantum experiments that need extreme cold)
- The sensor is smaller than a human hair but more precise than room-sized instruments

![](./IMAGES/image1.png)

## The Magic of NV Centers: Quantum Defects in Diamond

### What Makes a Diamond "Quantum"?

Normal diamonds are made of carbon atoms arranged in a perfect crystal lattice. But our special diamonds have intentional "mistakes" called **NV centers** (Nitrogen-Vacancy centers):

- **N (Nitrogen)**: One carbon atom is replaced by a nitrogen atom
- **V (Vacancy)**: The neighboring carbon atom is missing, creating an empty space

![](./IMAGES/image8.png)

### Why These "Defects" Are Perfect

Think of an NV center as a tiny quantum magnet trapped inside the diamond:
- **Stable**: Unlike quantum systems that need extreme conditions, NV centers work at room temperature
- **Controllable**: We can manipulate them with light, microwaves, and magnetic fields
- **Readable**: They fluoresce (glow) in a way that reveals their quantum state
- **Protective**: The diamond crystal shields them from environmental noise

### The Quantum Properties

Each NV center has a quantum property called **spin** that can exist in three states:
- **Spin = 0**: Like a compass needle pointing neither north nor south
- **Spin = +1**: Like a compass needle pointing north  
- **Spin = -1**: Like a compass needle pointing south

**The key insight**: The brightness of fluorescence depends on which spin state the NV center is in!

## How ODMR Works: The Three-Step Quantum Dance

### Step 1: Illumination (Green Light In)
When we shine green laser light (532 nm) on the NV center:
- The quantum system absorbs the energy and gets "excited"
- Think of it like pushing a swing - you add energy to make it move

### Step 2: Fluorescence (Red Light Out)  
The excited NV center relaxes and emits red light (~650-800 nm):
- **Spin = 0 state**: Emits bright red fluorescence
- **Spin = ±1 states**: Emits dimmer red fluorescence (some energy is lost through a "dark" pathway)

**The Key Discovery**: The brightness of the red light tells us which quantum state the NV center is in!

### Step 3: Microwave Manipulation
We use microwaves (like your microwave oven, but much weaker) to flip the quantum spins:
- **Frequency matters**: Only specific frequencies (~2.87 GHz) can flip the spins
- **Magnetic field effect**: External magnetic fields change these frequencies
- **Detection**: When spins flip from bright (spin=0) to dim (spin=±1), we see the fluorescence decrease

![](./IMAGES/image5.png)

## Safety First: Working with Quantum Technology

### Laser Safety ⚠️
- **Never look directly at the laser beam** - even briefly can damage your eyes
- **Keep laser OFF** during assembly and repositioning
- **Beam direction**: Always ensure the beam travels parallel to the table surface
- **Remove reflective items**: Jewelry, phones, and shiny objects can redirect the beam unexpectedly

### Magnet Safety 🧲
- **Medical implants**: Inform your instructor if you have pacemakers, metal implants, or medical devices
- **Electronic devices**: Keep phones, tablets, computers, and credit cards away from magnets
- **Swallowing hazard**: Small magnets are dangerous if swallowed - handle carefully and report any loose magnets immediately

### Equipment Handling
- **Gold components**: All gold-colored parts are precision optics - handle gently
- **White components**: Used for adjustments - these can be handled normally
- **Alignment tools**: Use only the provided screwdrivers for adjustments

![](./IMAGES/image4.jpeg)

## Materials and Components

### Your Quantum Laboratory Kit:

**Optical Components:**
1. **Base plates** - Foundation for stable construction
2. **Green laser diode** - Provides excitation light (532 nm)
3. **45° mirrors (2x)** - Direct light beams precisely  
4. **Beam splitter with filter** - Separates excitation and fluorescence light
5. **Focusing lens** - Concentrates laser light on the diamond
6. **Light sensor** - Detects fluorescence intensity changes

**Quantum Components:**
7. **Electronics control box** - Generates microwaves and processes signals
8. **XY-stage with NV diamond** - Positions the quantum sensor precisely
9. **Color filter** - Blocks green light, passes red fluorescence

**Magnetic Components:**
10. **Permanent magnet** - Creates controllable magnetic fields
11. **Screen** - For initial alignment and visualization

![](./IMAGES/image6.png)
![](./IMAGES/image7.png)

### Understanding Your NV Diamond

**What you're holding**: A piece of synthetic diamond containing millions of NV centers, often appearing pink due to the nitrogen impurities.

**Why it's special**: 
- Each NV center is a isolated quantum system
- Stable at room temperature (unlike most quantum experiments!)
- Can be individually controlled and read out
- Responds to magnetic fields as small as a few nanotesla

![](./IMAGES/image9.jpeg)
## Building Your Quantum Sensor

### Assembly Overview

You're about to build a quantum magnetometer - a device that can measure magnetic fields using the principles of quantum mechanics! The setup consists of three main parts:

1. **Optical excitation system**: Green laser → lens → diamond
2. **Fluorescence detection**: Diamond → filter → light sensor  
3. **Microwave control**: Electronics box → antenna → diamond

### Step-by-Step Assembly

#### Step 1: Create the Foundation
**Goal**: Build a stable optical platform.

Build the setup using the base plates as shown. Remember to keep the laser OFF during assembly.

**Why stability matters**: Quantum measurements are incredibly sensitive. Even tiny vibrations can affect your results.

![](./IMAGES/image11.png)

#### Step 2: Align the Excitation Laser
**Goal**: Focus green laser light precisely on the NV diamond.

1. Position the laser so it aims toward the center of the focusing lens
2. Adjust the XY-stage to place the diamond at the lens focal point
3. **Turn laser ON** briefly to check alignment
4. Look through the red filter - the diamond should glow brightly!
5. **Turn laser OFF**

**What you're seeing**: The bright red glow is fluorescence from millions of NV centers being excited simultaneously!

![](./IMAGES/image13.png)

#### Step 3: Complete the Detection System  
**Goal**: Set up fluorescence measurement and microwave control.

1. Complete the setup as shown in the diagram
2. Connect the light sensor to monitor fluorescence intensity
3. Connect the microwave antenna to the electronics control box
4. Position the magnet cube for magnetic field control

**The complete system**: You now have optical excitation, fluorescence detection, and microwave/magnetic control - everything needed for quantum sensing!

![](./IMAGES/image12.png)

#### Step 4: Connect Electronics and Software
**Goal**: Link your quantum hardware to digital measurement systems.

1. Connect the light sensor to the electronics control box
2. Connect the control box to your computer via USB
3. Launch the control software interface
4. **Turn laser ON** and verify you see a fluorescence signal

**Digital quantum physics**: Modern quantum experiments rely heavily on computer control and data analysis.

![](./IMAGES/image14.png)

#### Step 5: Observe Magnetic Sensitivity
**Goal**: See quantum physics in action!

1. With the laser illuminating the diamond and fluorescence being measured
2. Slowly move the magnet closer to and farther from the diamond
3. Watch for intensity changes in the light sensor readings
4. Try different magnet orientations

**Your first quantum measurement**: Any changes you observe are due to magnetic fields affecting the quantum spin states of the NV centers!

![](./IMAGES/image15.png)

## Understanding Your Results

### What You're Measuring

When you see fluorescence intensity changes as you move the magnet, you're witnessing:

**Quantum state manipulation**: The magnetic field is changing the energy levels of the quantum spins, which affects how brightly the NV centers fluoresce.

**The ODMR effect**: At certain magnetic field strengths and microwave frequencies, you'll see dramatic changes in brightness - this is the "resonance" that gives ODMR its name.

### Interpreting the Data

**Bright fluorescence**: Most NV centers are in the spin=0 state (maximum fluorescence)
**Dim fluorescence**: Many NV centers have been driven to spin=±1 states (reduced fluorescence)
**Signal changes with magnet position**: The magnetic field is shifting the resonance frequencies

### Advanced Experiments You Can Try

#### Experiment 1: Magnetic Field Mapping
Move the magnet systematically around the diamond while recording fluorescence. You're creating a map of magnetic field strength!

#### Experiment 2: Frequency Scanning  
If your electronics box supports it, scan through different microwave frequencies while monitoring fluorescence. You should see dips at the resonance frequencies.

#### Experiment 3: Temperature Effects
Try warming or cooling the diamond (carefully!) and observe how the ODMR signal changes.

## Real-World Applications: Why This Matters

### Current Applications

**Medical Imaging**: 
- NV centers could enable MRI machines that work at room temperature
- Single-cell magnetic imaging for studying biological processes

**Materials Science**:
- Detecting magnetic impurities in semiconductors
- Studying magnetic properties of new materials at the nanoscale

**Fundamental Physics**:
- Testing theories of quantum mechanics
- Searching for new particles and forces

### Future Possibilities

**Quantum Computing**: NV centers are candidates for quantum bits (qubits) in quantum computers

**Navigation**: Quantum magnetometers could replace GPS in environments where satellite signals are blocked

**Geology**: Detecting underground mineral deposits by mapping tiny magnetic field variations

**National Security**: Detecting submarines by their magnetic signatures

## The Bigger Picture: Quantum Technology Revolution

### What You've Accomplished

Congratulations! You've just:
✅ **Built a quantum sensor** capable of detecting magnetic fields
✅ **Manipulated quantum states** using light and microwaves  
✅ **Observed quantum phenomena** at room temperature
✅ **Used the same principles** employed in cutting-edge research laboratories
✅ **Connected quantum physics** to real-world applications

### Skills You've Developed

- **Quantum literacy**: Understanding how quantum properties can be harnessed for technology
- **Precision instrumentation**: Building and operating sensitive measurement devices  
- **Interdisciplinary thinking**: Connecting physics, chemistry, materials science, and engineering
- **Future technology awareness**: Understanding emerging quantum technologies

### Looking Forward

The quantum revolution is happening now, and you've just taken your first steps into this exciting field. The principles you've learned apply to:

- **Quantum computers**: Using quantum properties for unprecedented computational power
- **Quantum communications**: Unbreakable quantum encryption
- **Quantum sensing**: Measurements beyond classical limits
- **Quantum materials**: Designing materials with exotic quantum properties

**You're now part of the quantum generation!** 🚀⚛️

### Final Challenge

Can you explain to someone else:
1. How NV centers in diamond can detect magnetic fields?
2. Why quantum sensors might be better than classical sensors?
3. What applications of quantum technology excite you most?

**Welcome to the quantum future - you're helping to build it!**

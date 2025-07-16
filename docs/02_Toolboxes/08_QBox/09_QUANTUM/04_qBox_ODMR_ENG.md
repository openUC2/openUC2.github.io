---
id: odmr_experiment_eng
title: ODMR – Optically Detected Magnetic Resonance (English)
---

## ODMR – Optically Detected Magnetic Resonance (English)

![](./IMAGES/image1.png)
*Quantum Minilabs Logo*

![](./IMAGES/image2.png)
*openUC2 Cube rendering with Lens as quasi logo*

![](./IMAGES/image3.jpeg)
*BMBF Logo for financial Support*

# Table of Contents

* 02 – Safety Instructions
* 05 – Experiments with the Optics Cubes
* 06 – Parts List
* 07 – Bling bling – Luxury in the Physics Lab (NV Diamonds)
* 08 – Experiment Instructions
* 13 – Technology in Application

# SAFETY INSTRUCTIONS

## Laser

* The laser is only turned on when it is mounted on the base plate.
* The laser must be turned off each time it is repositioned.
* Before switching on, verify the direction of the beam. It should always run parallel to the table surface.
* Remove or cover reflective jewelry (rings, watches, bracelets).
* Remove reflective objects from the table (e.g. cases, rulers, wallets, phones).

## Magnets

* Individuals with implants must inform the supervisor. Special precautions may be necessary.
* Keep devices like phones, tablets, computers, and credit cards away from the experiment.
* Loose magnets must never be swallowed. Inform the instructor immediately if a magnet comes loose.

## Optics Cubes

* All gold-colored parts are functional components.
* White components are used to adjust the functional parts.

![](./IMAGES/image4.jpeg)
*3D rendering of openUC2 ODMR setup*

# What is ODMR?

Optically detected magnetic resonance (ODMR) is a method where the spin state of a system ("magnetic") is manipulated by microwave radiation ("resonance"). The resulting state is measured via laser illumination and the resulting fluorescence ("optically detected").

The microwave frequency at which resonance occurs is directly dependent on the magnetic field strength. This allows for precise measurement of magnetic fields.

![](./IMAGES/image5.png)
*All components in the kit*

# Parts List

1. Base plate
2. Green laser diode
3. 45° mirrors (2x)
4. Beam splitter with filter
5. Lens
6. Light sensor
7. Electronics control box
8. XY-stage with NV diamond
9. Screen
10. Color filter
11. Magnet

![](./IMAGES/image6.png)

![](./IMAGES/image7.png)
*Red diamond comic*

## NV Diamonds

NV stands for Nitrogen-Vacancy. It refers to a diamond with a specific "impurity," usually visible as a pink coloration.

### How Are NV Diamonds Formed?

Diamonds consist of a carbon atom lattice. In an NV diamond, one carbon atom is missing and replaced by a nitrogen atom. A vacancy is left next to the nitrogen.

![](./IMAGES/image8.png)
*NV Center in a diamond lattice*

![](./IMAGES/image9.jpeg)

### What Makes NV Diamonds Special?

* Their spin states can be manipulated and read out via laser light, magnetic fields, and microwaves.
* NV centers are stable quantum systems at room temperature, making them candidates for quantum computing.

![](./IMAGES/image11.png)
*Description of a beamsplitter using openUC2 components on a grid, where the laser is reflected and fluorescence is transmitted*

![](./IMAGES/image12.png)

* Build the setup as shown.
* Align the laser so that it hits the center of the lens.
* Adjust the XY-stage to place the diamond in the focus of the lens.
* The diamond should glow brightly when viewed through the red filter.

![](./IMAGES/image13.png)

* Complete the setup as shown in the figure.
* Connect to the light sensor user interface.

![](./IMAGES/image14.png)

* Adjust the 45° mirror so that as much light as possible hits the light sensor.

![](./IMAGES/image14.png)

* Connect the microwave antenna to the control box.
* Install the magnet cube.
* Observe any intensity changes when changing the magnet's position.

![](./IMAGES/image15.png)

## Detailed Technical Background

### The Goal of the ODMR Setup

The goal of the ODMR setup is to understand how we can optically measure magnetic fields through the reduction of fluorescence in the resonance case when microwaves interact with a diamond. This effect is interesting for indirectly measuring magnetic fields precisely through optical readout.

### What We Measure

What we specifically measure is the resonance of the defect site in a diamond with NV centers. For this, we have small diamonds with a diameter of approximately 100 nanometers and several NV sites placed on a circuit board that serves as an antenna. We excite these with laser light of a specific wavelength. Even without applied microwaves, we can measure the fluorescence of the diamond. This means we excite the diamond with green light (532 nanometers) and can measure the emissions in the red spectrum (over 600 nanometers).

The core idea is that when we apply microwaves, we can observe the Zeeman effect by splitting the spin-flip into negative and positive components, where the reduction in fluorescence shifts symmetrically to the respective negative and positive parts relative to the positive or negative spin.

### The Optical Setup

The optical setup is relatively simple. It follows that of a confocal laser fluorescence microscope. The idea is to use a laser pointer that emits collimated monochromatic light with high intensity after focusing on a point, and use this energy to excite electrons from the ground state of a diamond to an excited S1 state. Through lattice vibrations (also called phonons), the electrons relax from a reduced energy level in the S1 state back to the ground state S0. This energy reduction manifests as a color shift, also called the Stokes shift. Electrons are continuously brought to an excited state, then fall back to the ground state and emit fluorescent and thus visible radiation.

### Adding Microwave Energy

In the next step, we apply an additional energy source working with significantly reduced energy. The multi-state system of the diamond with NV center has an additional state with an energy difference of 2.87 GHz. It is thus possible, similar to a laser light source, to move electrons from the ground state to the elevated intermediate state. The electrons relax from there almost immediately back to the ground state.

When we combine this additional energy that puts electrons in the intermediate state with the additional energy of a laser that can also put electrons in an excited higher state, then the electrons are in a state from which they can no longer undergo fluorescent transitions. A non-fluorescent transition follows via the triplet state.

If we consider only the sum of all transitions from ground state via S1 state back to ground state and from intermediate state via excited state via triplet state to ground state, we notice that the proportion of non-fluorescent transitions increases, leading to a reduction in effective fluorescence or the number of generated photons. This happens exactly at the resonance frequency of the NV center where we bridge the energy difference from the ground state to the intermediate state.

### How the Setup Works

The setup works by focusing the laser pointer on the diamond and reading it out with a photodetector. We take the laser pointer that emits polarized green light, causing the beam to exit parallel from the laser pointer housing. We deflect the beam with a so-called kinematic and thus adjustable mirror by 45° and direct it onto a so-called dichroic beam splitter. This special piece of glass has the ability to reflect certain wavelengths and transmit other wavelengths.

In our case, the mirror or filter is reflective for green light and lets red light through. The green beam reflects and is focused by a converging lens. A converging lens focuses light from infinity (a parallel beam) to a focal point. Here we use a lens with 40mm focal length where the focus lies directly on the circuit board. With an XYZ stage, we can now move the circuit board so that we choose the smallest possible focus point on the board and position one of the three diamonds on the board directly in the beam focus. A red filter helps you see the small red spot on the circuit board by blocking the green light.

The light converted from the diamond into fluorescent red light is then collected again by the same lens through which we sent the light and collimated backward. The light now goes back to the dichroic beam splitter, where the beam splitter now acts transparently for the red light. An additional red filter absorbs unnecessary background noise, e.g., reflections of the green laser, to increase sensitivity.

Now the light goes to a deflection mirror with which we can again adjust the beam onto a combination of lens and photodiode. This module is constructed so that light from infinity is imaged directly onto the photodiode with an additional converging lens. They are thus confocal on the photodiode, meaning we image the focus from the sample onto the focus of the diode.

### Running the Experiment

When we perform the experiment in the web app, the following happens: we turn on the microwave for different frequencies, starting from e.g., 2.8 gigahertz and sweep through the values in 0.01 gigahertz steps up to 2.9 GHz. We simultaneously read out the photodiode and measure the intensity at each frequency. What you can now observe is the characteristic dip around the resonance frequency. When we apply an external magnetic field, this frequency splits into positive and negative components around the resonance frequency. The closer we bring the magnet to the diamond, the greater the splitting of the frequencies or spins.

### What Have We Learned?

Through this experiment, students learn:
* How quantum systems can be manipulated and measured optically
* The relationship between magnetic fields and quantum spin states
* How microwave radiation can affect electron transitions
* The principles behind confocal microscopy and fluorescence detection
* Real-world applications of quantum sensing technology

## Is This Technology Already in Use?

NV diamonds are currently used in basic research and ODMR prototypes. They are not yet commercially used.

## What Is the Future Potential?

* Use as quantum sensors (e.g., temperature, magnetic field, pH values inside cells)
* Application in nuclear magnetic resonance (as a supplement to MRI)
* Use as stable, controllable qubits in quantum computers

# The QuantumMiniLabs Project

## Motivation

Quantum technologies remain inaccessible and abstract for most people. Even at universities, relevant experiments are often only possible with expensive, complex equipment.

## Goals and Approach

The QuantumMiniLabs project is developing an open-source ecosystem that enables low-cost, scalable, modular, and repairable quantum tech experiments. The goal is to deploy the system at 100 educational locations across Germany.

## Innovation and Outlook

![](./IMAGES/image16.png)
![](./IMAGES/image17.png)

QuantumMiniLabs offer the first affordable DIY platform for experimenting with second-generation quantum systems. NV diamonds allow for stable experiments at room temperature.

The aim is wide distribution to reach a critical mass of users so the project continues and evolves beyond its initial funding.

![](./IMAGES/image18.png)
![](./IMAGES/image3.jpeg)

---
id: Automation_intro
title: openUC2 Electronics kit that enables automation
---

Please feel free to post a question in the Forum or in the [Github Issue section](https://github.com/openUC2/UC2-GIT/issues/new).

## List of the Content


<p align="center">
<img src="/Users/bene/Documents/UC2-DOCS/static/CORE/AUTOMATION/automation_content.png" width="400"/>
</p>

**In Cubes:**

- Camera  
- motorized Z-Stage  (NEMA 11)
- 1x openUC2 LED array (3 circles)

- 10x Baseplates 


**Not in Cubes:**

- 1x Objective lens (10x, finite)
- 1x openUC2 Electronic (ESP32-based)
- Box + Foam insert
- Micro USB Cable 
- Controller
- 12V Power Supply 


## Finite-corrected digital Microscope


In the following you will learn to build the finite-corrected microscope that helps you imaging microscopic sample using a digital webcam. It features a stepper motor-based Z-stage with a resolution around 300nm/step in case 16 microsteps are used. Additionally the ring-shaped led-array will enable digital phasecontrast of your transparent sample. 

Once done, the microscope will look like this:

<p align="center">
<img src="/Users/bene/Documents/UC2-DOCS/static/CORE/AUTOMATION/incubatorrot1.gif" width="400"/>
</p>

Based on the following image, take the following cubes:

- Webcam 
- Z-stage
- 45° Folding Mirror
- Sample Mount
- LED Array

Start concatenating the puzzle pieces to form an L-shape and place the different cubes on top of it to end up with this assembly:

<p align="center">
<img src="/Users/bene/Documents/UC2-DOCS/static/CORE/AUTOMATION/Incubatormicroscpoe.png" width="400"/>
</p>

Ensure that the LED array is either in the same cube as the sample or optionally add one more layer on top of the sample such that you end up with a 4-layer "tower". 

<p align="center">
<img src="/Users/bene/Documents/UC2-DOCS/static/CORE/AUTOMATION/Incubatormicroscpoe2.png" width="400"/>
</p>

Once done, the microscope features a folded beampath with a tubelength of ~100mm, which is less than the required 160mm following the RMS standard for finite-corrected objective lenses. This means, that the magnification will slightly less. However, this setup should give you and impression how you can build small microscopes that can be automated on the fly. 

<p align="center">
<img src="/Users/bene/Documents/UC2-DOCS/static/CORE/AUTOMATION/Incubatormicroscpoe3.png" width="400"/>
</p>


A brief intro into how to build the microscope can be found in the following two videos:

### Assembling a standard microscope 

<iframe width="560" height="315" src="https://www.youtube.com/embed/hcFopxEwQ_8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


### Assembling a finite-corrected microscope with a webcam

<iframe width="560" height="315" src="https://www.youtube.com/embed/c7u10bCSjaE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

### Controling the microscope with a browser

The motor and the led array are connted to the UC2 electronics module. For additional information, please have a look [here](https://openuc2.github.io/docs/Electronics/uc2e2#-wiring)

<p align="center">
<img src="/Users/bene/Documents/UC2-DOCS/static/CORE/AUTOMATION/Electronics.png" width="400"/>
</p>

In order to control the hardware components, we make use of the newly implemented Web-Serial (Chrome only for now). Alternatively, you can checkout the Python interface. More information available [here](https://openuc2.github.io/docs/Electronics/uc2e7#-python-bindings)

The link to the installation-free Web-Serial interface (Experimental) is here: https://youseetoo.github.io/indexWebSerialTest.html


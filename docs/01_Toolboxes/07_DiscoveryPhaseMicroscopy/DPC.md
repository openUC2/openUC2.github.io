---
id: DPCmicroscopy
title: Differential Phase Contrast Microscopy
---

# Differential Phase Contrast

Differential Phase Contrast Microscopy is a Computational Imaging technique that uses partial coherent sources to illuminate a sample at various angles. The angle determines the illumination NA which contributes to the final resolution due to the oblique illumination.

## Tutorial: DPC setup

### Materials needed:

- LED array
- Hikrobot Camera (MV-CE060-10UC) with USB cable ([Hikrobot Camera Software installation](Camera_Software_tutorial.md))
- ESP32 Module
- Microscope Objective
- Motorized Linear stage
- Non-Kinematic Mirror
- Sample holder (in cube)
- One empty cube
- 11 base plates
- Tube lens (with camera adapter)

![](./IMAGES/DPC_setup.png)

### Diagram:

![](./IMAGES/DPC_diagram.png)

### Instructions for assembling the DPC setup:
**Step 1: Download Imswitch and the ESP32 microcontroller drivers**

Once the drivers are installed you can visit ([youseetoo.github.io](https://youseetoo.github.io/indexWebSerialTest.html)) to test the LED array pattern sequences.

![](./IMAGES/ESP32.png)

**Step 2: Mount the LED array**

Mount the LED array into the LED array base plate and insert it in a cube as shown.

![](./IMAGES/LED_base.png)
![](./IMAGES/LED_array_insert.jpg)

**Step 3: Build the DPC setup**

**Substep 1**

Build the camera module as shown. It comprises of a tube lens and a Hikrobot Camera. Adjust the screw which binds the camera to the camera base plate to get the right distance between the camera and the tube lens.
![](./IMAGES/Camera_module.jpg)
![](./IMAGES/DPC_setup_step_1.jpg)

**Substep 2**

Insert the non-kinematic mirror and the linear stage accordingly. Then, place the microscope objective and in the same cube insert a sample holder.
![](./IMAGES/DPC_setup_step_2.jpg)

**Substep 3**

Finally, on top, place the led array cube. You can add a second pile of cubes next to the microscope objective to give more support and make the a more stable setup.

![](./IMAGES/Support_cubes.jpg)

**Step 4: Adjust the Source-sample distance**

Using the microscope objective _NA_ and the LED geometry, calculate the distance required from the LED array to the sample. This will determine the illumination _NA_. Use the ruler and adjust the distance moving the sample holder towards the LED array or viceversa. (Revise the theory to calculate the distance correctly according to the match illumination condition).

**Step 5: Focus on the sample**

Turn the LEDs on using Imswitch  and focus on the sample. Be careful if your sample is too transparent, there is a high probability of crashing the objective with the sample! Mind the working distance of your microscope objective. To focus you can use oblique illumination (one LED or one half-circle). This enables some phase gradients to show in the intensity images.

**Step 6: Run the ImDPC experiment!**

Once you have focused on the sample remove the sample and take the Flatfield images (Sequence of images with the DPC patterns with no sample). Then insert the sample again, adjust the desired FoV. Now you are set. Click _Start_ on the DPC widget!

Congrats! You have created a DPC microscope with OpenUC2!

![](./IMAGES/DPC_final_setup.png)

## DPC Images

Using the reconstruction algorithm we can retrieve the phase of the sample.

First test with the OpenUC2-DPC setup:

![](./IMAGES/Reconstruction-ANIMATION.gif)

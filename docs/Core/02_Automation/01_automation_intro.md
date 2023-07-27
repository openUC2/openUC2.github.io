**Technical Description: openUC2 Electronics Kit for Finite-Corrected Digital Microscope Automation**

The openUC2 Electronics Kit is a comprehensive package designed to enable automation in microscopy, particularly for building a finite-corrected digital microscope. This kit provides all the necessary components and instructions to assemble a fully functional microscope capable of imaging microscopic samples using a digital webcam. Key components included in the kit are as follows:

**Components in Cubes:**
- Camera (Webcam)
- Motorized Z-Stage (NEMA 11 stepper motor-based)
- 1x openUC2 LED array (comprising 3 circles)
- 10x Baseplates (to support the assembly)

**Components Not in Cubes:**
- 1x Objective Lens (10x finite or 4x finite with RMS thread, other lenses possible)
- 1x openUC2 Electronics (ESP32-based controller for automation)
- Box with Foam Insert (to store and protect the components)
- Micro USB Cable (for device connectivity)
- Controller (for stage and LED array control)
- 12V Power Supply (to power the motorized components)

**Finite-Corrected Digital Microscope:**
The kit allows users to build a finite-corrected digital microscope capable of imaging transparent samples with digital phase-contrast. It utilizes a stepper motor-based Z-stage with a resolution of around 300 nanometers per step (when using 16 microsteps). Additionally, the integrated ring-shaped LED array enables digital phase-contrast imaging of the samples.

The assembly of the microscope involves combining various cubes, including the webcam, Z-stage, 45° folding mirror, sample mount, and LED array, into an L-shaped configuration. Once assembled, the microscope features a folded beampath with a tubelength of approximately 100mm, slightly less than the standard 160mm specified for finite-corrected objective lenses. Despite this, the setup provides valuable insights into building small, automated microscopes.

**Instructional Videos:**
The kit includes instructional videos to guide users through the assembly process. Two main videos are provided:

1. Assembling a Standard Microscope: This video demonstrates the assembly of a basic microscope using the components in the kit.

2. Assembling a Finite-Corrected Microscope with a Webcam: This video specifically guides users in assembling the finite-corrected digital microscope with the included webcam.

**Microscope Control:**
The motorized Z-stage and LED array are connected to the openUC2 electronics module. The kit supports control through a browser interface, utilizing Web-Serial (compatible with Chrome). Alternatively, users can utilize the Python interface to control the hardware components.

**Web-Serial Interface:**
An installation-free Web-Serial interface (experimental) is provided, allowing users to control the microscope's hardware components directly from a browser. The Web-Serial interface currently supports Chrome.

Web-Serial Interface URL: https://youseetoo.github.io/indexWebSerialTest.html

**Getting a Sharp Image:**
To achieve optimal image quality, users are advised to test the microscope with nearly transparent samples while enabling LED illumination. By adjusting the focus manually (approximately 10-15mm from the last lens), users can obtain a sharp image on the screen produced by the USB camera. Once the correct focus position is found, the sample adapter (insert) can be placed to roughly position the sample in focus. Further fine-tuning of focus can be done using the focus adjustment buttons available on the microscope.

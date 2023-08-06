---
id: LightSheet
title: openUC2 Light-Sheet Microscope
---

# Workshop Manual: Building a Light-Sheet Microscope with UC2

In this experiment, we will explore the concept of optical sectioning to improve the resolution along the optical axis and the XY plane. The Light-Sheet Microscope, also known as the Light-Sheet Microscopy or Lattice Light-Sheet Microscopy, is a powerful technique used to acquire volumetric images of samples, such as zebrafishes. This technique enables us to visualize biological specimens in three dimensions with high resolution and minimal phototoxicity.

**Background Information**

Traditional microscopy techniques have limitations in both axial and lateral resolution. Optical sectioning is a method that aims to improve the resolution along the optical axis, enabling better separation of different components within a sample. One well-known technique for optical sectioning is confocal microscopy, but it requires complex setups and scanning of the sample.

Approximately 200 years ago, ultramicroscopy was established as a method to improve optical sectioning. Unlike traditional transmission microscopy, ultramicroscopy illuminates the sample from the side, creating dark-field illumination, where only scattered light is used for image formation. Light-sheet microscopy takes this concept further and shapes an optical sheet to illuminate a single plane of the sample. This plane is then imaged by a microscope objective oriented perpendicularly to the sheet. By moving the sample through this setup step by step, a three-dimensional stack can be acquired.

**Learning Objectives:**

1. Understand the principles of light-sheet microscopy and optical sectioning.
2. Assemble the basic components of the light-sheet microscope using the UC2 toolbox.
3. Construct a three-dimensional stack of a sample using the light-sheet microscope.

**Step 1: Assembling the Basic Components**

The core components of the light-sheet microscope are as follows:

- A fiber-coupled laser emitting at 488 nanometers, collimated with a polarimeter.
- A cylindrical lens with a focal length of 100 mm to create a one-dimensional focus.
- A kinematic mirror to adjust the laser beam position.
- A lens with a focal length of approximately 10 mm to shape the laser beam.
- A four-fold objective lens to transform the light sheet into the sample plane.
- An aquarium to hold the sample, with windows for excitation and detection.
- A LED for transmission illumination.
- A ten-fold objective lens with a long working distance for detection.
- An emission filter and a tube lens connected to a monochromatic CMOS camera for image acquisition.
- A micrometer-precise XYZ stage to move the sample.

![](./IMAGES/Lightsheet/IMG_20230729_080521.jpg)
*Z-stage for the objective lens*

![](./IMAGES/Lightsheet/IMG_20230729_084550.jpg)
*Almost Fully assembled UC2 Lighthseet microscope*


**Step 2: Light-Sheet Generation and Sample Preparation**

The fiber-coupled laser emits light at a wavelength of 488 nanometers, which is ideal for exciting fluorescent molecules commonly used in biological imaging, such as green fluorescent protein (GFP). The collimated laser beam passes through a cylindrical lens, creating a one-dimensional focus with a width of approximately 10 mm.

The kinematic mirror allows precise control of the laser beam position, ensuring proper alignment. The lens further shapes the laser beam into an optical sheet, which is then directed into the sample plane by the four-fold objective lens.

The sample, such as a zebrafish embryo, is held in a small aquarium filled with water. The sample is positioned such that the light sheet intersects it, and fluorescence signals are emitted only where the light sheet illuminates.

**Step 3: Image Acquisition**

Using the XYZ stage, move the sample in the focal plane of the ten-fold objective lens. The camera will capture images as the sample is moved, allowing you to create a three-dimensional stack of the object. The long working distance of the objective lens allows sufficient space between the lens and the sample, reducing the potential for photodamage and phototoxicity.

**Benefits of Light-Sheet Microscopy**

Light-sheet microscopy offers several advantages for imaging biological samples:

- Optical sectioning: The light-sheet illuminates only the focal plane, minimizing background noise and out-of-focus signals.
- Reduced phototoxicity: With the sample illuminated only in the focal plane, light-sheet microscopy reduces photodamage and photobleaching, allowing long-term imaging of live samples.
- High-speed imaging: Light-sheet microscopy enables rapid volumetric imaging, capturing dynamic processes in real-time.
- High resolution: The combination of optical sectioning and minimal scattering allows for high-resolution imaging, revealing fine cellular structures.

**Conclusion**

Congratulations! You have successfully built a light-sheet microscope using the UC2 modular toolbox. This powerful technique allows you to acquire high-resolution three-dimensional images of samples like zebrafishes. With the ability to perform optical sectioning and minimal phototoxicity, light-sheet microscopy is a valuable tool for studying biological structures in 3D. You can now explore the fascinating world of 3D biological imaging and discover new insights into the complexities of life at the microscopic level. Happy imaging!

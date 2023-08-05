---
id: MichelsonInterferometer
title: openUC2 Michelson Interferometer
---

## Workshop Manual: Building a Michelson Interferometer using UC2

In this workshop, we will construct a Michelson Interferometer using the UC2 modular microscope toolbox. The Michelson Interferometer is a device that measures the interference properties of light. We will treat light as a wave, with a very high frequency, and use it to perform interesting experiments.

### Materials Needed

1. Green Laser Pointer with a relatively high temporal coherence.
2. Lenses for beam expansion.
3. Beam splitter cube with a partially reflective mirror coating.
4. Two mirrors.
5. Screen or camera sensor (e.g., ESP32 camera module).
6. UC2 Modular Microscope Toolbox (cubes, puzzle pieces, and holders).

### Theory of Operation

A Michelson Interferometer splits a laser beam into two equal parts using a beam splitter. The two beams are then reflected by mirrors and recombined to interfere with each other. When the paths of the two beams are equal, they constructively interfere, resulting in a bright output. However, if one path is shifted by 1/4 of the wavelength, the beams destructively interfere, resulting in a dark output.
Certainly! Let's delve into more theoretical background about interference and how the Michelson Interferometer was historically used to measure the speed of light.

## Theoretical Background: Interference

Interference is a phenomenon that occurs when two or more waves overlap in space and combine their amplitudes. When the waves are in-phase (their crests and troughs align), they constructively interfere, resulting in a larger amplitude. On the other hand, if they are out of phase (their crests and troughs are misaligned), they destructively interfere, resulting in a smaller or zero amplitude. Interference is a fundamental concept in wave physics and plays a crucial role in understanding the behavior of light.

## Michelson Interferometer and Measurement of the Speed of Light

The Michelson Interferometer, invented by Albert A. Michelson in the late 19th century, is a classic optical device that exploits the principles of interference to measure various optical properties, including the speed of light.

In the Michelson Interferometer setup, a light beam is split into two equal parts using a beam splitter. One part is directed towards a stationary mirror (the reference mirror) while the other part is directed towards a movable mirror (the sample mirror). The two beams are then reflected back towards the beam splitter, and they recombine. Depending on the path difference between the two beams, they may interfere constructively or destructively.

By moving the sample mirror, the path difference between the two beams changes. When the path difference corresponds to an integral number of wavelengths (constructive interference), the interference pattern exhibits bright fringes. Conversely, when the path difference corresponds to a half-integral number of wavelengths (destructive interference), the pattern exhibits dark fringes.

The key to measuring the speed of light with the Michelson Interferometer lies in precisely measuring the movement of the sample mirror. As the mirror is displaced, the fringe pattern shifts, and by measuring this shift, we can determine the change in path difference and, consequently, the speed of light.

Michelson used this interferometer in an elegant experiment to measure the speed of light by comparing the time it took for light to travel in two perpendicular directions. This famous experiment was performed in 1879 and yielded a remarkably accurate value for the speed of light.

The Michelson Interferometer remains an essential tool in modern optics and has found applications in diverse fields, including astronomy, spectroscopy, and interferometric microscopy.

Interference is a fundamental concept in wave physics, and the Michelson Interferometer is a classic optical device that exploits this phenomenon to make precise measurements. By understanding the principles of interference and the working of the Michelson Interferometer, we gain valuable insights into the nature of light and its behavior in different optical setups. It stands as a testament to the ingenuity of scientific instruments and continues to play a significant role in advancing our understanding of the physical world.


### Assembly Steps

1. Build the telescope using two lenses with different focal lengths to expand the laser beam.

2. Use the beam splitter cube to split the enlarged beam into two equal beams.

3. Place mirrors at the end of each beam path and adjust their positions.

4. Position the camera or screen at the exit of the interferometer to observe the interference patterns.

5. Cover one mirror path and adjust the other mirror so that the beam on the camera is in the center of the sensor.

6. Repeat step 5 for the other arm to align the reference and sample arms.

7. Remove the covers from both arms, and you should see interference patterns on the camera.

8. Carefully align one of the mirrors to remove the interference patterns by turning the screws slightly.

9. The Michelson Interferometer is now aligned and ready for use.

### Conclusion

Congratulations! You have successfully built a Michelson Interferometer using the UC2 modular microscope toolbox. This device allows you to explore the interference properties of light and perform fascinating experiments. As you move one of the arms, you will observe constructive and destructive interference patterns on the camera, demonstrating the wave-like nature of light. Have fun experimenting with different setups and learning more about the wave-particle duality of light!


![](./IMAGES/Michelson_1.png)
![](./IMAGES/Michelson_2.png)
![](./IMAGES/Michelson_3.png)
![](./IMAGES/Michelson_4.png)
![](./IMAGES/Michelson_5.png)
![](./IMAGES/Michelson_6.png)
![](./IMAGES/Michelson_7.png)

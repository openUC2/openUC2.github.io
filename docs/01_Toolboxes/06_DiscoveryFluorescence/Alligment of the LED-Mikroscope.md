id: LED_Fluorescence_Microscope_Alignment
title: Collimation of an LED Light Source + Parameters for each setup

# Collimation of an LED Light Source

Collimating an LED source is more complex than collimating a laser beam. With a laser, the principle is straightforward: after the collimating optic, the beam diameter should remain constant regardless of the distance at which it is measured. This is achieved by placing the collimating lens at a distance equal to its focal length from the laser output, so that rays emerging from the focal point are rendered collimated (i.e., parallel to the optical axis).

In contrast, LEDs emit light over a much wider angular range. Due to this high divergence, collimating an LED does not yield a perfectly parallel beam. Instead, the beam diameter increases with distance, depending on the initial emission angle and the optical setup. Therefore, understanding the geometry and divergence characteristics of the LED is essential when designing the collimation optics.

---

## Recommended Resource

To understand the physical principles and mathematical foundations of collimating highly divergent light sources such as LEDs, we recommend the following video from Thorlabs:

<iframe width="560" height="315" src="https://www.youtube.com/embed/z_n7GKdTt0Q" title="Thorlabs: Collimating LEDs" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

---

## Step 0: Summary of Required Parameters

After watching the video, make sure you have the following parameters ready for your setup:

- \( d \) = diagonal size of the LED emitter
- \( f \) = focal length of the lens
- \( \theta \) = resulting divergence angle of the collimated beam

---

## Step 1: Calculating the Divergence Angle

Use the following formula to approximate the divergence angle of the collimated LED beam:

\[
\theta = 2 \cdot \tan^{-1}\left(\frac{d/2}{f}\right)
\]


---

## Step 2: Calculating the Beam Diameter Difference (ΔD)

To estimate how much the beam spreads over a given distance \( L \), calculate the increase in beam diameter:

\[
\Delta D = 2 \cdot L \cdot \tan\left(\frac{\theta}{2}\right)
\]

This yields:

\[
D_2 = D_1 + \Delta D
\]

Where:
- \( D_1 \) = initial beam diameter directly after the collimation lens
- \( D_2 \) = beam diameter at distance \( L \)
- \( \Delta D \) = change in diameter over length \( L \)

---

## Parameters for your Setup

Below is a summary table for the two optical setups with different collimating lenses used before and after April 2025. Choose the Parameters for your Setup accordingly:

| **Parameter**               | **Aspheric Lens** (orders before April 2025) | **Biconvex Lens** (orders since April 2025) |
|----------------------------|----------------------------------------------|---------------------------------------------|
| LED Emission Angle         | 170°                                         | 170°                                        |
| Diagonal Size of LED       | 2 mm                                         | 2 mm                                        |
| Focal Length               | 30 mm                                        | 50 mm                                       |
| Divergence Angle (θ)       | 3,82°                                        | 2,29°                              |
| Distance \( L \)           | 500 mm                                       | 500 mm                                      |
| Beam Expansion ΔD          | ~33                                          | ~20 mm                                      |

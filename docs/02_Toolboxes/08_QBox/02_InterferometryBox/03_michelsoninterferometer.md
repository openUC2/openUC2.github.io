---
id: MichelsonInterferometer
title: openUC2 Michelson Interferometer
---

# Tutorial: Building a Michelson Interferometer

In this workshop, we will construct a Michelson Interferometer using the UC2 modular microscope toolbox. The Michelson Interferometer is a device that measures the interference properties of light and has been fundamental in advancing our understanding of the nature of light and space-time. We will treat light as a wave with very high frequency and use it to perform fascinating experiments that demonstrate wave optics principles.

![](./IMAGES/UC2_MichelsonInterferomenter.jpg)

### Materials Needed

1. Green Laser Pointer with relatively high temporal coherence
2. Lenses for beam expansion and collimation
3. Beam splitter plate or cube with partially reflective mirror coating
4. Three kinematic mirrors for precise alignment
5. Screen or camera sensor (e.g., ESP32 camera module or HIK camera) with USB cable
6. UC2 Modular Microscope Toolbox (cubes, puzzle pieces, and holders)
7. Base plates for mounting and alignment
8. Pinhole for spatial filtering
9. Screwdriver for fine alignment adjustments (1.5x60)

![](./IMAGES/Michelson_1.png)

### Diagram

![](./IMAGES/image36.png)

*Black and white box diagram showing the Michelson Interferometer layout with components labeled for easier understanding*



### Theory of Operation

A Michelson Interferometer splits a laser beam into two equal parts using a beam splitter. The two beams are then reflected by mirrors and recombined to interfere with each other. When the paths of the two beams are equal, they constructively interfere, resulting in a bright output. However, if one path is shifted by 1/4 of the wavelength, the beams destructively interfere, resulting in a dark output.

The Michelson Interferometer operates as a two-beam interference device where coherent light is divided into reference and sample arms. The beam splitter acts as both a divider and combiner, sending half the light to each arm and then recombining the reflected beams. The interference pattern depends on the optical path difference between the two arms, making it extremely sensitive to small distance changes.

![](./IMAGES/Michelson_2.png)

![](./IMAGES/Michelson_3.png)

### Theoretical Background

**Interference Principles**

Interference is a phenomenon that occurs when two or more waves overlap in space and combine their amplitudes. When waves are in-phase (their crests and troughs align), they constructively interfere, resulting in a larger amplitude. When they are out of phase (their crests and troughs are misaligned), they destructively interfere, resulting in a smaller or zero amplitude. Interference is a fundamental concept in wave physics and plays a crucial role in understanding the behavior of light.

**Wave Superposition and Path Difference**

The key principle behind the Michelson Interferometer is wave superposition. When two coherent light waves with the same frequency but different phases combine, the resulting intensity depends on their phase relationship:
- Constructive interference (bright fringes): Path difference = nλ (where n is an integer)
- Destructive interference (dark fringes): Path difference = (n + 1/2)λ

**Historical Significance - Michelson-Morley Experiment**

The Michelson Interferometer, invented by Albert A. Michelson in the late 19th century, is a classic optical device that exploits the principles of interference to measure various optical properties, including the speed of light. Michelson used this interferometer in the famous Michelson-Morley experiment (1887) to test the existence of the luminiferous aether, leading to fundamental insights that contributed to Einstein's theory of special relativity.

![](./IMAGES/Michelson_4.png)

![](./IMAGES/Michelson_5.png)

![](./IMAGES/Michelson_6.png)

**Speed of Light Measurement**

In the Michelson Interferometer setup, a light beam is split into two equal parts using a beam splitter. One part is directed towards a stationary mirror (the reference mirror) while the other part is directed towards a movable mirror (the sample mirror). The two beams are then reflected back towards the beam splitter, and they recombine. Depending on the path difference between the two beams, they may interfere constructively or destructively.

By moving the sample mirror, the path difference between the two beams changes. When the path difference corresponds to an integral number of wavelengths (constructive interference), the interference pattern exhibits bright fringes. Conversely, when the path difference corresponds to a half-integral number of wavelengths (destructive interference), the pattern exhibits dark fringes.

The key to measuring the speed of light with the Michelson Interferometer lies in precisely measuring the movement of the sample mirror. As the mirror is displaced, the fringe pattern shifts, and by measuring this shift, we can determine the change in path difference and, consequently, the speed of light.

**Modern Applications**

The Michelson Interferometer remains an essential tool in modern optics and has found applications in diverse fields:
- **LIGO (Laser Interferometer Gravitational-Wave Observatory)**: Uses kilometer-scale Michelson interferometers to detect gravitational waves
- **Precision metrology**: Measuring distances with nanometer accuracy
- **Spectroscopy**: Fourier Transform Infrared (FTIR) spectroscopy
- **Surface profiling**: Measuring surface roughness and topography
- **Optical coherence tomography (OCT)**: Medical imaging applications


## Tutorial: Michelson Interferometer

![](./IMAGES/image82.png)

*Image of all the components needed for the Michelson Interferometer setup*

## Step 1: Assemble the Optical Components

This guide will walk you through the assembly step by step. You can follow the process according to the functional modules or refer to the diagram above for orientation.

**⚠️ ATTENTION!**

NEVER LOOK DIRECTLY INTO THE LASER! EYE WILL BE DAMAGED DIRECTLY

NEVER SWITCH ON THE LASER WITHOUT INTENDED USE

BEAM HAS TO GO AWAY FROM ONESELF - ALWAYS!

### 1.1: Build a Four Base Plate Configuration

Build a four base plate as shown. This will be used to connect the laser diode, pinhole, the beamsplitter, and an empty cube. Add the base plates to fix them.

*Note: At this point the laser diode should be turned off the whole time. Don't look at the laser directly. Always use screens to look for the laser light.*

![](./IMAGES/image65.png)
![](./IMAGES/image41.png)

### 1.2: Place the Pinhole

Place the pinhole such that it is as far as possible from the laser diode.

![](./IMAGES/image37.png)

### 1.3: Close the Diaphragm

Close the diaphragm as much as possible to end up with a small hole for spatial filtering.

![](./IMAGES/image102.jpg)

### 1.4: Place the Screen and Align the Laser

Place the screen after the pinhole and turn the laser on. The alignment is most likely off. To align the laser you should use the screwdriver and adjust the laser mount screws so that the beam is centered on the pinhole. Turn the laser off.

![](./IMAGES/image123.jpg)
![](./IMAGES/image108.jpg)
![](./IMAGES/image94.jpg)

### 1.5: Replace the Pinhole with a Kinematic Mirror

Without touching the screws of the laser, remove the pinhole from the group of cubes and add a kinematic mirror instead.

![](./IMAGES/image97.jpg)
![](./IMAGES/image51.jpg)
![](./IMAGES/image23.jpg)

### 1.6: Align the Beam with the Pinhole

Using the top and bottom base plates, place the pinhole after the beamsplitter connecting the pinhole and the kinematic mirror in a straight line. Place the screen after the pinhole, turn the laser on and align the beam to the center of the pinhole as shown. Turn the laser off.

![](./IMAGES/image60.jpg)
![](./IMAGES/image35.jpg)
![](./IMAGES/image73.jpg)

### 1.7: Set the Michelson Interferometer Arms

Remove the pinhole and set other base plates as shown. These are the variable and reference arms of the Michelson interferometer. Place the reference and movable mirrors as shown. Place the pinhole in the detection spot. Fix everything with base plates.

![](./IMAGES/image55.jpg)
![](./IMAGES/image29.jpg)
![](./IMAGES/image16.jpg)

## Step 2: Electronics

### 2.1: Plug in the Electronics as Shown Below

**⚠️ Caution!**
If you need to change any of the cables or their position, always unplug the 12V power cable before doing so. Otherwise, the electronic components might get damaged!

*TODO: Add complete electronic setup image showing every wire connected correctly*

- Connect the laser diode to the Mainboard at designated port
- Connect the camera to your PC via USB
- *TODO: Add specific connection instructions for motorized components if available*

- Plug in the micro-USB at your ESP32 and connect to your PC.
- Plug in the 12V power cable.

### 2.2: Flashing the ESP32 Firmware

1. Before proceeding, ensure your ESP32 board has the latest firmware. You can download and flash the firmware via the official [openUC2 website](https://youseetoo.github.io/), selecting your version (most likely **ESP32-DEV-based UC2 standalone board V3 (beta)**), then click on the `connect` button.

The source code can be found [here](https://github.com/youseetoo/uc2-esp32).

2. Connect the ESP32 to your computer using the micro-USB cable.

3. In your Chrome browser, a dialog will prompt you to select the COM port for your ESP32, which should be shown as `CP2102 USB to UART Bridge Controller`. Once connected, you can install the latest firmware by simply clicking the "Install" button.

4. Wait until the firmware has been successfully flashed.

### 2.3: Connecting to the Web Interface

1. After flashing the firmware, go to the testing section on the same website.

2. Connect to your ESP32 board using the "Connect" button again, ensuring the correct COM port is selected.

3. Once connected, test the system by sending a simple command:

```json
{"task":"/motor_act", "motor": { "steppers": [ { "stepperid": 3, "position": -1000, "speed": 1000, "isabs": 0, "isaccel": 0} ] } }
```

This command will move the Z-axis motor by -1000 steps (1 full rotation) at a speed of 1000 steps per second. Each step corresponds to a movement of 300nm when using microstepping.

**Note:** Ensure that the command string has no line breaks.

### 2.4: Testing in the Web Interface

1. After completing the test, go back to the first tab to control the other components via buttons:
   - `Laser 1(on)` and `Laser 1(off)` control the laser diode.
   - `Motor Z(+)` and `Motor Z(-)` control the Z-stage.
   - `Motor X(+)/Y(+)/A(+)` and `Motor X(-)/Y(-)/A(-)` control the XYZ-stage.

### 2.5: Setup and Use the Camera Software

1. Connect the camera via cable to your PC.

2. For the installation process and usage of the software, follow these instructions: [Install MVS App for Camera Utilization](https://openuc2.github.io/docs/Electronics/HIKCamera/SoftwareTutorial)

## Step 3: Aligning the Michelson Interferometer

### 3.1: Align and Observe the Interference

Place the screen after the pinhole, turn the laser on. You will see two beam spots, one from each mirror. Adjust the movable mirror angles with the screwdriver so that you can see an improvement in brightness of one of the spots and look for the maximum.

![](./IMAGES/image118.jpg)
![](./IMAGES/image67.jpg)
![](./IMAGES/image47.jpg)
![](./IMAGES/image115.jpg)

### 3.2: Adjust the Reference Mirror

Adjust the screws of the reference mirror so that the two beams overlap as much as possible.

![](./IMAGES/image91.jpg)
![](./IMAGES/image88.jpg)

### 3.3: Observe the Interference Pattern

Remove the pinhole and place the screen only. You will see two extended beams. Adjust the reference mirror screws to overlap the beams perfectly. You will see the interference pattern emerging. Then try to center the pattern on the screen. Turn the laser off.

![](./IMAGES/image66.jpg)
![](./IMAGES/image43.jpg)
![](./IMAGES/image122.jpg)

### 3.4: Set up the Camera

Place the camera and fix it with the base plates. Connect it to the computer and open the MV Software. To check the MVS tutorial click [here](Camera_Software_tutorial.md).

![](./IMAGES/image106.jpg)
![](./IMAGES/image42.jpg)
![](./IMAGES/image14.jpg)

### 3.5: Adjust the Camera Exposure

Adjust the exposure time of the camera. You should see a fringe pattern. Try to adjust the reference mirror screws finely to bring the center of the interference pattern to the center of the camera.

![](./IMAGES/image113.png)
![](./IMAGES/image80.png)

## Step 4: Install ImSwitch (optional)

#### 1. Installation process

For this, please refer to the installation instructions [here](https://openuc2.github.io/docs/ImSwitch/Quickstart).

On top of this, you can use the following `ImSwitchClient` template to remote control your microscopy using google colab or jupyter notebook. This gives some hints on the use of the API:

<a target="_blank" href="https://colab.research.google.com/drive/1W3Jcw4gFn0jtQXa3_2aCtJYJglMNGkXr?usp=sharing">
  <img src="https://colab.research.google.com/assets/colab-badge.svg" alt="Open In Colab"/>
</a>

This makes use of the default URL hosted publicly on https://imswitch.openuc2.com/imswitch/index.html, but you can change this to the `PORT` (i.e. 8001) and `URL` (e.g. the Raspberry Pi's IP address that runs ImSwitch in docker and is in the same network as your computer).

**Your Setup is complete, now let's start the Experiments**

---
---

## Experiment 1: Basic Interference Pattern Observation

### 1.1: Observe Static Interference

Turn on the laser and observe the interference pattern on the screen or camera. Document the circular fringe pattern (Newton's rings) that results from the interference of two slightly divergent beams.

![](./IMAGES/IMG_20230812_144849.jpg)

*Fully assembled UC2 interferometer with green laser diode, camera, beamsplitter, kinematic mirror and translatable mirror*

### 1.2: Record the Pattern

Using the camera, capture images of the interference pattern. Note the bright and dark fringes and their spacing.

![](./IMAGES/IMG_20230812_144127.jpg)

*Newton rings interference pattern showing circular fringes from two overlapping spherical wavefronts*

## Experiment 2: Path Difference Measurement

### 2.1: Translate the Mirror

Carefully move the variable mirror using the fine adjustment screws. Observe how the fringe pattern changes as you alter the path difference.

### 2.2: Count Fringe Shifts

Count the number of bright fringes that pass a fixed point as you move the mirror. Each fringe corresponds to a path difference change of one wavelength (λ ≈ 532 nm for green light).

![](./IMAGES/IMG_20230812_144857.jpg)

*Quantitative measurement using ESP32 camera to track beam motion and measure distances*

### 2.3: Calculate Distance Moved

Use the relationship: Distance moved = (Number of fringes × λ) / 2
The factor of 2 accounts for the double pass through the moving arm.

## Experiment 3: Coherence Length Measurement

### 3.1: Find Visibility Limits

Gradually increase the path difference between the two arms until the fringe visibility decreases significantly.

### 3.2: Measure Coherence Length

The coherence length is approximately equal to the path difference at which the fringe visibility drops to 1/e of its maximum value.

### 3.3: Calculate Spectral Width

Use the relationship: Coherence length = λ²/Δλ to estimate the spectral width of your laser.

*TODO: Add specific data collection procedures and analysis methods*

*TODO: Add troubleshooting section for common alignment issues*

*TODO: Add assessment questions to test student understanding*

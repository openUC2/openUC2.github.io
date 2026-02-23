# ImSwitchClient Documentation

## Introduction

`ImSwitchClient` is a Python wrapper designed for interacting with the ImSwitch REST API, enabling remote control over ImSwitch functionalities, such as stage positioning, laser control, and image acquisition. This client simplifies API interactions and allows seamless integration into Python scripts and Jupyter Notebooks.

[![PyPI Version](https://img.shields.io/pypi/v/imswitchclient.svg)](https://pypi.python.org/pypi/imswitchclient)



## Try on GOOGLE COLAB:

Hit this link and test: 

<a target="_blank" href="https://colab.research.google.com/drive/1W3Jcw4gFn0jtQXa3_2aCtJYJglMNGkXr?usp=sharing">
  <img src="https://colab.research.google.com/assets/colab-badge.svg" alt="Open In Colab"/>
</a>


<a target="_blank" href="https://colab.research.google.com/github/openUC2/imswitchclient/blob/main/examples/StageCalibration.ipynb">
  <img src="https://colab.research.google.com/assets/colab-badge.svg" alt="Open In Colab"/>
</a>

## Features

- **Remote Control**: Interface with ImSwitch through REST API endpoints.
- **Comprehensive API Access**: Easily control positioners, lasers, detectors, and imaging settings.
- **Interactive API Exploration**: Utilize the FastAPI Swagger UI at `http://localhost:8000/docs`.
- **Modular Design**: Includes managers for lasers, positioners, image acquisition, and more.
- **Open Source**: Inspired by OpenFlexure Client, freely available under the MIT license.

## Installation

You can install `ImSwitchClient` via pip:

```bash
pip install imswitchclient
```

## Getting Started

### Initializing the Client

```python
import imswitchclient.ImSwitchClient as imc

# Initialize the client
client = imc.ImSwitchClient(host="0.0.0.0", isHttps=True, port=8001)
```

### Example: Moving a Stage and Acquiring an Image

```python
import numpy as np
import matplotlib.pyplot as plt
import time

# Retrieve positioner names
positioner_names = client.positionersManager.getAllDeviceNames()
positioner_name = positioner_names[0]

# Get current position
current_positions = client.positionersManager.getPositionerPositions()[positioner_name]
initial_position = (current_positions["X"], current_positions["Y"])

# Turn on illumination
laser_name = client.lasersManager.getLaserNames()[0]
client.lasersManager.setLaserActive(laser_name, True)
client.lasersManager.setLaserValue(laser_name, 512)

# Move the stage and capture an image
def capture_image_at_position(x, y):
    client.positionersManager.movePositioner(positioner_name, "X", x, is_absolute=True, is_blocking=True)
    client.positionersManager.movePositioner(positioner_name, "Y", y, is_absolute=True, is_blocking=True)
    last_frame = client.recordingManager.snapNumpyToFastAPI()
    plt.imshow(last_frame)
    plt.show()

# Example scanning
for ix in range(5):
    for iy in range(5):
        new_x = initial_position[0] + ix * 50
        new_y = initial_position[1] + iy * 50
        capture_image_at_position(new_x, new_y)

# Return stage to initial position
client.positionersManager.movePositioner(positioner_name, "X", initial_position[0], is_absolute=True, is_blocking=True)
client.positionersManager.movePositioner(positioner_name, "Y", initial_position[1], is_absolute=True, is_blocking=True)
```

### Laser Control Example

```python
laser_name = client.lasersManager.getLaserNames()[0]
client.lasersManager.setLaserActive(laser_name, True)
client.lasersManager.setLaserValue(laser_name, 800)

# Verify laser status
print(client.lasersManager.getLaserNames())
client.lasersManager.setLaserActive(laser_name, False)
```

### Recording an Image

```python
# Take a snapshot
image = client.recordingManager.snapNumpyToFastAPI()
plt.imshow(image)
plt.show()
```

### Setting Live View

```python
client.viewManager.setLiveViewActive(True)
client.viewManager.setLiveViewCrosshairVisible(True)
client.viewManager.setLiveViewGridVisible(False)
```

## API Overview

The ImSwitch API provides access to various components:

### Positioners Manager
- `getAllDeviceNames()` - Get all available positioners.
- `getPositionerPositions()` - Get current position.
- `movePositioner(name, axis, value, is_absolute, is_blocking)` - Move the stage.
- `homeAxis(name, axis, is_blocking)` - Home the positioner.

### Lasers Manager
- `getLaserNames()` - Get available lasers.
- `setLaserActive(name, status)` - Turn laser on/off.
- `setLaserValue(name, value)` - Set laser intensity.

### Recording Manager
- `snapNumpyToFastAPI(resizeFactor)` - Capture an image as numpy array.
- `startRecording(save_format)` - Begin recording with optional save format (SaveFormat enum).
- `stopRecording()` - Stop recording.
- `snapImageToPath(file_name)` - Snap image and save to specified path.
- `startVideoStream()` - Start MJPEG video stream.
- `stopVideoStream()` - Stop MJPEG video stream.
- `getVideoFrame()` - Get current frame from video stream.

#### SaveFormat Enum
The recording manager supports multiple save formats:
- `SaveFormat.TIFF` - TIFF format
- `SaveFormat.HDF5` - HDF5 format
- `SaveFormat.ZARR` - ZARR format
- `SaveFormat.MP4` - MP4 video format
- `SaveFormat.PNG` - PNG format
- `SaveFormat.JPG` - JPEG format

### Settings Manager
- `getDetectorNames()` - Get available detector names.
- `setDetectorBinning(detector_name, binning)` - Set detector binning.
- `setDetectorExposureTime(detector_name, exposure_time)` - Set detector exposure time.
- `setDetectorGain(detector_name, gain)` - Set detector gain.
- `setDetectorParameter(detector_name, parameter_name, value)` - Set generic detector parameter.
- `setDetectorROI(detector_name, x, y, w, h)` - Set detector Region of Interest.

### View Manager
- `setLiveViewActive(active)` - Enable/disable live view.
- `setLiveViewCrosshairVisible(visible)` - Show/hide crosshair in live view.
- `setLiveViewGridVisible(visible)` - Show/hide grid in live view.

### LED Matrix Manager
- `setAllLED(state, intensity)` - Set all LEDs with specified state and intensity.
- `setAllLEDOff()` - Turn off all LEDs.
- `setAllLEDOn()` - Turn on all LEDs.
- `setIntensity(intensity)` - Set LED intensity.
- `setLED(led_id, state)` - Set specific LED with ID and state.
- `setSpecial(pattern, intensity, get_return)` - Set special LED pattern.

### Communication Manager
- `acquireImage()` - Acquire an image through communication channel.
- `getImage()` - Get an image from communication channel.

### Experiment Controller
- `forceStopExperiment()` - Force stop current experiment.
- `getExperimentStatus()` - Get current experiment status.
- `getHardwareParameters()` - Get hardware parameters.
- `pauseWorkflow()` - Pause current workflow.
- `resumeExperiment()` - Resume paused experiment.
- `stopExperiment()` - Stop current experiment.
- `startWellplateExperiment(experiment_data)` - Start wellplate experiment.
- `startWellplateExperimentWithScanCoordinates(...)` - Start wellplate experiment with scan coordinates.

### HistoScan Manager
- `stopHistoScan()` - Stop current histo scan.
- `startStageScanningPositionlistbased(positionList, nTimes, tPeriod, illuSource)` - Start stage scanning.
- `startStageMapping()` - Start stage mapping.
- `getStatusScanRunning()` - Get scan running status.

### Objective Controller
- `calibrateObjective(homeDirection, homePolarity)` - Calibrate objective.
- `getCurrentObjective()` - Get current objective.
- `getStatus()` - Get objective status.
- `moveToObjective(slot)` - Move to specific objective slot.
- `setPositions(x1, x2, z1, z2, isBlocking)` - Set objective positions.

## Advanced Examples

### XY Scanning and Image Stitching

```python
import imswitchclient.ImSwitchClient as imc
from imswitchclient.recordingManager import SaveFormat
import numpy as np
import matplotlib.pyplot as plt

# Initialize client
client = imc.ImSwitchClient(host="192.168.1.100", port=8001)

# XY scanning parameters
start_x, start_y = 0, 0  # Starting position in µm
step_size = 100  # Step size in µm
nx, ny = 5, 5  # Number of steps in X and Y

# Get positioner name
positioner_names = client.positionersManager.getAllDeviceNames()
positioner_name = positioner_names[0]

# Setup recording
client.recordingManager.startRecording(SaveFormat.TIFF)

# Perform XY scan
images = []
positions = []

for i in range(nx):
    for j in range(ny):
        # Calculate target position
        target_x = start_x + i * step_size
        target_y = start_y + j * step_size
        
        # Move to position
        client.positionersManager.movePositioner(
            positioner_name, "X", target_x, is_absolute=True, is_blocking=True
        )
        client.positionersManager.movePositioner(
            positioner_name, "Y", target_y, is_absolute=True, is_blocking=True
        )
        
        # Capture image
        image = client.recordingManager.snapNumpyToFastAPI()
        images.append(image)
        positions.append((target_x, target_y))

# Stop recording
client.recordingManager.stopRecording()

# Simple stitching (concatenate images)
stitched_image = np.zeros((nx * image.shape[0], ny * image.shape[1]))
for idx, img in enumerate(images):
    i, j = idx // ny, idx % ny
    start_row, end_row = i * img.shape[0], (i + 1) * img.shape[0]
    start_col, end_col = j * img.shape[1], (j + 1) * img.shape[1]
    stitched_image[start_row:end_row, start_col:end_col] = img

# Display result
plt.figure(figsize=(12, 8))
plt.imshow(stitched_image, cmap='gray')
plt.title('Stitched XY Scan')
plt.axis('off')
plt.show()
```

### Autofocus Example

```python
import imswitchclient.ImSwitchClient as imc
import numpy as np

# Initialize client
client = imc.ImSwitchClient(host="192.168.1.100", port=8001)

def calculate_focus_score(image):
    """Calculate focus score using Laplacian variance"""
    gray = image if len(image.shape) == 2 else np.mean(image, axis=2)
    return np.var(np.gradient(gray))

def autofocus_scan(client, positioner_name, z_min, z_max, z_steps=20):
    """Perform autofocus by scanning Z positions"""
    z_positions = np.linspace(z_min, z_max, z_steps)
    focus_scores = []
    
    for z_pos in z_positions:
        # Move to Z position
        client.positionersManager.movePositioner(
            positioner_name, "Z", z_pos, is_absolute=True, is_blocking=True
        )
        
        # Capture image and calculate focus score
        image = client.recordingManager.snapNumpyToFastAPI()
        score = calculate_focus_score(image)
        focus_scores.append(score)
        
        print(f"Z={z_pos:.2f} µm, Focus Score={score:.2f}")
    
    # Find best focus position
    best_idx = np.argmax(focus_scores)
    best_z = z_positions[best_idx]
    
    # Move to best focus
    client.positionersManager.movePositioner(
        positioner_name, "Z", best_z, is_absolute=True, is_blocking=True
    )
    
    print(f"Best focus at Z={best_z:.2f} µm")
    return best_z, focus_scores

# Usage example
positioner_names = client.positionersManager.getAllDeviceNames()
positioner_name = positioner_names[0]

# Perform autofocus
best_z, scores = autofocus_scan(client, positioner_name, z_min=0, z_max=100, z_steps=20)
```

### Time-lapse Recording with LED Control

```python
import imswitchclient.ImSwitchClient as imc
from imswitchclient.recordingManager import SaveFormat
import time

# Initialize client
client = imc.ImSwitchClient(host="192.168.1.100", port=8001)

# Setup LED illumination
client.ledMatrixManager.setAllLEDOff()
client.ledMatrixManager.setSpecial("brightfield", intensity=128)

# Configure detector settings
detector_names = client.settingsManager.getDetectorNames()
if detector_names:
    detector = detector_names[0]
    client.settingsManager.setDetectorExposureTime(detector, 50.0)
    client.settingsManager.setDetectorGain(detector, 1.0)

# Setup time-lapse parameters
interval_seconds = 60  # 1 minute intervals
total_duration_minutes = 60  # 1 hour total
num_timepoints = total_duration_minutes

# Start recording
client.recordingManager.startRecording(SaveFormat.TIFF)

for timepoint in range(num_timepoints):
    print(f"Capturing timepoint {timepoint + 1}/{num_timepoints}")
    
    # Capture image
    image_path = f"timelapse_t{timepoint:03d}.tiff"
    client.recordingManager.snapImageToPath(image_path)
    
    # Wait for next timepoint (except for the last one)
    if timepoint < num_timepoints - 1:
        time.sleep(interval_seconds)

# Stop recording and turn off LEDs
client.recordingManager.stopRecording()
client.ledMatrixManager.setAllLEDOff()
print("Time-lapse recording completed!")
```

### Multi-Position Experiment

```python
import imswitchclient.ImSwitchClient as imc
from imswitchclient.recordingManager import SaveFormat

# Initialize client
client = imc.ImSwitchClient(host="192.168.1.100", port=8001)

# Define multiple positions of interest
positions = [
    {"name": "sample1", "x": 1000, "y": 2000, "z": 50},
    {"name": "sample2", "x": 3000, "y": 4000, "z": 52},
    {"name": "sample3", "x": 5000, "y": 1000, "z": 48},
]

# Get positioner
positioner_names = client.positionersManager.getAllDeviceNames()
positioner_name = positioner_names[0]

# Start recording session
client.recordingManager.startRecording(SaveFormat.HDF5)

for pos in positions:
    print(f"Moving to position: {pos['name']}")
    
    # Move to position
    client.positionersManager.movePositioner(
        positioner_name, "X", pos["x"], is_absolute=True, is_blocking=True
    )
    client.positionersManager.movePositioner(
        positioner_name, "Y", pos["y"], is_absolute=True, is_blocking=True
    )
    client.positionersManager.movePositioner(
        positioner_name, "Z", pos["z"], is_absolute=True, is_blocking=True
    )
    
    # Capture multiple images with different settings
    for channel in ["brightfield", "fluorescence"]:
        if channel == "brightfield":
            client.ledMatrixManager.setSpecial("brightfield", intensity=100)
        else:
            client.ledMatrixManager.setSpecial("fluorescence", intensity=200)
        
        # Capture image
        image_name = f"{pos['name']}_{channel}.tiff"
        client.recordingManager.snapImageToPath(image_name)

# Clean up
client.recordingManager.stopRecording()
client.ledMatrixManager.setAllLEDOff()
print("Multi-position experiment completed!")
```

## Contributing

Contributions are welcome! Visit the GitHub repository for details: [https://github.com/openUC2/imswitchclient](https://github.com/openUC2/imswitchclient)

## License

This project is licensed under the MIT License.


# ImSwitchClient Documentation

## Introduction

`ImSwitchClient` is a Python wrapper designed for interacting with the ImSwitch REST API, enabling remote control over ImSwitch functionalities, such as stage positioning, laser control, and image acquisition. This client simplifies API interactions and allows seamless integration into Python scripts and Jupyter Notebooks.

[![PyPI Version](https://img.shields.io/pypi/v/imswitchclient.svg)](https://pypi.python.org/pypi/imswitchclient)

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
- `snapNumpyToFastAPI()` - Capture an image.
- `startRecording()` - Begin recording.
- `stopRecording()` - Stop recording.

### View Manager
- `setLiveViewActive(status)` - Enable live view.
- `setLiveViewCrosshairVisible(status)` - Show/hide crosshair.
- `setLiveViewGridVisible(status)` - Show/hide grid.

## Contributing

Contributions are welcome! Visit the GitHub repository for details: [https://github.com/openUC2/imswitchclient](https://github.com/openUC2/imswitchclient)

## License

This project is licensed under the MIT License.


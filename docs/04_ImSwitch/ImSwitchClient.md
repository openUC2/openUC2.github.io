# ImSwitchClient Documentation

`ImSwitchClient` is a Python package designed to connect to the ImSwitch REST API, enabling remote control of ImSwitchUC2 functionalities directly from Jupyter Notebooks. This client facilitates easy integration with the ImSwitch ecosystem, offering programmable access to various features like laser control, stage manipulation, and image acquisition.

[![PyPI Version](https://img.shields.io/pypi/v/imswitchclient.svg)](https://pypi.python.org/pypi/imswitchclient)


<iframe width="560" height="315" src="https://www.youtube.com/embed/WSDORF31O2M?si=hzqvJeZak0D13vFn" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## Features

- **Remote Control**: Interact with ImSwitchUC2 from Jupyter Notebooks via fastapi endpoints.
- **Comprehensive Documentation**: Access detailed documentation and explore API endpoints at [https://imswitchclient.readthedocs.io](https://imswitchclient.readthedocs.io).
- **API Exploration**: Utilize FastAPI's interface at http://localhost:8000/docs for an interactive API experience.
- **Broad Functionality**: Current implementations include laser control, stage manipulation, and image acquisition, with the possibility for future expansion based on user requests.
- **Global API Testing**: Test the client using the globally hosted API at [https://youseetoo.github.io/imswitch/api.html](https://youseetoo.github.io/imswitch/api.html).
- **Open Source**: Inspired by the OpenFlexure Client, `ImSwitchClient` is freely available for modification and distribution under the MIT license.
- **Implemented functions** (so far, please file an issue for feature requests):
  - Laser
  - Stage
  - Image Acquisition
- You can test the client with the globally hosted api here: https://youseetoo.github.io/imswitch/api.html
- It is inspired by the OpenFlexure Client: https://gitlab.com/openflexure/openflexure-microscope-pyclient/-/blob/master/openflexure_microscope_client/microscope_client.py
- The source files can be found here: https://github.com/openUC2/imswitchclient/

## Installation

To install `ImSwitchClient`, use the following pip command:

```bash
pip install imswitchclient
```

## Quick Start Example

This example demonstrates basic usage of `ImSwitchClient` for moving a positioner and acquiring an image.

```python
import imswitchclient.ImSwitchClient as imc
import numpy as np
import matplotlib.pyplot as plt
import time

# Initialize the client
client = imc.ImSwitchClient()

# Retrieve the first positioner's name and current position
positioner_names = client.positionersManager.getAllDeviceNames()
positioner_name = positioner_names[0]
currentPositions = client.positionersManager.getPositionerPositions()[positioner_name]
initialPosition = (currentPositions["X"], currentPositions["Y"])

# Define and move to a new position
newPosition = (initialPosition[0] + 10, initialPosition[1] + 10)
client.positionersManager.movePositioner(positioner_name, "X", newPosition[0], is_absolute=True, is_blocking=True)
client.positionersManager.movePositioner(positioner_name, "Y", newPosition[1], is_absolute=True, is_blocking=True)

# Acquire and display an image
time.sleep(0.5)  # Allow time for the move
lastFrame = client.recordingManager.snapNumpyToFastAPI()
plt.imshow(lastFrame)
plt.show()

# Return the positioner to its initial position
client.positionersManager.movePositioner(positioner_name, "X", initialPosition[0], is_absolute=True, is_blocking=True)
client.positionersManager.movePositioner(positioner_name, "Y", initialPosition[1], is_absolute=True, is_blocking=True)
```

## Contributing

Contributions to `ImSwitchClient` are welcome! Please refer to the project's GitHub repository for contribution guidelines: [https://github.com/openUC2/imswitchclient/](https://github.com/openUC2/imswitchclient/).

## License

`ImSwitchClient` is licensed under the MIT License. For more details, see the LICENSE file in the project repository.

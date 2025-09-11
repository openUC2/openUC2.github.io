# ImSwitch Jupyter Integration with extipy

This document provides comprehensive documentation for integrating Jupyter notebooks with ImSwitch using the `extipy` package. This integration allows you to connect Jupyter Lab/Notebook to a running ImSwitch instance for live hardware control, data analysis, and debugging.

⚠️ **Important Warning**: When using this integration, the ImSwitch application cannot be stopped with ordinary means (Ctrl+C) because the embedded kernel takes control of the main thread. Use this feature carefully in production environments.

## Quick Start

```bash
# 1. Install extipy
pip install git+https://github.com/ebanner/extipy.git

# 2. Start ImSwitch with embedded kernel
python -m imswitch --with-kernel

# 3. In a separate terminal, start Jupyter Lab with extipy provisioner
jupyter lab --KernelProvisionerFactory.default_provisioner_name=extipy-provisioner

# 4. Create a new notebook and connect to the ImSwitch kernel
```

## Installation

### Install extipy

```bash
# From GitHub (recommended)
pip install git+https://github.com/ebanner/extipy.git

# Or from source
git clone https://github.com/ebanner/extipy.git
cd extipy
pip install -e .
```

## Command Line Arguments

ImSwitch supports the following command-line arguments for Jupyter integration:

| Flag | Description | Default |
|------|-------------|---------|
| `--with-kernel` | Start with embedded Jupyter kernel | False |
| `--headless` | Run without GUI | False |
| `--config-file` | Path to setup configuration file | None |
| `--config-folder` | Path to config folder | None |
| `--ext-data-folder` | Path for data storage | None |
| `--http-port` | HTTP server port | 8001 |
| `--socket-port` | WebSocket port | 8002 |
| `--no-ssl` | Disable SSL | False |
| `--scan-ext-drive-mount` | Scan for external USB drives | False |
| `--ext-drive-mount` | External drive mount point | None |

### Example Commands

```bash
# Basic usage with kernel
python -m imswitch --with-kernel

# Headless mode with kernel (recommended for servers)
python -m imswitch --headless --with-kernel

# Full configuration example
python -m imswitch --headless --with-kernel \
    --config-file /path/to/your/config.json \
    --config-folder /path/to/config \
    --ext-data-folder /path/to/data \
    --http-port 8001 \
    --socket-port 8002
```

## Usage Examples

### Accessing Hardware Managers

Once connected to the ImSwitch kernel, you have direct access to all hardware managers:

```python
# Check available variables
print("Available variables:")
for var_name in sorted(dir()):
    if not var_name.startswith('_'):
        print(f"  {var_name}: {type(globals().get(var_name, 'Not found'))}")

# Access the master controller
print("Master Controller:", master)

# List available managers
managers = [attr for attr in dir(master) if attr.endswith('Manager') and not attr.startswith('_')]
print("Available Managers:")
for manager in managers:
    print(f"  {manager}: {getattr(master, manager, 'Not available')}")
```

### Laser Control

```python
# Check available lasers
if 'lasersManager' in globals():
    print("Available lasers:")
    for laser_name in lasersManager.getAllDeviceNames():
        print(f"  - {laser_name}")
        
    # Control first laser
    laser_names = lasersManager.getAllDeviceNames()
    if laser_names:
        first_laser = laser_names[0]
        current_power = lasersManager[first_laser].power
        print(f"Current power: {current_power}")
        
        # Set new power (be careful!)
        # lasersManager[first_laser].setPower(50)
```

### Camera/Detector Control

```python
# Check available detectors
if 'detectorsManager' in globals():
    print("Available detectors:")
    for detector_name in detectorsManager.getAllDeviceNames():
        print(f"  - {detector_name}")
        
    # Capture an image
    detector_names = detectorsManager.getAllDeviceNames()
    if detector_names:
        detector = detectorsManager[detector_names[0]]
        image = detector.getLatestFrame()
        print(f"Image shape: {image.shape if image is not None else 'No image captured'}")
```

### Stage/Positioner Control

```python
# Check available positioners
if 'positionersManager' in globals():
    print("Available positioners:")
    for positioner_name in positionersManager.getAllDeviceNames():
        print(f"  - {positioner_name}")
        
    # Get current position
    positioner_names = positionersManager.getAllDeviceNames()
    if positioner_names:
        positioner = positionersManager[positioner_names[0]]
        current_pos = positioner.position
        print(f"Current position: {current_pos}")
        
        # Move relatively (be careful!)
        # positioner.move(value=10, axis='X', is_absolute=False, is_blocking=True)
```

### Data Analysis and Visualization

```python
import numpy as np
import matplotlib.pyplot as plt

# Capture and analyze an image
if 'detectorsManager' in globals():
    detector_names = detectorsManager.getAllDeviceNames()
    if detector_names:
        detector = detectorsManager[detector_names[0]]
        image = detector.getLatestFrame()
        
        if image is not None:
            # Display image
            plt.figure(figsize=(10, 8))
            plt.imshow(image, cmap='gray')
            plt.title('Latest Frame')
            plt.colorbar()
            plt.show()
            
            # Print statistics
            print(f"Image shape: {image.shape}")
            print(f"Min: {np.min(image)}, Max: {np.max(image)}")
            print(f"Mean: {np.mean(image):.2f}, Std: {np.std(image):.2f}")
```

## Safety and Best Practices

### Safety Considerations

1. **Hardware Safety**: Always be cautious when controlling hardware remotely:
   - Start with low power settings for lasers
   - Make small movements for stages/positioners
   - Monitor equipment during remote operations

2. **Application Control**: Remember that the kernel integration affects application lifecycle:
   - The application cannot be stopped normally with Ctrl+C
   - Plan for proper shutdown procedures
   - Use this feature primarily for development and testing

3. **Network Security**: When running in headless mode:
   - Ensure proper network security
   - Use VPN or secure networks for remote access
   - Consider authentication mechanisms

### Safe Hardware Operation Template

```python
def safe_laser_operation(laser_name, target_power, max_power=100):
    """
    Safely control laser power with checks and limits.
    
    Args:
        laser_name: Name of the laser to control
        target_power: Desired power setting
        max_power: Maximum allowed power for safety
    """
    if 'lasersManager' not in globals():
        print("Error: Lasers manager not available")
        return False
        
    if laser_name not in lasersManager.getAllDeviceNames():
        print(f"Error: Laser '{laser_name}' not found")
        return False
        
    if target_power > max_power:
        print(f"Error: Target power {target_power} exceeds maximum {max_power}")
        return False
        
    try:
        laser = lasersManager[laser_name]
        current_power = laser.power
        print(f"Current power: {current_power}")
        print(f"Setting power to: {target_power}")
        
        # Uncomment to actually set power
        # laser.setPower(target_power)
        # new_power = laser.power
        # print(f"New power: {new_power}")
        
        return True
        
    except Exception as e:
        print(f"Error controlling laser: {e}")
        return False

# Example usage (commented for safety)
# safe_laser_operation('Laser_1', 25, max_power=50)
```

## Troubleshooting

### Common Issues and Solutions

1. **Connection Issues**: If Jupyter Lab cannot connect to the kernel:
   - Ensure ImSwitch is running with `--with-kernel` flag
   - Check that extipy is properly installed
   - Verify that no firewall is blocking the connection

2. **Kernel Not Responding**: If the kernel becomes unresponsive:
   - The ImSwitch application cannot be stopped with Ctrl+C when kernel is active
   - You may need to force-quit the ImSwitch process
   - Restart both ImSwitch and Jupyter Lab

3. **Hardware Manager Not Available**: If managers are not accessible:
   - Check that ImSwitch loaded the hardware configuration correctly
   - Verify that hardware devices are connected and configured
   - Check the ImSwitch logs for initialization errors

### Debugging Commands

```python
# Check ImSwitch module structure
print("Module Main Controllers:")
if 'moduleMainControllers' in globals():
    for name, controller in moduleMainControllers.mapping.items():
        print(f"  {name}: {type(controller)}")

# Check kernel connection info
import json
import glob
import subprocess

try:
    result = subprocess.run(['jupyter', '--runtime-dir'], 
                          capture_output=True, text=True, check=True)
    runtime_dir = result.stdout.strip()
    print(f"Jupyter runtime directory: {runtime_dir}")
    
    # List connection files
    connection_files = glob.glob(f"{runtime_dir}/kernel-*.json")
    print(f"Active kernel connection files:")
    for file in connection_files:
        print(f"  {file}")
        
except Exception as e:
    print(f"Error getting runtime info: {e}")
```

## Technical Details

### How It Works

The integration uses the `extipy` package, which provides a custom Jupyter kernel provisioner that can connect to existing IPython kernels. When ImSwitch starts with the `--with-kernel` flag:

1. ImSwitch creates an embedded IPython kernel in its main process
2. The kernel has access to all ImSwitch managers and controllers
3. extipy's provisioner detects the latest kernel connection file
4. Jupyter Lab/Notebook connects to the existing kernel instead of starting a new one

### Architecture

```
┌─────────────────┐    ┌──────────────────┐    ┌─────────────────┐
│   Jupyter Lab   │◄──►│   extipy         │◄──►│   ImSwitch      │
│   /Notebook     │    │   provisioner    │    │   + IPython     │
│                 │    │                  │    │   kernel        │
└─────────────────┘    └──────────────────┘    └─────────────────┘
```

## Contributing

If you find issues or have suggestions for improvements:

1. Check the existing issues in the ImSwitch repository
2. Create a new issue with detailed description
3. Include relevant error messages and system information
4. Consider submitting a pull request with fixes

## License

This integration follows the same license as ImSwitch (GNU General Public License v3.0).

## Acknowledgments

- [extipy](https://github.com/ebanner/extipy) - The package that makes this integration possible
- [pyxll-jupyter](https://github.com/pyxll/pyxll-jupyter) - Original inspiration for the kernel provisioner approach
- ImSwitch development team - For creating the extensible architecture that enables this integration

# ImSwitch Jupyter Integration with extipy

This notebook provides comprehensive documentation for integrating Jupyter notebooks with ImSwitch using the `extipy` package. This integration allows you to connect Jupyter Lab/Notebook to a running ImSwitch instance for live hardware control, data analysis, and debugging.

⚠️ **Important Warning**: When using this integration, the ImSwitch application cannot be stopped with ordinary means (Ctrl+C) because the embedded kernel takes control of the main thread. Use this feature carefully in production environments.

## 1. Installation and Setup

### Install extipy

First, install the extipy package which enables connection to existing IPython kernels:


```python
# Install extipy from GitHub
!pip install git+https://github.com/ebanner/extipy.git
```

### Alternative Installation (from source)

If you prefer to install from source:


```python
# Clone and install from source
!git clone https://github.com/ebanner/extipy.git
!cd extipy && pip install -e .
```

## 2. Starting ImSwitch with Jupyter Kernel

ImSwitch now supports embedded Jupyter kernel integration through command-line flags. Here are the available options:

### Command Line Flags

```bash
# Start ImSwitch with embedded Jupyter kernel
python -m imswitch --with-kernel

# Start in headless mode with kernel (recommended for server deployments)
python -m imswitch --headless --with-kernel

# Full example with all relevant flags
python -m imswitch --headless --with-kernel \
    --config-file /path/to/your/config.json \
    --config-folder /path/to/config \
    --ext-data-folder /path/to/data \
    --http-port 8001 \
    --socket-port 8002
```

### Available Command Line Arguments

| Flag | Description | Default |
|------|-------------|----------|
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

## 3. Connecting Jupyter Lab to ImSwitch

Once ImSwitch is running with the `--with-kernel` flag, you can connect Jupyter Lab to the embedded kernel:


```python
# Start Jupyter Lab with extipy provisioner
# Run this in a separate terminal
!jupyter lab --KernelProvisionerFactory.default_provisioner_name=extipy-provisioner
```

### Alternative: Jupyter Notebook

You can also use Jupyter Notebook instead of Jupyter Lab:


```python
# Start Jupyter Notebook with extipy provisioner
!jupyter notebook --KernelProvisionerFactory.default_provisioner_name=extipy-provisioner
```

## 4. Accessing ImSwitch Hardware Managers

When connected to the ImSwitch kernel, you have direct access to all hardware managers and controllers:


```python
# Check available variables in the kernel namespace
print("Available variables:")
for var_name in sorted(dir()):
    if not var_name.startswith('_'):
        print(f"  {var_name}: {type(globals().get(var_name, 'Not found'))}")
```


```python
# Access the master controller (main hardware interface)
print("Master Controller:", master)
print("Type:", type(master))

# List available managers
managers = [attr for attr in dir(master) if attr.endswith('Manager') and not attr.startswith('_')]
print("\nAvailable Managers:")
for manager in managers:
    print(f"  {manager}: {getattr(master, manager, 'Not available')}")
```

## 5. Hardware Control Examples

### Laser Control


```python
# Check available lasers
if 'lasersManager' in globals():
    print("Available lasers:")
    for laser_name in lasersManager.getAllDeviceNames():
        print(f"  - {laser_name}")
        
    # Example: Control first laser
    laser_names = lasersManager.getAllDeviceNames()
    if laser_names:
        first_laser = laser_names[0]
        print(f"\nControlling laser: {first_laser}")
        
        # Get current power
        current_power = lasersManager[first_laser].power
        print(f"Current power: {current_power}")
        
        # Set new power (be careful!)
        # lasersManager[first_laser].setPower(50)  # Uncomment to set power to 50
        # print(f"Power set to: {lasersManager[first_laser].power}")
else:
    print("Lasers manager not available")
```

### Camera/Detector Control


```python
# Check available detectors/cameras
if 'detectorsManager' in globals():
    print("Available detectors:")
    for detector_name in detectorsManager.getAllDeviceNames():
        print(f"  - {detector_name}")
        
    # Example: Get detector parameters
    detector_names = detectorsManager.getAllDeviceNames()
    if detector_names:
        first_detector = detector_names[0]
        print(f"\nDetector info: {first_detector}")
        
        detector = detectorsManager[first_detector]
        print(f"Model: {detector.model}")
        print(f"Shape: {detector.shape}")
        
        # Capture an image
        print("Capturing image...")
        image = detector.getLatestFrame()
        print(f"Image shape: {image.shape if image is not None else 'No image captured'}")
else:
    print("Detectors manager not available")
```

### Stage/Positioner Control


```python
# Check available positioners
if 'positionersManager' in globals():
    print("Available positioners:")
    for positioner_name in positionersManager.getAllDeviceNames():
        print(f"  - {positioner_name}")
        
    # Example: Get current position
    positioner_names = positionersManager.getAllDeviceNames()
    if positioner_names:
        first_positioner = positioner_names[0]
        print(f"\nPositioner: {first_positioner}")
        
        positioner = positionersManager[first_positioner]
        current_pos = positioner.position
        print(f"Current position: {current_pos}")
        
        # Move relatively (be careful!)
        # positioner.move(value=10, axis='X', is_absolute=False, is_blocking=True)
        # print(f"New position: {positioner.position}")
else:
    print("Positioners manager not available")
```

## 6. Data Analysis and Visualization

You can perform real-time data analysis and visualization:


```python
import numpy as np
import matplotlib.pyplot as plt

# Example: Capture and analyze an image
if 'detectorsManager' in globals():
    detector_names = detectorsManager.getAllDeviceNames()
    if detector_names:
        detector = detectorsManager[detector_names[0]]
        image = detector.getLatestFrame()
        
        if image is not None:
            # Display image
            plt.figure(figsize=(10, 8))
            plt.subplot(2, 2, 1)
            plt.imshow(image, cmap='gray')
            plt.title('Latest Frame')
            plt.colorbar()
            
            # Histogram
            plt.subplot(2, 2, 2)
            plt.hist(image.flatten(), bins=50, alpha=0.7)
            plt.title('Intensity Histogram')
            plt.xlabel('Intensity')
            plt.ylabel('Count')
            
            # Profile along center row
            plt.subplot(2, 2, 3)
            center_row = image[image.shape[0]//2, :]
            plt.plot(center_row)
            plt.title('Center Row Profile')
            plt.xlabel('Pixel')
            plt.ylabel('Intensity')
            
            # Profile along center column
            plt.subplot(2, 2, 4)
            center_col = image[:, image.shape[1]//2]
            plt.plot(center_col)
            plt.title('Center Column Profile')
            plt.xlabel('Pixel')
            plt.ylabel('Intensity')
            
            plt.tight_layout()
            plt.show()
            
            # Print statistics
            print(f"Image statistics:")
            print(f"  Shape: {image.shape}")
            print(f"  Min: {np.min(image)}")
            print(f"  Max: {np.max(image)}")
            print(f"  Mean: {np.mean(image):.2f}")
            print(f"  Std: {np.std(image):.2f}")
else:
    print("No detector available for analysis")
```

## 7. Advanced: Recording and Automation


```python
# Example: Automated data collection
if 'recordingManager' in globals():
    print("Recording Manager available")
    print(f"Recording status: {recordingManager}")
    
    # Example: Start/stop recording
    # recordingManager.startRecording()  # Uncomment to start recording
    # time.sleep(5)  # Record for 5 seconds
    # recordingManager.stopRecording()  # Uncomment to stop recording
else:
    print("Recording manager not available")
```

## 8. Debugging and Troubleshooting

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


```python
# Debugging: Check ImSwitch module structure
print("Module Main Controllers:")
if 'moduleMainControllers' in globals():
    for name, controller in moduleMainControllers.mapping.items():
        print(f"  {name}: {type(controller)}")
        
        # If it's the imcontrol module, show more details
        if name == 'imcontrol':
            master_ctrl = controller._ImConMainController__masterController
            print(f"    Master Controller: {type(master_ctrl)}")
            
            # List all managers
            for attr_name in dir(master_ctrl):
                if attr_name.endswith('Manager') and not attr_name.startswith('_'):
                    manager = getattr(master_ctrl, attr_name)
                    print(f"    {attr_name}: {type(manager)}")
else:
    print("moduleMainControllers not available")
```


```python
# Debugging: Check kernel connection info
import json
import glob
import subprocess

# Find Jupyter runtime directory
try:
    result = subprocess.run(['jupyter', '--runtime-dir'], 
                          capture_output=True, text=True, check=True)
    runtime_dir = result.stdout.strip()
    print(f"Jupyter runtime directory: {runtime_dir}")
    
    # List connection files
    connection_files = glob.glob(f"{runtime_dir}/kernel-*.json")
    print(f"\nActive kernel connection files:")
    for file in connection_files:
        print(f"  {file}")
        
        # Show connection details for latest file
        if file == max(connection_files, key=lambda x: x):
            with open(file, 'r') as f:
                conn_info = json.load(f)
                print(f"  Connection info: {conn_info}")
                
except Exception as e:
    print(f"Error getting runtime info: {e}")
```

## 9. Best Practices and Safety

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

### Performance Tips

1. **Efficient Data Handling**: For large datasets:
   - Use numpy arrays for image processing
   - Consider data compression for storage
   - Implement proper memory management

2. **Responsive Operations**: To keep the interface responsive:
   - Use non-blocking operations when possible
   - Implement progress indicators for long operations
   - Consider threading for background tasks


```python
# Example: Safe hardware operation template
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

## 10. Summary

The ImSwitch Jupyter integration using extipy provides powerful capabilities for:

- **Real-time Hardware Control**: Direct access to all ImSwitch hardware managers
- **Live Data Analysis**: Process and visualize data as it's acquired
- **Interactive Debugging**: Debug ImSwitch applications in real-time
- **Automation Scripts**: Create complex experimental workflows
- **Remote Operation**: Control equipment from Jupyter notebooks

### Quick Reference Commands

```bash
# 1. Install extipy
pip install git+https://github.com/ebanner/extipy.git

# 2. Start ImSwitch with kernel
python -m imswitch --with-kernel

# 3. Start Jupyter Lab with extipy provisioner
jupyter lab --KernelProvisionerFactory.default_provisioner_name=extipy-provisioner

# 4. Connect to the running ImSwitch kernel and start experimenting!
```

Remember to always prioritize safety when controlling hardware remotely and be aware that the application lifecycle is affected by the kernel integration.

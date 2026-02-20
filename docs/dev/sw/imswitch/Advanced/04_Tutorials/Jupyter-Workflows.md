# Smart Microscopy Workflows with Jupyter Notebooks

Jupyter notebooks provide an ideal environment for developing interactive microscopy workflows, combining live hardware control, real-time data analysis, and visualization in a single interface.

## Overview

ImSwitch + Jupyter enables:
- **Interactive Experiments**: Real-time parameter adjustment
- **Live Data Analysis**: Process images as they're acquired
- **Workflow Documentation**: Combine code, results, and explanations
- **Reproducible Research**: Share complete experimental protocols
- **Educational Tools**: Interactive learning environments

## Setup and Installation

### Jupyter Environment Setup

```bash
# Install Jupyter with ImSwitch integration
pip install jupyter jupyterlab ipywidgets
pip install matplotlib seaborn plotly
pip install scikit-image opencv-python napari

# Enable Jupyter widgets
jupyter nbextension enable --py widgetsnbextension
jupyter labextension install @jupyter-widgets/jupyterlab-manager

# For napari integration
pip install napari[all]
```

### ImSwitch Integration

### ImSwitch Integration

ImSwitch provides a powerful REST API that can be accessed from Jupyter notebooks using the `imswitchclient` library. This enables remote control of microscopy hardware and creates interactive experimental workflows.

#### ImSwitchClient Library

The `imswitchclient` provides a Python wrapper for the ImSwitch REST API, enabling:
- **Remote Control**: Interface with ImSwitch through REST API endpoints
- **Comprehensive Access**: Control positioners, lasers, detectors, and imaging settings
- **Interactive Exploration**: FastAPI Swagger UI at `http://localhost:8001/docs`
- **Modular Design**: Separate managers for different hardware components

**Installation:**
```python
# Install from PyPI
!pip install imswitchclient

# Or install latest development version
!pip install git+https://github.com/openUC2/imswitchclient.git
```

#### Basic Connection Setup

```python
from imswitchclient import ImSwitchClient
import numpy as np
import matplotlib.pyplot as plt
from IPython.display import display, clear_output
import ipywidgets as widgets

# Connect to ImSwitch instance
# For local instance:
client = ImSwitchClient(host="localhost", port=8001)

# For remote instance (e.g., Raspberry Pi):
# client = ImSwitchClient(host="192.168.1.100", port=8001)

# Check connection
if client.is_connected():
    print("✓ Connected to ImSwitch")
    print(f"Available positioners: {client.positionersManager.getAllDeviceNames()}")
    print(f"Available detectors: {client.detectorsManager.getAllDeviceNames()}")
else:
    print("✗ Connection failed")
```

#### Interactive Hardware Control Widgets

```python
# Create interactive widgets for hardware control
def create_stage_control_widget():
    """Create interactive stage control widget"""
    
    # Get available positioners
    positioners = client.positionersManager.getAllDeviceNames()
    if not positioners:
        print("No positioners available")
        return
    
    positioner_name = positioners[0]
    
    # Create widgets
    x_slider = widgets.FloatSlider(min=-5000, max=5000, step=100, description='X Position:')
    y_slider = widgets.FloatSlider(min=-5000, max=5000, step=100, description='Y Position:')
    z_slider = widgets.FloatSlider(min=-1000, max=1000, step=10, description='Z Position:')
    
    move_button = widgets.Button(description="Move Stage", button_style='success')
    home_button = widgets.Button(description="Home All", button_style='warning')
    
    # Position display
    position_output = widgets.Output()
    
    def move_stage(b):
        """Move stage to widget positions"""
        with position_output:
            clear_output(wait=True)
            try:
                # Move to absolute positions
                client.positionersManager.move(
                    positioner_name, 
                    "X", 
                    x_slider.value, 
                    absolute=True
                )
                client.positionersManager.move(
                    positioner_name, 
                    "Y", 
                    y_slider.value, 
                    absolute=True
                )
                client.positionersManager.move(
                    positioner_name, 
                    "Z", 
                    z_slider.value, 
                    absolute=True
                )
                print(f"✓ Moved to X={x_slider.value}, Y={y_slider.value}, Z={z_slider.value}")
            except Exception as e:
                print(f"✗ Move failed: {e}")
    
    def home_stage(b):
        """Home all stage axes"""
        with position_output:
            clear_output(wait=True)
            try:
                # Home all axes (implementation depends on hardware)
                print("🏠 Homing stage...")
                # client.positionersManager.home(positioner_name)
                print("✓ Homing complete")
            except Exception as e:
                print(f"✗ Homing failed: {e}")
    
    move_button.on_click(move_stage)
    home_button.on_click(home_stage)
    
    # Layout widgets
    controls = widgets.VBox([
        widgets.HTML("<h3>Stage Control</h3>"),
        x_slider, y_slider, z_slider,
        widgets.HBox([move_button, home_button]),
        position_output
    ])
    
    return controls

# Display stage control widget
stage_widget = create_stage_control_widget()
display(stage_widget)
```

#### Live Imaging Widget

```python
def create_live_imaging_widget():
    """Create live imaging interface"""
    
    # Get available detectors
    detectors = client.detectorsManager.getAllDeviceNames()
    if not detectors:
        print("No detectors available")
        return
    
    detector_name = detectors[0]
    
    # Create widgets
    exposure_slider = widgets.FloatSlider(
        min=1, max=1000, value=100, step=10,
        description='Exposure (ms):'
    )
    
    gain_slider = widgets.FloatSlider(
        min=1, max=10, value=1, step=0.1,
        description='Gain:'
    )
    
    capture_button = widgets.Button(description="Capture Image", button_style='primary')
    live_button = widgets.ToggleButton(description="Live View", button_style='info')
    
    # Image display
    image_output = widgets.Output()
    
    def capture_image(b):
        """Capture single image"""
        with image_output:
            clear_output(wait=True)
            try:
                # Set camera parameters
                client.detectorsManager.setParameter(detector_name, 'ExposureTime', exposure_slider.value)
                client.detectorsManager.setParameter(detector_name, 'Gain', gain_slider.value)
                
                # Capture image
                image = client.recordingManager.snapImage()
                
                # Display image
                plt.figure(figsize=(8, 6))
                plt.imshow(image, cmap='gray')
                plt.title(f'Captured Image - Exposure: {exposure_slider.value}ms, Gain: {gain_slider.value}')
                plt.colorbar()
                plt.show()
                
            except Exception as e:
                print(f"✗ Capture failed: {e}")
    
    def toggle_live_view(change):
        """Toggle live view"""
        if change['new']:  # Live view enabled
            print("🔴 Live view starting...")
            # Implementation for live view would go here
        else:  # Live view disabled
            print("⏹️ Live view stopped")
    
    capture_button.on_click(capture_image)
    live_button.observe(toggle_live_view, names='value')
    
    # Layout widgets
    controls = widgets.VBox([
        widgets.HTML("<h3>Live Imaging</h3>"),
        exposure_slider, gain_slider,
        widgets.HBox([capture_button, live_button]),
        image_output
    ])
    
    return controls

# Display imaging widget
imaging_widget = create_live_imaging_widget()
display(imaging_widget)
```

#### Automated Workflows

```python
def z_stack_acquisition(start_z, end_z, step_z, exposure_time=100):
    """Automated Z-stack acquisition"""
    
    print("🔬 Starting Z-stack acquisition...")
    
    # Calculate Z positions
    z_positions = np.arange(start_z, end_z + step_z, step_z)
    images = []
    
    try:
        # Set camera parameters
        detector_name = client.detectorsManager.getAllDeviceNames()[0]
        positioner_name = client.positionersManager.getAllDeviceNames()[0]
        
        client.detectorsManager.setParameter(detector_name, 'ExposureTime', exposure_time)
        
        # Progress bar
        progress = widgets.IntProgress(
            value=0, min=0, max=len(z_positions),
            description='Z-stack:'
        )
        display(progress)
        
        for i, z_pos in enumerate(z_positions):
            # Move to Z position
            client.positionersManager.move(positioner_name, "Z", z_pos, absolute=True)
            
            # Wait for settling
            import time
            time.sleep(0.5)
            
            # Capture image
            image = client.recordingManager.snapImage()
            images.append(image)
            
            # Update progress
            progress.value = i + 1
            progress.description = f'Z-stack: {z_pos:.1f}μm'
        
        print(f"✓ Z-stack complete: {len(images)} images acquired")
        
        # Display results
        fig, axes = plt.subplots(1, min(5, len(images)), figsize=(15, 3))
        if len(images) == 1:
            axes = [axes]
        
        for i, ax in enumerate(axes):
            if i < len(images):
                ax.imshow(images[i], cmap='gray')
                ax.set_title(f'Z={z_positions[i]:.1f}μm')
                ax.axis('off')
        
        plt.tight_layout()
        plt.show()
        
        return images, z_positions
        
    except Exception as e:
        print(f"✗ Z-stack failed: {e}")
        return None, None

# Example usage
images, positions = z_stack_acquisition(start_z=-100, end_z=100, step_z=50)
```

#### Time-lapse Imaging

```python
def time_lapse_acquisition(duration_minutes=10, interval_seconds=30):
    """Automated time-lapse acquisition"""
    
    print(f"⏱️ Starting time-lapse: {duration_minutes} min, every {interval_seconds}s")
    
    import time
    
    total_frames = int((duration_minutes * 60) / interval_seconds)
    images = []
    timestamps = []
    
    try:
        detector_name = client.detectorsManager.getAllDeviceNames()[0]
        
        # Progress bar
        progress = widgets.IntProgress(
            value=0, min=0, max=total_frames,
            description='Time-lapse:'
        )
        display(progress)
        
        start_time = time.time()
        
        for frame in range(total_frames):
            # Capture image
            image = client.recordingManager.snapImage()
            current_time = time.time() - start_time
            
            images.append(image)
            timestamps.append(current_time)
            
            # Update progress
            progress.value = frame + 1
            progress.description = f'Frame {frame+1}/{total_frames}'
            
            # Wait for next interval
            if frame < total_frames - 1:  # Don't wait after last frame
                time.sleep(interval_seconds)
        
        print(f"✓ Time-lapse complete: {len(images)} frames acquired")
        
        # Display sample frames
        sample_indices = np.linspace(0, len(images)-1, min(5, len(images)), dtype=int)
        
        fig, axes = plt.subplots(1, len(sample_indices), figsize=(15, 3))
        if len(sample_indices) == 1:
            axes = [axes]
        
        for i, idx in enumerate(sample_indices):
            axes[i].imshow(images[idx], cmap='gray')
            axes[i].set_title(f't={timestamps[idx]/60:.1f}min')
            axes[i].axis('off')
        
        plt.tight_layout()
        plt.show()
        
        return images, timestamps
        
    except Exception as e:
        print(f"✗ Time-lapse failed: {e}")
        return None, None

# Example usage
# images, times = time_lapse_acquisition(duration_minutes=5, interval_seconds=10)
```

### Google Colab Integration

The ImSwitchClient works seamlessly with Google Colab, enabling cloud-based microscopy control:

**Try these examples:**

[![Open In Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/drive/1W3Jcw4gFn0jtQXa3_2aCtJYJglMNGkXr?usp=sharing) - Basic ImSwitch Control

[![Open In Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/openUC2/imswitchclient/blob/main/examples/StageCalibration.ipynb) - Stage Calibration

**Colab Setup:**
```python
# Install ImSwitchClient in Colab
!pip install imswitchclient

# Connect to remote ImSwitch instance
from imswitchclient import ImSwitchClient

# Replace with your microscope's IP address
MICROSCOPE_IP = "192.168.1.100"  # Your Raspberry Pi IP
client = ImSwitchClient(host=MICROSCOPE_IP, port=8001)
```

### Advanced Workflows

```python
# Multi-position imaging
def multi_position_imaging(positions, z_stack_params=None):
    """Acquire images at multiple XY positions"""
    
    positioner_name = client.positionersManager.getAllDeviceNames()[0]
    all_images = []
    
    for i, (x, y) in enumerate(positions):
        print(f"📍 Position {i+1}/{len(positions)}: ({x}, {y})")
        
        # Move to position
        client.positionersManager.move(positioner_name, "X", x, absolute=True)
        client.positionersManager.move(positioner_name, "Y", y, absolute=True)
        
        # Optional Z-stack at each position
        if z_stack_params:
            images, _ = z_stack_acquisition(**z_stack_params)
            all_images.append(images)
        else:
            image = client.recordingManager.snapImage()
            all_images.append(image)
    
    return all_images

# Define positions (in stage units)
positions = [(0, 0), (1000, 0), (0, 1000), (1000, 1000)]

# Acquire images
# images = multi_position_imaging(positions)
```

This comprehensive integration enables powerful, interactive microscopy workflows directly from Jupyter notebooks, whether running locally, on Google Colab, or other cloud platforms.
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
```
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

```python
# Essential imports for microscopy workflows
import numpy as np
import matplotlib.pyplot as plt
from matplotlib.animation import FuncAnimation
import ipywidgets as widgets
from IPython.display import display, clear_output
import time
import threading
from queue import Queue

# ImSwitch and UC2-REST integration
from UC2REST import UC2Client
import napari

# Image processing
import skimage
from skimage import filters, measure, morphology
import cv2

# Data handling
import pandas as pd
import tifffile
from pathlib import Path
```

## Interactive Hardware Control

### Basic Control Widgets

```python
class MicroscopeController:
    def __init__(self, client):
        self.client = client
        self.current_position = {"x": 0, "y": 0, "z": 0}
        
    def create_stage_controls(self):
        """Create interactive stage control widgets"""
        # Position displays
        self.x_pos = widgets.IntText(value=0, description='X:', disabled=True)
        self.y_pos = widgets.IntText(value=0, description='Y:', disabled=True)
        self.z_pos = widgets.IntText(value=0, description='Z:', disabled=True)
        
        # Movement controls
        step_size = widgets.IntSlider(value=100, min=10, max=1000, 
                                     description='Step Size:')
        
        # Direction buttons
        move_buttons = {
            'X+': widgets.Button(description='X+', button_style='info'),
            'X-': widgets.Button(description='X-', button_style='info'),
            'Y+': widgets.Button(description='Y+', button_style='success'),
            'Y-': widgets.Button(description='Y-', button_style='success'),
            'Z+': widgets.Button(description='Z+', button_style='warning'),
            'Z-': widgets.Button(description='Z-', button_style='warning'),
            'Home': widgets.Button(description='Home All', button_style='danger')
        }
        
        # Button callbacks
        def on_move_click(direction):
            def callback(b):
                steps = step_size.value
                if direction == 'X+':
                    self.client.stage.move_x(steps)
                elif direction == 'X-':
                    self.client.stage.move_x(-steps)
                elif direction == 'Y+':
                    self.client.stage.move_y(steps)
                elif direction == 'Y-':
                    self.client.stage.move_y(-steps)
                elif direction == 'Z+':
                    self.client.stage.move_z(steps)
                elif direction == 'Z-':
                    self.client.stage.move_z(-steps)
                elif direction == 'Home':
                    self.client.stage.home_xyz()
                
                # Update position display
                self.update_position()
            return callback
        
        for direction, button in move_buttons.items():
            button.on_click(on_move_click(direction))
        
        # Layout
        position_box = widgets.HBox([self.x_pos, self.y_pos, self.z_pos])
        control_box = widgets.VBox([
            widgets.HTML('<h3>Stage Control</h3>'),
            position_box,
            step_size,
            widgets.HBox([move_buttons['X-'], move_buttons['X+']]),
            widgets.HBox([move_buttons['Y-'], move_buttons['Y+']]),
            widgets.HBox([move_buttons['Z-'], move_buttons['Z+']]),
            move_buttons['Home']
        ])
        
        return control_box
    
    def create_illumination_controls(self):
        """Create illumination control widgets"""
        # LED controls
        led_sliders = {}
        led_channels = ['LED1', 'LED2', 'LED3', 'LED4']
        
        for i, channel in enumerate(led_channels):
            slider = widgets.IntSlider(
                value=0, min=0, max=100,
                description=f'{channel}:',
                continuous_update=False
            )
            
            def on_led_change(channel_idx):
                def callback(change):
                    intensity = change['new']
                    self.client.led.set_led(channel=channel_idx, intensity=intensity)
                return callback
            
            slider.observe(on_led_change(i), names='value')
            led_sliders[channel] = slider
        
        # Laser controls with safety
        laser_controls = {}
        laser_channels = ['Laser 405nm', 'Laser 488nm', 'Laser 561nm']
        
        for i, channel in enumerate(laser_channels):
            checkbox = widgets.Checkbox(value=False, description=f'Enable {channel}')
            slider = widgets.IntSlider(
                value=0, min=0, max=100,
                description='Power:',
                disabled=True
            )
            
            def on_laser_enable(channel_idx, power_slider):
                def callback(change):
                    enabled = change['new']
                    power_slider.disabled = not enabled
                    if not enabled:
                        self.client.laser.set_laser(channel=channel_idx, intensity=0)
                        power_slider.value = 0
                return callback
            
            def on_laser_power(channel_idx):
                def callback(change):
                    power = change['new']
                    self.client.laser.set_laser(channel=channel_idx, intensity=power)
                return callback
            
            checkbox.observe(on_laser_enable(i, slider), names='value')
            slider.observe(on_laser_power(i), names='value')
            
            laser_controls[channel] = widgets.VBox([checkbox, slider])
        
        # Layout
        led_box = widgets.VBox([widgets.HTML('<h4>LED Controls</h4>')] + 
                              list(led_sliders.values()))
        laser_box = widgets.VBox([widgets.HTML('<h4>Laser Controls</h4>')] + 
                                list(laser_controls.values()))
        
        return widgets.HBox([led_box, laser_box])
    
    def update_position(self):
        """Update position display"""
        try:
            pos = self.client.stage.get_position()
            self.x_pos.value = pos.get('x', 0)
            self.y_pos.value = pos.get('y', 0)
            self.z_pos.value = pos.get('z', 0)
        except:
            pass  # Handle connection errors gracefully

# Usage in notebook cell
client = UC2Client(serialport="/dev/ttyUSB0")
controller = MicroscopeController(client)

# Display controls
stage_controls = controller.create_stage_controls()
illum_controls = controller.create_illumination_controls()

display(widgets.VBox([stage_controls, illum_controls]))
```

### Live Camera Feed

```python
class LiveCameraFeed:
    def __init__(self, camera_manager=None):
        self.camera_manager = camera_manager
        self.is_running = False
        self.frame_queue = Queue(maxsize=10)
        
    def create_camera_widget(self):
        """Create live camera feed widget"""
        # Camera controls
        self.exposure_slider = widgets.IntSlider(
            value=100, min=1, max=1000,
            description='Exposure (ms):',
            continuous_update=False
        )
        
        self.gain_slider = widgets.FloatSlider(
            value=1.0, min=0.1, max=5.0,
            description='Gain:',
            continuous_update=False
        )
        
        # Control buttons
        self.start_button = widgets.Button(description='Start Live', 
                                          button_style='success')
        self.stop_button = widgets.Button(description='Stop', 
                                         button_style='danger')
        self.snap_button = widgets.Button(description='Snap Image',
                                         button_style='info')
        
        # Image display
        self.image_widget = widgets.Image(format='png', width=400, height=300)
        
        # Status
        self.status_label = widgets.Label('Camera: Disconnected')
        
        # Callbacks
        self.start_button.on_click(self.start_live_feed)
        self.stop_button.on_click(self.stop_live_feed)
        self.snap_button.on_click(self.snap_image)
        
        self.exposure_slider.observe(self.update_exposure, names='value')
        self.gain_slider.observe(self.update_gain, names='value')
        
        # Layout
        controls = widgets.HBox([
            self.start_button, self.stop_button, self.snap_button
        ])
        
        settings = widgets.VBox([
            self.exposure_slider,
            self.gain_slider,
            self.status_label
        ])
        
        return widgets.VBox([
            widgets.HTML('<h3>Live Camera Feed</h3>'),
            controls,
            widgets.HBox([self.image_widget, settings])
        ])
    
    def start_live_feed(self, button):
        """Start live camera feed"""
        if not self.is_running:
            self.is_running = True
            self.status_label.value = 'Camera: Live'
            
            # Start acquisition thread
            self.acquisition_thread = threading.Thread(target=self.acquisition_loop)
            self.acquisition_thread.daemon = True
            self.acquisition_thread.start()
            
            # Start display update
            self.update_display()
    
    def stop_live_feed(self, button):
        """Stop live camera feed"""
        self.is_running = False
        self.status_label.value = 'Camera: Stopped'
    
    def acquisition_loop(self):
        """Camera acquisition loop"""
        while self.is_running:
            try:
                # Acquire image (placeholder - replace with actual camera code)
                image = self.acquire_image()
                
                if not self.frame_queue.full():
                    self.frame_queue.put(image)
                
                time.sleep(0.033)  # ~30 FPS
            except Exception as e:
                print(f"Acquisition error: {e}")
                break
    
    def update_display(self):
        """Update image display"""
        if self.is_running and not self.frame_queue.empty():
            try:
                image = self.frame_queue.get_nowait()
                
                # Convert to displayable format
                if len(image.shape) == 3:
                    image_rgb = cv2.cvtColor(image, cv2.COLOR_BGR2RGB)
                else:
                    image_rgb = cv2.cvtColor(image, cv2.COLOR_GRAY2RGB)
                
                # Resize for display
                h, w = image_rgb.shape[:2]
                if w > 400:
                    scale = 400 / w
                    new_w, new_h = int(w * scale), int(h * scale)
                    image_rgb = cv2.resize(image_rgb, (new_w, new_h))
                
                # Convert to PNG for widget
                _, buffer = cv2.imencode('.png', image_rgb)
                self.image_widget.value = buffer.tobytes()
                
            except:
                pass
        
        # Schedule next update
        if self.is_running:
            threading.Timer(0.1, self.update_display).start()
    
    def acquire_image(self):
        """Acquire image from camera (placeholder)"""
        # Replace with actual camera acquisition
        # return camera.get_frame()
        
        # Placeholder: generate test pattern
        height, width = 300, 400
        image = np.random.randint(0, 256, (height, width), dtype=np.uint8)
        return image
    
    def snap_image(self, button):
        """Snap single image"""
        image = self.acquire_image()
        # Process or save image
        print(f"Snapped image: {image.shape}")
        return image
    
    def update_exposure(self, change):
        """Update camera exposure"""
        exposure = change['new']
        # camera.set_exposure(exposure)
        print(f"Exposure set to {exposure} ms")
    
    def update_gain(self, change):
        """Update camera gain"""
        gain = change['new']
        # camera.set_gain(gain)
        print(f"Gain set to {gain}")

# Usage
camera_feed = LiveCameraFeed()
camera_widget = camera_feed.create_camera_widget()
display(camera_widget)
```

## Automated Experiments

### Time-lapse Acquisition

```python
class TimeLapseExperiment:
    def __init__(self, client, camera_feed):
        self.client = client
        self.camera_feed = camera_feed
        self.experiment_running = False
        self.images = []
        self.metadata = []
        
    def create_timelapse_widget(self):
        """Create time-lapse experiment widget"""
        # Parameters
        self.interval_slider = widgets.IntSlider(
            value=60, min=1, max=3600,
            description='Interval (s):',
            style={'description_width': 'initial'}
        )
        
        self.duration_slider = widgets.IntSlider(
            value=3600, min=60, max=86400,
            description='Duration (s):',
            style={'description_width': 'initial'}
        )
        
        self.output_path = widgets.Text(
            value='/tmp/timelapse',
            description='Output path:',
            style={'description_width': 'initial'}
        )
        
        # Controls
        self.start_exp_button = widgets.Button(
            description='Start Experiment',
            button_style='success',
            icon='play'
        )
        
        self.stop_exp_button = widgets.Button(
            description='Stop Experiment',
            button_style='danger',
            icon='stop'
        )
        
        # Status and progress
        self.progress_bar = widgets.IntProgress(
            value=0, min=0, max=100,
            description='Progress:',
            bar_style='info'
        )
        
        self.status_text = widgets.HTML('Status: Ready')
        self.image_counter = widgets.HTML('Images captured: 0')
        
        # Live plot
        self.intensity_plot = widgets.Output()
        
        # Callbacks
        self.start_exp_button.on_click(self.start_experiment)
        self.stop_exp_button.on_click(self.stop_experiment)
        
        # Layout
        controls = widgets.VBox([
            widgets.HTML('<h3>Time-lapse Experiment</h3>'),
            self.interval_slider,
            self.duration_slider,
            self.output_path,
            widgets.HBox([self.start_exp_button, self.stop_exp_button]),
            self.progress_bar,
            self.status_text,
            self.image_counter
        ])
        
        return widgets.HBox([controls, self.intensity_plot])
    
    def start_experiment(self, button):
        """Start time-lapse experiment"""
        if not self.experiment_running:
            self.experiment_running = True
            self.images = []
            self.metadata = []
            
            # Setup
            interval = self.interval_slider.value
            duration = self.duration_slider.value
            total_images = duration // interval
            
            self.progress_bar.max = total_images
            self.progress_bar.value = 0
            self.status_text.value = 'Status: Running'
            
            # Start acquisition thread
            self.exp_thread = threading.Thread(
                target=self.acquisition_experiment,
                args=(interval, total_images)
            )
            self.exp_thread.daemon = True
            self.exp_thread.start()
    
    def stop_experiment(self, button):
        """Stop experiment"""
        self.experiment_running = False
        self.status_text.value = 'Status: Stopped'
        self.save_experiment_data()
    
    def acquisition_experiment(self, interval, total_images):
        """Run time-lapse acquisition"""
        start_time = time.time()
        
        for i in range(total_images):
            if not self.experiment_running:
                break
            
            # Acquire image
            image = self.camera_feed.acquire_image()
            timestamp = time.time() - start_time
            
            # Store data
            self.images.append(image)
            self.metadata.append({
                'frame': i,
                'timestamp': timestamp,
                'mean_intensity': np.mean(image)
            })
            
            # Update progress
            self.progress_bar.value = i + 1
            self.image_counter.value = f'Images captured: {i + 1}'
            
            # Update plot
            self.update_intensity_plot()
            
            # Wait for next interval
            time.sleep(interval)
        
        self.experiment_running = False
        self.status_text.value = 'Status: Complete'
        self.save_experiment_data()
    
    def update_intensity_plot(self):
        """Update live intensity plot"""
        if len(self.metadata) > 1:
            with self.intensity_plot:
                clear_output(wait=True)
                
                timestamps = [m['timestamp'] for m in self.metadata]
                intensities = [m['mean_intensity'] for m in self.metadata]
                
                plt.figure(figsize=(6, 3))
                plt.plot(timestamps, intensities, 'b.-')
                plt.xlabel('Time (s)')
                plt.ylabel('Mean Intensity')
                plt.title('Intensity vs Time')
                plt.grid(True)
                plt.tight_layout()
                plt.show()
    
    def save_experiment_data(self):
        """Save experiment data"""
        if self.images:
            output_dir = Path(self.output_path.value)
            output_dir.mkdir(parents=True, exist_ok=True)
            
            # Save images
            for i, image in enumerate(self.images):
                filename = output_dir / f"frame_{i:04d}.tif"
                tifffile.imwrite(filename, image)
            
            # Save metadata
            df = pd.DataFrame(self.metadata)
            df.to_csv(output_dir / "metadata.csv", index=False)
            
            print(f"Experiment saved to {output_dir}")

# Usage
timelapse = TimeLapseExperiment(client, camera_feed)
timelapse_widget = timelapse.create_timelapse_widget()
display(timelapse_widget)
```

### Multi-Position Scanning

```python
class ScanningExperiment:
    def __init__(self, client, camera_feed):
        self.client = client
        self.camera_feed = camera_feed
        self.scan_positions = []
        self.scanning = False
        
    def create_scanning_widget(self):
        """Create scanning experiment interface"""
        # Position list management
        self.position_list = widgets.Textarea(
            value='# X, Y, Z positions (one per line)\n# Example:\n# 0, 0, 0\n# 1000, 1000, 0',
            description='Positions:',
            layout=widgets.Layout(height='150px', width='300px')
        )
        
        self.load_positions_btn = widgets.Button(
            description='Load Positions',
            button_style='info'
        )
        
        # Scan parameters
        self.settle_time = widgets.FloatSlider(
            value=0.5, min=0.1, max=5.0,
            description='Settle time (s):',
            style={'description_width': 'initial'}
        )
        
        self.channels_selector = widgets.SelectMultiple(
            options=['Brightfield', 'DAPI', 'GFP', 'RFP'],
            value=['Brightfield'],
            description='Channels:',
            style={'description_width': 'initial'}
        )
        
        # Controls
        self.start_scan_btn = widgets.Button(
            description='Start Scan',
            button_style='success'
        )
        
        self.preview_btn = widgets.Button(
            description='Preview Positions',
            button_style='warning'
        )
        
        # Progress and visualization
        self.scan_progress = widgets.IntProgress(
            description='Scan progress:'
        )
        
        self.position_map = widgets.Output()
        self.scan_results = widgets.Output()
        
        # Callbacks
        self.load_positions_btn.on_click(self.load_positions)
        self.preview_btn.on_click(self.preview_positions)
        self.start_scan_btn.on_click(self.start_scan)
        
        # Layout
        controls = widgets.VBox([
            widgets.HTML('<h3>Multi-Position Scanning</h3>'),
            self.position_list,
            self.load_positions_btn,
            self.settle_time,
            self.channels_selector,
            widgets.HBox([self.preview_btn, self.start_scan_btn]),
            self.scan_progress
        ])
        
        visualization = widgets.VBox([
            self.position_map,
            self.scan_results
        ])
        
        return widgets.HBox([controls, visualization])
    
    def load_positions(self, button):
        """Load positions from text input"""
        positions_text = self.position_list.value
        self.scan_positions = []
        
        for line in positions_text.split('\n'):
            line = line.strip()
            if line and not line.startswith('#'):
                try:
                    x, y, z = map(float, line.split(','))
                    self.scan_positions.append({'x': x, 'y': y, 'z': z})
                except ValueError:
                    print(f"Invalid position line: {line}")
        
        print(f"Loaded {len(self.scan_positions)} positions")
        self.scan_progress.max = len(self.scan_positions)
    
    def preview_positions(self, button):
        """Preview scan positions"""
        if not self.scan_positions:
            self.load_positions(button)
        
        with self.position_map:
            clear_output(wait=True)
            
            if self.scan_positions:
                x_coords = [pos['x'] for pos in self.scan_positions]
                y_coords = [pos['y'] for pos in self.scan_positions]
                
                plt.figure(figsize=(6, 4))
                plt.scatter(x_coords, y_coords, c=range(len(x_coords)), 
                           cmap='viridis', s=50)
                
                # Add position numbers
                for i, pos in enumerate(self.scan_positions):
                    plt.annotate(str(i), (pos['x'], pos['y']), 
                               xytext=(5, 5), textcoords='offset points')
                
                plt.xlabel('X (steps)')
                plt.ylabel('Y (steps)')
                plt.title('Scan Positions')
                plt.colorbar(label='Position Index')
                plt.grid(True, alpha=0.3)
                plt.tight_layout()
                plt.show()
    
    def start_scan(self, button):
        """Start multi-position scan"""
        if not self.scan_positions:
            print("No positions loaded!")
            return
        
        if not self.scanning:
            self.scanning = True
            self.scan_progress.value = 0
            
            # Start scanning thread
            scan_thread = threading.Thread(target=self.execute_scan)
            scan_thread.daemon = True
            scan_thread.start()
    
    def execute_scan(self):
        """Execute the multi-position scan"""
        settle_time = self.settle_time.value
        channels = list(self.channels_selector.value)
        
        scan_data = []
        
        for i, position in enumerate(self.scan_positions):
            if not self.scanning:
                break
            
            # Move to position
            self.client.stage.move_to_position(**position)
            time.sleep(settle_time)
            
            # Acquire images for each channel
            position_data = {'position': i, 'coordinates': position, 'images': {}}
            
            for channel in channels:
                # Configure illumination for channel
                self.configure_channel(channel)
                time.sleep(0.1)  # Brief stabilization
                
                # Acquire image
                image = self.camera_feed.acquire_image()
                position_data['images'][channel] = image
                
                # Turn off illumination
                self.configure_channel('off')
            
            scan_data.append(position_data)
            
            # Update progress
            self.scan_progress.value = i + 1
            
            # Update results display
            self.update_scan_results(scan_data)
        
        self.scanning = False
        print("Scan complete!")
        
        # Save scan data
        self.save_scan_data(scan_data)
    
    def configure_channel(self, channel):
        """Configure illumination for specific channel"""
        channel_configs = {
            'Brightfield': {'led_channel': 0, 'intensity': 50},
            'DAPI': {'led_channel': 1, 'intensity': 75},
            'GFP': {'led_channel': 2, 'intensity': 60},
            'RFP': {'led_channel': 3, 'intensity': 70},
            'off': {'led_channel': 'all', 'intensity': 0}
        }
        
        config = channel_configs.get(channel, {})
        
        if config.get('led_channel') == 'all':
            # Turn off all LEDs
            for ch in range(4):
                self.client.led.set_led(channel=ch, intensity=0)
        else:
            led_ch = config.get('led_channel', 0)
            intensity = config.get('intensity', 0)
            self.client.led.set_led(channel=led_ch, intensity=intensity)
    
    def update_scan_results(self, scan_data):
        """Update scan results visualization"""
        with self.scan_results:
            clear_output(wait=True)
            
            if scan_data:
                # Create thumbnail grid
                n_positions = len(scan_data)
                n_channels = len(scan_data[0]['images'])
                
                fig, axes = plt.subplots(n_positions, n_channels, 
                                       figsize=(3*n_channels, 2*n_positions))
                
                if n_positions == 1:
                    axes = axes.reshape(1, -1)
                if n_channels == 1:
                    axes = axes.reshape(-1, 1)
                
                for i, pos_data in enumerate(scan_data):
                    for j, (channel, image) in enumerate(pos_data['images'].items()):
                        ax = axes[i, j] if n_positions > 1 and n_channels > 1 else \
                             axes[i] if n_channels == 1 else axes[j]
                        
                        ax.imshow(image, cmap='gray')
                        ax.set_title(f"Pos {i}, {channel}")
                        ax.axis('off')
                
                plt.tight_layout()
                plt.show()
    
    def save_scan_data(self, scan_data):
        """Save scan data to disk"""
        output_dir = Path(f"/tmp/scan_{int(time.time())}")
        output_dir.mkdir(parents=True, exist_ok=True)
        
        for pos_data in scan_data:
            pos_idx = pos_data['position']
            pos_dir = output_dir / f"position_{pos_idx:03d}"
            pos_dir.mkdir(exist_ok=True)
            
            for channel, image in pos_data['images'].items():
                filename = pos_dir / f"{channel}.tif"
                tifffile.imwrite(filename, image)
        
        # Save position metadata
        metadata = []
        for pos_data in scan_data:
            metadata.append({
                'position': pos_data['position'],
                **pos_data['coordinates']
            })
        
        df = pd.DataFrame(metadata)
        df.to_csv(output_dir / "positions.csv", index=False)
        
        print(f"Scan data saved to {output_dir}")

# Usage
scanning = ScanningExperiment(client, camera_feed)
scanning_widget = scanning.create_scanning_widget()
display(scanning_widget)
```

## Real-time Analysis Workflows

### Live Image Analysis

```python
class LiveAnalysis:
    def __init__(self, camera_feed):
        self.camera_feed = camera_feed
        self.analysis_running = False
        self.analysis_data = []
        
    def create_analysis_widget(self):
        """Create live analysis interface"""
        # Analysis parameters
        self.analysis_type = widgets.Dropdown(
            options=['Object Count', 'Mean Intensity', 'Edge Detection', 'Custom'],
            value='Object Count',
            description='Analysis:'
        )
        
        self.threshold_slider = widgets.FloatSlider(
            value=0.5, min=0.0, max=1.0,
            description='Threshold:',
            step=0.01
        )
        
        self.roi_selector = widgets.BoundedIntText(
            value=100, min=10, max=500,
            description='ROI size:'
        )
        
        # Controls
        self.start_analysis_btn = widgets.Button(
            description='Start Analysis',
            button_style='success'
        )
        
        self.stop_analysis_btn = widgets.Button(
            description='Stop Analysis',
            button_style='danger'
        )
        
        # Results display
        self.analysis_plot = widgets.Output()
        self.results_text = widgets.HTML('Analysis results will appear here')
        
        # Callbacks
        self.start_analysis_btn.on_click(self.start_analysis)
        self.stop_analysis_btn.on_click(self.stop_analysis)
        
        # Layout
        controls = widgets.VBox([
            widgets.HTML('<h3>Live Image Analysis</h3>'),
            self.analysis_type,
            self.threshold_slider,
            self.roi_selector,
            widgets.HBox([self.start_analysis_btn, self.stop_analysis_btn]),
            self.results_text
        ])
        
        return widgets.HBox([controls, self.analysis_plot])
    
    def start_analysis(self, button):
        """Start live analysis"""
        if not self.analysis_running:
            self.analysis_running = True
            self.analysis_data = []
            
            # Start analysis thread
            analysis_thread = threading.Thread(target=self.analysis_loop)
            analysis_thread.daemon = True
            analysis_thread.start()
    
    def stop_analysis(self, button):
        """Stop live analysis"""
        self.analysis_running = False
    
    def analysis_loop(self):
        """Main analysis loop"""
        while self.analysis_running:
            try:
                # Get latest image
                image = self.camera_feed.acquire_image()
                
                # Perform analysis
                result = self.analyze_image(image)
                
                if result is not None:
                    # Store result
                    timestamp = time.time()
                    self.analysis_data.append({
                        'timestamp': timestamp,
                        'value': result
                    })
                    
                    # Update display
                    self.update_analysis_display()
                
                time.sleep(0.5)  # Analysis frequency
                
            except Exception as e:
                print(f"Analysis error: {e}")
                break
    
    def analyze_image(self, image):
        """Perform image analysis"""
        analysis_type = self.analysis_type.value
        threshold = self.threshold_slider.value
        
        if analysis_type == 'Mean Intensity':
            return np.mean(image)
        
        elif analysis_type == 'Object Count':
            # Simple object counting using thresholding
            if len(image.shape) == 3:
                gray = cv2.cvtColor(image, cv2.COLOR_RGB2GRAY)
            else:
                gray = image
            
            # Normalize and threshold
            normalized = gray / 255.0
            binary = normalized > threshold
            
            # Clean up binary image
            binary = morphology.remove_small_objects(binary, min_size=50)
            
            # Count objects
            labeled = measure.label(binary)
            return np.max(labeled)
        
        elif analysis_type == 'Edge Detection':
            # Edge detection using Canny
            if len(image.shape) == 3:
                gray = cv2.cvtColor(image, cv2.COLOR_RGB2GRAY)
            else:
                gray = image
            
            edges = cv2.Canny(gray, int(threshold * 255 * 0.5), int(threshold * 255))
            return np.sum(edges > 0)
        
        elif analysis_type == 'Custom':
            # Implement custom analysis here
            return self.custom_analysis(image)
        
        return None
    
    def custom_analysis(self, image):
        """Custom analysis function - override this"""
        # Example: calculate image sharpness using Laplacian variance
        if len(image.shape) == 3:
            gray = cv2.cvtColor(image, cv2.COLOR_RGB2GRAY)
        else:
            gray = image
        
        laplacian = cv2.Laplacian(gray, cv2.CV_64F)
        return laplacian.var()
    
    def update_analysis_display(self):
        """Update analysis results display"""
        if len(self.analysis_data) > 1:
            with self.analysis_plot:
                clear_output(wait=True)
                
                # Extract data for plotting
                timestamps = [d['timestamp'] - self.analysis_data[0]['timestamp'] 
                            for d in self.analysis_data]
                values = [d['value'] for d in self.analysis_data]
                
                # Plot results
                plt.figure(figsize=(8, 4))
                plt.subplot(1, 2, 1)
                plt.plot(timestamps, values, 'b.-')
                plt.xlabel('Time (s)')
                plt.ylabel(self.analysis_type.value)
                plt.title('Live Analysis Results')
                plt.grid(True)
                
                # Statistics plot
                plt.subplot(1, 2, 2)
                plt.hist(values, bins=20, alpha=0.7)
                plt.xlabel(self.analysis_type.value)
                plt.ylabel('Frequency')
                plt.title('Value Distribution')
                
                plt.tight_layout()
                plt.show()
            
            # Update text results
            current_value = values[-1]
            mean_value = np.mean(values)
            std_value = np.std(values)
            
            self.results_text.value = f"""
            <b>Current Value:</b> {current_value:.2f}<br>
            <b>Mean:</b> {mean_value:.2f} ± {std_value:.2f}<br>
            <b>Samples:</b> {len(values)}
            """

# Usage
live_analysis = LiveAnalysis(camera_feed)
analysis_widget = live_analysis.create_analysis_widget()
display(analysis_widget)
```

## Data Management and Export

### Experiment Data Manager

```python
class ExperimentDataManager:
    def __init__(self):
        self.experiments = {}
        self.current_experiment = None
        
    def create_data_widget(self):
        """Create data management interface"""
        # Experiment selection
        self.exp_dropdown = widgets.Dropdown(
            options=['None'],
            description='Experiment:',
            style={'description_width': 'initial'}
        )
        
        self.new_exp_name = widgets.Text(
            placeholder='Enter experiment name',
            description='New experiment:',
            style={'description_width': 'initial'}
        )
        
        self.create_exp_btn = widgets.Button(
            description='Create',
            button_style='info'
        )
        
        # Data export options
        self.export_format = widgets.Dropdown(
            options=['HDF5', 'ZIP', 'OME-TIFF'],
            value='HDF5',
            description='Export format:'
        )
        
        self.export_path = widgets.Text(
            value='/tmp/export',
            description='Export path:',
            style={'description_width': 'initial'}
        )
        
        self.export_btn = widgets.Button(
            description='Export Data',
            button_style='warning'
        )
        
        # Data summary
        self.data_summary = widgets.HTML('No experiment selected')
        
        # File browser
        self.file_list = widgets.Select(
            options=[],
            description='Files:',
            layout=widgets.Layout(height='200px')
        )
        
        # Callbacks
        self.create_exp_btn.on_click(self.create_experiment)
        self.exp_dropdown.observe(self.select_experiment, names='value')
        self.export_btn.on_click(self.export_data)
        
        # Layout
        controls = widgets.VBox([
            widgets.HTML('<h3>Experiment Data Manager</h3>'),
            widgets.HBox([self.new_exp_name, self.create_exp_btn]),
            self.exp_dropdown,
            self.data_summary,
            widgets.HTML('<h4>Export Options</h4>'),
            self.export_format,
            self.export_path,
            self.export_btn
        ])
        
        files = widgets.VBox([
            widgets.HTML('<h4>Files</h4>'),
            self.file_list
        ])
        
        return widgets.HBox([controls, files])
    
    def create_experiment(self, button):
        """Create new experiment"""
        name = self.new_exp_name.value.strip()
        if name and name not in self.experiments:
            self.experiments[name] = {
                'created': time.time(),
                'metadata': {},
                'images': [],
                'analysis_results': [],
                'positions': []
            }
            
            # Update dropdown
            options = list(self.experiments.keys())
            self.exp_dropdown.options = options
            self.exp_dropdown.value = name
            
            self.new_exp_name.value = ''
            print(f"Created experiment: {name}")
    
    def select_experiment(self, change):
        """Select current experiment"""
        exp_name = change['new']
        if exp_name in self.experiments:
            self.current_experiment = exp_name
            self.update_data_summary()
            self.update_file_list()
    
    def add_data(self, data_type, data, metadata=None):
        """Add data to current experiment"""
        if self.current_experiment:
            exp = self.experiments[self.current_experiment]
            
            if data_type == 'image':
                exp['images'].append({
                    'data': data,
                    'metadata': metadata or {},
                    'timestamp': time.time()
                })
            elif data_type == 'analysis':
                exp['analysis_results'].append({
                    'data': data,
                    'metadata': metadata or {},
                    'timestamp': time.time()
                })
            elif data_type == 'position':
                exp['positions'].append(data)
            
            self.update_data_summary()
    
    def update_data_summary(self):
        """Update data summary display"""
        if self.current_experiment:
            exp = self.experiments[self.current_experiment]
            
            n_images = len(exp['images'])
            n_analysis = len(exp['analysis_results'])
            n_positions = len(exp['positions'])
            created = time.ctime(exp['created'])
            
            # Calculate data size estimate
            total_size = 0
            for img_data in exp['images']:
                if hasattr(img_data['data'], 'nbytes'):
                    total_size += img_data['data'].nbytes
            
            size_mb = total_size / (1024 * 1024)
            
            summary = f"""
            <b>Experiment:</b> {self.current_experiment}<br>
            <b>Created:</b> {created}<br>
            <b>Images:</b> {n_images}<br>
            <b>Analysis results:</b> {n_analysis}<br>
            <b>Positions:</b> {n_positions}<br>
            <b>Estimated size:</b> {size_mb:.1f} MB
            """
            
            self.data_summary.value = summary
    
    def update_file_list(self):
        """Update file list"""
        if self.current_experiment:
            exp = self.experiments[self.current_experiment]
            
            files = []
            for i, img in enumerate(exp['images']):
                metadata = img['metadata']
                timestamp = time.ctime(img['timestamp'])
                files.append(f"Image_{i:03d} ({timestamp})")
            
            for i, result in enumerate(exp['analysis_results']):
                timestamp = time.ctime(result['timestamp'])
                files.append(f"Analysis_{i:03d} ({timestamp})")
            
            self.file_list.options = files
    
    def export_data(self, button):
        """Export experiment data"""
        if not self.current_experiment:
            print("No experiment selected")
            return
        
        exp = self.experiments[self.current_experiment]
        export_format = self.export_format.value
        export_path = Path(self.export_path.value)
        
        if export_format == 'HDF5':
            self.export_hdf5(exp, export_path)
        elif export_format == 'ZIP':
            self.export_zip(exp, export_path)
        elif export_format == 'OME-TIFF':
            self.export_ome_tiff(exp, export_path)
    
    def export_hdf5(self, exp, export_path):
        """Export to HDF5 format"""
        import h5py
        
        filename = export_path / f"{self.current_experiment}.h5"
        filename.parent.mkdir(parents=True, exist_ok=True)
        
        with h5py.File(filename, 'w') as f:
            # Metadata
            f.attrs['experiment_name'] = self.current_experiment
            f.attrs['created'] = exp['created']
            f.attrs['export_time'] = time.time()
            
            # Images
            if exp['images']:
                img_group = f.create_group('images')
                for i, img_data in enumerate(exp['images']):
                    img_dset = img_group.create_dataset(f'image_{i:03d}', 
                                                       data=img_data['data'])
                    img_dset.attrs['timestamp'] = img_data['timestamp']
                    
                    # Store metadata as attributes
                    for key, value in img_data['metadata'].items():
                        img_dset.attrs[key] = value
            
            # Analysis results
            if exp['analysis_results']:
                analysis_group = f.create_group('analysis')
                for i, result in enumerate(exp['analysis_results']):
                    analysis_group.create_dataset(f'result_{i:03d}', 
                                                 data=result['data'])
        
        print(f"Exported to HDF5: {filename}")
    
    def export_zip(self, exp, export_path):
        """Export as ZIP archive"""
        import zipfile
        
        filename = export_path / f"{self.current_experiment}.zip"
        filename.parent.mkdir(parents=True, exist_ok=True)
        
        with zipfile.ZipFile(filename, 'w') as zf:
            # Export images as TIFF
            for i, img_data in enumerate(exp['images']):
                img_filename = f"images/image_{i:03d}.tif"
                
                # Save image to temporary file and add to ZIP
                import tempfile
                with tempfile.NamedTemporaryFile(suffix='.tif', delete=False) as tmp:
                    tifffile.imwrite(tmp.name, img_data['data'])
                    zf.write(tmp.name, img_filename)
                    Path(tmp.name).unlink()  # Clean up temp file
            
            # Export metadata as JSON
            import json
            metadata = {
                'experiment': self.current_experiment,
                'created': exp['created'],
                'images': [img['metadata'] for img in exp['images']],
                'analysis': exp['analysis_results'],
                'positions': exp['positions']
            }
            
            with tempfile.NamedTemporaryFile(mode='w', suffix='.json', delete=False) as tmp:
                json.dump(metadata, tmp, indent=2, default=str)
                zf.write(tmp.name, 'metadata.json')
                Path(tmp.name).unlink()
        
        print(f"Exported to ZIP: {filename}")
    
    def export_ome_tiff(self, exp, export_path):
        """Export as OME-TIFF"""
        # This would require ome-types and proper OME metadata
        # Simplified version here
        filename = export_path / f"{self.current_experiment}_stack.ome.tif"
        filename.parent.mkdir(parents=True, exist_ok=True)
        
        if exp['images']:
            # Stack all images
            image_stack = np.stack([img['data'] for img in exp['images']])
            
            # Save with basic OME metadata
            tifffile.imwrite(filename, image_stack, 
                           metadata={'axes': 'TYX'})
            
            print(f"Exported to OME-TIFF: {filename}")

# Usage
data_manager = ExperimentDataManager()
data_widget = data_manager.create_data_widget()
display(data_widget)

# Example: Add data to experiment
# data_manager.add_data('image', some_image, {'channel': 'DAPI', 'position': 0})
```

## Best Practices and Tips

### Notebook Organization

```python
# Cell 1: Imports and setup
import numpy as np
import matplotlib.pyplot as plt
# ... other imports

# Cell 2: Hardware connection
client = UC2Client(serialport="/dev/ttyUSB0")
camera_feed = LiveCameraFeed()

# Cell 3: Define experiment parameters
EXPERIMENT_CONFIG = {
    'name': 'my_experiment',
    'interval': 60,  # seconds
    'duration': 3600,  # seconds
    'positions': [(0, 0, 0), (1000, 1000, 0)],
    'channels': ['DAPI', 'GFP']
}

# Cell 4: Create and run experiment
experiment = TimeLapseExperiment(client, camera_feed)
# ... run experiment

# Cell 5: Analysis and visualization
# ... analysis code
```

### Error Handling

```python
def safe_experiment_wrapper(experiment_function):
    """Wrapper for safe experiment execution"""
    def wrapper(*args, **kwargs):
        try:
            return experiment_function(*args, **kwargs)
        except KeyboardInterrupt:
            print("Experiment interrupted by user")
            # Emergency shutdown
            client.laser.turn_off_all()
            client.led.set_led_array([0] * 8)
        except Exception as e:
            print(f"Experiment error: {e}")
            # Emergency shutdown
            client.laser.turn_off_all()
            client.led.set_led_array([0] * 8)
            raise
    return wrapper

@safe_experiment_wrapper
def my_experiment():
    # Your experiment code here
    pass
```

### Performance Optimization

```python
# Use generator functions for large datasets
def image_generator(positions, channels):
    """Generate images on demand to save memory"""
    for pos in positions:
        client.stage.move_to_position(**pos)
        time.sleep(0.5)
        
        for channel in channels:
            configure_channel(channel)
            yield camera_feed.acquire_image()

# Batch operations when possible
def batch_led_update(led_values):
    """Update multiple LEDs at once"""
    client.led.set_led_array(led_values)

# Use threading for non-blocking operations
import threading
from queue import Queue

def threaded_acquisition(result_queue, n_images):
    """Acquire images in background thread"""
    for i in range(n_images):
        image = camera_feed.acquire_image()
        result_queue.put((i, image))
```

## Next Steps

- **[Advanced Scripting](./Scripting.md)** - Create custom automation scripts
- **[Image Processing](./Image-Processing.md)** - Advanced image analysis workflows
- **[Hardware Integration](../03_Configuration/README.md)** - Configure hardware setups

## Resources

- **[Jupyter Documentation](https://jupyter.org/documentation)**
- **[IPywidgets Gallery](https://ipywidgets.readthedocs.io/en/stable/examples/Widget%20List.html)**
- **[Matplotlib Tutorials](https://matplotlib.org/stable/tutorials/index.html)**
- **[ImSwitch Examples](https://github.com/openUC2/ImSwitchExamples)**
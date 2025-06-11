# UC2-REST Getting Started Tutorial

UC2-REST is the Python library that provides a high-level interface for communicating with UC2-ESP32 firmware. This tutorial guides you through installation, setup, and basic usage of UC2-REST.

## Overview

UC2-REST serves as the communication layer between:
- **Python applications** (including ImSwitch)
- **UC2-ESP32 firmware** running on microcontrollers
- **Hardware components** (motors, LEDs, cameras, sensors)

### Key Features

- **Dual Communication**: USB Serial and WiFi/HTTP support
- **Object-Oriented API**: Intuitive Python interface
- **Error Handling**: Robust error detection and recovery
- **Real-time Control**: Low-latency hardware communication
- **ImSwitch Integration**: Native support for ImSwitch workflows

### Architecture

```
Python Application ←→ UC2-REST ←→ [USB/WiFi] ←→ UC2-ESP32 ←→ Hardware
```

## Installation

### Method 1: pip Install (Recommended)

```bash
# Install from PyPI (when available)
pip install UC2-REST

# Or install latest development version
pip install git+https://github.com/openUC2/UC2-REST.git
```

### Method 2: Source Installation

```bash
# Clone repository
git clone https://github.com/openUC2/UC2-REST.git
cd UC2-REST

# Install in development mode
pip install -e .

# Or install requirements and use directly
pip install -r requirements.txt
```

### Verify Installation

```python
# Test import
from UC2REST import UC2Client
print("UC2-REST installed successfully!")

# Check version (if available)
import UC2REST
print(f"Version: {getattr(UC2REST, '__version__', 'development')}")
```

## Quick Start

### Basic Connection

```python
from UC2REST import UC2Client
import time

# USB Serial connection
client = UC2Client(serialport="/dev/ttyUSB0", baudrate=115200)

# Or WiFi connection
# client = UC2Client(host="192.168.1.100", port=31950)

# Check connection
if client.is_connected:
    print("✓ Connected to UC2-ESP32")
else:
    print("✗ Connection failed")
    exit(1)
```

### First Commands

```python
# Get system status
try:
    status = client.state.get_state()
    print(f"System status: {status}")
except Exception as e:
    print(f"Error getting status: {e}")

# Test LED control
try:
    # Turn LED on
    client.led.set_led(channel=1, intensity=100)
    print("LED turned on")
    
    time.sleep(2)
    
    # Turn LED off
    client.led.set_led(channel=1, intensity=0)
    print("LED turned off")
    
except Exception as e:
    print(f"LED control error: {e}")
```

## Hardware Control Modules

### Motor Control

```python
class MotorController:
    def __init__(self, client):
        self.client = client
        
    def basic_movement(self):
        """Basic motor movement examples"""
        # Move X axis
        print("Moving X axis...")
        self.client.stage.move_x(steps=1000)
        time.sleep(2)
        
        # Move Y axis
        print("Moving Y axis...")
        self.client.stage.move_y(steps=1000)
        time.sleep(2)
        
        # Move Z axis (focus)
        print("Moving Z axis...")
        self.client.stage.move_z(steps=500)
        time.sleep(2)
        
    def multi_axis_movement(self):
        """Simultaneous multi-axis movement"""
        print("Moving XYZ simultaneously...")
        self.client.stage.move_xyz(x=500, y=500, z=100)
        time.sleep(3)
        
    def homing_procedure(self):
        """Home all axes"""
        print("Homing all axes...")
        self.client.stage.home_xyz()
        time.sleep(10)  # Wait for homing to complete
        
        # Get position after homing
        position = self.client.stage.get_position()
        print(f"Position after homing: {position}")
        
    def precise_positioning(self):
        """Precise absolute positioning"""
        # Set absolute position (requires homing first)
        target_position = {"x": 2000, "y": 1500, "z": 800}
        print(f"Moving to position: {target_position}")
        
        self.client.stage.set_position(**target_position)
        time.sleep(3)
        
        # Verify position
        actual_position = self.client.stage.get_position()
        print(f"Actual position: {actual_position}")

# Usage
motor_controller = MotorController(client)
motor_controller.basic_movement()
```

### LED and Laser Control

```python
class IlluminationController:
    def __init__(self, client):
        self.client = client
        
    def single_led_control(self):
        """Control individual LEDs"""
        # Test each LED channel
        for channel in range(4):  # Assuming 4 LED channels
            print(f"Testing LED channel {channel}")
            
            # Gradually increase intensity
            for intensity in range(0, 101, 25):
                self.client.led.set_led(channel=channel, intensity=intensity)
                time.sleep(0.5)
            
            # Turn off
            self.client.led.set_led(channel=channel, intensity=0)
            time.sleep(0.5)
    
    def led_array_patterns(self):
        """Control LED arrays/matrices"""
        # Set all LEDs to same intensity
        intensities = [50] * 8  # 8-channel LED array
        self.client.led.set_led_array(intensities)
        time.sleep(2)
        
        # Create pattern
        pattern = [100, 0, 100, 0, 100, 0, 100, 0]
        self.client.led.set_led_array(pattern)
        time.sleep(2)
        
        # Turn all off
        self.client.led.set_led_array([0] * 8)
    
    def laser_control(self):
        """Laser control with safety measures"""
        # Safety check before turning on laser
        print("⚠️  Laser safety check - ensure proper eye protection!")
        input("Press Enter to continue with laser test...")
        
        try:
            # Turn on laser at low power
            self.client.laser.set_laser(channel=1, intensity=10)
            print("Laser on at 10% power")
            time.sleep(1)
            
            # Increase power gradually
            for power in [25, 50]:
                self.client.laser.set_laser(channel=1, intensity=power)
                print(f"Laser power: {power}%")
                time.sleep(1)
            
            # Turn off laser
            self.client.laser.set_laser(channel=1, intensity=0)
            print("Laser turned off")
            
        except Exception as e:
            # Emergency shutdown
            self.client.laser.turn_off_all()
            print(f"Laser error - emergency shutdown: {e}")
    
    def synchronized_illumination(self):
        """Coordinate multiple illumination sources"""
        # Multi-channel fluorescence setup
        channels = {
            "DAPI": {"channel": 1, "intensity": 75},
            "GFP": {"channel": 2, "intensity": 50},
            "RFP": {"channel": 3, "intensity": 60}
        }
        
        for name, config in channels.items():
            print(f"Setting up {name} channel...")
            self.client.led.set_led(
                channel=config["channel"], 
                intensity=config["intensity"]
            )
            time.sleep(0.5)
        
        # Turn all off
        for config in channels.values():
            self.client.led.set_led(channel=config["channel"], intensity=0)

# Usage
illum_controller = IlluminationController(client)
illum_controller.single_led_control()
```

### Sensor Reading

```python
class SensorMonitor:
    def __init__(self, client):
        self.client = client
        
    def read_all_sensors(self):
        """Read all available sensors"""
        try:
            sensor_data = self.client.sensor.get_sensor_data()
            print("Sensor readings:")
            
            for sensor, value in sensor_data.items():
                print(f"  {sensor}: {value}")
                
            return sensor_data
            
        except Exception as e:
            print(f"Sensor reading error: {e}")
            return {}
    
    def monitor_environment(self, duration=60, interval=5):
        """Continuous environmental monitoring"""
        print(f"Monitoring environment for {duration} seconds...")
        
        start_time = time.time()
        readings = []
        
        while time.time() - start_time < duration:
            # Read sensors
            data = self.read_all_sensors()
            data['timestamp'] = time.time()
            readings.append(data)
            
            # Check for alerts
            if 'temperature' in data:
                temp = data['temperature']
                if temp > 30:  # Alert threshold
                    print(f"⚠️  High temperature alert: {temp}°C")
            
            time.sleep(interval)
        
        return readings
    
    def calibrate_sensors(self):
        """Sensor calibration procedure"""
        print("Starting sensor calibration...")
        
        # Read baseline values
        baseline = self.read_all_sensors()
        print(f"Baseline readings: {baseline}")
        
        # Apply calibration (implementation specific)
        # This would typically involve known reference values
        
        return baseline

# Usage
sensor_monitor = SensorMonitor(client)
sensor_monitor.read_all_sensors()
```

## Communication Protocols

### Serial Communication

```python
class SerialCommunication:
    def __init__(self, port="/dev/ttyUSB0", baudrate=115200):
        self.client = UC2Client(serialport=port, baudrate=baudrate)
        
    def test_serial_connection(self):
        """Test and troubleshoot serial connection"""
        import serial.tools.list_ports
        
        # List available ports
        ports = serial.tools.list_ports.comports()
        print("Available serial ports:")
        for port in ports:
            print(f"  {port.device}: {port.description}")
        
        # Test connection
        if self.client.is_connected:
            print("✓ Serial connection successful")
            
            # Test communication speed
            start_time = time.time()
            for _ in range(10):
                self.client.state.get_state()
            elapsed = time.time() - start_time
            
            print(f"Communication speed: {10/elapsed:.1f} commands/sec")
            return True
        else:
            print("✗ Serial connection failed")
            return False
    
    def handle_serial_errors(self):
        """Handle common serial communication errors"""
        try:
            response = self.client.state.get_state()
            return response
            
        except serial.SerialTimeoutException:
            print("Serial timeout - check ESP32 and cable")
            
        except serial.SerialException as e:
            print(f"Serial error: {e}")
            print("Try: sudo usermod -a -G dialout $USER")
            
        except Exception as e:
            print(f"Unexpected error: {e}")
            
        return None

# Usage
serial_comm = SerialCommunication("/dev/ttyUSB0")
serial_comm.test_serial_connection()
```

### WiFi Communication

```python
class WiFiCommunication:
    def __init__(self, host="192.168.1.100", port=31950):
        self.client = UC2Client(host=host, port=port)
        
    def test_wifi_connection(self):
        """Test WiFi connection and performance"""
        import requests
        
        # Test basic connectivity
        try:
            response = requests.get(f"http://{self.client.host}:{self.client.port}/state_get", 
                                  timeout=5)
            if response.status_code == 200:
                print("✓ WiFi connection successful")
                
                # Test communication speed
                start_time = time.time()
                for _ in range(10):
                    self.client.state.get_state()
                elapsed = time.time() - start_time
                
                print(f"WiFi communication speed: {10/elapsed:.1f} commands/sec")
                return True
            else:
                print(f"✗ HTTP error: {response.status_code}")
                
        except requests.exceptions.RequestException as e:
            print(f"✗ WiFi connection failed: {e}")
            
        return False
    
    def configure_esp32_wifi(self, ssid, password):
        """Configure WiFi on ESP32"""
        try:
            # Send WiFi configuration
            command = {
                "task": "/wifi_act",
                "ssid": ssid,
                "password": password
            }
            
            response = self.client.send_command(command)
            
            if response.get("return") == 1:
                print("✓ WiFi configuration successful")
                print(f"ESP32 IP: {response.get('ip', 'unknown')}")
                return True
            else:
                print("✗ WiFi configuration failed")
                return False
                
        except Exception as e:
            print(f"WiFi configuration error: {e}")
            return False
    
    def scan_network_devices(self):
        """Scan for UC2-ESP32 devices on network"""
        import socket
        import threading
        
        def check_host(ip):
            try:
                sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
                sock.settimeout(1)
                result = sock.connect_ex((ip, self.client.port))
                sock.close()
                
                if result == 0:
                    print(f"Found UC2 device at {ip}:{self.client.port}")
                    return ip
            except:
                pass
            return None
        
        # Scan local network (192.168.1.x)
        print("Scanning for UC2 devices...")
        base_ip = ".".join(self.client.host.split(".")[:-1])
        
        threads = []
        for i in range(1, 255):
            ip = f"{base_ip}.{i}"
            thread = threading.Thread(target=check_host, args=(ip,))
            threads.append(thread)
            thread.start()
        
        # Wait for all threads
        for thread in threads:
            thread.join()

# Usage
wifi_comm = WiFiCommunication("192.168.1.100")
wifi_comm.test_wifi_connection()
```

## Advanced Usage

### Custom Control Sequences

```python
class AdvancedController:
    def __init__(self, client):
        self.client = client
        
    def automated_scan_sequence(self, scan_params):
        """Automated scanning with coordinated hardware control"""
        # Parameters
        x_range = scan_params.get("x_range", (0, 5000, 500))  # start, end, step
        y_range = scan_params.get("y_range", (0, 5000, 500))
        led_intensity = scan_params.get("led_intensity", 75)
        settle_time = scan_params.get("settle_time", 0.5)
        
        print("Starting automated scan sequence...")
        
        # Setup illumination
        self.client.led.set_led(channel=1, intensity=led_intensity)
        
        scan_positions = []
        
        try:
            # Generate scan positions
            for x in range(*x_range):
                for y in range(*y_range):
                    # Move to position
                    self.client.stage.move_to_position(x=x, y=y)
                    time.sleep(settle_time)
                    
                    # Record position
                    actual_pos = self.client.stage.get_position()
                    scan_positions.append(actual_pos)
                    
                    print(f"Scanned position: X={actual_pos['x']}, Y={actual_pos['y']}")
                    
                    # Optional: trigger camera acquisition here
                    # camera.acquire_image()
                    
        except KeyboardInterrupt:
            print("Scan interrupted by user")
            
        finally:
            # Cleanup
            self.client.led.set_led(channel=1, intensity=0)
            print(f"Scan complete. Visited {len(scan_positions)} positions.")
            
        return scan_positions
    
    def focus_stack_acquisition(self, z_params):
        """Automated focus stacking"""
        z_start = z_params.get("z_start", 0)
        z_end = z_params.get("z_end", 1000)
        z_step = z_params.get("z_step", 50)
        
        focus_positions = []
        
        print("Starting focus stack acquisition...")
        
        for z in range(z_start, z_end + z_step, z_step):
            # Move to Z position
            self.client.stage.set_position(z=z)
            time.sleep(0.5)  # Allow settling
            
            # Verify position
            actual_z = self.client.stage.get_position()["z"]
            focus_positions.append(actual_z)
            
            print(f"Focus position: Z={actual_z}")
            
            # Optional: acquire image at this focus level
            # image = camera.acquire_image()
            # save_image(image, f"focus_z_{actual_z}.tif")
            
        print(f"Focus stack complete. {len(focus_positions)} levels acquired.")
        return focus_positions
    
    def multi_channel_protocol(self, channels):
        """Multi-channel imaging protocol"""
        # Example channels configuration
        # channels = [
        #     {"name": "DAPI", "led_channel": 1, "intensity": 75, "exposure": 100},
        #     {"name": "GFP", "led_channel": 2, "intensity": 50, "exposure": 200},
        #     {"name": "RFP", "led_channel": 3, "intensity": 60, "exposure": 150}
        # ]
        
        for channel_config in channels:
            name = channel_config["name"]
            led_channel = channel_config["led_channel"]
            intensity = channel_config["intensity"]
            
            print(f"Acquiring {name} channel...")
            
            # Set illumination
            self.client.led.set_led(channel=led_channel, intensity=intensity)
            time.sleep(0.1)  # Brief stabilization
            
            # Optional: set camera exposure
            # camera.set_exposure(channel_config["exposure"])
            
            # Acquire image
            # image = camera.acquire_image()
            # save_image(image, f"{name}_channel.tif")
            
            # Turn off illumination
            self.client.led.set_led(channel=led_channel, intensity=0)
            time.sleep(0.1)
            
        print("Multi-channel acquisition complete")

# Usage
advanced_controller = AdvancedController(client)

# Example scan
scan_params = {
    "x_range": (0, 2000, 200),
    "y_range": (0, 2000, 200),
    "led_intensity": 75,
    "settle_time": 0.3
}
positions = advanced_controller.automated_scan_sequence(scan_params)
```

### Error Handling and Recovery

```python
class RobustController:
    def __init__(self, client):
        self.client = client
        self.max_retries = 3
        
    def robust_command(self, command_func, *args, **kwargs):
        """Execute command with retry logic"""
        for attempt in range(self.max_retries):
            try:
                result = command_func(*args, **kwargs)
                return result
                
            except Exception as e:
                print(f"Attempt {attempt + 1} failed: {e}")
                
                if attempt < self.max_retries - 1:
                    print("Retrying...")
                    time.sleep(1)  # Wait before retry
                else:
                    print("Max retries exceeded")
                    raise e
    
    def safe_movement(self, target_position):
        """Safe movement with position verification"""
        # Move to target
        self.robust_command(
            self.client.stage.move_to_position, 
            **target_position
        )
        
        # Verify position
        max_position_checks = 5
        for _ in range(max_position_checks):
            time.sleep(0.5)
            actual_pos = self.client.stage.get_position()
            
            # Check if position is within tolerance
            tolerance = 10  # steps
            position_ok = all(
                abs(actual_pos.get(axis, 0) - target_position.get(axis, 0)) <= tolerance
                for axis in target_position.keys()
            )
            
            if position_ok:
                print("✓ Position verified")
                return True
                
        print("✗ Position verification failed")
        return False
    
    def emergency_stop(self):
        """Emergency stop all hardware"""
        print("🛑 EMERGENCY STOP")
        
        try:
            # Turn off all lasers
            self.client.laser.turn_off_all()
            
            # Turn off all LEDs
            for channel in range(8):  # Assuming max 8 channels
                self.client.led.set_led(channel=channel, intensity=0)
            
            # Stop all motors (if stop command available)
            # self.client.stage.stop_all()
            
            print("✓ Emergency stop completed")
            
        except Exception as e:
            print(f"Emergency stop error: {e}")

# Usage
robust_controller = RobustController(client)
position = {"x": 1000, "y": 1000, "z": 500}
robust_controller.safe_movement(position)
```

## Integration Examples

### ImSwitch Integration

```python
# UC2-REST is automatically integrated with ImSwitch
# Configuration in ImSwitch JSON file:

imswitch_config = {
    "rs232devices": {
        "ESP32": {
            "managerName": "ESP32Manager",
            "managerProperties": {
                "serialport": "/dev/ttyUSB0",
                "host_": "192.168.1.100"  # Optional: for WiFi
            }
        }
    },
    "positioners": {
        "ESP32Stage": {
            "managerName": "ESP32StageManager",
            "managerProperties": {
                "rs232device": "ESP32"
            },
            "axes": ["X", "Y", "Z"],
            "forScanning": True
        }
    }
}
```

### Jupyter Notebook Integration

```python
# Example Jupyter notebook cell
from UC2REST import UC2Client
import matplotlib.pyplot as plt
import numpy as np

# Connect to hardware
client = UC2Client(serialport="/dev/ttyUSB0")

# Interactive control
def move_stage(x=0, y=0, z=0):
    """Interactive stage control for Jupyter"""
    client.stage.move_xyz(x=x, y=y, z=z)
    pos = client.stage.get_position()
    print(f"New position: {pos}")

# Create interactive widgets (requires ipywidgets)
# from ipywidgets import interact
# interact(move_stage, x=(-5000, 5000, 100), y=(-5000, 5000, 100), z=(-1000, 1000, 50))
```

## Performance Tips

### Optimization Strategies

```python
class OptimizedController:
    def __init__(self, client):
        self.client = client
        self.command_cache = {}
        
    def batch_commands(self, commands):
        """Execute multiple commands efficiently"""
        # Group similar commands
        led_commands = []
        motor_commands = []
        
        for cmd in commands:
            if cmd["type"] == "led":
                led_commands.append(cmd)
            elif cmd["type"] == "motor":
                motor_commands.append(cmd)
        
        # Execute in batches
        for led_cmd in led_commands:
            self.client.led.set_led(**led_cmd["params"])
        
        for motor_cmd in motor_commands:
            self.client.stage.move_xyz(**motor_cmd["params"])
    
    def minimize_communication(self):
        """Reduce communication overhead"""
        # Cache status that doesn't change frequently
        if "device_info" not in self.command_cache:
            self.command_cache["device_info"] = self.client.state.get_device_info()
        
        # Use local state tracking when possible
        # Instead of querying position after every move
        self.estimated_position = {"x": 0, "y": 0, "z": 0}
        
    def async_operations(self):
        """Perform operations asynchronously when possible"""
        import threading
        
        def background_monitoring():
            while True:
                sensors = self.client.sensor.get_sensor_data()
                # Process sensor data
                time.sleep(5)
        
        # Start background monitoring
        monitor_thread = threading.Thread(target=background_monitoring, daemon=True)
        monitor_thread.start()
```

## Troubleshooting Guide

### Common Issues and Solutions

```python
def diagnostic_check(client):
    """Comprehensive diagnostic check"""
    print("UC2-REST Diagnostic Check")
    print("=" * 30)
    
    # 1. Connection test
    if client.is_connected:
        print("✓ Connection: OK")
    else:
        print("✗ Connection: FAILED")
        return False
    
    # 2. Communication test
    try:
        status = client.state.get_state()
        print("✓ Communication: OK")
    except Exception as e:
        print(f"✗ Communication: FAILED - {e}")
        return False
    
    # 3. Hardware test
    try:
        # Test LED
        client.led.set_led(channel=1, intensity=50)
        time.sleep(0.5)
        client.led.set_led(channel=1, intensity=0)
        print("✓ LED control: OK")
        
        # Test stage
        original_pos = client.stage.get_position()
        client.stage.move_x(100)
        time.sleep(1)
        client.stage.move_x(-100)
        print("✓ Stage control: OK")
        
    except Exception as e:
        print(f"✗ Hardware control: FAILED - {e}")
        return False
    
    print("✓ All diagnostics passed!")
    return True

# Run diagnostics
if client.is_connected:
    diagnostic_check(client)
```

### Debug Mode

```python
# Enable debug output for troubleshooting
client_debug = UC2Client(serialport="/dev/ttyUSB0", DEBUG=True)

# All commands and responses will be printed
client_debug.stage.move_x(1000)
# Output will show:
# [DEBUG] Sending: {"task": "/motor_act", "motor": 0, "direction": 1, "steps": 1000}
# [DEBUG] Received: {"return": 1, "task": "/motor_act", "motor": 0, "position": 1000}
```

## Next Steps

- **[ImSwitch Configuration](../03_Configuration/README.md)** - Configure ImSwitch to use UC2-REST
- **[UC2-ESP32 Setup](./UC2-ESP-Getting-Started.md)** - Set up the ESP32 firmware
- **[Advanced Workflows](./Scripting.md)** - Create custom automation scripts

## Resources

- **[UC2-REST Repository](https://github.com/openUC2/UC2-REST)**
- **[API Documentation](https://github.com/openUC2/UC2-REST/blob/master/docs/API.md)**
- **[Example Scripts](https://github.com/openUC2/UC2-REST/tree/master/examples)**
- **[Community Forum](https://openuc2.com)**
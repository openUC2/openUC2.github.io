# UC2-REST: Python Interface for UC2-ESP32

UC2-REST is the Python interface library that enables communication between ImSwitch and the UC2-ESP32 firmware. It provides a unified API for controlling UC2 hardware components through both USB serial and WiFi connections.

## Overview

UC2-REST serves as the bridge between:
- **ImSwitch**: High-level microscopy control software
- **UC2-ESP32 Firmware**: Low-level hardware control on ESP32 microcontrollers
- **Hardware**: Motors, LEDs, lasers, sensors, and other UC2 components

### Architecture

```
ImSwitch ←→ UC2-REST ←→ [USB/WiFi] ←→ UC2-ESP32 ←→ Hardware
```

## Key Features

- **Dual Communication**: USB serial and WiFi/HTTP protocols
- **JSON API**: Structured command and response format
- **Modular Design**: Support for different hardware modules
- **Real-time Control**: Low-latency hardware communication
- **Error Handling**: Robust error detection and recovery

## Installation

UC2-REST is automatically included with ImSwitch installations, but can also be installed separately:

```bash
# Install from GitHub
git clone https://github.com/openUC2/UC2-REST
cd UC2-REST
pip install -e .

# Or install specific version
pip install UC2-REST==1.0.0
```

## Quick Start

### Basic Connection

```python
from UC2REST import UC2Client

# USB Serial connection
client = UC2Client(serialport="/dev/ttyUSB0", baudrate=115200)

# WiFi connection
client = UC2Client(host="192.168.1.100", port=31950)

# Check connection
if client.is_connected:
    print("Connected to UC2-ESP32")
else:
    print("Connection failed")
```

### Basic Commands

```python
# Get system status
status = client.state.get_state()
print(f"System status: {status}")

# Control LED
client.led.set_led(channel=1, intensity=100)
client.led.set_led(channel=1, intensity=0)  # Turn off

# Move stage
client.stage.move_x(1000)  # Move 1000 steps in X
client.stage.move_y(-500)  # Move -500 steps in Y
client.stage.home_xyz()    # Home all axes

# Control laser
client.laser.set_laser(channel=1, intensity=50)
client.laser.set_laser(channel=1, intensity=0)  # Turn off
```

## Hardware Modules

### Motor Control

```python
# XYZ Stage control
client.stage.move_x(steps=1000)
client.stage.move_y(steps=1000)
client.stage.move_z(steps=1000)

# Relative positioning
client.stage.move_xyz(x=100, y=200, z=-50)

# Absolute positioning (if homed)
client.stage.set_position(x=1000, y=2000, z=500)

# Homing procedures
client.stage.home_x()
client.stage.home_y()
client.stage.home_z()
client.stage.home_xyz()  # Home all axes

# Get current position
position = client.stage.get_position()
print(f"Current position: X={position['x']}, Y={position['y']}, Z={position['z']}")
```

### LED Array Control

```python
# Single LED control
client.led.set_led(channel=1, intensity=100)

# Multi-channel control
client.led.set_led_array([100, 50, 75, 0])  # Set intensities for channels 0-3

# Pattern display (for LED matrix)
pattern = [[1, 0, 1], [0, 1, 0], [1, 0, 1]]
client.led.set_pattern(pattern)

# Get LED status
status = client.led.get_led_status()
print(f"LED status: {status}")
```

### Laser Control

```python
# Basic laser control
client.laser.set_laser(channel=1, intensity=25)  # 25% intensity
client.laser.set_laser(channel=2, intensity=100) # Full intensity

# Get laser capabilities
info = client.laser.get_laser_info()
print(f"Available lasers: {info}")

# Safety shutdown
client.laser.turn_off_all()
```

### Sensor Reading

```python
# Read environmental sensors
sensors = client.sensor.get_sensor_data()
print(f"Temperature: {sensors.get('temperature', 'N/A')}")
print(f"Humidity: {sensors.get('humidity', 'N/A')}")

# Read specific sensor
temperature = client.sensor.get_temperature()
```

## Advanced Usage

### Configuration Management

```python
# Get current configuration
config = client.config.get_config()

# Update configuration
new_config = {
    "motor": {
        "steps_per_mm_x": 3200,
        "steps_per_mm_y": 3200,
        "steps_per_mm_z": 3200
    }
}
client.config.set_config(new_config)

# Save configuration to flash
client.config.save_config()
```

### Custom Commands

```python
# Send raw JSON command
command = {
    "task": "/motor_act",
    "motor": 0,
    "direction": 1,
    "steps": 1000
}
response = client.send_command(command)

# Handle response
if response.get("return") == 1:
    print("Command executed successfully")
else:
    print(f"Command failed: {response}")
```

### Error Handling

```python
try:
    client.stage.move_x(1000)
except UC2RESTError as e:
    print(f"UC2-REST error: {e}")
except SerialException as e:
    print(f"Serial communication error: {e}")
except Exception as e:
    print(f"Unexpected error: {e}")
```

## Integration with ImSwitch

### Configuration in ImSwitch

```json
{
  "rs232devices": {
    "ESP32": {
      "managerName": "ESP32Manager",
      "managerProperties": {
        "host_": "192.168.1.100",
        "serialport": "/dev/ttyUSB0"
      }
    }
  },
  "positioners": {
    "ESP32Stage": {
      "managerName": "ESP32StageManager",
      "managerProperties": {
        "rs232device": "ESP32",
        "stepsizeX": -0.3125,
        "stepsizeY": -0.3125,
        "stepsizeZ": 0.3125
      },
      "axes": ["X", "Y", "Z"],
      "forScanning": true
    }
  }
}
```

### Custom Device Managers

```python
from UC2REST import UC2Client
from imswitch.imcontrol.model.interfaces import DeviceManager

class CustomUC2Manager(DeviceManager):
    def __init__(self, deviceInfo, name, **kwargs):
        super().__init__(deviceInfo, name, **kwargs)
        
        # Initialize UC2-REST client
        self.client = UC2Client(
            serialport=deviceInfo.managerProperties.get('serialport'),
            host=deviceInfo.managerProperties.get('host')
        )
    
    def move_stage(self, x, y, z):
        """Custom stage movement with UC2-REST"""
        self.client.stage.move_xyz(x=x, y=y, z=z)
```

## Communication Protocols

### USB Serial Protocol

```python
# Configure serial parameters
client = UC2Client(
    serialport="/dev/ttyUSB0",
    baudrate=115200,
    timeout=1.0
)

# JSON message format
message = {
    "task": "/led_act",
    "led": {"channel": 1, "intensity": 100}
}
```

### WiFi/HTTP Protocol

```python
# Configure WiFi parameters
client = UC2Client(
    host="192.168.1.100",
    port=31950,
    timeout=5.0
)

# HTTP endpoints
# GET: http://192.168.1.100:31950/state_get
# POST: http://192.168.1.100:31950/led_act
```

## Troubleshooting

### Connection Issues

```python
# Check serial ports
import serial.tools.list_ports
ports = serial.tools.list_ports.comports()
for port in ports:
    print(f"Port: {port.device}, Description: {port.description}")

# Test connection
try:
    client = UC2Client(serialport="/dev/ttyUSB0")
    if client.is_connected:
        print("Connection successful")
    else:
        print("Connection failed")
except Exception as e:
    print(f"Connection error: {e}")
```

### WiFi Network Issues

```python
# Test network connectivity
import requests

try:
    response = requests.get("http://192.168.1.100:31950/state_get", timeout=5)
    print(f"Response: {response.status_code}")
except requests.exceptions.RequestException as e:
    print(f"Network error: {e}")
```

### Command Debugging

```python
# Enable debug output
client = UC2Client(serialport="/dev/ttyUSB0", DEBUG=True)

# All commands and responses will be printed to console
client.stage.move_x(1000)
```

### Common Error Solutions

**Serial port permission denied:**
```bash
# Add user to dialout group
sudo usermod -a -G dialout $USER
# Logout and login again
```

**ESP32 not responding:**
1. Check power supply and connections
2. Verify correct COM port/device
3. Reset ESP32 (press reset button)
4. Re-flash firmware if necessary

**WiFi connection timeout:**
1. Verify ESP32 is connected to network
2. Check IP address with router/network scan
3. Ensure firewall allows port 31950
4. Try different network settings

## Examples and Scripts

### Complete Setup Example

```python
#!/usr/bin/env python3
"""
Complete UC2-REST setup example
"""
from UC2REST import UC2Client
import time

def main():
    # Initialize client
    client = UC2Client(serialport="/dev/ttyUSB0")
    
    if not client.is_connected:
        print("Failed to connect to UC2-ESP32")
        return
    
    try:
        # Initialize system
        print("Initializing UC2 system...")
        
        # Home all axes
        print("Homing stages...")
        client.stage.home_xyz()
        time.sleep(5)  # Wait for homing to complete
        
        # Set up illumination
        print("Setting up LED array...")
        client.led.set_led_array([50, 100, 75, 25])
        
        # Test stage movement
        print("Testing stage movement...")
        client.stage.move_xyz(x=1000, y=1000, z=0)
        time.sleep(2)
        
        # Return to center
        client.stage.move_xyz(x=-1000, y=-1000, z=0)
        
        # Turn off all illumination
        client.led.set_led_array([0, 0, 0, 0])
        client.laser.turn_off_all()
        
        print("UC2 setup complete!")
        
    except Exception as e:
        print(f"Error during setup: {e}")
    
    finally:
        # Cleanup
        client.close()

if __name__ == "__main__":
    main()
```

## Next Steps

- **[Micromanager Integration](./Micromanager.md)** - Use UC2-REST with µManager
- **[Custom Scripts](../04_Tutorials/Scripting.md)** - Write custom automation scripts
- **[Hardware Configuration](../03_Configuration/Hardware.md)** - Configure specific devices
- **[ESP32 Firmware](../../04_Electronics/UC2-ESP/)** - UC2-ESP32 firmware documentation

## Related Resources

- **[UC2-REST Repository](https://github.com/openUC2/UC2-REST)**
- **[UC2-ESP32 Firmware](https://github.com/youseetoo/uc2-esp32)**
- **[ImSwitch Documentation](https://imswitch.readthedocs.io/)**
- **[API Reference](https://github.com/openUC2/UC2-REST/blob/master/docs/API.md)**
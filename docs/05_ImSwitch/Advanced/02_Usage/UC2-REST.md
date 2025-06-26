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

# Or install specific version (based on your version)
pip install UC2-REST==X.X.X
```

## Quick Start

### Basic Connection

### Step-by-Step Tutorial

#### 1. Installation and Setup

First, ensure UC2-REST is installed:

```bash
# Install from GitHub
pip install git+https://github.com/openUC2/UC2-REST.git

# Or install in development mode
git clone https://github.com/openUC2/UC2-REST
cd UC2-REST
pip install -e .
```

#### 2. Basic Connection Examples

**USB Serial Connection (Recommended):**
```python
from UC2REST import UC2Client
import time

# Connect via USB
port = "/dev/ttyUSB0"  # Linux
# port = "COM3"        # Windows  
# port = "/dev/cu.usbmodem101"  # macOS

client = UC2Client(serialport=port, baudrate=115200, DEBUG=True)

# Check connection status
if client.is_connected:
    print("✓ Connected to UC2-ESP32")
    print(f"Firmware version: {client.get_firmware_version()}")
else:
    print("✗ Connection failed - check port and cable")
```

**WiFi Connection (Experimental):**
```python
# Connect via WiFi (requires ESP32 in WiFi mode)
client = UC2Client(host="192.168.1.100", port=31950, DEBUG=True)

if client.is_connected:
    print("✓ Connected via WiFi")
else:
    print("✗ WiFi connection failed")
```

#### 3. Basic Hardware Control

**LED Control:**
```python
# Turn on LED
client.led.set_led(channel=1, value=100)  # Channel 1, 100% brightness
time.sleep(2)

# Turn off LED
client.led.set_led(channel=1, value=0)

# Control multiple LEDs
client.led.set_led_array([100, 50, 25, 0])  # Array of brightness values
```

**Motor Control:**
```python
# Move stepper motor
client.motor.move_stepper(
    stepperid=1,
    position=1000,  # Steps
    speed=15000,    # Steps/second
    is_absolute=True
)

# Check motor status
status = client.motor.get_position(stepperid=1)
print(f"Motor position: {status['position']}")

# Home motor
client.motor.home_stepper(stepperid=1, timeout=20000)
```

**Laser Control:**
```python
# Turn on laser
client.laser.set_laser(channel=1, value=50)  # 50% power
time.sleep(1)

# Turn off laser
client.laser.set_laser(channel=1, value=0)

# Pulse laser
client.laser.pulse_laser(channel=1, value=100, duration=500)  # 500ms pulse
```

#### 4. Advanced Control Examples

**Multi-Device Coordination:**
```python
# Coordinate movement and illumination
def take_z_stack(client, z_positions, led_intensity=100):
    images = []
    
    for z_pos in z_positions:
        # Move to position
        client.motor.move_stepper(stepperid=3, position=z_pos, speed=5000)
        time.sleep(0.5)  # Wait for settling
        
        # Set illumination
        client.led.set_led(channel=1, value=led_intensity)
        time.sleep(0.1)  # Exposure time
        
        # Trigger camera (if connected)
        # images.append(capture_image())
        
        # Turn off LED
        client.led.set_led(channel=1, value=0)
    
    return images

# Execute Z-stack
z_positions = [0, 100, 200, 300, 400]  # Z positions in steps
take_z_stack(client, z_positions)
```

**Error Handling:**
```python
try:
    # Attempt motor movement
    client.motor.move_stepper(stepperid=1, position=5000, speed=10000)
    
except Exception as e:
    print(f"Motor movement failed: {e}")
    
    # Check if motor is still connected
    if not client.is_connected:
        print("Connection lost - attempting to reconnect...")
        client.reconnect()
```

### Basic Commands

```python
#%%
import uc2rest
import numpy as np
import time

port = "unknown"
#port = "/dev/cu.SLAB_USBtoUART"
#port = "COM3"
port = "/dev/cu.usbmodem101"
print("start")
ESP32 = uc2rest.UC2Client(serialport=port, baudrate=115200, DEBUG=True, skipFirmwareCheck=True)
#ESP32.serial.sendMessage('{"task":"/home_act", "home": {"steppers": [{"stepperid":1, "timeout": 20000, "speed": 15000, "direction":1, "endposrelease":3000}]}}')



''' TEST LED '''

# Create LedMatrix object, pass a reference to your “parent” that has post_json()
my_led_matrix = ESP32.led

for i in range(5):
    # Turn off all LEDs
    my_led_matrix.send_LEDMatrix_off()
    time.sleep(0.1)
    # Fill entire matrix with red
    my_led_matrix.send_LEDMatrix_full((255,0,0))
    time.sleep(0.1)
# Light only left half in bright white
my_led_matrix.send_LEDMatrix_halves(region="left", intensity=(255,255,255))

# Draw a ring of radius 3 in purple
my_led_matrix.send_LEDMatrix_rings(radius=3, intensity=(128,0,128))

# Draw a filled circle of radius 5 in green
my_led_matrix.send_LEDMatrix_circles(radius=3, intensity=(0,255,0))




for iLED in range(5):
    # timeout = 0 means no timeout => mResult will be rubish!
    mResult = ESP32.led.send_LEDMatrix_single(indexled=iLED, intensity=(255, 255, 255), timeout=0.1)
    mResult = ESP32.led.send_LEDMatrix_single(indexled=iLED, intensity=(0, 0, 0), timeout=0.1)

# display random pattern
for i in range(5):
    led_pattern = np.random.randint(0,55, (25,3))
    mResult = ESP32.led.send_LEDMatrix_array(led_pattern=led_pattern,timeout=0)
    assert mResult["success"] == 1, "Failed sending LED command"



# {"task":"/ledarr_act", "led":{"LEDArrMode":1, "led_array":[{"id":0, "r":255, "g":255, "b":255}]}}
mResult = ESP32.led.send_LEDMatrix_full(intensity=(255, 255, 255))
mResult = ESP32.led.send_LEDMatrix_full(intensity=(0, 0, 0), getReturn=False)

#


ESP32.home.home_x(speed =15000, direction = -1, endstoppolarity=1, timeout=10, isBlocking=True)
ESP32.home.home_y(speed =15000, direction = -1, endstoppolarity=-1, timeout=10, isBlocking=True)
ESP32.home.home_z(speed =15000, direction = 1, endstoppolarity=-1, timeout=10, isBlocking=True)


# test the objective module
ESP32.objective.home(direction=-1, endstoppolarity=1, isBlocking=True)
#ESP32.objective.calibrate(direction=-1, endstoppolarity=1, isBlocking=True)
# set the homing positions 

for i in range(2):
    speed=25000
    accel=40000
    ESP32.objective.toggle(speed=speed, accel=accel, isBlocking=True)
    ESP32.objective.toggle(speed=speed, accel=accel, isBlocking=True)

# test servo 
if 0:
    for i in range(180):
        time.sleep(0.1)
        ESP32.laser.set_servo(channel=1, value=0, is_blocking=False)    

#%% TEMPERATURE
if 0:
    ESP32.temperature.start_temperature_polling()
    time.sleep(5)
    mTemperature = ESP32.temperature.get_temperature()
    print(mTemperature)


#%%
''' ################
HOME
################'''
if 1:
    '''
    for X=0
    {"task":"/home_act","home":{"steppers":[{"stepperid":1,"timeout":20000,"speed":5000,"direction":-1,"endstoppolarity":1}]}}
    for Y=0
    {"task":"/home_act","home":{"steppers":[{"stepperid":2,"timeout":20000,"speed":15000,"direction":-1,"endstoppolarity":-1}]}}
    for Z=0
    {"task":"/home_act","home":{"steppers":[{"stepperid":3,"timeout":20000,"speed":15000,"direction":1,"endstoppolarity":-1}]}}
    for A=0
    {"task":"/home_act","home":{"steppers":[{"stepperid":0,"timeout":20000,"speed":5000,"direction":-1,"endstoppolarity":1}]}}
'''
    ESP32.home.home_x(speed =15000, direction = -1, endstoppolarity=1, timeout=1, isBlocking=True)
    ESP32.home.home_y(speed =15000, direction = -1, endstoppolarity=-1, timeout=1, isBlocking=True)
    ESP32.home.home_z(speed =15000, direction = 1, endstoppolarity=-1, timeout=1, isBlocking=True)

    # scanning
    dDist = 10000
    speed = 20000
    nDist = 4

    # test Motor in scanning mode
    ESP32.motor.move_xyza(steps=(0,0,0,0), speed=speed, is_absolute = True, is_blocking=True)

    for ix in range(nDist):
        for iy in range(nDist):
            if ix%2==0:
                iy=nDist-iy
            ESP32.motor.move_xy(steps=(ix*dDist,iy*dDist), speed=speed, is_absolute = True, is_blocking=True)
            time.sleep(0.5)
    ESP32.motor.move_xyza(steps=(0,nDist*dDist,nDist*dDist,0), speed=speed, is_absolute = True, is_blocking=True)
    ESP32.motor.move_xyza(steps=(0,0,0,0), speed=speed, is_absolute = True, is_blocking=True)

heapSize = ESP32.state.getHeap()
print("Heap size: ", heapSize)

# setting debug output of the serial to true - all message will be printed
ESP32.serial.DEBUG=True
ESP32.motor.move_x(steps=10000, speed=10000, is_blocking=False)
ESP32.motor.move_a(steps=10000, speed=10000, is_blocking=False)
ESP32.motor.move_z(steps=10000, speed=10000, is_blocking=True)
ESP32.motor.move_x(steps=-10000, speed=10000, is_blocking=True)
ESP32.motor.move_x(steps=10000, speed=10000, is_blocking=False)
ESP32.motor.move_xy(steps=(10000,10000), speed=(10000, 10000), is_blocking=True)
mState = ESP32.state.get_state()




ESP32.motor.move_x(steps=10000, speed=10000, is_blocking=True)

# {"task":"/ledarr_act", "led":{"LEDArrMode":1, "led_array":[{"id":0, "r":255, "g":255, "b":255}]}}
mResult = ESP32.led.send_LEDMatrix_full(intensity=(255, 255, 255))
print("Heap size: ", ESP32.state.getHeap())
mResult = ESP32.led.send_LEDMatrix_full(intensity=(0, 0, 0), getReturn=False)
print("Heap size: ", ESP32.state.getHeap())

# check if we are connected 
# see if it's the right device
mState = ESP32.state.get_state()
#assert mState["state"]["identifier_name"] == "UC2_Feather", "Wrong device connected"

#%% 
# test Motor
if 0:
    ESP32.rotator.move_x(steps=10000, speed=10000, is_blocking=True)
    ESP32.rotator.move_y(steps=1000, speed=1000, is_blocking=True, is_enabled=False)
    ESP32.rotator.move_z(steps=1000, speed=1000, is_blocking=True)
    ESP32.rotator.move_y(steps=1000, speed=1000, is_blocking=True, is_enabled=False)
    ESP32.rotator.move_t(steps=1000, speed=1000)
    ESP32.rotator.move_xyzt(steps=(0,1000,100,0), speed=10000, is_blocking=True)
    ESP32.rotator.move_xyzt(steps=(0,0,0,0), speed=10000, is_absolute=True, is_blocking=True)
    ESP32.motor.move_forever(speed=(0,100,0,0), is_stop=False)
    ESP32.motor.move_forever(speed=(0,100,0,0), is_stop=False)
    time.sleep(1)


''' ################
SERIAL
################'''
# Write a message, get the id and read it out of the message buffer
test_cmd = "{'task': '/motor_get'}"
test_cmd = '{"task":"/ledarr_act", "led":{"LEDArrMode":1, "led_array":[{"id":0, "r":255, "g":255, "b":255}]}}'
qID = ESP32.serial.writeSerial(test_cmd)
cmd_return = ESP32.serial.readSerial(qID, 1)
print(cmd_return)

''' ################
Digital out
################'''
if(0):
    ESP32.digitalout.setup_digitaloutpin(id=1, pin=4)
    ESP32.digitalout.setup_digitaloutpin(id=2, pin=0)
    ESP32.digitalout.set_trigger(trigger1=True, delayOn1=10, delayOff1=10, trigger2=True, delayOn2=100, delayOff2=10, trigger3=False, delayOn3=0, delayOff3=0)
    time.sleep(1)
    ESP32.digitalout.reset_triggertable()





''' ################
LED 
################'''
# test LED
mResult = ESP32.led.send_LEDMatrix_full(intensity=(255, 255, 255))
assert mResult["success"] == 1, "Failed sending LED command"
time.sleep(0.5)
print("Heap size: ", ESP32.state.getHeap())
mResult = ESP32.led.send_LEDMatrix_full(intensity=(0, 0, 0))
assert mResult["success"] == 1, "Failed sending LED command"
print("Heap size: ", ESP32.state.getHeap())
# single LED
ESP32.setDebugging(False)
for iLED in range(5):
    # timeout = 0 means no timeout => mResult will be rubish!
    mResult = ESP32.led.send_LEDMatrix_single(indexled=iLED, intensity=(255, 255, 255), timeout=0.)
    mResult = ESP32.led.send_LEDMatrix_single(indexled=iLED, intensity=(0, 0, 0), timeout=0.)

# display random pattern
for i in range(5):
    led_pattern = np.random.randint(0,55, (25,3))
    mResult = ESP32.led.send_LEDMatrix_array(led_pattern=led_pattern,timeout=0)
    assert mResult["success"] == 1, "Failed sending LED command"

time.sleep(3)
#%% left
if(0):
    led_pattern = np.zeros((25,3))
    list_left = (0,1,2,3,4,5,9,10,11,12,13,14,15,16,17)
    list_right = (0,5,6,7,8,9,18,19,20,21,22,23,24)
    led_pattern[list_left,0] = 255
    led_pattern[list_right,1] = 255
    ESP32.led.send_LEDMatrix_array(led_pattern=led_pattern, timeout=1)
    time.sleep(1)
    ESP32.led.send_LEDMatrix_array(led_pattern=led_pattern*0, timeout=1)

#%%
#%%
''' ################
MOTOR
################'''
ESP32.setDebugging(True)

# mResult = ESP32.motor.move_x(steps=0, is_enabled=False)
mResult = ESP32.motor.set_motor_enable(enable=1)
mResult = ESP32.motor.set_motor_enable(enable=0)
assert mResult["success"] == 1, "Failed sending motor command"

# test Motor
mResult = ESP32.motor.set_position(axis=0, position=1000)
assert mResult["success"] == 1, "Failed sending motor command"

position1 = ESP32.motor.get_position(timeout=1)
assert position1[0]==1000, "Failed getting motor position"
print(position1)
ESP32.motor.set_motor_enable(enable=1, enableauto=False)# always on
ESP32.motor.move_x(steps=10000, speed=10000, is_blocking=True)
ESP32.motor.move_y(steps=1000, speed=1000, is_blocking=True, is_enabled=False)
ESP32.motor.move_z(steps=1000, speed=1000, is_blocking=True)
ESP32.motor.move_y(steps=1000, speed=1000, is_blocking=True, is_enabled=False)
ESP32.motor.move_a(steps=1000, speed=1000)
ESP32.motor.move_xyza(steps=(0,1000,100,0), speed=10000, is_blocking=True)
ESP32.motor.move_xyza(steps=(0,0,0,0), speed=10000, is_absolute=True, is_blocking=True)
ESP32.motor.move_forever(speed=(0,100,0,0), is_stop=False)
ESP32.motor.move_forever(speed=(0,100,0,0), is_stop=False)
time.sleep(1)
ESP32.motor.move_forever(speed=(0,0,0,0), is_stop=True)

position2 = ESP32.motor.get_position(timeout=1)
print(position2)

dDist = 10000
speed = 20000
nDist = 4

# test Motor in scanning mode
ESP32.motor.move_xyza(steps=(0,0,0,0), speed=speed, is_absolute = True, is_blocking=True)

for ix in range(nDist):
    for iy in range(nDist):
        if ix%2==0:
            iy=nDist-iy
        ESP32.motor.move_xyza(steps=(0,ix*dDist,iy*dDist,0), speed=speed, is_absolute = True, is_blocking=True)
        time.sleep(0.5)
ESP32.motor.move_xyza(steps=(0,nDist*dDist,nDist*dDist,0), speed=speed, is_absolute = True, is_blocking=True)
ESP32.motor.move_xyza(steps=(0,0,0,0), speed=speed, is_absolute = True, is_blocking=True)

#%%

''' ################
analog
################'''
ESP32.analog.set_analog(readanaloginID=1, readanaloginPIN=35, nanaloginavg=1)
ESP32.analog.get_analog(readanaloginID=1)
#analogValueAVG = ESP32.analog.read_sensor(sensorID=1, NAvg=100)
#print(analogValueAVG)


''' ################
LASER 
################'''
# set laser values
ESP32.laser.set_laser(channel=1, value=1000, despeckleAmplitude=0, despecklePeriod=10, timeout=20, is_blocking = True)
ESP32.laser.set_laser(channel=2, value=1000, despeckleAmplitude=0, despecklePeriod=10, timeout=20, is_blocking = True)
ESP32.laser.set_laser(channel=3, value=1000, despeckleAmplitude=0, despecklePeriod=10, timeout=20, is_blocking = True)




''' ################
Wifi
################'''
# wifi
ESP32.wifi.scanWifi()
''' ################
State
################'''
# test state
_state = ESP32.state.get_state()
print(_state)
ESP32.state.set_state(debug=False)
_mode = ESP32.state.isControllerMode()
print(_mode)
ESP32.state.espRestart()
time.sleep(5)
ESP32.state.pairBT(1)
ESP32.state.setControllerMode(isController=True)


_busy = ESP32.state.isBusy()
print(_busy)

ESP32.close()
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

### ImSwitch Integration Examples

UC2-REST is integrated into ImSwitch through device managers. Here are examples based on the ImSwitch codebase:

#### ESP32 Configuration Manager

Based on [UC2ConfigManager.py](https://github.com/openUC2/ImSwitch/blob/master/imswitch/imcontrol/model/managers/UC2ConfigManager.py) and [ESP32Manager.py](https://github.com/openUC2/ImSwitch/blob/master/imswitch/imcontrol/model/managers/rs232/ESP32Manager.py):

```python
from UC2REST import UC2Client
from imswitch.imcontrol.model.interfaces import DeviceManager

class ESP32Manager(DeviceManager):
    def __init__(self, deviceInfo, name, **kwargs):
        super().__init__(deviceInfo, name, **kwargs)
        
        # Initialize UC2-REST client from device configuration
        port = deviceInfo.managerProperties.get('port', '/dev/ttyUSB0')
        baudrate = deviceInfo.managerProperties.get('baudrate', 115200)
        
        self.client = UC2Client(
            serialport=port, 
            baudrate=baudrate,
            DEBUG=False
        )
        
        if not self.client.is_connected:
            raise Exception(f"Failed to connect to ESP32 on {port}")
    
    def send_command(self, command_dict):
        """Send JSON command to ESP32"""
        return self.client.send_command(command_dict)
    
    def cleanup(self):
        """Cleanup when shutting down"""
        if hasattr(self, 'client'):
            self.client.close()
```

#### Stage Manager Integration

Based on [ESP32StageManager.py](https://github.com/openUC2/ImSwitch/blob/master/imswitch/imcontrol/model/managers/positioners/ESP32StageManager.py):

```python
from imswitch.imcontrol.model.interfaces import PositionerManager

class ESP32StageManager(PositionerManager):
    def __init__(self, deviceInfo, name, **kwargs):
        super().__init__(deviceInfo, name, **kwargs)
        
        # Get ESP32 manager instance
        self._esp32 = kwargs['esp32Manager']
        
        # Configure axes
        self._axes = deviceInfo.axes
        self._steppers = {axis: info.get('stepperid', 1) 
                         for axis, info in self._axes.items()}
    
    def move(self, axis, position, absolute=True, blocking=True):
        """Move stage axis to position"""
        stepper_id = self._steppers[axis]
        
        command = {
            "task": "/motor_act",
            "motor": {
                "steppers": [{
                    "stepperid": stepper_id,
                    "position": int(position),
                    "speed": 15000,
                    "isabs": absolute,
                    "isblocking": blocking
                }]
            }
        }
        
        return self._esp32.send_command(command)
    
    def setPosition(self, axis, position):
        """Set current position (for calibration)"""
        stepper_id = self._steppers[axis]
        
        command = {
            "task": "/motor_set",
            "motor": {
                "steppers": [{
                    "stepperid": stepper_id,
                    "position": int(position)
                }]
            }
        }
        
        return self._esp32.send_command(command)
```

#### LED Manager Integration

Based on [ESP32LEDMatrixManager.py](https://github.com/openUC2/ImSwitch/blob/master/imswitch/imcontrol/model/managers/LEDMatrixs/ESP32LEDMatrixManager.py):

```python
from imswitch.imcontrol.model.interfaces import LEDMatrixManager

class ESP32LEDManager(LEDMatrixManager):
    def __init__(self, deviceInfo, name, **kwargs):
        super().__init__(deviceInfo, name, **kwargs)
        
        self._esp32 = kwargs['esp32Manager']
        self._channels = deviceInfo.managerProperties.get('channels', [1, 2, 3])
    
    def setLED(self, channel, intensity):
        """Set LED intensity (0-255)"""
        command = {
            "task": "/led_act",
            "led": {
                "LEDArrMode": 1,
                "led_array": [
                    {
                        "id": channel,
                        "r": int(intensity),
                        "g": int(intensity), 
                        "b": int(intensity)
                    }
                ]
            }
        }
        
        return self._esp32.send_command(command)
    
    def setPattern(self, pattern_array):
        """Set LED pattern for matrix"""
        led_commands = []
        for i, intensity in enumerate(pattern_array):
            led_commands.append({
                "id": i + 1,
                "r": int(intensity),
                "g": int(intensity),
                "b": int(intensity)
            })
        
        command = {
            "task": "/led_act",
            "led": {
                "LEDArrMode": 1,
                "led_array": led_commands
            }
        }
        
        return self._esp32.send_command(command)
```

#### Laser Manager Integration  

Based on [ESP32LEDLaserManager.py](https://github.com/openUC2/ImSwitch/blob/master/imswitch/imcontrol/model/managers/lasers/ESP32LEDLaserManager.py):

```python
from imswitch.imcontrol.model.interfaces import LaserManager

class ESP32LaserManager(LaserManager):
    def __init__(self, deviceInfo, name, **kwargs):
        super().__init__(deviceInfo, name, **kwargs)
        
        self._esp32 = kwargs['esp32Manager']
        self._channel = deviceInfo.managerProperties.get('channel', 1)
        self._maxPower = deviceInfo.managerProperties.get('maxPower', 255)
    
    def setValue(self, power):
        """Set laser power (0-100%)"""
        intensity = int((power / 100.0) * self._maxPower)
        
        command = {
            "task": "/laser_act",
            "laser": {
                "LASERid": self._channel,
                "LASERval": intensity
            }
        }
        
        return self._esp32.send_command(command)
    
    def setEnabled(self, enabled):
        """Enable/disable laser"""
        if enabled:
            self.setValue(self._lastPower if hasattr(self, '_lastPower') else 50)
        else:
            self._lastPower = self.getValue()
            self.setValue(0)
```

#### Custom Device Manager Template

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
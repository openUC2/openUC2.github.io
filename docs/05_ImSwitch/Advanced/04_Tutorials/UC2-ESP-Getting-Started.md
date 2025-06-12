# UC2-ESP32 Getting Started Tutorial

The UC2-ESP32 firmware is the low-level software that runs on ESP32 microcontrollers to control UC2 hardware components. This tutorial guides you through setting up, flashing, and using UC2-ESP32 firmware.

## Overview

UC2-ESP32 firmware features:
- **Modular Architecture**: Only compile modules you need
- **Multi-Protocol Communication**: Serial, WiFi, I2C support
- **Real-time Control**: Loop-based hardware management
- **Resource Optimization**: Minimal RAM and CPU usage
- **Extensible Design**: Easy to add new hardware modules

### Supported Hardware Modules

- **Motors**: Stepper motors for XYZ stages and focus control
- **LEDs**: Individual LEDs and LED arrays/matrices
- **Lasers**: Laser diode control with safety features
- **Sensors**: Temperature, humidity, and other environmental sensors
- **Communication**: WiFi, Bluetooth, Serial interfaces
- **Input Controllers**: Joysticks, PS4 controllers, buttons

## Firmware Architecture

### Module Structure

Each hardware module implements four standard functions:

```cpp
class HardwareModule {
public:
    void setup();     // Initialize hardware
    void loop();      // Continuous background tasks
    void act();       // Execute commands
    void get();       // Return status/data
};
```

### Communication Protocol

Commands use JSON format:
```json
{
    "task": "/motor_act",
    "motor": 0,
    "direction": 1,
    "steps": 1000
}
```

Responses follow the same structure:
```json
{
    "return": 1,
    "task": "/motor_act",
    "motor": 0,
    "position": 1000
}
```

## Installation and Setup

### Method 1: Web-Based Flashing (Recommended)

The easiest way to flash UC2-ESP32 firmware:

1. **Visit the UC2 Firmware Page**:
   - Go to [youseetoo.github.io](https://youseetoo.github.io/)
   - This provides a web-based ESP32 flashing interface

2. **Select Your Board**:
   - Choose your specific ESP32 board type
   - Common options: ESP32-WROOM, ESP32-CAM, Custom UC2 boards
   - If unsure, check your hardware documentation

3. **Connect ESP32**:
   - Connect ESP32 to computer via USB
   - Ensure proper USB drivers are installed
   - Press and hold BOOT button (if required)

4. **Flash Firmware**:
   - Click "Connect" and select the correct COM port
   - Click "Flash Firmware"
   - Wait for completion (usually 1-2 minutes)

5. **Test Installation**:
   - Visit [UC2 Web Serial Test Page](https://youseetoo.github.io/indexWebSerialTest.html)
   - Connect to your ESP32
   - Send test commands to verify functionality

### Method 2: PlatformIO (Development)

For development and customization:

1. **Install PlatformIO**:
   ```bash
   # Install PlatformIO Core
   pip install platformio
   
   # Or use PlatformIO IDE extension in VS Code
   ```

2. **Clone Firmware Repository**:
   ```bash
   git clone https://github.com/youseetoo/uc2-esp32
   cd uc2-esp32
   
   # Switch to development branch for latest features
   git checkout reworkBD
   ```

3. **Configure Build**:
   ```bash
   # Edit platformio.ini for your board and modules
   nano platformio.ini
   ```

4. **Build and Flash**:
   ```bash
   # Build firmware
   pio run
   
   # Flash to ESP32
   pio run --target upload
   
   # Monitor serial output
   pio device monitor
   ```

### Method 3: Arduino IDE

Alternative for Arduino users:

1. **Install ESP32 Board Package**:
   - Add ESP32 board URL to Arduino IDE
   - Install ESP32 board package

2. **Configure Libraries**:
   - Install required libraries (see firmware README)
   - Configure board settings

3. **Compile and Upload**:
   - Open firmware project in Arduino IDE
   - Select correct board and COM port
   - Compile and upload

## Basic Configuration

### Serial Communication Setup

Default serial parameters:
- **Baud Rate**: 115200
- **Data Bits**: 8
- **Stop Bits**: 1
- **Parity**: None
- **Flow Control**: None

### WiFi Configuration

Configure WiFi for network communication:

```cpp
// WiFi credentials (set in firmware or via serial)
const char* ssid = "your_wifi_network";
const char* password = "your_wifi_password";

// Static IP configuration (optional)
IPAddress local_IP(192, 168, 1, 100);
IPAddress gateway(192, 168, 1, 1);
IPAddress subnet(255, 255, 255, 0);
```

Set WiFi via serial commands:
```json
{
    "task": "/wifi_act",
    "ssid": "your_network",
    "password": "your_password"
}
```

### Module Configuration

Enable/disable modules in `config.h`:

```cpp
// Motor control
#define MODULE_MOTOR 1

// LED control
#define MODULE_LED 1

// Laser control
#define MODULE_LASER 1

// WiFi communication
#define MODULE_WIFI 1

// Bluetooth support
#define MODULE_BLUETOOTH 0

// Sensor reading
#define MODULE_SENSOR 1
```

## Hardware Control Examples

### Motor Control

```json
// Move motor X by 1000 steps
{
    "task": "/motor_act",
    "motor": 0,
    "direction": 1,
    "steps": 1000
}

// Home motor X
{
    "task": "/motor_act", 
    "motor": 0,
    "task": "home"
}

// Set motor speed
{
    "task": "/motor_act",
    "motor": 0,
    "speed": 1000
}

// Get motor status
{
    "task": "/motor_get",
    "motor": 0
}
```

### LED Control

```json
// Set LED intensity
{
    "task": "/led_act",
    "led": 0,
    "intensity": 100
}

// Set LED array pattern
{
    "task": "/ledarray_act",
    "pattern": [100, 50, 75, 0, 25, 100, 50, 75]
}

// Get LED status
{
    "task": "/led_get",
    "led": 0
}
```

### Laser Control

```json
// Turn on laser
{
    "task": "/laser_act",
    "laser": 0,
    "intensity": 50
}

// Turn off laser (safety)
{
    "task": "/laser_act",
    "laser": 0,
    "intensity": 0
}

// Get laser status
{
    "task": "/laser_get",
    "laser": 0
}
```

### Sensor Reading

```json
// Read all sensors
{
    "task": "/sensor_get"
}

// Read specific sensor
{
    "task": "/sensor_get",
    "sensor": "temperature"
}
```

## Testing and Validation

### Serial Communication Test

Use a serial terminal to test basic communication:

```bash
# Linux/macOS
screen /dev/ttyUSB0 115200

# Windows
# Use PuTTY or similar serial terminal
```

Send test command:
```json
{"task": "/state_get"}
```

Expected response:
```json
{"return": 1, "task": "/state_get", "state": "ready"}
```

### Web Interface Test

1. **Access Web Test Page**:
   - Open [youseetoo.github.io/indexWebSerialTest.html](https://youseetoo.github.io/indexWebSerialTest.html)
   - Connect to your ESP32

2. **Test Basic Commands**:
   ```json
   {"task": "/state_get"}
   {"task": "/led_act", "led": 0, "intensity": 100}
   {"task": "/led_act", "led": 0, "intensity": 0}
   ```

3. **Verify Responses**:
   - Check that commands return proper JSON responses
   - Observe physical hardware changes (LEDs, motor movement)

### Python Test Script

```python
import serial
import json
import time

def test_uc2_esp32(port="/dev/ttyUSB0", baudrate=115200):
    """Test basic UC2-ESP32 communication"""
    try:
        # Open serial connection
        ser = serial.Serial(port, baudrate, timeout=1)
        time.sleep(2)  # Wait for connection
        
        # Test state command
        command = {"task": "/state_get"}
        ser.write((json.dumps(command) + '\n').encode())
        
        response = ser.readline().decode().strip()
        if response:
            result = json.loads(response)
            print(f"State response: {result}")
            
            if result.get("return") == 1:
                print("✓ ESP32 communication successful")
                return True
            else:
                print("✗ ESP32 returned error")
                return False
        else:
            print("✗ No response from ESP32")
            return False
            
    except Exception as e:
        print(f"✗ Communication error: {e}")
        return False
    finally:
        if 'ser' in locals():
            ser.close()

# Run test
if __name__ == "__main__":
    test_uc2_esp32()
```

## Advanced Configuration

### Custom Module Development

Create a custom hardware module:

```cpp
// custom_module.h
#ifndef CUSTOM_MODULE_H
#define CUSTOM_MODULE_H

class CustomModule {
public:
    void setup();
    void loop();
    void act(JsonObject& json_in, JsonObject& json_out);
    void get(JsonObject& json_in, JsonObject& json_out);

private:
    int custom_value;
    bool enabled;
};

extern CustomModule customModule;

#endif

// custom_module.cpp
#include "custom_module.h"

CustomModule customModule;

void CustomModule::setup() {
    // Initialize custom hardware
    custom_value = 0;
    enabled = true;
    Serial.println("Custom module initialized");
}

void CustomModule::loop() {
    // Background tasks (if needed)
    if (enabled) {
        // Continuous operations
    }
}

void CustomModule::act(JsonObject& json_in, JsonObject& json_out) {
    // Handle action commands
    if (json_in.containsKey("value")) {
        custom_value = json_in["value"];
        json_out["return"] = 1;
        json_out["value"] = custom_value;
    }
}

void CustomModule::get(JsonObject& json_in, JsonObject& json_out) {
    // Return status
    json_out["return"] = 1;
    json_out["custom_value"] = custom_value;
    json_out["enabled"] = enabled;
}
```

### Network Configuration

Configure advanced networking:

```cpp
// Static IP configuration
void setupStaticIP() {
    if (!WiFi.config(local_IP, gateway, subnet, primaryDNS, secondaryDNS)) {
        Serial.println("Static IP configuration failed");
    }
}

// Access Point mode
void setupAccessPoint() {
    WiFi.softAP("UC2-ESP32", "password123");
    IPAddress IP = WiFi.softAPIP();
    Serial.print("AP IP address: ");
    Serial.println(IP);
}

// Web server for HTTP API
void setupWebServer() {
    server.on("/api/motor", HTTP_POST, handleMotorAPI);
    server.on("/api/led", HTTP_POST, handleLEDAPI);
    server.on("/api/status", HTTP_GET, handleStatusAPI);
    server.begin();
}
```

### Performance Optimization

Optimize for specific applications:

```cpp
// Reduce motor loop frequency for power saving
#define MOTOR_LOOP_INTERVAL 10  // ms

// Buffer size optimization
#define JSON_BUFFER_SIZE 512

// Task priorities for multi-core ESP32
void setupTaskPriorities() {
    // High priority for motor control
    xTaskCreatePinnedToCore(
        motorTask, "MotorTask", 2048, NULL, 2, NULL, 1);
    
    // Low priority for WiFi communication
    xTaskCreatePinnedToCore(
        wifiTask, "WiFiTask", 4096, NULL, 1, NULL, 0);
}
```

## Troubleshooting

### Common Issues

**ESP32 not responding**:
1. Check USB cable and connection
2. Verify correct COM port
3. Press RESET button
4. Try different baud rates

**Firmware upload fails**:
1. Hold BOOT button during upload
2. Check board selection in IDE
3. Verify USB drivers installed
4. Try different upload speed

**WiFi connection problems**:
1. Check SSID and password
2. Verify network compatibility (2.4GHz)
3. Check signal strength
4. Reset network settings

**Motor not moving**:
1. Check power supply voltage
2. Verify motor driver connections
3. Test with manual commands
4. Check current limits

### Debug Output

Enable debug output for troubleshooting:

```cpp
#define DEBUG_SERIAL 1
#define DEBUG_WIFI 1
#define DEBUG_MOTOR 1

void debugPrint(String message) {
    #if DEBUG_SERIAL
    Serial.println("[DEBUG] " + message);
    #endif
}
```

### Log Analysis

Monitor serial output for debugging:

```bash
# Continuous monitoring with timestamps
pio device monitor | ts '[%Y-%m-%d %H:%M:%S]'

# Save log to file
pio device monitor > debug_log.txt
```

## Integration with ImSwitch

### UC2-REST Communication Layer

UC2-ESP32 communicates with ImSwitch through UC2-REST:

```python
from UC2REST import UC2Client

# Connect to ESP32
client = UC2Client(serialport="/dev/ttyUSB0")

# Test communication
if client.is_connected:
    print("Connected to UC2-ESP32")
    
    # Send commands through UC2-REST
    client.stage.move_x(1000)
    client.led.set_led(channel=1, intensity=100)
```

### Configuration in ImSwitch

Configure ESP32 device in ImSwitch:

```json
{
  "rs232devices": {
    "ESP32": {
      "managerName": "ESP32Manager",
      "managerProperties": {
        "serialport": "/dev/ttyUSB0",
        "baudrate": 115200
      }
    }
  }
}
```

## Next Steps

- **[UC2-REST Integration](./UC2-REST-Getting-Started.md)** - Python interface setup
- **[ImSwitch Configuration](../03_Configuration/README.md)** - Configure ImSwitch for ESP32
- **[Hardware Assembly](../../04_Electronics/README.md)** - Physical hardware setup

## Resources

- **[UC2-ESP32 Repository](https://github.com/youseetoo/uc2-esp32)**
- **[Firmware Documentation](https://github.com/youseetoo/uc2-esp32/tree/reworkBD/docs)**
- **[Web Flasher](https://youseetoo.github.io/)**
- **[Community Forum](https://openuc2.com)**
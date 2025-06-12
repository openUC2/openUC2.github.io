# UC2-ESP32 Firmware

Advanced documentation for UC2-ESP32 firmware development, customization, and optimization.

## Overview

The UC2-ESP32 firmware is a modular, real-time control system for UC2 hardware components. It provides:

- **Modular Architecture**: Compile only the modules you need
- **Real-time Control**: Microsecond-precision hardware control
- **Multi-Protocol Communication**: Serial, WiFi, Bluetooth, I2C
- **Extensible Design**: Easy to add new hardware modules
- **Resource Optimization**: Efficient memory and CPU usage

## Available Documentation

### Getting Started
- **[Quick Start Guide](./Quick-Start.md)** - Flash firmware and basic setup
- **[Build Environment Setup](./01_Setup_Buildenvironment.md)** - Development environment configuration
- **[Firmware Flashing](./08_Flashing_the_firmware.md)** - Flash firmware to ESP32

### Development
- **[Firmware Description](./02_UC2_Firmware_Description.md)** - Architecture and module system
- **[Hardware Modules](./Hardware-Modules.md)** - Creating custom hardware modules
- **[Communication Protocols](./Communication.md)** - Protocol implementation details

### Control and Integration
- **[ESP32 Control](./07_Controling_the_ESP32.md)** - Basic control methods
- **[ESP32 App Control](./07_Controlling_the_ESP32_APP.md)** - Mobile app integration
- **[Python Commands](./051_Sending_Commands_via_Python.md)** - Python control interface

### Advanced Topics
- **[API Reference](./APIDescription/)** - Complete firmware API
- **[Performance Optimization](./Optimization.md)** - Memory and speed optimization
- **[Custom Module Development](./Custom-Modules.md)** - Advanced module creation

## Quick Reference

### Basic Commands
```json
// Get system status
{"task": "/state_get"}

// Control LED
{"task": "/led_act", "led": 0, "intensity": 100}

// Move motor
{"task": "/motor_act", "motor": 0, "direction": 1, "steps": 1000}

// Read sensors
{"task": "/sensor_get"}
```

### Module Configuration
```cpp
// Enable/disable modules in config.h
#define MODULE_MOTOR 1
#define MODULE_LED 1
#define MODULE_LASER 1
#define MODULE_WIFI 1
#define MODULE_BLUETOOTH 0
```

## Supported Hardware

### Motor Control
- Stepper motors for XYZ stages
- DC motors with encoder feedback
- Servo motors for precise positioning
- Focus control systems

### Illumination
- Individual LEDs
- LED arrays and matrices
- Laser diodes with safety features
- Structured illumination patterns

### Sensors
- Temperature and humidity sensors
- Pressure sensors
- Optical encoders
- Custom analog/digital sensors

### Communication
- USB Serial (default)
- WiFi/HTTP
- Bluetooth Classic and BLE
- I2C for auxiliary devices

## Development Workflow

### 1. Environment Setup
```bash
# Install PlatformIO
pip install platformio

# Clone firmware repository
git clone https://github.com/youseetoo/uc2-esp32
cd uc2-esp32
```

### 2. Configuration
```bash
# Copy configuration template
cp config_template.h config.h

# Edit configuration for your hardware
nano config.h
```

### 3. Build and Flash
```bash
# Build firmware
pio run

# Flash to ESP32
pio run --target upload

# Monitor serial output
pio device monitor
```

## Architecture Overview

### Module System
Each hardware module implements standard functions:
- `setup()`: Initialize hardware
- `loop()`: Continuous background tasks
- `act()`: Execute commands
- `get()`: Return status/data

### Communication Flow
1. Receive JSON command via Serial/WiFi
2. Parse command and route to appropriate module
3. Execute hardware action
4. Return JSON response

### Resource Management
- Modular compilation reduces memory usage
- Task scheduling optimizes CPU usage
- Interrupt-driven I/O minimizes latency
- Power management for battery operation

## Customization Examples

### Adding a Custom Sensor
```cpp
// custom_sensor.h
class CustomSensor {
private:
    int sensor_pin;
    float last_reading;
    
public:
    void setup() {
        sensor_pin = 34;  // ADC pin
        pinMode(sensor_pin, INPUT);
    }
    
    void loop() {
        // Background tasks if needed
    }
    
    void act(JsonObject& json_in, JsonObject& json_out) {
        // Handle action commands
        if (json_in.containsKey("calibrate")) {
            // Calibration logic
            json_out["return"] = 1;
        }
    }
    
    void get(JsonObject& json_in, JsonObject& json_out) {
        // Return sensor reading
        float reading = analogRead(sensor_pin) * 3.3 / 4095.0;
        json_out["return"] = 1;
        json_out["voltage"] = reading;
        json_out["last_reading"] = last_reading;
        last_reading = reading;
    }
};
```

### Custom Communication Protocol
```cpp
// Implement custom message format
void handleCustomProtocol(String message) {
    // Parse custom message format
    // Execute corresponding actions
    // Send response in custom format
}
```

## Performance Optimization

### Memory Usage
- Use `const` for read-only data
- Minimize global variables
- Use appropriate data types
- Free unused resources

### CPU Optimization
- Minimize blocking operations
- Use interrupts for time-critical tasks
- Optimize loop frequencies
- Balance responsiveness vs. power consumption

### Communication Speed
- Use binary protocols for high-speed data
- Implement command queuing
- Optimize JSON parsing
- Consider UDP for real-time applications

## Troubleshooting

### Common Issues
- **Boot loops**: Check power supply and module configuration
- **Communication failures**: Verify baud rate and connection
- **Memory errors**: Reduce enabled modules or optimize code
- **Timing issues**: Adjust task priorities and frequencies

### Debug Tools
- Serial monitor for runtime debugging
- Logic analyzer for hardware signals
- Network analyzer for WiFi communication
- Memory profiler for optimization

## Contributing

### Development Guidelines
- Follow existing code style
- Document all new modules
- Include unit tests where possible
- Update API documentation

### Submission Process
1. Fork the repository
2. Create feature branch
3. Implement and test changes
4. Submit pull request
5. Participate in code review

## Related Resources

- **[UC2-REST Python Interface](../02_UC2-REST/README.md)** - Python control layer
- **[ImSwitch Integration](../../05_ImSwitch/Advanced/02_Usage/UC2-REST.md)** - Microscopy software integration
- **[Hardware Interfaces](../03_Hardware-Interfaces/README.md)** - Specialized hardware components
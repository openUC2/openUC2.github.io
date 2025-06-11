# Micromanager Integration with ImSwitch

ImSwitch now includes an official device adapter for µManager, enabling seamless integration between ImSwitch hardware control and µManager's powerful acquisition and analysis capabilities.

## Overview

The ImSwitch µManager device adapter provides:
- **Hardware Control**: Full access to ImSwitch-controlled devices from µManager
- **Synchronized Acquisition**: Coordinated control of multiple devices
- **Standard Interface**: Uses µManager's standard device API
- **Cross-Platform**: Available on Windows, macOS, and Linux
- **Official Support**: Integrated into µManager nightly builds

### Architecture

```
µManager ←→ ImSwitch Device Adapter ←→ ImSwitch ←→ UC2-REST ←→ UC2-ESP32 ←→ Hardware
```

## Installation

### µManager Nightly Builds

The ImSwitch device adapter is now included in µManager nightly builds:

1. **Download µManager nightly build**:
   - Visit [µManager downloads](https://micro-manager.org/wiki/Download_Micro-Manager_Latest_Release)
   - Select the nightly build for your platform
   - Install following standard µManager procedures

2. **Verify Installation**:
   - Launch µManager
   - Go to **Tools → Hardware Configuration Wizard**
   - Look for "ImSwitch" in the device list

### Manual Installation (Development)

For development or custom builds:

```bash
# Clone the device adapter repository
git clone https://github.com/openUC2/openUc2MicroManagerDeviceAdapter

# Follow build instructions in the repository README
cd openUc2MicroManagerDeviceAdapter
# Build according to platform-specific instructions
```

## Configuration

### Setting Up ImSwitch

1. **Start ImSwitch** with your hardware configuration:
   ```bash
   python -m imswitch --config uc2_micromanager.json
   ```

2. **Enable µManager Integration** in ImSwitch:
   - Go to **Settings → Integrations**
   - Enable "µManager Device Adapter"
   - Note the communication port (default: 8000)

3. **Verify Hardware** is working in ImSwitch before µManager setup

### Configuring µManager

1. **Launch Hardware Configuration Wizard**:
   - Open µManager
   - Go to **Tools → Hardware Configuration Wizard**

2. **Add ImSwitch Devices**:
   - Click "Add Device"
   - Select "ImSwitch" from the device list
   - Choose appropriate device types:
     - **ImSwitchCamera**: For cameras controlled by ImSwitch
     - **ImSwitchStage**: For XYZ stages
     - **ImSwitchLaser**: For laser control
     - **ImSwitchLED**: for LED arrays

3. **Configure Connection**:
   - **Host**: `localhost` (if running on same machine)
   - **Port**: `8000` (or as configured in ImSwitch)
   - **Timeout**: `5000` ms (adjust as needed)

4. **Test Configuration**:
   - Click "Test" for each device
   - Verify communication with ImSwitch
   - Save configuration

## Device Types

### Camera Integration

**ImSwitchCamera Device**:
- **Live imaging**: Real-time camera feed in µManager
- **Acquisition settings**: Exposure time, gain, binning
- **ROI control**: Region of interest selection
- **Trigger modes**: Software and hardware triggering

**Configuration Parameters**:
```
Device Name: ImSwitch Camera
Property Name: Camera Name
Property Value: WidefieldCamera  // As defined in ImSwitch config
```

**Example Usage**:
```java
// µManager script example
mmc.setProperty("ImSwitch Camera", "Exposure", "100");
mmc.snapImage();
ImageProcessor ip = mmc.getImage();
```

### Stage Control

**ImSwitchStage Device**:
- **XYZ positioning**: Precise stage movement
- **Origin setting**: Set coordinate system origin
- **Speed control**: Adjust movement speeds
- **Limits**: Software position limits

**Configuration Parameters**:
```
Device Name: ImSwitch Stage
Property Name: Stage Name
Property Value: ESP32Stage  // As defined in ImSwitch config
```

**Example Usage**:
```java
// Move to absolute position
mmc.setXYPosition("ImSwitch Stage", 1000.0, 2000.0);
mmc.setPosition("ImSwitch Stage", 500.0);  // Z position

// Get current position
double x = mmc.getXPosition("ImSwitch Stage");
double y = mmc.getYPosition("ImSwitch Stage");
double z = mmc.getPosition("ImSwitch Stage");
```

### Illumination Control

**ImSwitchLaser Device**:
- **Power control**: Adjustable laser intensity
- **Wavelength**: Multiple laser support
- **Safety interlocks**: Automatic shutdown features

**ImSwitchLED Device**:
- **Multi-channel**: Independent channel control
- **Pattern display**: LED matrix patterns
- **Synchronized control**: Coordinate with acquisition

**Configuration Example**:
```
Device Name: ImSwitch Laser 405
Property Name: Laser Name  
Property Value: Laser405  // As defined in ImSwitch config
```

## Workflow Integration

### Multi-Channel Acquisition

```java
// µManager BeanShell script for multi-channel imaging
import org.micromanager.api.ScriptInterface;

// Configure channels
String[] channels = {"DAPI", "GFP", "RFP"};
String[] lasers = {"Laser405", "Laser488", "Laser561"};
int[] powers = {25, 50, 30};

for (int i = 0; i < channels.length; i++) {
    // Set laser power
    mmc.setProperty("ImSwitch " + lasers[i], "Power", powers[i]);
    
    // Set channel name
    mmc.setConfig("Channel", channels[i]);
    
    // Acquire image
    mmc.snapImage();
    
    // Process and save
    ImagePlus img = IJ.getImage();
    IJ.saveAs(img, "Tiff", "C:/Data/" + channels[i] + ".tif");
    
    // Turn off laser
    mmc.setProperty("ImSwitch " + lasers[i], "Power", 0);
}
```

### Time-lapse with Stage Scanning

```java
// Time-lapse acquisition with multiple positions
int numTimepoints = 100;
int intervalMs = 60000; // 1 minute intervals
double[][] positions = {{0, 0}, {1000, 0}, {0, 1000}, {1000, 1000}};

for (int t = 0; t < numTimepoints; t++) {
    for (int p = 0; p < positions.length; p++) {
        // Move to position
        mmc.setXYPosition("ImSwitch Stage", positions[p][0], positions[p][1]);
        mmc.waitForDevice("ImSwitch Stage");
        
        // Acquire image
        mmc.snapImage();
        
        // Save with position and time info
        String filename = String.format("T%03d_P%02d.tif", t, p);
        // Save image...
    }
    
    // Wait for next timepoint
    Thread.sleep(intervalMs);
}
```

### Advanced Protocols

**Z-stack Acquisition**:
```java
double startZ = 0.0;
double endZ = 100.0;
double stepZ = 1.0;
int steps = (int)((endZ - startZ) / stepZ);

for (int i = 0; i <= steps; i++) {
    double z = startZ + (i * stepZ);
    mmc.setPosition("ImSwitch Stage", z);
    mmc.waitForDevice("ImSwitch Stage");
    
    mmc.snapImage();
    // Process image...
}
```

## Scripting and Automation

### BeanShell Scripts

µManager's BeanShell scripting provides powerful automation:

```java
// Import ImSwitch utilities
import org.micromanager.imswitch.*;

// Initialize ImSwitch connection
ImSwitchController controller = new ImSwitchController("localhost", 8000);

// Custom acquisition protocol
void customProtocol() {
    // Set up illumination
    controller.setLaserPower("Laser488", 50);
    
    // Multi-position acquisition
    double[][] positions = controller.getPositionList();
    
    for (double[] pos : positions) {
        controller.moveStage(pos[0], pos[1], pos[2]);
        Thread.sleep(1000); // Wait for settling
        
        // Acquire with multiple exposures
        int[] exposures = {10, 50, 100, 500};
        for (int exp : exposures) {
            mmc.setProperty("ImSwitch Camera", "Exposure", exp);
            mmc.snapImage();
            
            // Process and analyze
            ImagePlus img = IJ.getImage();
            // Analysis code...
        }
    }
    
    // Cleanup
    controller.setLaserPower("Laser488", 0);
}

// Run the protocol
customProtocol();
```

### Python Integration

µManager also supports Python scripting:

```python
import numpy as np
from pymmcore import CMMCore
import time

# Initialize µManager core
mmc = CMMCore()
mmc.loadSystemConfiguration("ImSwitch_config.cfg")

# Define acquisition parameters
positions = [(0, 0), (1000, 0), (0, 1000), (1000, 1000)]
laser_powers = [25, 50, 75, 100]

# Run acquisition
for pos in positions:
    # Move stage
    mmc.setXYPosition("ImSwitch Stage", pos[0], pos[1])
    mmc.waitForDevice("ImSwitch Stage")
    
    for power in laser_powers:
        # Set laser power
        mmc.setProperty("ImSwitch Laser", "Power", power)
        
        # Acquire image
        mmc.snapImage()
        img = mmc.getImage()
        
        # Convert to numpy array for analysis
        img_array = np.array(img, copy=False)
        
        # Perform analysis
        mean_intensity = np.mean(img_array)
        print(f"Position {pos}, Power {power}: Mean intensity = {mean_intensity}")
        
        # Save image
        filename = f"pos_{pos[0]}_{pos[1]}_power_{power}.tif"
        # Save logic here...

# Cleanup
mmc.setProperty("ImSwitch Laser", "Power", 0)
```

## Advanced Features

### Custom Properties

Define custom properties for specialized control:

```java
// Add custom property for specialized hardware
mmc.defineProperty("ImSwitch Custom", "SpecialMode", "Normal", 
                  new String[]{"Normal", "HighSpeed", "HighRes"});

// Use in acquisition
mmc.setProperty("ImSwitch Custom", "SpecialMode", "HighRes");
```

### Event Triggers

Set up automated responses to hardware events:

```java
// Define trigger based on stage position
mmc.setProperty("ImSwitch Stage", "TriggerMode", "Position");
mmc.setProperty("ImSwitch Stage", "TriggerPosition", "1000,1000");

// Automated laser control based on position
if (mmc.getXPosition("ImSwitch Stage") > 500.0) {
    mmc.setProperty("ImSwitch Laser", "Power", 100);
} else {
    mmc.setProperty("ImSwitch Laser", "Power", 25);
}
```

### Synchronization

Coordinate multiple devices for complex protocols:

```java
// Synchronized multi-device control
mmc.startSequenceAcquisition("ImSwitch Camera", 100, 0, true);

for (int i = 0; i < 100; i++) {
    // Move stage to next position
    mmc.setXYPosition("ImSwitch Stage", i * 10, 0);
    
    // Wait for stage to settle
    mmc.waitForDevice("ImSwitch Stage");
    
    // Trigger camera
    mmc.setProperty("ImSwitch Camera", "Trigger", "Software");
    
    // Brief illumination pulse
    mmc.setProperty("ImSwitch LED", "Intensity", 100);
    Thread.sleep(10); // 10ms pulse
    mmc.setProperty("ImSwitch LED", "Intensity", 0);
}

mmc.stopSequenceAcquisition("ImSwitch Camera");
```

## Troubleshooting

### Connection Issues

**µManager can't find ImSwitch devices**:
1. Verify ImSwitch is running and µManager integration is enabled
2. Check network connectivity (firewall, port 8000)
3. Restart both ImSwitch and µManager
4. Check ImSwitch console for error messages

**Device timeout errors**:
1. Increase timeout values in µManager configuration
2. Check hardware response times in ImSwitch
3. Verify stable communication with UC2-ESP32

### Configuration Problems

**Property not found errors**:
1. Verify device names match between ImSwitch and µManager configs
2. Check that devices are properly initialized in ImSwitch
3. Review ImSwitch logs for device initialization errors

**Performance issues**:
1. Reduce image acquisition frequency
2. Optimize ImSwitch configuration for speed
3. Use appropriate network settings (local vs. remote)

### Debugging

**Enable verbose logging**:
```java
// In µManager BeanShell
mmc.enableDebugLog(true);
mmc.setProperty("Core", "DebugLogEnabled", "1");
```

**ImSwitch-side debugging**:
```bash
# Start ImSwitch with debug output
python -m imswitch --debug --config micromanager_setup.json
```

## Performance Optimization

### Network Configuration

**Local setup** (ImSwitch and µManager on same machine):
- Use `localhost` or `127.0.0.1`
- Disable unnecessary network security
- Use wired connection for better stability

**Remote setup** (ImSwitch on different machine):
- Use dedicated network for microscope control
- Configure appropriate firewall rules
- Consider VPN for secure remote access

### Hardware Optimization

**Camera settings**:
- Use appropriate ROI to reduce data transfer
- Optimize exposure times for your application
- Consider hardware triggering for precise timing

**Stage movement**:
- Set appropriate acceleration and speed limits
- Use position caching to avoid redundant moves
- Implement settling time delays as needed

## Best Practices

### Workflow Design

1. **Test individually**: Verify each device works in ImSwitch before µManager integration
2. **Start simple**: Begin with basic acquisition before complex protocols
3. **Error handling**: Include proper error checking in scripts
4. **Documentation**: Document custom configurations and scripts

### Safety Considerations

1. **Laser safety**: Always implement proper laser shutdown procedures
2. **Stage limits**: Set software limits to prevent hardware damage
3. **Emergency stops**: Include emergency shutdown capabilities
4. **User training**: Ensure operators understand both systems

## Next Steps

- **[ImSwitch Configuration](../03_Configuration/README.md)** - Set up hardware for µManager integration
- **[Custom Scripting](../04_Tutorials/Scripting.md)** - Advanced automation techniques
- **[UC2-REST](./UC2-REST.md)** - Understanding the hardware communication layer

## Resources

- **[µManager Documentation](https://micro-manager.org/wiki/Micro-Manager)**
- **[Device Adapter Repository](https://github.com/openUC2/openUc2MicroManagerDeviceAdapter)**
- **[µManager Scripting Guide](https://micro-manager.org/wiki/Micro-Manager_Script_Reference)**
- **[ImSwitch API Documentation](https://imswitch.readthedocs.io/)**
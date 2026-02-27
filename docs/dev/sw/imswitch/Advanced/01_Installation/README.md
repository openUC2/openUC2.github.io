# openUC2 OS

The openUC2 OS is a complete, pre-configured operating system image designed specifically for UC2 microscopy systems. It provides a ready-to-use environment with all software, drivers, and configurations pre-installed.

## Images and Screenshots

(the screenshots are outdated, so they've been deleted)

## Overview

The openUC2 OS is a specialized Raspberry Pi OS image that includes:
- **ImSwitch** with all dependencies pre-installed
- **UC2-REST** Python interface for ESP32 communication
- **UC2-ESP32 firmware** flashing tools
- **Docker** with pre-built ImSwitch containers
- **Camera drivers** for supported hardware
- **Configuration templates** for common setups
- **Web interface** for remote control

## Features

### Pre-Installed Software
- **ImSwitch Core**: Latest stable version with all modules
- **Docker Environment**: Pre-built containers ready to run
- **UC2-REST Library**: Python interface for hardware control
- **Firmware Tools**: ESP32 flashing utilities and firmware
- **Development Tools**: Python, Git, VS Code Server (optional)

### Hardware Support
- **Cameras**: HIK, Daheng, Raspberry Pi, USB cameras
- **Motors**: UC2-ESP32 controlled stages and focus systems
- **Illumination**: LED arrays, lasers, matrix displays
- **Sensors**: Environmental monitoring, feedback systems

### Network Features
- **WiFi Hotspot**: Create isolated network for microscope control
- **Web Interface**: Browser-based control panel (Cockpit)
- **SSH Access**: Remote terminal access
- **VNC Server**: Remote desktop access

## Installation

### Requirements
- **Raspberry Pi 4** (4GB RAM minimum, 8GB recommended)
- **MicroSD Card** (32GB minimum, Class 10 or better)
- **UC2 Hardware** (optional for initial setup)

### Step 1: Download Image

```bash
# Download the latest openUC2 OS image or go to Zenodo and download it here https://zenodo.org/records/14988987
wget https://zenodo.org/records/14988987/files/rpi-uc2-27f9a21.zip?download=1
```

### Step 2: Flash to SD Card

**Using Raspberry Pi Imager (Recommended):**
1. Download [Raspberry Pi Imager](https://www.raspberrypi.org/software/)
2. Select "Use custom image" and choose the downloaded .img.xz file
3. Select your SD card
4. Click "Write" and wait for completion

**Using dd (Linux/macOS):**
```bash
# Extract image
xz -d imswitch-forklift-os.img.xz

# Flash to SD card (replace /dev/sdX with your SD card device)
sudo dd if=imswitch-forklift-os.img of=/dev/sdX bs=4M status=progress
sync
```

### Step 3: First Boot

1. Insert SD card into Raspberry Pi
2. Power on the Raspberry Pi
3. Observe for an SSID with name `openuc2-XXX-XXX-XXX`

## Configuration

For detailed information about ImSwitch configuration files, see the [Configuration Guide](../03_Configuration/README.md).

**Quick Start Configuration:**
```bash
# Navigate to configuration directory
cd /home/pi/ImSwitchConfig
```

Copy a template configuration. Configuration files are stored in `/home/pi/Documents/ImSwitchConfig/config/` and can be edited using the desktop interface or via SSH.

```
# Edit configuration for your hardware
nano config/imcontrol_options.json #=> enter the name you want to use
```

## Advanced Features

### Custom Configurations

**Hardware Configuration:**
```bash
# Edit hardware configuration
nano /home/pi/ImSwitchConfig/imcontrol_setups/my_setup.json

# Set as active configuration
echo '{"setupFileName": "my_setup.json"}' > /home/pi/ImSwitchConfig/config/imcontrol_options.json
```

**Scripting:**
```bash
# Custom scripts directory
ls /home/pi/ImSwitchConfig/scripts/

# Add your custom scripts
cp my_script.py /home/pi/ImSwitchConfig/scripts/
```

## Troubleshooting

### Common Issues

**Hardware not detected:**
```bash
# Check USB devices
lsusb

# Check serial ports
ls /dev/tty*
```

### Log Files

**Important log locations:**
- **ImSwitch**: `/home/pi/.imswitch/logs/`
- **System**: `/var/log/syslog`
- **Docker**: `journalctl -u imswitch-docker`

### Recovery

**Reset to defaults:**
```bash
# Reset ImSwitch configuration
rm -rf /home/pi/ImSwitchConfig/config/*
# then restart imswitch
```

## Support and Resources

### Getting Help
- **Documentation**: This guide and linked resources
- **GitHub Issues**: [openUC2 OS Repository](https://github.com/openUC2/imswitch-os/issues)
- **Community Forum**: [openUC2.com](https://openuc2.com)
- **Email Support**: Contact via GitHub or forum

### Related Projects
- **ImSwitch Core**: [ImSwitch Repository](https://github.com/openUC2/ImSwitch)
- **UC2-REST**: [UC2-REST Repository](https://github.com/openUC2/UC2-REST)
- **UC2-ESP32**: [UC2-ESP32 Firmware](https://github.com/youseetoo/uc2-esp32)

## Next Steps

After setting up openUC2 OS:
1. **[Configure your hardware](../03_Configuration/README.md)** - Set up specific devices
2. **[Basic usage tutorial](../02_Usage/README.md)** - Learn ImSwitch operation
3. **[Advanced tutorials](../04_Tutorials/README.md)** - Explore advanced features

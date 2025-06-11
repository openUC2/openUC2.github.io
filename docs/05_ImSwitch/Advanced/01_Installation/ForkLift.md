# ImSwitch Forklift OS

The ImSwitch Forklift OS is a complete, pre-configured operating system image designed specifically for UC2 microscopy systems. It provides a ready-to-use environment with all software, drivers, and configurations pre-installed.

## Overview

The Forklift OS is a specialized Raspberry Pi OS image that includes:
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
- **Image Processing**: Napari, OpenCV, and other tools
- **Development Tools**: Python, Git, VS Code Server

### Hardware Support
- **Cameras**: HIK, Daheng, Raspberry Pi, USB cameras
- **Motors**: UC2-ESP32 controlled stages and focus systems
- **Illumination**: LED arrays, lasers, matrix displays
- **Sensors**: Environmental monitoring, feedback systems

### Network Features
- **WiFi Hotspot**: Create isolated network for microscope control
- **Web Interface**: Browser-based control panel
- **SSH Access**: Remote terminal access
- **VNC Server**: Remote desktop access

## Installation

### Requirements
- **Raspberry Pi 4** (4GB RAM minimum, 8GB recommended)
- **MicroSD Card** (32GB minimum, Class 10 or better)
- **UC2 Hardware** (optional for initial setup)

### Step 1: Download Image

```bash
# Download the latest Forklift OS image
wget https://github.com/openUC2/imswitch-os/releases/latest/download/imswitch-forklift-os.img.xz

# Verify checksum (recommended)
wget https://github.com/openUC2/imswitch-os/releases/latest/download/SHA256SUMS
sha256sum -c SHA256SUMS
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
2. Connect keyboard, mouse, and display (for initial setup)
3. Power on the Raspberry Pi
4. Follow the setup wizard:
   - Set locale and timezone
   - Configure WiFi (optional)
   - Enable SSH (recommended)
   - Set up user account

## Configuration

### Initial Setup

**Access Methods:**
- **Direct**: Connect keyboard/mouse/display
- **SSH**: `ssh pi@imswitch-pi.local` (default password: see setup wizard)
- **Web Interface**: `http://imswitch-pi.local:8001`

**Default Credentials:**
- Username: `pi`
- Password: Set during first boot
- SSH: Enabled by default

### Network Configuration

**WiFi Hotspot Mode:**
```bash
# Enable hotspot mode (creates isolated network)
sudo systemctl enable hostapd
sudo systemctl enable dnsmasq

# Configure hotspot settings
sudo nano /etc/hostapd/hostapd.conf
```

**Client Mode (Connect to existing WiFi):**
```bash
# Use the desktop WiFi settings or command line
sudo raspi-config
```

### ImSwitch Configuration

**Quick Start Configuration:**
```bash
# Navigate to configuration directory
cd /home/pi/ImSwitchConfig

# Copy a template configuration
cp templates/uc2_basic.json config/imcontrol_options.json

# Edit configuration for your hardware
nano config/imcontrol_options.json
```

**Available Templates:**
- `uc2_basic.json` - Basic UC2 setup with stage and LED
- `uc2_camera.json` - UC2 with camera support
- `uc2_multicolor.json` - Multi-color LED and laser setup
- `uc2_advanced.json` - Full featured configuration

## Usage

### Starting ImSwitch

**Method 1: Desktop GUI**
- Double-click "ImSwitch" desktop icon
- GUI will launch automatically

**Method 2: Command Line**
```bash
# Activate ImSwitch environment
source /home/pi/imswitch-env/bin/activate

# Launch ImSwitch
python -m imswitch
```

**Method 3: Docker (Headless)**
```bash
# Start ImSwitch in Docker (web interface only)
sudo systemctl start imswitch-docker

# Access via web browser: http://localhost:8001
```

### Web Interface

The Forklift OS includes a web-based control interface accessible at:
- **Local**: `http://localhost:8001`
- **Network**: `http://imswitch-pi.local:8001`

**Features:**
- Live camera feed
- Motor control
- LED/laser control
- Configuration management
- System monitoring

### System Management

**Update ImSwitch:**
```bash
# Update to latest version
cd /home/pi/ImSwitch
git pull origin master
pip install -e .

# Restart services
sudo systemctl restart imswitch-docker
```

**System Updates:**
```bash
# Update OS packages
sudo apt update && sudo apt upgrade

# Update ImSwitch OS components
sudo /home/pi/scripts/update-imswitch-os.sh
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

### Development Mode

**Enable Development Tools:**
```bash
# Start VS Code Server for remote development
code-server --bind-addr 0.0.0.0:8080 /home/pi/ImSwitch

# Access via browser: http://imswitch-pi.local:8080
```

**Git Configuration:**
```bash
# Configure Git for development
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"

# Add SSH key for GitHub (optional)
ssh-keygen -t rsa -b 4096 -C "your.email@example.com"
```

## Troubleshooting

### Common Issues

**ImSwitch won't start:**
```bash
# Check system logs
journalctl -u imswitch-docker -f

# Restart services
sudo systemctl restart imswitch-docker

# Check configuration
python -c "import json; json.load(open('/home/pi/ImSwitchConfig/config/imcontrol_options.json'))"
```

**Hardware not detected:**
```bash
# Check USB devices
lsusb

# Check serial ports
ls /dev/tty*

# Check permissions
sudo usermod -a -G dialout pi
```

**Network issues:**
```bash
# Check network status
ip addr show

# Restart network services
sudo systemctl restart dhcpcd
sudo systemctl restart hostapd
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
cp /home/pi/ImSwitchConfig/templates/uc2_basic.json /home/pi/ImSwitchConfig/config/imcontrol_options.json

# Reset network settings
sudo raspi-config  # Use networking options
```

**System recovery:**
```bash
# Run system repair script
sudo /home/pi/scripts/repair-system.sh

# Or re-flash SD card with latest image
```

## Updates and Maintenance

### Regular Updates

**Monthly maintenance:**
```bash
# Run maintenance script
sudo /home/pi/scripts/monthly-maintenance.sh
```

**Manual updates:**
```bash
# Update OS
sudo apt update && sudo apt upgrade

# Update ImSwitch
cd /home/pi/ImSwitch && git pull && pip install -e .

# Update UC2-REST
cd /home/pi/UC2-REST && git pull && pip install -e .
```

### Backup and Restore

**Backup configuration:**
```bash
# Backup to USB drive
sudo /home/pi/scripts/backup-config.sh /media/pi/USB_DRIVE/

# Backup entire system (advanced)
sudo dd if=/dev/mmcblk0 of=/media/pi/USB_DRIVE/system-backup.img
```

## Support and Resources

### Getting Help
- **Documentation**: This guide and linked resources
- **GitHub Issues**: [ImSwitch OS Repository](https://github.com/openUC2/imswitch-os/issues)
- **Community Forum**: [openUC2.com](https://openuc2.com)
- **Email Support**: Contact via GitHub or forum

### Related Projects
- **ImSwitch Core**: [ImSwitch Repository](https://github.com/openUC2/ImSwitch)
- **UC2-REST**: [UC2-REST Repository](https://github.com/openUC2/UC2-REST)
- **UC2-ESP32**: [UC2-ESP32 Firmware](https://github.com/youseetoo/uc2-esp32)

## Next Steps

After setting up Forklift OS:
1. **[Configure your hardware](../03_Configuration/README.md)** - Set up specific devices
2. **[Basic usage tutorial](../02_Usage/README.md)** - Learn ImSwitch operation
3. **[Advanced tutorials](../04_Tutorials/README.md)** - Explore advanced features
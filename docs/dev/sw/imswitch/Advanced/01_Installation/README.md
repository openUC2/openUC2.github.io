# ImSwitch OS

The ImSwitch OS is a complete, pre-configured operating system image designed specifically for UC2 microscopy systems. It provides a ready-to-use environment with all software, drivers, and configurations pre-installed.

## Images and Screenshots

(the screenshots are outdated, so they've been deleted)

## Overview

The ImSwitch OS is a specialized Raspberry Pi OS image that includes:
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
# Download the latest ImSwitch OS image or go to Zenodo and download it here https://zenodo.org/records/14988987
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

### Initial Setup

**Access Methods:**
- **SSH**: `ssh pi@openuc2-xxxx-xxxx-xxx.local` (default password: `youseetoo`, default login: `pi` )
- **Web Interface**: `http://imswitch-pi.local:8001`

**Default Credentials:**
- Username: `pi`
- Password: `youseetoo`
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

**FireWall Settings*:**

If you haven't explicitly configured the firewall to allow traffic into a dedicated port (e.g. 8005) from the outside world you have to explicitly open it by doing:

ImSwitch runs on 8001 (REST),  8002 (SOCKET) per default:
```
sudo firewall-cmd --zone=public --add-port=8001/tcp; sudo firewall-cmd --zone=nm-shared --add-port=8001/tcp
sudo firewall-cmd --zone=public --add-port=8002/tcp; sudo firewall-cmd --zone=nm-shared --add-port=8002/tcp
```
in an SSH session on the RPi. Then you can test this is by doing `curl localhost:8005` (e.g. if you run a python server as `python -m http.server 8005`). If you get valid HTML, then it's extremely likely that the firewall is blocking external access to port 8005.



### ImSwitch Configuration

For detailed information about ImSwitch configuration files, see the [Configuration Guide](../03_Configuration/README.md).

**Quick Start Configuration:**
```bash
# Navigate to configuration directory
cd /home/pi/ImSwitchConfig

# Copy a template configuration
Configuration files are stored in `/home/pi/Documents/ImSwitchConfig/config/` and can be edited using the desktop interface or via SSH.

# Edit configuration for your hardware
nano config/imcontrol_options.json #=> enter the name you want to use
```

## Usage

### Web Interface

The ImSwitch OS includes a web-based control interface accessible at:
- **Local**: `http://localhost:8001`
- **Network**: `http://opencu2-XXX-xxx-xxx.local:8001`

### Web Interfaces

The ImSwitch OS provides several web interfaces for remote access:

- **Cockpit Web Console**: Available at `http://[raspberry-pi-ip]:9090/admin/cockpit/` for system administration
- **ImSwitch React Interface**: Available at `http://[raspberry-pi-ip]:8001/imswitch/index.html` for microscope control  
- **Swagger API UI**: Available at `http://[raspberry-pi-ip]:8001/docs` 
- **WebSocket Control**: Available at `http://[raspberry-pi-ip]:8002` for real-time data streams
actually it's https by default to connect to it via a statically hosted website e.g. https://youseetoo.github.io/imswitch/index.html

**Features:**
- Live camera feed
- Motor control
- LED/laser control
- Configuration management
- System monitoring

### System Management

**Update ImSwitch:**

```
forklift pallet upgrade --force @main
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

**Check docker compose is running:**
```
docker ps
```

### Docker Compose Services

The ImSwitch OS includes a pre-configured docker-compose setup with the following services:

```yaml
version: '3.8'
services:
  imswitch:
    image: ghcr.io/openuc2/imswitch-noqt-x64:latest
    ports:
      - "8001:8001"
      - "2222:22"
    environment:
      - HEADLESS=1
      - HTTP_PORT=8001
      - CONFIG_FILE=example_uc2_hik_flowstop.json
      - UPDATE_GIT=0
      - UPDATE_CONFIG=0
    volumes:
      - /home/pi/Documents/ImSwitchConfig:/config
      - /home/pi/Documents/ImSwitchData:/data
    privileged: true
    restart: unless-stopped

  portainer:
    image: portainer/portainer-ce:latest
    ports:
      - "9000:9000"
    volumes:
      - /var/run/docker.sock:/var/run/docker.sock
      - portainer_data:/data
    restart: unless-stopped

volumes:
  portainer_data:
```

This setup provides:
- **ImSwitch**: Main microscopy control application
- **Portainer**: Docker container management interface
- **Persistent Data**: Configuration and data volumes for data retention

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
# then restart imswitch
```

## Updates and Maintenance

### Manual Updates

For manual updates, use the provided update script:
```bash
# Update ImSwitch Docker containers
bash ~/Desktop/update_docker_container.sh

# Or manually pull latest images
sudo docker-compose down
sudo docker pull ghcr.io/openuc2/imswitch-noqt-x64:latest
sudo docker-compose up -d
```

### Update Components

```bash
# Update ImSwitch configuration files
cd /home/pi/Documents/ImSwitchConfig
git pull origin master

# Update UC2-REST library
pip install --upgrade UC2-REST

# Update ESP32 firmware tools
cd /home/pi/uc2-esp32
git pull origin main
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

After setting up ImSwitch OS:
1. **[Configure your hardware](../03_Configuration/README.md)** - Set up specific devices
2. **[Basic usage tutorial](../02_Usage/README.md)** - Learn ImSwitch operation
3. **[Advanced tutorials](../04_Tutorials/README.md)** - Explore advanced features

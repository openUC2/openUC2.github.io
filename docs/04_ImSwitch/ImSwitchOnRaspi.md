# Quickstart Guide: Using Raspberry Pi with ImSwitch and UC2-ESP

The Raspberry Pi serves as a bridge between the UC2-ESP board and a USB3 camera, running the ImSwitch software inside a Docker container. The system allows you to control the microscope through a web interface accessible from a phone or laptop.

> **Note:** This setup is experimental! You can try a demo version of the latest ImSwitch here:
> - [Live Demo](https://imswitch.openuc2.com/imswitch/index.html)
> - [ImSwitch API](https://imswitch.openuc2.com/docs)

---

## Getting Started

### Raspberry Pi Login Credentials
- **Username:** `UC2`
- **Password:** `youseetoo`

The system runs Raspberry Pi OS Lite and includes a Docker integration for ImSwitch. You can log in via SSH to start the ImSwitch server.

[ImSwitch Docker Installation Guide](https://github.com/openUC2/ImSwitchDockerInstall?tab=readme-ov-file#imswitch--docker-on-raspi)

### WiFi Hotspot
- **SSID:** `openuc2-RANDOMNUMBER`
- **Password:** `youseetoo`

To configure the hotspot using RaspAP:
1. Open a browser and go to [http://10.3.141.1/](http://10.3.141.1/)
2. Login with:
   - **Username:** `admin`
   - **Password:** `secret`

### Accessing ImSwitch
If the Docker container starts automatically, access ImSwitch at:
- [https://10.3.141.1:8001/imswitch/index.html](https://10.3.141.1:8001/imswitch/index.html)
- Ignore self-signed certificate warnings (this will be fixed later).

### Connecting via SSH
To manually start ImSwitch:
```sh
ssh uc2@10.3.141.1  # Password: youseetoo
cd ~/Desktop
./launch_docker_container.sh
```

### Modifying ImSwitch Configuration
To adjust settings, edit the configuration file:
```sh
nano ~/ImSwitchConfig/config/imcontrol_options.json
```
For example, changing the active setup file:
```json
{
    "setupFileName": "example_uc2_vimba.json",
    "recording": {
        "outputFolder": "./ImSwitch/ImSwitch/recordings",
        "includeDateInOutputFolder": true
    }
}
```

More details: [ImSwitchConfig GitHub](https://github.com/openUC2/imswitchconfig)

---

## Hardware Setup
- Connect **UC2-ESP Board** via USB to the Raspberry Pi
- Connect **USB3 Camera** to Raspberry Pi

To access ImSwitch via a browser:
- Open: [https://10.3.141.1:8001/imswitch/index.html](https://10.3.141.1:8001/imswitch/index.html)

![](./IMAGES/imswitchraspi/ImSwitchInTheWeb.png)

---

## Installing Raspberry Pi OS & ImSwitch

There are two ways to set up the Raspberry Pi for ImSwitch:
1. **Manual Installation** (for full control over package installation)
2. **Pre-built Image** (faster setup using a ready-made Raspberry Pi image)

### **Option 1: Manual Installation**

#### **Step 1: Install Raspberry Pi OS**
1. Download and install the Raspberry Pi Imager: [Download Here](https://www.raspberrypi.com/software/)

![](./IMAGES/imswitchraspi/Rasberry_pi_download.png)

2. Flash **Raspberry Pi OS 64-bit Bookworm Lite** onto an SD card (64GB recommended for Raspberry Pi 5).
3. Configure settings:
   - Enable SSH
   - Set WiFi SSID and password
4. Insert the SD card into the Raspberry Pi and boot it up.

![](./IMAGES/imswitchraspi/RaspiOS_1.png)
![](./IMAGES/imswitchraspi/RaspiOS_2.png)

#### **Step 2: Connect to Raspberry Pi**
1. Wait ~5 minutes for booting.
2. Find the Raspberry Pi’s IP address using:
   - [Angry IP Scanner](https://angryip.org/download)
   - A monitor connected via micro-HDMI

![](./IMAGES/imswitchraspi/angry_IP_scanner.png)

3. Log in via SSH:
```sh
ssh uc2@IP-OF-YOURRASPI
```

![](./IMAGES/imswitchraspi/ssh_uc2_IP_of_your_Raspi.png)

#### **Step 3: Install ImSwitch**
1. Run the following commands:
```sh
mkdir Downloads
mkdir Desktop
sudo apt-get install git -y
cd ~/Downloads
git clone https://github.com/openUC2/ImSwitchDockerInstall
cd ImSwitchDockerInstall
chmod +x install_all.sh
./install_all.sh
```

2. This will:
   - Install Docker
   - Install necessary camera drivers (Allied Vision, HIK, Daheng)
   - Set up ImSwitch via Docker
   - Create startup files for launching ImSwitch

3. Start ImSwitch:
```sh
bash ~/Desktop/launch_docker_container.sh
```
4. Access the interface at:
```sh
https://IP-OF-YOUR-RASPI:8001/imswitch/index.html
```
5. Update ImSwitch when needed:
```sh
bash ~/Desktop/update_docker_container.sh
```

---

### **Option 2: Using the Pre-Built Forklift Image**

This is a compiled image for the Raspberry Pi 5 to deploy ImSwitch in Docker. 

It is based on the following repository that builds the image file based on Raspberry Pi OS lite using GitHub Actions:

- [ImSwitch OS Repository](https://github.com/openuc2/imswitch-os/tree/main)
- [OpenUC2 Pallet Repository](https://github.com/openUC2/pallet)

The image is built from the following workflow:

- [GitHub Actions Build](https://github.com/beniroquai/imswitch-os/actions/runs/13718023729)

#### **Requirements**
- microSD Card with >32GB
- Raspberry Pi 4 or preferably Pi 5 (8GB RAM recommended)
- microSD Card reader

If you prefer a faster setup, you can use this **pre-built image** that includes all necessary software and drivers. This image was created with the [Forklift Project](https://github.com/forklift-run) and automates all setup steps.

### **How to Use the Pre-Built Image:**
1. **Download the image** from Zenodo: [Zenodo Image Link](https://zenodo.org/uploads/14988987)
2. **Extract the image** (~3GB as a ZIP, ~11GB uncompressed).
3. **Flash it to an SD card** using [Raspberry Pi Imager](https://www.raspberrypi.com/software/).

#### **Flashing the Image**
Use the Raspberry Pi Imager to flash the image onto an SD card, then insert the SD card into the Raspberry Pi and boot it.

![](./IMAGES/imswitchraspi/RaspiOS_2.png)

1. Select your Raspberry Pi model.
2. Choose the downloaded image file as the OS type.
3. Select the SD card as the target.
4. Do **not** specify additional user-specific settings.

#### **Default Credentials**
- **SSID:** `openUC2-unknown`
- **WiFi Password:** `copepode`
- **Username:** `pi`
- **User Password:** `youseetoo`

> **Note:** The Forklift image is updated automatically and ensures all software is correctly configured.

For a detailed breakdown of the image creation process, see:
[ImSwitch OS GitHub Setup Script](https://github.com/beniroquai/imswitch-os/blob/main/setup.sh#L60)

### **Connecting to the Raspberry Pi**
1. Wait until the Raspberry Pi boots and you see the SSID `openUC2-unknown`.
2. Connect to the SSID and navigate to `http://192.168.4.1:9090` to access Cockpit.

![](./IMAGES/ImSwitch-OS-1.png)

- **Cockpit Login Credentials:**
  - Username: `pi`
  - Password: `youseetoo`

3. Connect to ImSwitch by navigating to `https://192.168.4.1:8001/imswitch/index.html`. Accept the HTTPS warning (the certificate is self-signed for now).

![](./IMAGES/ImSwitch-OS-3.png)

### **Configuring ImSwitch**
The default configuration is in **Demo Mode**. For hardware-specific configurations, refer to the [ImSwitch Configuration Guide](https://openuc2.github.io/docs/ImSwitch/ImSwitchOnRaspi#modifying-imswitch-configuration).




---

## Summary
- The **manual installation** allows full customization of Raspberry Pi OS and software.
- The **pre-built image** provides a quick and reliable setup, including all necessary drivers.

For additional details, visit: [ImSwitch Documentation](https://openuc2.github.io/docs/ImSwitch/ImSwitchOnRaspi/)

---

## Troubleshooting & Support
- If you encounter issues, check the logs using:
```sh
docker logs $(docker ps -q --filter ancestor=ghcr.io/openuc2/imswitch-noqt-arm64:latest)
```
- Join our community for help: [OpenUC2 GitHub](https://github.com/openUC2/)

Happy experimenting!

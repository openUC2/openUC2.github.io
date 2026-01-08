## 1. Software Philosophy

Modern microscopy requires orchestration. openUC2 relies on **ImSwitch**, an open-source microscopy control framework designed for:

* Modular hardware abstraction
* Time-synchronized workflows
* Automation and long-term experiments

To reduce installation complexity, ImSwitch is bundled into a **fully versioned operating system image** for the Raspberry Pi.

Our goal:
**“Become the Raspberry Pi for optics.”**

---

## 2. ImSwitch OS (Forklift-based)

The openUC2 Raspberry Pi image is built using **Forklift**, a GitHub-like system for operating systems.

### Key Advantages

* Fully versioned OS builds
* Reproducible images
* Docker-based ImSwitch services
* CI-built via GitHub Actions
* Tested before release

**Suggested image placeholder:**
`[Screenshot: ImSwitch OS desktop / landing page]`

---

## 3. Downloading the Image

Currently, images are hosted externally due to size constraints.

**Download location (placeholder):**
`[URL: Google Drive / Zenodo release link]`

> Future releases will be published directly via GitHub releases once size constraints are resolved.

---

## 4. Flashing the SD Card

### Requirements

* Raspberry Pi 4 (≥4 GB RAM recommended)
* microSD card ≥ 64 GB (minimum ~46 GB required)
* Raspberry Pi Imager

### Flashing Steps

1. Download **Raspberry Pi Imager**
2. Select **Custom Image**
3. Choose the downloaded `.img` file
4. Flash to SD card
5. Insert SD card into Raspberry Pi

---

## 5. First Boot and Access

After boot, connect to the WiFi network:

* SSID: `openUC2-XXXX`
* Password: `youseetoo`

Open a browser and navigate to:

* `http://openuc2.local`
* or `http://192.168.4.1`

---

## 6. Landing Page Dashboard

The landing page provides:

* System status overview
* Network information
* Links to ImSwitch
* Remote access options
* Developer tools

**Suggested screenshot placeholder:**
`[Screenshot: openUC2 landing dashboard]`

---

## 7. ImSwitch Interface

Click **ImSwitch Instance** on the landing page.

Features include:

* Live camera view
* Stage control
* Illumination control
* Experiment orchestration

Configuration is accessed via:

**Settings → Configuration (top right)**

---

## 8. Configuration Files

Currently, experiments are defined using **JSON configuration files**.

* Location:
  `/home/pi/Documents/ImSwitchConfig/config/`

Preconfigured examples exist for:

* HIK cameras
* LED matrices
* UC2 ESP32 stages

> Improving usability and introducing guided configuration tools is an active development goal.

---

## 9. Networking and Internet Access

### Options

* Ethernet (recommended)
* Switch to external WiFi network via landing page
* Standalone hotspot mode

Ethernet provides the most stable setup for updates.

---

## 10. Remote Access (Tailscale)

The system supports **Tailscale** for secure remote access.

* Enable via landing page → Remote
* Allows maintenance, debugging, and remote experiments

**Suggested image placeholder:**
`[Screenshot: Remote access configuration section]`

---

## 11. Developer Access

### Terminal Access

* Username: `pi`
* Password: `youseetoo`

Access methods:

* Web terminal via landing page
* SSH:

  ```
  ssh pi@openuc2-xxxx.local
  ```

---

## 12. Updates and Recovery

### Updates

* Docker containers can be updated via developer tools
* OS images are versioned and reproducible

### Recovery

If the SD card becomes corrupted:

* Re-flash the image
* Note: experiment data and configs are lost unless backed up

---

## 13. Where Configuration Lives

All ImSwitch-related files:

```
/home/pi/Documents/ImSwitchConfig/
```

Includes:

* Hardware configs
* Experiment definitions
* Scripts
* Logs

---

## 14. DPC and Advanced Imaging

For Mini-FRAME systems, the **DPC Controller** can be enabled via the ImSwitch App Manager.

It enables time-synchronized acquisitions using:

* Left
* Right
* Top
* Bottom illumination

From these, DPC images are computationally reconstructed.

**Suggested image placeholder:**
`[Diagram: DPC illumination sequence]`

---

## 15. Next Steps

* Customize your configuration JSON
* Explore ImSwitch workflows
* Enable remote access
* Integrate additional UC2 modules





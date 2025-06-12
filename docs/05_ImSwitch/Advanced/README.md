# ImSwitch Advanced Documentation

This section provides comprehensive guides for ImSwitch beyond the basic [Quickstart Guide](../01_Quickstart.md).

## 🎯 Quick Navigation

### Essential for All Users
- **[Installation Guides](./01_Installation/)** - Docker, Native, and ForkLift OS installation
- **[Usage Tutorials](./02_Usage/)** - Basic operations and integrations
- **[Configuration](./03_Configuration/)** - System and hardware configuration

### Advanced Users & Developers
- **[Tutorials](./04_Tutorials/)** - In-depth workflows and integration examples
- **[Device-Specific](./05_Device-Specific/)** - Hardware drivers and API clients
- **[Experimental](./06_Experimental/)** - Bleeding-edge features and development tools
- **[Applications](./07_Applications/)** - Specialized use cases and deployments

## 📋 What Do I Need?

### **Just Starting with ImSwitch?**
→ Begin with [Installation](./01_Installation/) then [Usage](./02_Usage/)

### **Setting up Hardware?**
→ Check [Configuration](./03_Configuration/) and [Device-Specific](./05_Device-Specific/)

### **Need Specific Camera Drivers?**
→ Go to [Device-Specific](./05_Device-Specific/) → [Daheng Camera](./05_Device-Specific/Daheng-Camera.md)

### **Want Remote Control?**
→ See [Device-Specific](./05_Device-Specific/) → [ImSwitch Client](./05_Device-Specific/ImSwitch-Client.md)

### **Building Custom Workflows?**
→ Explore [Tutorials](./04_Tutorials/) for Jupyter notebooks and advanced integrations

### **Deploying on Raspberry Pi?**
→ Check [Applications](./07_Applications/) → [WiFi Access Point](./07_Applications/WiFi-Access-Point.md)

### **Contributing to Development?**
→ See [Experimental](./06_Experimental/) for development tools and bleeding-edge features

## 📚 Section Overview

### 1. [Installation](./01_Installation/)
Complete installation guides for all platforms:
- **Docker** (Recommended) - One-command setup with persistent data
- **Native** - Python installation for Windows, macOS, Linux
- **ForkLift** - Pre-configured OS image for immediate use

### 2. [Usage](./02_Usage/)
Essential usage tutorials:
- **UC2-REST** - Python interface for hardware control
- **Micromanager** - µManager integration and workflows
- **Updates** - Keeping your system current

### 3. [Configuration](./03_Configuration/)
System configuration documentation:
- JSON configuration files
- Hardware setup examples
- Device manager configuration
- Integration settings

### 4. [Tutorials](./04_Tutorials/)
Advanced integration tutorials:
- **Image Processing** - Napari integration and analysis pipelines
- **Jupyter Workflows** - Interactive microscopy notebooks
- **UC2-ESP Getting Started** - ESP32 firmware tutorial
- **UC2-REST Getting Started** - Python interface deep dive

### 5. [Device-Specific](./05_Device-Specific/)
Hardware-specific guides:
- **Daheng Camera** - Driver installation and setup
- **ImSwitch Client** - REST API Python wrapper
- Additional device drivers and interfaces

### 6. [Experimental](./06_Experimental/)
⚠️ **Development & Testing Only**:
- **Headless Mode** - GUI-less operation for resource-constrained devices
- **Auto-Generated Tutorials** - Developer documentation
- Bleeding-edge features under development

### 7. [Applications](./07_Applications/)
Specialized deployments:
- **WiFi Access Point** - Raspberry Pi network setup
- Field deployment configurations
- Mobile microscopy setups

## 🚀 Recommended Learning Path

### Beginners
1. [Docker Installation](./01_Installation/Docker.md)
2. [Basic Usage](./02_Usage/)
3. [Configuration](./03_Configuration/)

### Intermediate Users
1. [Native Installation](./01_Installation/Native.md)
2. [UC2-REST Interface](./02_Usage/UC2-REST.md)
3. [Device Configuration](./05_Device-Specific/)

### Advanced Users
1. [Custom Workflows](./04_Tutorials/Jupyter-Workflows.md)
2. [Image Processing](./04_Tutorials/Image-Processing.md)
3. [Specialized Applications](./07_Applications/)

### Developers
1. [Experimental Features](./06_Experimental/)
2. [UC2-ESP Development](./04_Tutorials/UC2-ESP-Getting-Started.md)
3. [Custom Device Integration](./05_Device-Specific/)

## 💡 Tips for Success

- **Start with Docker** for the easiest setup experience
- **Read the configuration guides** before connecting hardware
- **Use the Quickstart first** to verify basic functionality
- **Check device-specific guides** for your camera/hardware
- **Try Jupyter workflows** for interactive analysis

## 🔗 Related Documentation

- **[Main UC2 Documentation](../../)** - Overall UC2 ecosystem
- **[Electronics](../../04_Electronics/)** - Hardware control and interfaces
- **[Assembly](../../01_Assembly/)** - Building UC2 hardware
- **[Community Forum](https://openuc2.discourse.group/)** - Get help and share experiences
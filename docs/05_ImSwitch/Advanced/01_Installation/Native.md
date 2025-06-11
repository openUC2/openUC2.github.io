# ImSwitch Native Python Installation

This guide covers installing ImSwitch directly on your system using Python, suitable for development and advanced users who need full control over the installation.

## Prerequisites

- Python 3.10 or higher
- Git
- Visual Studio Code (recommended)
- Platform-specific development tools

## Windows Installation

### Step 1: Install Required Software

1. **Visual Studio Code**
   - Download from [VS Code website](https://code.visualstudio.com/Download)
   - Install with default settings

2. **Git for Windows**
   - Download from [Git website](https://git-scm.com/download/win)
   - Install with default settings

3. **Miniconda**
   - Download from [Miniconda website](https://docs.conda.io/en/latest/miniconda.html)
   - Install the 64-bit version
   - **Important**: Select "Add Anaconda to my PATH environment variable" during installation

### Step 2: Clone Repositories

Open Command Prompt and navigate to your preferred directory:

```bash
cd C:\Users\<YourUsername>\Downloads

# Clone required repositories
git clone https://github.com/openUC2/UC2-REST
git clone https://github.com/openUC2/ImSwitch
git clone https://gitlab.com/bionanoimaging/nanoimagingpack
```

### Step 3: Create Environment and Install

```bash
# Create new conda environment
conda create -n imswitch python=3.10

# Activate environment
conda activate imswitch

# Install ImSwitch
cd ImSwitch
pip install -e .

# Install UC2-REST
cd ../UC2-REST
pip install -e .

# Install NanoImagingPack (optional, for advanced image processing)
cd ../nanoimagingpack
pip install -e .
```

### Step 4: Install Hardware Drivers

**UC2 Electronics (CH340 Driver):**
1. Download [CH340 driver](https://sparks.gogo.co.nz/assets/IMSWITCH/_site_/downloads/CH34x_Install_Windows_v3_4.zip)
2. Extract and run the installer
3. Device will appear as COM port in Device Manager

**UC2 Electronics (CP210x Driver):**
1. Download [CP210x driver](https://www.silabs.com/developers/usb-to-uart-bridge-vcp-drivers)
2. Install following manufacturer instructions

## Linux/Ubuntu Installation

### Step 1: Install Dependencies

```bash
# Update package list
sudo apt update

# Install required packages
sudo apt install -y python3-pip python3-venv git build-essential

# Install Python development headers
sudo apt install -y python3-dev

# For camera support
sudo apt install -y libusb-1.0-0-dev
```

### Step 2: Clone Repositories

```bash
cd ~/Downloads

# Clone required repositories
git clone https://github.com/openUC2/UC2-REST
git clone https://github.com/openUC2/ImSwitch
git clone https://gitlab.com/bionanoimaging/nanoimagingpack
```

### Step 3: Create Virtual Environment

```bash
# Create virtual environment
python3 -m venv ~/imswitch-env

# Activate environment
source ~/imswitch-env/bin/activate

# Install ImSwitch and dependencies
cd ~/Downloads/ImSwitch
pip install -e .

# Install UC2-REST
cd ~/Downloads/UC2-REST
pip install -e .

# Install NanoImagingPack (optional)
cd ~/Downloads/nanoimagingpack
pip install -e .
```

### Step 4: Hardware Setup

**USB Serial Devices:**
```bash
# Add user to dialout group for serial port access
sudo usermod -a -G dialout $USER

# Logout and login again for changes to take effect
```

## macOS Installation

### Step 1: Install Homebrew and Dependencies

```bash
# Install Homebrew (if not already installed)
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

# Install required packages
brew install python@3.10 git
```

### Step 2: Clone and Install

```bash
cd ~/Downloads

# Clone repositories
git clone https://github.com/openUC2/UC2-REST
git clone https://github.com/openUC2/ImSwitch
git clone https://gitlab.com/bionanoimaging/nanoimagingpack

# Create virtual environment
python3 -m venv ~/imswitch-env
source ~/imswitch-env/bin/activate

# Install packages
cd ImSwitch && pip install -e . && cd ..
cd UC2-REST && pip install -e . && cd ..
cd nanoimagingpack && pip install -e . && cd ..
```

## Verification

### Test Installation

```bash
# Activate environment (if not already active)
# Windows: conda activate imswitch
# Linux/macOS: source ~/imswitch-env/bin/activate

# Test ImSwitch
python -c "import imswitch; print('ImSwitch installed successfully')"

# Test UC2-REST
python -c "import UC2REST; print('UC2-REST installed successfully')"

# Launch ImSwitch
python -m imswitch
```

### Expected Output
- ImSwitch GUI should launch
- Check console for any error messages
- Verify hardware detection in the interface

## Development Setup

### IDE Configuration

**Visual Studio Code Extensions:**
- Python
- Pylance
- Python Docstring Generator
- GitLens

**Settings for ImSwitch development:**
```json
{
    "python.defaultInterpreterPath": "./imswitch-env/bin/python",
    "python.linting.enabled": true,
    "python.linting.pylintEnabled": true
}
```

### Contributing

If you plan to contribute to ImSwitch:

```bash
# Fork the repository on GitHub first, then:
git clone https://github.com/YOUR_USERNAME/ImSwitch
cd ImSwitch

# Add upstream remote
git remote add upstream https://github.com/openUC2/ImSwitch

# Create development branch
git checkout -b feature/my-feature

# Install in development mode
pip install -e .[dev]
```

## Troubleshooting

### Common Issues

**Import errors:**
```bash
# Ensure environment is activated
# Reinstall with verbose output
pip install -e . -v
```

**Qt/GUI issues on Linux:**
```bash
# Install Qt dependencies
sudo apt install -y python3-pyqt5 python3-pyqt5.qtsvg
```

**Serial port access denied:**
```bash
# Linux: Add user to dialout group
sudo usermod -a -G dialout $USER

# Windows: Check driver installation in Device Manager
```

**Camera not detected:**
```bash
# Install camera-specific drivers
# For HIK cameras: Install MVS runtime
# For other cameras: Check manufacturer documentation
```

### Getting Help

- **GitHub Issues**: [ImSwitch Issues](https://github.com/openUC2/ImSwitch/issues)
- **Discussions**: [ImSwitch Discussions](https://github.com/openUC2/ImSwitch/discussions)
- **UC2 Forum**: [openUC2.com](https://openuc2.com)

## Next Steps

After successful installation:
1. **[Configure your setup](../03_Configuration/README.md)** - Create configuration files for your hardware
2. **[Basic usage](../02_Usage/README.md)** - Learn ImSwitch fundamentals
3. **[Update procedures](../02_Usage/Updates.md)** - Keep your installation current

## Related Links

- [ImSwitch Repository](https://github.com/openUC2/ImSwitch)
- [UC2-REST Repository](https://github.com/openUC2/UC2-REST)
- [NanoImagingPack](https://gitlab.com/bionanoimaging/nanoimagingpack)
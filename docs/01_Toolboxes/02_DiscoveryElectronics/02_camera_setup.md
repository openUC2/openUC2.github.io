---
id: Camera Setup
title: openUC2 Camera Setup
---

**We provide Docker Containers for our 3 major camera manufacturers: https://github.com/openUC2/ImSwitchDockerInstall**

The openUC2 Camera Setup provides guidance on configuring and using webcams and Daheng cameras for imaging purposes within the openUC2 ecosystem. This setup allows users to seamlessly integrate cameras into their experimental setups and utilize them for imaging and data acquisition. Below are detailed instructions for setting up cameras on different platforms:

## Webcam

### On Windows
- Users can utilize the built-in webcam functionality provided by Windows. They need to open the webcam using the Windows internal software and start streaming.

### On Mac
- For Mac users, the Photobooth application can be used to access the webcam. Simply open the Photobooth application and select the camera to start capturing images or videos.

### Alternative Method
- Users can also use the openUC2 Web Serial interface available at `https://youseetoo.github.io/indexWebSerialTest.html` to open the camera stream.

## Daheng Cameras

![](IMAGES/dahenguc2.jpeg)
*This may look completely different now, but important: A camera is inside the cube :)*

### On Windows
- To use Daheng cameras on Windows, users should visit the [Get-camera supplier website](https://www.get-cameras.com/customerdownloads?submissionGuid=93704570-544a-43e8-83d6-f5f3cf0b97fb).
- From the provided options, select the "Windows SDK USB2+USB3+GigE (including Directshow + Python) Galaxy V1.23.2305.9161" package.
- Install the software and drivers from the downloaded package.
- Once installed, users can start the "Galaxy Viewer" application to begin capturing images using the Daheng camera.

### Using Jetson Nano with Docker
If you're using Jetson Nano for image acquisition, you can set up a Docker container:
**We provide Docker Containers for our 3 major camera manufacturers: https://github.com/openUC2/ImSwitchDockerInstall**

### On Linux (Mac not supported)

You can install the driver and test the frame acquistion using the following commands:

```bash
# We use Ubuntu
# Install necessary dependencies
sudo apt-get update && apt-get install -y \
    wget \
    unzip \
    python3 \
    python3-pip \
    usbutils \
    sudo \
    nano \
    git \
    expect

# Create the udev rules directory
sudo mkdir -p /etc/udev/rules.d

# Download and install the appropriate Hik driver based on architecture
cd /tmp && \
    wget https://dahengimaging.com/downloads/Galaxy_Linux_Python_2.0.2106.9041.tar_1.gz && \
    wget https://dahengimaging.com/downloads/Galaxy_Linux-armhf_Gige-U3_32bits-64bits_1.5.2303.9202.zip && \
    unzip Galaxy_Linux-armhf_Gige-U3_32bits-64bits_1.5.2303.9202.zip && \
    tar -zxvf Galaxy_Linux_Python_2.0.2106.9041.tar_1.gz && \
    cd Galaxy_Linux-armhf_Gige-U3_32bits-64bits_1.5.2303.9202 && \
    chmod +x Galaxy_camera.run && \
    cd /tmp/Galaxy_Linux_Python_2.0.2106.9041/api && \
    python3 setup.py build && \
    python3 setup.py install

# Run the installer script using expect to automate Enter key presses
echo "Y En Y" | /tmp/Galaxy_Linux-armhf_Gige-U3_32bits-64bits_1.5.2303.9202/Galaxy_camera.run

# Copy libgxiapi.so to /usr/lib and set the library path
cp /usr/lib/libgxiapi.so /usr/lib && \
    cp /tmp/Galaxy_Linux-armhf_Gige-U3_32bits-64bits_1.5.2303.9202/libgxiapi.so /usr/lib && \
    ldconfig

# Ensure the library path is set
LD_LIBRARY_PATH="/usr/lib:/tmp/Galaxy_Linux-armhf_Gige-U3_32bits-64bits_1.5.2303.9202:$LD_LIBRARY_PATH"

pip install pillow numpy
```

Then checkout the files under `/tmp/Galaxy_Linux_Python_2.0.2106.9041/`

### On Android Phones
- To use Daheng cameras on Android phones, users should first visit `https://www.get-cameras.com/customerdownloads?submissionGuid=93704570-544a-43e8-83d6-f5f3cf0b97fb`.
- From the provided options, select the "Android USB3 SDK v1.2.2112.9201" package and download it.
- After downloading, unzip the package and install the "GxViewer_GetRawImage.apk" on the Android phone (users may need to allow installation of apps from unknown sources or 3rd party apps).
- Connect the Daheng camera to the Android phone using a USB-C to Daheng cable (adapter).
- Open the installed app ("GxViewer_GetRawImage") and grant access to the USB connection when prompted.
- Users can adjust camera settings by swiping left in the app and then proceed to capture images.

Here is an extended documentation for the HIK camera setup:

### HIK Cameras

We use the MV-CS060-10UM/UC-PRO 600 with the IMX179 sensor.

![](IMAGES/dahenguc2.jpeg)
*This may look completely different now, but important: A camera is inside the cube :)*
  
### On Windows
- Visit the [HIK supplier website](https://www.hikrobotics.com/en/support/download) for the latest software.
- Download the "MVS V2.1.2" package (or the latest version) for Windows.
- Install the software and drivers from the package.
- Use the "MVS Viewer" to capture and configure images with the HIK camera.

### On Linux (Ubuntu)
Install the HIK driver and run the camera with the following steps:

```bash
# Update system and install necessary dependencies
sudo apt-get update && sudo apt-get install -y \
    wget \
    unzip \
    python3 \
    python3-pip \
    usbutils

# Download and unzip the HIK driver package
cd /tmp && \
    wget https://www.hikrobotics.com/en/source/support/software/MVS_STD_GML_V2.1.2_231116.zip && \
    unzip MVS_STD_GML_V2.1.2_231116.zip

# Install the driver
sudo dpkg -i MVS-2.1.2_aarch64_20231116.deb

# Set up environment variables
export MVCAM_COMMON_RUNENV=/opt/MVS/lib
export LD_LIBRARY_PATH=/opt/MVS/lib/64:/opt/MVS/lib/32:$LD_LIBRARY_PATH

# Install Python dependencies
pip install pillow numpy

# Run the Python example to grab images
python3 /opt/MVS/Samples/aarch64/Python/MvImport/GrabImage.py
```

### Using Jetson Nano with Docker
If you're using Jetson Nano for image acquisition, you can set up a Docker container:
**We provide Docker Containers for our 3 major camera manufacturers: https://github.com/openUC2/ImSwitchDockerInstall**


This setup ensures that the HIK camera can be used on various platforms, providing flexibility across different devices.
## Video Tutorial
A video tutorial demonstrating the camera setup is available at `https://youtu.be/PtdU5qE6BSc`.

The openUC2 Camera Setup provides users with easy-to-follow instructions for configuring and utilizing webcams and Daheng cameras on different platforms, enabling seamless integration into various imaging applications and experiments.


<iframe width="560" height="315" src="https://www.youtube.com/embed/PtdU5qE6BSc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>


## XIAO Sense Camera

Coming Soon.

You can have a glimpse here https://github.com/openUC2/openUC2-SEEED-XIAO-Camera/

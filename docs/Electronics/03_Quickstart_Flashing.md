---
id: uc2e3
title: Getting Started
---

<!----------------------------------------->
## First Steps, Getting Started, Flashing - Simply Quick Start!
Duration:20

### Installing the driver

**Prerequirements:** We make use of the Espressif ESP32 MCU, which comes with the CH340 USB-UART interface. For this you need to install the appropriate driver.

<div class="alert-success">
<b>Installing the USB Serial Driver</b> Install the CH340 USB Serial driver is explained in more detail here: <a href="https://learn.sparkfun.com/tutorials/how-to-install-ch340-drivers/all">Sparkfun</a>
</div>


### Flashing the Firmware using Pyhton

For this we have prepared a quick video tutorial:

<iframe width="560" height="315" src="https://www.youtube.com/embed/F9B2ftkfaKE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

The steps to reproduce:

1. Install Anaconda on your computer
2. Create a new conda environemt and activate it:
```
conda create -n uc2 python=3.9 -y
conda activate uc2
```
3. install `uc2-rest` using pip: `pip install uc2-rest`
4. open python and copy/paste the following commands or run it as a python file (also found [here](https://github.com/openUC2/UC2-REST/blob/master/uc2rest/TEST/TEST_ESP32_Updater.py)):
```py
import uc2rest as uc2

# define the serial port
serialport = "/dev/cu.SLAB_USBtoUART"
serialport = "COM3" # ATTENTION: CHANGE ACCORDINGLY
#serialport = "/dev/cu.wchusbserial110"

# optional: create an ESP32 objejct
# ESP32 = uc2.UC2Client(serialport=serialport)

# create the updater object
updater = uc2.updater(port=serialport)

updater.downloadFirmware()
print(updater.firmwarePath)
updater.flashFirmware()

# print firmwarepath


# remove firmware.bin after flashing
updater.removeFirmware()
```

Once you're done, you can open e.g. the Arduino IDE's serial monitor and check the output after typing:

<p align="center">
<img src="/ELECTRONICS/IDETestUc2rest.png" width="400"/>
</p>

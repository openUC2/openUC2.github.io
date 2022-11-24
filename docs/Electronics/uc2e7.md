---
id: uc2e7
title: Controlling the UC2e
---


<!----------------------------------------->
## Controlling the ESP32
Duration: 5

The unified "REST-API" (inspired, not following full protocol), enables you to control the functionalities from multiple different clients (e.g. Python, Webrowser, Android Phone). The Core idea is to file post/get requests (serial/wifi) that send/receive JSON files that do "something".

<p align="center">
<img src="/ELECTRONICS/UC2eConnectivity.png" width="600"/>
</p>

<div class="alert-success">
<b>Installing the USB Serial Driver</b> Install the CH340 USB Serial driver is explained in more detail here: <a href="https://learn.sparkfun.com/tutorials/how-to-install-ch340-drivers/all">Sparkfun</a>
</div>

<!----------------------------------------->
## 🐍 Python Bindings
Duration: 5

In order to interact with the electronics, we implemented a Python library called `UC2-REST`, available [here](https://github.com/openUC2/UC2-REST/tree/master/uc2rest) that will help you to work with the device. The easiest way to install it would be:

```
pip install uc2-rest
```

It will automatically detect your UC2e (if the driver is installed), connect and will offer you the basic functionalities such as moving the motor, etc.

<p align="center">
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Jupyter_logo.svg/207px-Jupyter_logo.svg.png" width="60"/>
</p>


In order to give you a deep dive in what's possible, we provide a Jupyter Notebook that guides you through all the functionalities. You can find it [here](https://github.com/openUC2/UC2-REST/blob/master/DOCUMENTATION/DOC_UC2Client.ipynb)
Start Jupiter
Tutorial



<!----------------------------------------->
## 📲 Android APP
Duration: 5

This is coming soon. You will be able to control the electronics using the Wifi connection of your Android phone.

<!----------------------------------------->
## 💻 Browser APP
Duration: 5

If the ESP32 is offereing an access point or is connected to your wifi router, you can access the webserver running on the ESP32 using a browser. It offers limited control over the Endpoints by filing post and get requests.

More information are coming soon!

<!----------------------------------------->
## 🎮 Playstation 3 or Playstation 4 Controller (comming soon)
Duration: 5

With the open-source libraries PS3Controller and PS4Controller we are able to make use of the Bluetooth-able joysticks from your beloved game console.

When a PS4 controller is 'paired' to a PS4 console, it just means that it has stored the console's Bluetooth MAC address, which is the only device the controller will connect to. Usually, this pairing happens when you connect the controller to the PS4 console using a USB cable, and press the PS button. This initiates writing the console's MAC address to the controller.

Therefore, if you want to connect your PS4 controller to the ESP32, you either need to figure out what the Bluetooth MAC address of your PS4 console is and set the ESP32's address to it, or change the MAC address stored in the PS4 controller.

Whichever path you choose, you might want a tool to read and/or write the currently paired MAC address from the PS4 controller. You can try using [sixaxispairer](https://github.com/user-none/sixaxispairer) for this purpose.

If you opted to change the ESP32's MAC address, you'll need to include the ip address in the ```PS4.begin()``` function during within the ```setup()``` Arduino function like below where ```1a:2b:3c:01:01:01``` is the MAC address (**note that MAC address must be unicast**):

```
void setup()
{
    PS4.begin("1a:2b:3c:01:01:01");
    Serial.println("Ready.");
}
```

<!----------------------------------------->
## Controlling using ImSwitch
Duration: 5

Please have a look [here](https://github.com/openUC2/ImSwitch) for more information about how to install ImSwitch and [here](https://github.com/beniroquai/ImSwitchConfig) for the UC2-related setup files including the UC2-REST serial interface.

<p align="center">
<img src="/ELECTRONICS/UC2eImSwitch.png" width="600"/>
</p>


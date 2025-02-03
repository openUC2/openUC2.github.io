# Quickstart to use the Raspberry Pi with our ImSwitch and UC2-ESP

The Raspberry Pi connects the UC2-ESP via USB and the USB3 camera to the ImSwitch that runs in Docker. You can access the frontend via your browser on a phone or laptop. It's experimental at the moment!

## Login Data for Raspberry Pi (SSH / Login)

The Raspberry Pi login credentials are:
- **Username:** `UC2`
- **Password:** `youseetoo`

It runs the Raspberry Pi OS Light version with a Docker integration of our systems, linked on Twitter. You can log in via SSH and start the ImSwitch server.

[ImSwitch Docker Installation Guide](https://github.com/openUC2/ImSwitchDockerInstall?tab=readme-ov-file#imswitch--docker-on-raspi)

## WiFi Hotspot

- **SSID:** `openuc2-RANDOMNUMBER`
- **Password:** `youseetoo`

Configure the hotspot using RaspAP:
- Go to [http://10.3.141.1/](http://10.3.141.1/)
- Login: **admin** / **secret**
- (Refer to RaspAP GitHub for more details)

## Accessing ImSwitch

If the Docker image has started automatically, you can access ImSwitch at:
- [https://10.3.141.1:8001/imswitch/index.html](https://10.3.141.1:8001/imswitch/index.html)
- (Self-signed certificate warning: Accept untrusted, this will be fixed in the future.)

## Connecting via SSH

To SSH into the Raspberry Pi and manually start ImSwitch:
```sh
ssh uc2@10.3.141.1  # Password: youseetoo
# Start ImSwitch
cd ~/Desktop
./launch_docker_container.sh
```

## Changing ImSwitch Parameters

Configuration file path:
```sh
nano ~/ImSwitchConfig/config/imcontrol_options.json
```

- **Active setup file:** `example_uc2_vimba.json`

Example JSON snippet:
```json
{
    "setupFileName": "example_uc2_vimba.json",
    "recording": {
        "outputFolder": "./ImSwitch/ImSwitch/recordings",
        "includeDateInOutputFolder": true
    }
}
```

To modify configurations:
```sh
nano ~/ImSwitchConfig/imcontrol_setups/example_histo_daheng.json
```

Example positioner settings:
```json
"positioners":{
    "ESP32Stage":{
        "managerName":"ESP32StageManager",
        "managerProperties":{
            "rs232device":"ESP32",
            "isEnable":true,
            "stepsizeX":-0.3125,
            "stepsizeY":-0.3125,
            "stepsizeZ":0.3125,
            "homeSpeedX":15000,
            "homeSpeedY":15000,
            "homeSpeedZ":25000
        }
    }
}
```

For more details, visit: [ImSwitchConfig GitHub](https://github.com/openUC2/imswitchconfig)

Close the application with:
```sh
CTRL + C
```

## Hardware Connection

- Connect **UC2-ESP Board** via USB to Raspberry Pi
- Connect **USB3 Camera** to Raspberry Pi

## Accessing ImSwitch via Web Browser

Open the following URL in a browser:
[https://10.3.141.1:8001/imswitch/index.html](https://10.3.141.1:8001/imswitch/index.html)

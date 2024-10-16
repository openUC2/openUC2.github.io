## ImSwitch Config File

# ImSwitch configurations for UC2

This repository will help you setting up the `JSON`-files for the UC2-specific devices, namely:

- Allied Vision Alvium Camera / Vimba 
- Daheng Imaging Machine Vision 
- UC2 electronics (ESP32-based) 
	- XYZ Stage
	- Laser 
	- LED
	- LED Matrix
- Raspberry Pi camera (experimental) 
- ESP32 camera 

More information can be found in the original documentation of ImSwitch can be found in the [***READTHEDOCS of IMSWITCH***](https://imswitch.readthedocs.io/en/stable/)

## Setting up the current ImSwitch Config 

### Available Modules

The file under `$USER$/Documents/ImSwitchConfig/config/modules.json` (Windows) and `/User/$username$/ImSwitchConfig/config/modules.json` (Mac/Linux) may look like this:

```json
{
    "enabled": [
        "imcontrol",
        "imscripting",
	"imnotebook"
    ]
}
```
These are the available modules that will be loaded on startup of imswitch. ImControl is the general control GUI, ImScripting is the python interpreter to control the system, ImNotebook launches a jupyter server that can be used to control ImSwitch inside imswitch using Jupyter.

### Setup Configuration

The file under `$USER$/Documents/ImSwitchConfig/config/imcontrol_options.json` (Windows) and `/User/$username$/ImSwitchConfig/config/imcontrol_options.json` (Mac/Linux) may look like this:

```json
{
    "setupFileName": "example_virtual_microscope.json",
    "recording": {
        "outputFolder": "./ImSwitch/ImSwitch/recordings",
        "includeDateInOutputFolder": true
    },
    "watcher": {
        "outputFolder": "/Users/bene/ImSwitchConfig/scripts"
    }
}
```

The entry `"setupFileName": "example_virtual_microscope.json",` determines the current active configuration file that defines the hardware configuration (E.g. camera, positioner.. see below). This file is stored under `..imcontrol_setups`.


## Setting up this repository

ImSwitch will create a folder that stores all settings in:

- Windows `$USER$/Documents/ImSwitchConfig`
- MAC `/User/$username$/ImSwitchConfig` 

There you will find several subfolders:

```
config
imcontrol_setups
imcontrol_slm
scripts
```

You can download this repo and replace all files in this folder. Alternatively, you can clone it and keep it up to date with upcoming configurations. 


## UC2 configurations 

A recent sample configuration is for example the [imcontrol_setups/example_uc2_multicolour.json](imcontrol_setups/example_uc2_multicolour.json). It controls an ESP32-driven XYZ stage, hosts 2 lasers and has a Daheng Vision camera: 

```json
{
"rs232devices": {
    "ESP32": {
      "managerName": "ESP32Manager",
      "managerProperties": {
        "host_": "192.168.43.129",
        "serialport_windows": "COM3",
        "serialport": "/dev/cu./dev/cu.SLAB_USBtoUART"
      }
    }
  },
  "positioners": {
    "ESP32Stage": {
        "managerName": "ESP32StageManager",
        "managerProperties": {
            "rs232device": "ESP32"
        },
        "axes": ["X", "Y", "Z"],
        "forScanning": true,
        "forPositioning": true
    }
},
"lasers": {
  "488 Laser": {
    "analogChannel": null,
    "digitalLine": null,
    "managerName": "ESP32LEDLaserManager",
    "managerProperties": {
        "rs232device": "ESP32",
        "channel_index": "B",
        "filter_change": true
    },
    "wavelength": 488,
    "valueRangeMin": 0,
    "valueRangeMax": 32768
},
"635 Laser": {
  "analogChannel": null,
  "digitalLine": null,
  "managerName": "ESP32LEDLaserManager",
  "managerProperties": {
      "rs232device": "ESP32",
      "channel_index": "R",
      "filter_change": true
  },
  "wavelength": 635,
  "valueRangeMin": 0,
  "valueRangeMax": 32768
},
"LED": {
  "analogChannel": null,
  "digitalLine": null,
  "managerName": "ESP32LEDLaserManager",
  "managerProperties": {
      "rs232device": "ESP32",
      "channel_index": "W",
      "filter_change": false
  },
  "wavelength": 635,
  "valueRangeMin": 0,
  "valueRangeMax": 32768
}
},
"detectors": {
  "WidefieldCamera": {
    "analogChannel": null,
    "digitalLine": null,
    "managerName": "GXPIPYManager",
    "managerProperties": {
      "cameraListIndex": 1,
      "gxipycam": {
        "exposure": 0,
        "gain": 0,
        "blacklevel": 100,
        "image_width": 1000,
        "image_height": 1000
      }
    },
    "forAcquisition": true,
    "forFocusLock": true
  }
},
"rois": {
  "Full chip": {
    "x": 600,
    "y": 600,
    "w": 1200,
    "h": 1200
  }
},
  "availableWidgets": [
    "Settings",
    "View",
    "Recording",
    "Image",
    "Laser",
    "Positioner", 
    "Autofocus"
  ],
  "autofocus": {
    "camera": "WidefieldCamera",
    "positioner": "ESP32Stage",
    "updateFreq": 10,
    "frameCropx": 780,
    "frameCropy": 400,
    "frameCropw": 500,
    "frameCroph": 100
  }
}
```

## Explanation: 

### RS232 Manager

Since multiple devices (stage, laser, filterswitcher) are connected to a single USB/Serial device (ESP32), we have to write a wrapper that connects to all individual devices. This is called `rs232devices `:

```json
"rs232devices": {
    "ESP32": {
      "managerName": "ESP32Manager",
      "managerProperties": {
        "host_": "192.168.43.129",
        "serialport_windows": "COM3",
        "serialport": "/dev/cu./dev/cu.SLAB_USBtoUART"
      }
    }
  },
```

The `serialport` specifies the correct physical address of the device and has to be adapted. Alternatively, one can specify the `host` if you want to connect over Wifi. 
Theoretically, if everything goes right, ImSwitch is smart enough to detect the ESP32 on its own. Thhe name for this device (i.e. internal reference) is `ESP32` and will be reused by all external components. 

The ***firmware*** can be found [here](https://github.com/openUC2/UC2-REST). 


### Stage

All devices refer to the `rs232device` defined earlier: 

```json
  "positioners": {
    "ESP32Stage": {
        "managerName": "ESP32StageManager",
        "managerProperties": {
            "rs232device": "ESP32"
        },
        "axes": ["X", "Y", "Z"],
        "forScanning": true,
        "forPositioning": true
    }
},
```

This defines the x-y-z axis and will control the `ESP32` device. 
`forScanning` - states that the stage is used for a potential Multiwellplate scanner and 
`forPositioning - states that it can be used as a normal positining device. 


### Laser


The name `635 Laser` is chosen for the red laser.
`filter_change` is an option to rotate the motor that moves the filter. 
The `channel_index` (e.g. R, G, B) state the different colours / channels. (TODO: perhaps this is now 1,2,3). 


```json
"635 Laser": {
  "analogChannel": null,
  "digitalLine": null,
  "managerName": "ESP32LEDLaserManager",
  "managerProperties": {
      "rs232device": "ESP32",
      "channel_index": "R",
      "filter_change": true
  },
  "wavelength": 635,
  "valueRangeMin": 0,
  "valueRangeMax": 32768
},
```


### Camera

Example for the Daheng Imaging camera:

```json
"detectors": {
  "WidefieldCamera": {
    "analogChannel": null,
    "digitalLine": null,
    "managerName": "GXPIPYManager",
    "managerProperties": {
      "cameraListIndex": 1,
      "gxipycam": {
        "exposure": 0,
        "gain": 0,
        "blacklevel": 100,
        "image_width": 1000,
        "image_height": 1000
      }
    },
    "forAcquisition": true,
    "forFocusLock": true
  }
},
```



If you have any questions, please reach out to us in the Forum: openuc2.discourse.group.



### Additional Configuration File Documentation

#### Overview
This configuration file is designed to manage settings and properties of various components in a complex system, such as positioners, RS232 devices, lasers, detectors, autofocus settings, etc. It is structured in JSON format for ease of reading and editing.

#### Sections

1. **Positioners**
   - `ESP32Stage`
     - `managerName`: Specifies the manager responsible for handling this positioner, in this case, `ESP32StageManager`.
     - `managerProperties`: Contains detailed settings for the positioner, such as RS232 device identification, step sizes for different axes, home speeds, axis enable/disable settings, and other mechanical properties.
     - `axes`: Lists the axes controlled by this positioner (X, Y, Z).
     - `forScanning` & `forPositioning`: Boolean flags to indicate if the positioner is used for scanning and/or positioning.

2. **RS232 Devices**
   - `ESP32`
     - `managerName`: The manager handling RS232 devices, here `ESP32Manager`.
     - `managerProperties`: Network and port settings for the RS232 device.

3. **Lasers**
   - `LED`
     - Details for managing LED laser settings, including the manager name (`ESP32LEDLaserManager`), RS232 device reference, channel index, wavelength, and value range.

4. **Detectors**
   - `WidefieldCamera` & `Observer`
     - Configuration for different camera detectors, including manager names (`HikCamManager`, `OpenCVCamManager`), properties like RGB support, camera indexes, pixel size, and acquisition settings.

5. **Autofocus**
   - Configuration for autofocus feature, linking a camera with a positioner and setting parameters like update frequency and frame cropping dimensions.

6. **MCT (Multichannel Tissue)**
   - Settings for monitor index, dimensions, wavelength, pixel size, angle mount, and directories for pattern files.

7. **DPC (Differential Phase Contrast)**
   - Settings related to DPC imaging, including wavelength, pixel size, numerical aperture, refractive index, and rotation angles.

8. **WebRTC**
   - An empty section possibly reserved for WebRTC configuration.

9. **Pixel Calibration**
   - An empty section likely intended for pixel calibration settings.

10. **Focus Lock**
    - Focus lock settings similar to autofocus but with its distinct configuration.

11. **LED Matrixes**
    - `ESP32 LEDMatrix`
      - Configuration for LED matrixes, specifying manager details, RS232 device, dimensions, wavelength, and value range.

12. **Available Widgets**
    - A list of widgets that are available in the system, indicating the features or components that can be controlled or monitored.

13. **Non-Available Widgets**
    - A list of widgets that are not available, possibly indicating features not supported or deactivated in the current setup.


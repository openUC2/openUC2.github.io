## ImSwitch Config File

This is a sample `uc2_hik_histo.json`configuration file:

```json
{
  "positioners": {
    "ESP32Stage": {
      "managerName": "ESP32StageManager",
      "managerProperties": {
        "rs232device": "ESP32",
        "isEnable": true,
        "enableauto": false,
        "stepsizeX": -0.3125,
        "stepsizeY": -0.3125,
        "stepsizeZ": 0.3125,
        "homeSpeedX": 15000,
        "homeSpeedY": 15000,
        "homeSpeedZ": 15000,
        "isDualaxis": true,
        "homeDirectionX": 1,
        "backlashXOld": 15,
        "backlashYOld": 40,
        "backlashX": 0,
        "backlashY": 0,
        "homeEndstoppolarityY": 0,
        "homeDirectionY": -1,
        "homeDirectionZ": 0,
        "homeXenabled": 1,
        "homeYenabled": 1,
        "homeZenabled": 0,
        "initialSpeed": {
          "X": 15000,
          "Y": 15000,
          "Z": 15000
        }
      },
      "axes": [
        "X",
        "Y",
        "Z"
      ],
      "forScanning": true,
      "forPositioning": true
    }
  },
  "rs232devices": {
    "ESP32": {
      "managerName": "ESP32Manager",
      "managerProperties": {
        "host_": "192.168.43.129",
        "serialport": "COM3"
      }
    }
  },
  "lasers": {
    "LED": {
      "analogChannel": null,
      "digitalLine": null,
      "managerName": "ESP32LEDLaserManager",
      "managerProperties": {
        "rs232device": "ESP32",
        "channel_index": 1
      },
      "wavelength": 635,
      "valueRangeMin": 0,
      "valueRangeMax": 1023
    }
  },
  "detectors": {
    "WidefieldCamera": {
      "analogChannel": null,
      "digitalLine": null,
      "managerName": "HikCamManager",
      "managerProperties": {
        "isRGB": 1,
        "cameraListIndex": 0,
        "cameraEffPixelsize": 0.2257,
        "hikcam": {
          "exposure": 0,
          "gain": 0,
          "blacklevel": 100,
          "image_width": 1000,
          "image_height": 1000
        }
      },
      "forAcquisition": true,
      "forFocusLock": true
    },
    "Observer": {
      "analogChannel": null,
      "digitalLine": null,
      "managerName": "OpenCVCamManager",
      "managerProperties": {
        "cameraListIndex": 1,
        "cameraListIndexWIN": 0,
        "isRGB":1,
        "opencvcam": {
          "exposure": 10
        }
      },
      "forAcquisition": true
    }
  },
  "autofocus": {
    "camera": "WidefieldCamera",
    "positioner": "ESP32Stage",
    "updateFreq": 10,
    "frameCropx": 780,
    "frameCropy": 400,
    "frameCropw": 500,
    "frameCroph": 100
  },
  "mct": {
    "monitorIdx": 2,
    "width": 1080,
    "height": 1920,
    "wavelength": 0,
    "pixelSize": 0,
    "angleMount": 0,
    "patternsDirWin": "C:\\Users\\wanghaoran\\Documents\\ImSwitchConfig\\imcontrol_slm\\488\\",
    "patternsDir": "/users/bene/ImSwitchConfig/imcontrol_sim/488"
  },
  "dpc": {
    "wavelength": 0.53,
    "pixelsize": 0.2,
    "NA": 0.3,
    "NAi": 0.3,
    "n": 1.0,
    "rotations": [
      0,
      180,
      90,
      270
    ]
  },
  "webrtc": {},
  "PixelCalibration": {},
  "focusLock": {
    "camera": "WidefieldCamera",
    "positioner": "ESP32StageManager",
    "updateFreq": 4,
    "frameCropx": 0,
    "frameCropy": 0,
    "frameCropw": 0,
    "frameCroph": 0
  },
  "LEDMatrixs": {
    "ESP32 LEDMatrix": {
      "analogChannel": null,
      "digitalLine": null,
      "managerName": "ESP32LEDMatrixManager",
      "managerProperties": {
        "rs232device": "ESP32",
        "Nx": 4,
        "Ny": 4,
        "wavelength": 488,
        "valueRangeMin": 0,
        "valueRangeMax": 32768
      }
    }
  },
  "availableWidgets": [
    "Settings",
    "View",
    "Recording",
    "Image",
    "Laser",
    "Positioner",
    "Autofocus",
    "MCT",
    "UC2Config",
    "ImSwitchServer",
    "PixelCalibration",
    "HistoScan",
    "LEDMatrix",
    "Joystick",
    "Flatfield",
    "ROIScan"
  ],
  "nonAvailableWidgets": [
    "STORMRecon",
    "DPC",
    "Hypha",
    "FocusLock",
    "HistoScan",
    "FocusLock",
    "FOVLock"
  ]
}
```


### Configuration File Documentation

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

#### Conclusion
This configuration file is a comprehensive document that outlines the settings and parameters for various hardware and software components in a specialized system. It is critical for ensuring the correct operation of the equipment it is designed to control.

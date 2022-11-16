---
id: uc2e4
title: Flashing the Firmware
---

### Flashing latest version of the Firmware

We have multiple ways to flash the firmware, which we will describe briefly:
1. Use precompiled binaries and upload using the `esptool.py` ([Github](https://github.com/espressif/esptool))
2. Use the Arduino IDE to compile and upload the software
3. Use the Arduino IDE to upload the OTA example and upload the precompiled binary

The current firmware can be found in the [UC2-REST](https://github.com/openUC2/UC2-REST/tree/master/ESP32) repository. A Github Action builds the binaries everytime a new release is getting published. The artifacts are also pushed to the [build folder](https://github.com/openUC2/UC2-REST/tree/master/ESP32/build). This way you don't need to hassle with the Arduino IDE in order to install all libraries and dependencies. With the binaries, there are two ways to flash them on a freshly bought ESP32:

1. Using the `esptool.py` to upload it through USB
2. Flash the Arduino-OTA example, browse to the Website and upload the `.bin` file

#### Flashing the code with `esptool.py`

The `UC2-REST` offers a firmware flasher to help you going through the steps:

1. Download the latest firmware
2. Start opening the Port
3. Flash the Firmware

For this we prepared a jupyter notebook that you can access and run [here](https://github.com/openUC2/UC2-REST/tree/master/DOCUMENTATION/DOC_Updater.ipynb)
The full process will take around 20 minutes. 

#### Flashing the code with OTA

For this you can flash the example code `BasicOTA.ino` that comes in the Arduino IDE under `Examples => Arduino OTA`.

Use the following code below (change SSID/Password to your Wifi that the computer uses), flash it and open the Browser to open the webpage. Upload the Binary and you'Re done!

```cpp
#include <WiFi.h>
#include <ESPmDNS.h>
#include <WiFiUdp.h>
#include <ArduinoOTA.h>

const char* ssid = "..........";
const char* password = "..........";

void setup() {
  Serial.begin(115200);
  Serial.println("Booting");
  WiFi.mode(WIFI_STA);
  WiFi.begin(ssid, password);
  while (WiFi.waitForConnectResult() != WL_CONNECTED) {
    Serial.println("Connection Failed! Rebooting...");
    delay(5000);
    ESP.restart();
  }

  ArduinoOTA
    .onStart([]() {
      String type;
      if (ArduinoOTA.getCommand() == U_FLASH)
        type = "sketch";
      else // U_SPIFFS
        type = "filesystem";

      // NOTE: if updating SPIFFS this would be the place to unmount SPIFFS using SPIFFS.end()
      Serial.println("Start updating " + type);
    })
    .onEnd([]() {
      Serial.println("\nEnd");
    })
    .onProgress([](unsigned int progress, unsigned int total) {
      Serial.printf("Progress: %u%%\r", (progress / (total / 100)));
    })
    .onError([](ota_error_t error) {
      Serial.printf("Error[%u]: ", error);
      if (error == OTA_AUTH_ERROR) Serial.println("Auth Failed");
      else if (error == OTA_BEGIN_ERROR) Serial.println("Begin Failed");
      else if (error == OTA_CONNECT_ERROR) Serial.println("Connect Failed");
      else if (error == OTA_RECEIVE_ERROR) Serial.println("Receive Failed");
      else if (error == OTA_END_ERROR) Serial.println("End Failed");
    });

  ArduinoOTA.begin();

  Serial.println("Ready");
  Serial.print("IP address: ");
  Serial.println(WiFi.localIP());
}

void loop() {
  ArduinoOTA.handle();
}
```

#### Compiling and flashing the code using the Arduino IDE

You can download/clone the **UC2-REST** repository and open the file `main.ino`, copy the libraries in the library folder into the Arduino IDE library folder under `Documents/Arduino/libraries`, compile and upload it. More information comes in the very end of this tutorial

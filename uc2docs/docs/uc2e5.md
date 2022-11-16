---
id: uc2e5
title: REST principle
---

<!----------------------------------------->
## Introduction into the ESP32 microcontroller firmware
Duration:5

The firmware that runs on the ESP32 is under constant development and subject to heavy changes! However, the core idea will remain the same and is inspired by the
 "REST-API", which deals with "endpoints" in the HTML world (e.g. "`/home`"). We implemented the follow functions:
 - `/*_act`-> this starts an action
 - `/*_get`-> this will return parameters or states
 - `/*_set`-> this will set parameters or states

The functions will work on different actuators and sensors e.g. motors, lasers, leds and so on.

The API is callable through USB Serial and/or Wifi. The ESP32 can connect to a nearby Wifi Hotspot or even create its own access point (AP). Additional documentation for this will follow soon.

<p align="center">
<img src="../static/ELECTRONICS/UC2eREST.png" width="300"/>
</p>


In general, to interact with a device (e.g. stage), one has to send a JSON document, which is similar to the REST-API in the Internet world. A simple example to rotate a motor would be:

```
{
  "task": "/motor_act",
  "axis":1,
  "speed":1000,
  "position":1000,
  "isabsolute":1,
  "isblocking":1
}
```

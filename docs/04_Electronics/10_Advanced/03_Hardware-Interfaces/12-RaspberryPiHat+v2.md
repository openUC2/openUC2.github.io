# hatplus-for-raspberrypi-5 Rev. D

# openUC2 Raspberry Pi HAT+ (FRAME Controller)

**Technical specification, integration & bring-up guide**

---

## 1) Purpose & feature summary

* HAT+ for Raspberry Pi (40-pin header) providing:

  * 12 V input → on-board **5.1 V / 5 A** buck for Pi, plus **3.3 V** LDO for the ESP32-WROOM-32 and various sensors, E-Stop logic and interface chips.
  * Safety chain with **Emergency-STOP** (3.5 mm TRS) gating the 12V output to the backbone. Momentary “Buspower OFF” button for quick cut. 
  * **CAN bus** for distributed module control:
   * Raspi: MCP2515 SPI controller + SN65HVD230 transceiver
   * ESP32: Built-in CAN (TWAI) controller + SN65HVD230 transceiver
   * Optional 120 Ω termination and CAN activity LED by solder jumpers. 
  * **ESP32-WROOM-32E** co-processor (USB-C + CP2102; also flashable via Pi UART with auto-program DTR/RTS). 
  * **Sensors & I/O**: INA226 current sensor (I²C addr 0x46), two TMP102 temperature sensors, NeoPixel header/extend, camera-trigger out, fan tacho feedback, front-panel header. 
  * Dual **HAT+ EEPROMs** (Standard class + Power MODE1 class “5 A capable”) for automatic OS configuration. (don't work currently, workaround through our Raspi OS)

---

## 2) Electrical architecture

### 2.1 Power path (12 V in → 5 V / 3.3 V)

* **Input**: Barrel jack J101 (5.5 mm OD / 2.5 mm ID, center-positive), protected by a **7 A resettable fuse**. Backfeed/ESD diodes protect rails and ports. 
* **Buck**: TI **TPS54560** set to ~**5.1 V**, rated for ≥5 A continuous (thermal-limited), with output network sized for step loads (design spreadsheet notes in schematic). 
* **LDO**: **AMS1117-3.3** (up to 1 A) generating 3.3 V for logic/sensors from the 5 V rail. 
* **Indicators & supervisors**:

  * 5 V present / OK window with MAX809 (2.93 V threshold in sensing chain) driving red/green LEDs (D401/D402). 5 V “OK” when >~4.9 V. 
  * 3.3 V and switched-12 V likewise instrumented with LEDs/supervisors for fast bring-up diagnosis. 

### 2.2 High-current “bus power” switching & safety

* **Emergency-STOP chain** (TRS jack J501): tip-ring must be **normally closed** externally; opening latches OFF. Sleeve supplies LED ground for the external box; LED budget ~3.3 V / 20 mA (add series resistor in the box). 
* **PMOS main switch** (Q602) controlled by **BUSPOWER_EN** (active-HIGH to enable). A NOR/AND gating network ensures **any** fault (E-STOP, firmware request, local momentary button SW601) **disables** power. 
* **Bypasses (for troubleshooting only)**:

  * **JP601** “circumvent-buspower-switch”: forces main PMOS ON (disables E-STOP—use only for lab debugging). 
  * **JP201** “circumvent-power-software-switching”: prevents Pi/ESP from cutting bus power via GPIO (safety-critical behavior may be altered). 

---

## 3) Communication & control

### 3.1 Raspberry Pi interface (physical pin numbers)

* 3 (SDA1) / 5 (SCL1): I²C-1; solder-jumpers **JP101/JP102** can bridge to ESP and 5 V-level I²C header. 
* 8 (GPIO14 TXD) / 10 (GPIO15 RXD): UART to ESP32 (paralleled with CP2102). 
* 11 (GPIO17) **RTS**, 36 (GPIO16) **DTR**: ESP32 auto-program handshake; **JP901/JP902** open to isolate if needed. 
* 16 (GPIO23): **buspower-off when HIGH** (wired-OR into the power gating NOR). 
* 19/21/23/24: SPI0 (MOSI/MISO/SCLK/CE0) to **MCP2515**. 
* 32 (GPIO12): **MCP2515 INT**. 
* 26/27: I²C-0 for **HAT+ EEPROMs** (spec-reserved). 

> Note: Pi boot-mode pulls are weak; external bias added where required (noted in schematic). 

### 3.2 ESP32 pinout (used signals)

* **GPIO4**: buspower-off (HIGH = off).
* **GPIO17/18**: CAN/TWAI RX/TX to ESP-side transceiver.
* **GPIO19**: NeoPixel data.
* **GPIO21/22**: I²C-1 to 5 V I²C header (solder-jumpable to Pi).
* **GPIO27/32/33**: camera I/O lines (in/out).
  All ESP32 GPIOs replicated to testpoints for probing. 

### 3.3 CAN bus

* **Controller**: Microchip **MCP2515** (SPI) with crystal Y901 (verify stuffed frequency; overlay must match). CE0 (GPIO8) as CS; **INT at GPIO12**. 
* **Transceivers**: **SN65HVD230** (3.3 V). One coupled to the Pi-side MCP2515, one to the ESP32 (for local TWAI). 
* **Jumpers**:

  * **JP801**: 120 Ω termination on-board (close to terminate).
  * **JP802**: CAN “dominant-state” LED (D801) enable (adds small load). 

---

## 4) Connectors & front-panel break-out

* **J101**: 12 V DC barrel input (5.5/2.5; center +). 
* **J103**: USB-C (USB2.0) to **CP2102** (ESP32 flash/serial). Backfeed diodes isolate USB-VBUS from Pi 5 V. 
* **J105**: NeoPixel-extend (WS2812 chain; level and power from board). On-board WS2812 (D108) for status. 
* **J102**: 12 V + CAN (XH). 
* **J1901**: 7-pin “panelboard” harness: **SDA, SCL, neopixel-extend, camera-trigger (high-side LED switch on panel), fan_tacho, GND, 12 V**. The panel PCB derives local 3.3 V STEMMA & 5 V NeoPixel from the 12 V feed. 

---

## 5) Sensors & addresses (default)

* **INA226** current/power monitor at **0x46**, shunt 2 mΩ (≈20 mV drop @10 A; worst-case 0.2 W). ALERT open-drain available. 
* **TMP102** x2 temperature sensors; address set by ADDR pin: **0x48/0x49/0x4A/0x4B** possible—board places two sensors for ambient vs PCB. Check population for actual strap (recommended pair 0x4A & 0x4B). 

---

## 6) HAT+ compliance & EEPROMs

Two AT24C256-class EEPROMs on **I²C-0** (pins 27/28), each identifying one HAT+ **class**:

| Device             | Purpose                                               | Addressing (HAT+)                                                                      |
| ------------------ | ----------------------------------------------------- | -------------------------------------------------------------------------------------- |
| **Standard class** | “Uses GPIO header for data” (metadata, pins, drivers) | HAT+ 10-bit class address per spec (schematic marks **0x1010_000** for class coding).  |
| **Power MODE1**    | Declares **5 A** power capability                     | HAT+ 10-bit class address per spec (schematic marks **0x1010_000**).                   |

> Board-level pull-ups sized to HAT+ spec; **WP** pins wired to pads for factory programming control. 

### 6.1 Programming procedure (factory)

1. **Wire access**: Ensure Pi I²C-0 (GPIO0/1) is correctly connected to the EEPROM lines **EEPROM_SDA/SCL**; use **TP1202/TP1201** for probing. **Disable write-protect** by shorting the WP testpoint to GND:

   * **Rev D**: **TP1401 → TP1402**
   * **Rev B-2**: **TP1601 → TP1602**
     (then remove short after programming).
2. Prepare a **HAT+ eeprom text** (e.g. `eeprom_hatplus-power.txt`) with: vendor, product, UUID, HAT class = Power MODE1, **hat_current_supply=5000**, plus GPIO and function descriptors.
3. Build binary with the hat-tools:

   ```bash
   ./eepmake eeprom_hatplus-power.txt eeprom_hatplus-power.eep
   ```
4. (Optional) Supply a **.dtbo** inside the EEPROM image (3rd argument to `eepmake`) to bind drivers (e.g., MCP2515) and to declare power properties.
5. Program the EEPROM via Pi (I²C-0 @ **0x53**, 7-bit, per your build environment’s tool) and **re-enable WP**.
6. On next boot, verify detection under `/proc/device-tree/hat` and that USB power policy is applied.

*(Address/wiring & WP pads per schematic pages “HATplus-EEPROMS / hatplus-eeprom_*”; testpoints noted above.)* 

---

## 7) Raising Pi USB power budget to 5 A (HAT+/firmware interop)

The goal is for the HAT+ to **advertise 5 A capability** so Raspberry Pi **lifts its USB current limit** for attached devices.

### 7.1 Quick, working hotfix (until EEPROM flow is active)

Edit `/boot/firmware/config.txt` and add:

```ini
# temporarily lift the USB current limit
usb_max_current_enable=1
```

This has been verified to allow ~**1.9 A** continuous draw from a single USB port during CPU load in testing; power may still cut if multiple high-draw events occur. Use quality cabling and verify voltage at the device end. *(Empirical note from bring-up logs.)*

### 7.2 HAT+-native method (recommended)

* Provide a **Device Tree overlay** that sets:

  * `/chosen/power/hat_current_supply = <5000>;`
  * *(If your firmware accepts it)* a property equivalent to `usb_max_current_enable=1` (not standardized in mainline; some vendor overlays carry it—validate on your target OS build).
* Either:

  * Reference a **known overlay** by name in EEPROM, **or**
  * Embed the **compiled .dtbo** into the EEPROM image via `eepmake` so behavior is independent of OS overlay sets.

**Reference example (.dts fragment):**

```dts
/dts-v1/;
/plugin/;
/ {
    compatible = "brcm,bcm2712"; // Pi 5 family; adjust if needed

    fragment@0 {
        target-path = "/chosen";
        __overlay__ {
            power: power {
                hat_current_supply = <5000>;
                // Non-standard; use only if supported in your firmware:
                // usb_max_current_enable = <1>;
            };
        };
    };
};
```

**Validation:**

* Boot; check `/proc/device-tree/chosen/power` and kernel logs.
* Load attached payloads (e.g., **two HIK USB3 cameras + UC2 infoscreen**) and confirm stability without brownouts.

---

## 8) Linux integration (CAN & sensors)

### 8.1 MCP2515 overlay (if using Pi-side CAN on Linux)

* SPI0 CE0 (CS), INT at **GPIO12**, SCK/MOSI/MISO on pins 23/19/21. Crystal frequency must match your BOM (commonly 16 MHz). 
* Example `config.txt` lines:

  ```ini
  dtparam=spi=on
  dtoverlay=mcp2515,spi0-0,interrupt=12,oscillator=16000000
  ```

  Then:

  ```bash
  sudo ip link set can0 up type can bitrate 500000
  candump can0
  ```

### 8.2 Sensors

* INA226 (0x46):

  ```bash
  sudo apt install i2c-tools
  i2cdetect -y 1
  # Expect 0x46 among others
  ```

  Readings appear under `/sys/bus/i2c/drivers/ina2xx/…` when driver is loaded. 
* TMP102 (0x4A/0x4B typical): driver creates hwmon entries; ALERT pins are available if you want IRQ-driven thresholds. 

---

## 9) ESP32 usage

* **Flashing via USB-C** (CP2102): normal `esptool.py`/IDE workflow.
* **Flashing via Pi UART**: connect to `/dev/ttyAMA0` (or `ttyS0` per model), the auto-program uses **DTR/RTS** on Pi pins **36/11** to toggle **EN/IO0** (mapping implemented in the CP2102 glue). If needed, open **JP901/JP902** to decouple from Pi GPIOs during debug. 

---

## 10) Jumpers, switches & testpoints (field reference)

* **CAN**:

  * **JP801** = add 120 Ω terminator; **JP802** = enable CAN dominant LED. 
* **Power/Safety**:

  * **SW601** = momentary **Buspower-OFF** (kills high-current rail).
  * **JP601** = force main PMOS ON (bypass E-STOP) — **danger**.
  * **JP201** = ignore Pi/ESP “power-off” GPIO — **danger**. 
* **EEPROM**:

  * **TP1201/TP1202** = SCL/SDA test pads; **TP1301/TP1401** = WP pads (per EEPROM), **TP1302/TP1402** = GND. Program with WP low, then restore. 
* **UART/USB**: labeled test pads for `USB_P/N`, VBUS, DTR, RTS, etc., plus ESD & power-OR diodes around the CP2102 path. 

---

## 11) Mechanical & assembly notes

* Low-profile 2×20 HAT connector (standing-paste SMD with through-vias; ~3.5 mm height); **M2.5** mounting holes at corners. 
* Panelboard cable limited width/height to keep within HAT envelope; right-angle, one-sided jacks chosen for clearance. 

---

## 12) Bring-up checklist (bench)

1. **Visual & continuity**: fuses/diodes orientation; check **JP601/JP201** are **OPEN** (safety intact).
2. Apply **12 V**; verify LEDs: 12 V-switched **off** initially (until E-STOP loop present & enabled). 
3. Connect **E-STOP box** (NC button between tip-ring; LED with series resistor tip→sleeve). Press/release to confirm latching behavior. 
4. Power Pi from HAT; check 5 V “active/OK” LEDs. If undervoltage, inspect buck output and cable losses. 
5. Load **usb_max_current_enable=1** (hotfix) or use HAT+ EEPROM + overlay; verify high USB load stability.
6. Verify **I²C-1** sensors at expected addresses; run a **500 kbps** CAN loopback test with a second node; try JP801/JP802 as needed.

---

## 13) Known errata / revisions

* Early revisions: **HAT EEPROM I²C** issues due to header **SCL miswire**; workaround was bodge-wire. Ensure your board rev has corrected routing before relying on auto-detect. *(Design note captured in bring-up comments.)*
* **Rev-specific WP pads**: use the correct pair (Rev D vs Rev B-2) during EEPROM programming (see §6.1). 

---

## 14) Software distribution strategy

* **ImSwitch OS** build can drop `.dtbo` overlays into the boot partition together with `config.txt` edits.
* For synchronized updates with other software stacks, manage boot-partition artifacts in your release tooling; the EEPROM can either embed the `.dtbo` or point to a named overlay that ships with the OS.

---

## 15) Safety, EMC, reliability

* The **E-STOP** is the primary protective measure; do **not** ship units with **JP601** closed.
* Add labels on external box: **NC type** button; LED series resistor required; max 20 mA sink. 
* Keep CAN stubs short; enable only one 120 Ω termination per end of the bus (use **JP801** judiciously). 

---

## 16) Appendix

### 16.1 Default Raspberry Pi header map (summary)

|         Pin | Function                                                                    |
| ----------: | --------------------------------------------------------------------------- |
|       3 / 5 | I²C-1 SDA/SCL → optional bridge to ESP & 5 V I²C header via **JP101/JP102** |
|      8 / 10 | UART TX/RX to ESP (paralleled with CP2102)                                  |
|     11 / 36 | **RTS / DTR** to ESP auto-program                                           |
|          16 | **buspower-off (HIGH)**                                                     |
| 19/21/23/24 | SPI0 MOSI/MISO/SCLK/**CS0** → MCP2515                                       |
|     26 / 27 | I²C-0 SCL/SDA → HAT+ EEPROMs                                                |
|          32 | MCP2515 **INT**                                                             |

*(All per board netlist annotations.)* 

### 16.2 ESP32 used pins (summary)

|         GPIO | Function                                       |
| -----------: | ---------------------------------------------- |
|            4 | buspower-off (HIGH = off)                      |
|      17 / 18 | CAN RX / TX (TWAI)                             |
|           19 | NeoPixel                                       |
|      21 / 22 | I²C-1 to 5 V header (optionally bridged to Pi) |
| 27 / 32 / 33 | Camera I/O lines                               |

*(See root & USB-UART sheets for auto-program mapping.)* 

### 16.3 Field solder-jumpers quick table

| Jumper          | Action                                 |
| --------------- | -------------------------------------- |
| **JP801**       | Add 120 Ω CAN termination              |
| **JP802**       | Enable CAN dominant-state LED          |
| **JP601**       | Force bus power ON (bypass E-STOP)     |
| **JP201**       | Disable Pi/ESP software power-off      |
| **JP901/JP902** | Open to isolate Pi from CP2102 RTS/DTR |

*(Locations and effects annotated in CAN / power / USB-UART sheets.)* 


### 18 Pinout 

```cpp
#pragma once
#include "Arduino.h"
#include "PinConfigDefault.h"

#define CORE_DEBUG_LEVEL 5
#define LASER_CONTROLLER 1
#define DIGITAL_IN_CONTROLLER 1
#define MESSAGE_CONTROLLER 1
#define CAN_CONTROLLER 1
#define DIAL_CONTROLLER 1
#define MOTOR_CONTROLLER 1
#define HOME_MOTOR 1
#define BTHID 1 
#define BLUETOOTH 1	
#define TMC_CONTROLLER 1
#define OBJECTIVE_CONTROLLER 1
#define STAGE_SCAN 1
#define CAN_MASTER
#define MOTOR_AXIS_COUNT 10   
#define LED_CONTROLLER
#define GALVO_CONTROLLER
#define DAC_CONTROLLER

struct UC2_3_CAN_HAT_Master : PinConfig
{
    // ---------------------------------------------------------------------
    // Board identity
    // ---------------------------------------------------------------------
    const char* pindefName = "UC2_3_CAN_HAT_Master";
    const unsigned long BAUDRATE = 115200;

    // ---------------------------------------------------------------------
    // Core buses and addresses (per HAT design)
    // ---------------------------------------------------------------------
    // I2C (shared with 5V I2C header; solder-jumpers JP101/JP102 can bridge Pi<->ESP)
    int8_t I2C_SCL = GPIO_NUM_22;     // ESP32 I2C-1 SCL
    int8_t I2C_SDA = GPIO_NUM_21;     // ESP32 I2C-1 SDA

    // On-board I2C device addresses (for convenience)
    static constexpr uint8_t I2C_ADDR_INA226  = 0x46; // current sensor
    static constexpr uint8_t I2C_ADDR_TMP102_1 = 0x4A; // temperature sensor #1
    static constexpr uint8_t I2C_ADDR_TMP102_2 = 0x4B; // temperature sensor #2

    // Optional ALERT lines (open-drain on board) — leave disabled unless wired
    int8_t INA226_ALERT_PIN   = disabled;
    int8_t TMP102_1_ALERT_PIN = disabled;
    int8_t TMP102_2_ALERT_PIN = disabled;

    // ---------------------------------------------------------------------
    // Power / safety integration
    // ---------------------------------------------------------------------
    // Drives the high-current bus power MOSFET gate logic (HIGH = turn OFF)
    int8_t BUSPOWER_OFF_PIN = GPIO_NUM_4;

    // Emergency STOP sense (input-only pin; HIGH = normal, LOW = E-STOP asserted)
    uint8_t pinEmergencyExit = GPIO_NUM_34;

    // Momentary local kill button exists on HAT; no pin here (handled in hardware gate)

    // ---------------------------------------------------------------------
    // CAN (ESP32 TWAI on-board; Pi-side MCP2515 is separate)
    // ---------------------------------------------------------------------
    int8_t CAN_TX = GPIO_NUM_18; // TWAI TX
    int8_t CAN_RX = GPIO_NUM_17; // TWAI RX
    uint32_t CAN_ID_CURRENT = CAN_ID_CENTRAL_NODE;
    bool DEBUG_CAN_ISO_TP = true;

    // ---------------------------------------------------------------------
    // Lighting / status
    // ---------------------------------------------------------------------
    int8_t LED_PIN   = GPIO_NUM_19; // on-board WS2812 data
    int16_t LED_COUNT = 1;

    // ---------------------------------------------------------------------
    // Camera / trigger / panelboard IO
    // ---------------------------------------------------------------------
    // Camera I/O lines from schematic block
    int8_t CAM_IO0_IN  = GPIO_NUM_27; // “Cam In Line 0”
    int8_t CAM_IO1_OUT = GPIO_NUM_32; // “Cam Out Line 1”
    int8_t CAM_IO2_IO  = GPIO_NUM_33; // “Cam In/Out Line 2”

    // Use the dedicated OUT line as the default external camera trigger
    int8_t CAMERA_TRIGGER_PIN = GPIO_NUM_32;
    bool   CAMERA_TRIGGER_INVERTED = false;

    // Panelboard fan tachometer (available on connector; route to ESP if populated)
    int8_t FAN_TACHO_PIN = disabled;

    // ---------------------------------------------------------------------
    // Motors / encoders (directions preserved; step/dir/ena via expander on this rev)
    // ---------------------------------------------------------------------
    int8_t MOTOR_A_STEP = GPIO_NUM_0; // routed via expander on this electronics
    int8_t MOTOR_X_STEP = GPIO_NUM_0;
    int8_t MOTOR_Y_STEP = GPIO_NUM_0;
    int8_t MOTOR_Z_STEP = GPIO_NUM_0;

    bool isDualAxisZ = false;

    bool ENC_A_encoderDirection = true;
    bool ENC_X_encoderDirection = true;
    bool ENC_Y_encoderDirection = true;
    bool ENC_Z_encoderDirection = true;

    bool ENC_A_motorDirection = true;
    bool ENC_X_motorDirection = true;
    bool ENC_Y_motorDirection = true;
    bool ENC_Z_motorDirection = true;

    bool MOTOR_ENABLE_INVERTED = true;
    bool MOTOR_AUTOENABLE = true;
    int8_t AccelStepperMotorType = 1;

    // Digital inputs (reserved)
    int8_t DIGITAL_IN_1 = disabled;
    int8_t DIGITAL_IN_2 = disabled;
    int8_t DIGITAL_IN_3 = disabled;

    // DAC placeholders (legacy)
    int8_t dac_fake_1 = GPIO_NUM_25; // RESET-ABORT stub
    int8_t dac_fake_2 = GPIO_NUM_26; // Coolant stub

    // ---------------------------------------------------------------------
    // Encoders (external calipers etc.)
    // ---------------------------------------------------------------------
    int8_t ENC_X_A = disabled;
    int8_t ENC_Y_A = disabled;
    int8_t ENC_Z_A = disabled;
    int8_t ENC_X_B = disabled;
    int8_t ENC_Y_B = disabled;
    int8_t ENC_Z_B = disabled;

    // ---------------------------------------------------------------------
    // Motion tuning
    // ---------------------------------------------------------------------
    const int32_t MAX_ACCELERATION_A = 600000;
    const int32_t DEFAULT_ACCELERATION = 100000;

    // ---------------------------------------------------------------------
    // Objective defaults
    // ---------------------------------------------------------------------
    uint8_t  objectiveMotorAxis = 0; // 0=A, 1=X, 2=Y, 3=Z
    uint8_t  focusMotorAxis     = 3;
    uint32_t objectivePositionX1 = 5000;
    uint32_t objectivePositionX2 = 35000;
    int8_t   objectiveHomeDirection        = -1;
    int8_t   objectiveHomeEndStopPolarity  = 0;

    // ---------------------------------------------------------------------
    // WiFi defaults
    // ---------------------------------------------------------------------
    const char* mSSID   = "UC2x-CAN-HAT";
    const char* mPWD    = "";
    bool        mAP     = true;
    const char* mSSIDAP = "UC2";
    const char* hostname = "youseetoo";

    // ---------------------------------------------------------------------
    // UI / joystick
    // ---------------------------------------------------------------------
    int8_t JOYSTICK_SPEED_MULTIPLIER   = 10;
    int8_t JOYSTICK_MAX_ILLU           = 255;
    int8_t JOYSTICK_SPEED_MULTIPLIER_Z = 1;

    // ---------------------------------------------------------------------
    // Lasers (not wired on this HAT)
    // ---------------------------------------------------------------------
    int8_t LASER_1 = disabled;
    int8_t LASER_2 = disabled;
    int8_t LASER_3 = disabled;
};

const UC2_3_CAN_HAT_Master pinConfig;
```

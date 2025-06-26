# Micromanager Integration with ImSwitch

ImSwitch now includes an official device adapter for µManager, enabling seamless integration between ImSwitch hardware control and µManager's powerful acquisition and analysis capabilities.

:::warning
This is a work in progress
:::

Basic idea: The developments from  are now part of the micromanager core and device so that one can integrate the DLL into their devices. Tthen one can use the stage and the lasers in combination with micromanager 

Source: https://github.com/openUC2/openUc2MicroManagerDeviceAdapter/edit/master/Readme.md
and the dll: https://github.com/openUC2/mmCoreAndDevices

## Developped by Christian Karras, April 2025 
# Version: 1.0.0
# Jena, 14.05.2025

# Scope of use / Development Environment:
	Micromanager Version:	2.0.3 20250304
	MM Core Version:		11.4.1
	Device API Verions:		71
	Module API Verison:		10
	Windows version:		11 Home 23H2 Build 22631.5039

	openUC2 Verion:			UC2_Feather V2.0 Mar  9 202520:25:00 
	Camera Version:			Daheng Mercury 2 1220 vs. MV-CE060-10UC
    
	The developped Micro Manager Device Adapter comprises the up to 4 lasers as well as an XY and a Z Stage. 

	The camera is not includeded! Instead the camera should be separately installed during hardware configuraration process

# Setting up UC2 in Micromanager
	1.) Open Micromanager and start with "None" configuration file
	2.) Goto Devices -> Hardware configuration wizard
		- Create New configuration, Next
		- From available devices choose openUC2/openUC2Hub device and Add
		- Set proper COM Port
		- Set BaudRate to 115200  (NOTE: A falsely set Baudrate will most likely lead to a crash of MM),
		- Select all devices in the list
		- Choose correct Camera (Tested with Daheng Mercury 2 1220 vs. MV-CE060-10UC, include by adding Daheng Device)
		- Finish HW configuration wizard by clicking through windows upon device choice and save the config file.

# Using Lasers
	- Choose laser in shutter dropdown menue
	- Open / Close shutter will switch the laser on and off (note: "Auto" should be deactivated)
	- Set laser power for different lasers via "Devices" -> "Device Property Browser" -> "openUC2-Laser1-UC2LaserPower", "openUC2-Laser2-UC2LaserPower","openUC2-Laser3-UC2LaserPower","openUC2-Laser4-UC2LaserPower"

# Using Stages
	- Stages are used via common MM controlls

# Setting Basic Device variables
	- For Version maintaining change ALL relevant device variables in "UC2DEFAULTS.h" bevor rebuilding
	- This counts especially for
		- IDs of Lasers and XYZ Stages
		- Default init values of the properies (Homing setting and speed for the axes)
		- Firmware check string: Currently, only the State Identificator Name is checked and must be "UC2_Feather" for correct firmware detection
		- Thresholds of the XYZ Stages. Currently no endswitch is installed and no endswitch controll is implemented

# Further remarks
	- IsContinuousFocusDrive is set to False
	- IsXYStageSequenceable is set to False 



## Overview

The ImSwitch µManager device adapter provides:
- **Hardware Control**: Full access to ImSwitch-controlled devices from µManager
- **Synchronized Acquisition**: Coordinated control of multiple devices
- **Standard Interface**: Uses µManager's standard device API
- **Cross-Platform**: Available on Windows, macOS, and Linux
- **Official Support**: Integrated into µManager nightly builds



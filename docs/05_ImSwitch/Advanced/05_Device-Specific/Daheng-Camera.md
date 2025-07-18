# Install driver for Daheng Camera


## Windows

Have a look here: https://www.get-cameras.com/requestdownload and install the drivers. / SDK 

## Linux

### ARM

You can use the camera on the Raspberry Pi or Jetson Nano.
For this you can do the following steps:


```bash
cd ~
cd Downloads
wget https://dahengimaging.com/downloads/Galaxy_Linux-armhf_Gige-U3_32bits-64bits_1.5.2303.9202.zip
cd Galaxy_Linux-armhf_Gige-U3_32bits-64bits_1.5.2303.9202
chmod +x Galaxy_camera.run
sudo ./Galaxy_camera.run
# go through questionaire
sudo reboot
```

**Install Python bindings**

```bash
cd ~/Downlodas
wget https://dahengimaging.com/downloads/Galaxy_Linux_Python_2.0.2106.9041.tar.gz
tar -xvf Galaxy_Linux_Python_2.0.2106.9041.tar.gz
cd ~/Downlodas/Galaxy_Linux_Python_2.0.2106.9041/api
# conda activate ****ENV
pip install -e .
cd ~/Downlodas/Galaxy_Linux_Python_2.0.2106.9041/api
python ~/Downloads/Galaxy_Linux_Python_2.0.2106.9041/sample/GxSingleCamMono  GxSingleCamMono.py
```

The result will be:
```python
/home/uc2/Downloads/Galaxy_Linux_Python_2.0.2106.9041/sample/GxSingleCamMono/GxSingleCamMono.py:19: SyntaxWarning: "is" with a literal. Did you mean "=="?
  if dev_num is 0:

-------------------------------------------------------------
Sample to show how to acquire mono image continuously and show acquired image.
-------------------------------------------------------------

Initializing......

Frame ID: 0   Height: 3036   Width: 4024
```

***Sample Script***

```python
# version:1.0.1905.9051
import gxipy as gx
from PIL import Image


def main():
    # print the demo information
    print("")
    print("-------------------------------------------------------------")
    print("Sample to show how to acquire mono image continuously and show acquired image.")
    print("-------------------------------------------------------------")
    print("")
    print("Initializing......")
    print("")

    # create a device manager
    device_manager = gx.DeviceManager()
    dev_num, dev_info_list = device_manager.update_device_list()
    if dev_num is 0:
        print("Number of enumerated devices is 0")
        return

    # open the first device
    cam = device_manager.open_device_by_index(1)

    # exit when the camera is a color camera
    if cam.PixelColorFilter.is_implemented() is True:
        print("This sample does not support color camera.")
        cam.close_device()
        return

    # set continuous acquisition
    cam.TriggerMode.set(gx.GxSwitchEntry.OFF)

    # set exposure
    cam.ExposureTime.set(10000)

    # set gain
    cam.Gain.set(10.0)

    # start data acquisition
    cam.stream_on()

    # acquire image: num is the image number
    num = 1
    for i in range(num):
        # get raw image
        raw_image = cam.data_stream[0].get_image()
        if raw_image is None:
            print("Getting image failed.")
            continue

        # create numpy array with data from raw image
        numpy_image = raw_image.get_numpy_array()
        if numpy_image is None:
            continue

        # print height, width, and frame ID of the acquisition image
        print("Frame ID: %d   Height: %d   Width: %d"
              % (raw_image.get_frame_id(), raw_image.get_height(), raw_image.get_width()))

    # stop data acquisition
    cam.stream_off()

    # close device
    cam.close_device()

if __name__ == "__main__":
    main()

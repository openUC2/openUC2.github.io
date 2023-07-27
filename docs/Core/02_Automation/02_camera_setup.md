---
id: Camera_Setup
title: Technical Description: openUC2 Camera Setup
---



The openUC2 Camera Setup provides guidance on configuring and using webcams and Daheng cameras for imaging purposes within the openUC2 ecosystem. This setup allows users to seamlessly integrate cameras into their experimental setups and utilize them for imaging and data acquisition. Below are detailed instructions for setting up cameras on different platforms:

**Webcam:**

*On Windows:*
- Users can utilize the built-in webcam functionality provided by Windows. They need to open the webcam using the Windows internal software and start streaming.

*On Mac:*
- For Mac users, the Photobooth application can be used to access the webcam. Simply open the Photobooth application and select the camera to start capturing images or videos.

*Alternative Method:*
- Users can also use the openUC2 Web Serial interface available at `https://youseetoo.github.io/indexWebSerialTest.html` to open the camera stream.

**Daheng Cameras:**

![](IMAGES/dahenguc2.jpeg)
*On Windows:*
- To use Daheng cameras on Windows, users should visit `https://www.get-cameras.com/customerdownloads?submissionGuid=93704570-544a-43e8-83d6-f5f3cf0b97fb`.
- From the provided options, select the "Windows SDK USB2+USB3+GigE (including Directshow + Python) Galaxy V1.23.2305.9161" package.
- Install the software and drivers from the downloaded package.
- Once installed, users can start the "Galaxy Viewer" application to begin capturing images using the Daheng camera.

*On Android Phones:*
- To use Daheng cameras on Android phones, users should first visit `https://www.get-cameras.com/customerdownloads?submissionGuid=93704570-544a-43e8-83d6-f5f3cf0b97fb`.
- From the provided options, select the "Android USB3 SDK v1.2.2112.9201" package and download it.
- After downloading, unzip the package and install the "GxViewer_GetRawImage.apk" on the Android phone (users may need to allow installation of apps from unknown sources or 3rd party apps).
- Connect the Daheng camera to the Android phone using a USB-C to Daheng cable (adapter).
- Open the installed app ("GxViewer_GetRawImage") and grant access to the USB connection when prompted.
- Users can adjust camera settings by swiping left in the app and then proceed to capture images.

**Video Tutorial:**
A video tutorial demonstrating the camera setup is available at `https://youtu.be/PtdU5qE6BSc`.

The openUC2 Camera Setup provides users with easy-to-follow instructions for configuring and utilizing webcams and Daheng cameras on different platforms, enabling seamless integration into various imaging applications and experiments.


<iframe width="560" height="315" src="https://www.youtube.com/embed/PtdU5qE6BSc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>


### XIAO Sense Camera

Coming Soon.

You can have a glimpse here https://github.com/openUC2/openUC2-SEEED-XIAO-Camera/

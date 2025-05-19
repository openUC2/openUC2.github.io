# ImSwitch Experimental Features Documentation

## Overview

This document details the new experimental features for the microscopy control software, ImSwitch. These features include a headless version of the software, suitable for resource-constrained environments, and a Docker container setup for easy deployment and testing.
The headless version allows operation on resource-limited devices, while the Docker container facilitates easy deployment and testing. Please provide feedback and report any issues encountered to help improve these experimental features.

## Headless Version in Google Colab

We have developed a headless version of ImSwitch that operates without the need for the QT graphical interface. This version allows remote control and UI element access solely through the REST API or Jupyter Notebook. Please note that some functions are still under development, and this version is experimental.

### Use Cases

This headless version is particularly useful on devices such as Raspberry Pis and Nvidia Jetsons, which may struggle with the resource demands of installing and running PyQT.

### Getting Started in Google Colab

To try the headless version of ImSwitch in Google Colab, follow these steps:

1. Install ImSwitch:
    ```python
    !pip install https://github.com/openUC2/ImSwitch/archive/refs/heads/NOQT.zip #--no-deps ##--force-reinstall
    ```

2. Access the public version in Google Colab:
    [Google Colab Link](https://colab.research.google.com/drive/1fGskyp6spnU-aaYUl5Ypn2k9MvtZMN6L?usp=sharing)

3. Clone the repository and checkout the `NOQT` branch:
    ```python
    %cd ~
    !git clone https://github.com/openUC2/ImSwitch
    !git pull
    %cd ./ImSwitch
    !git checkout NOQT
    ```

4. Install the package:
    ```python
    !pip install -e .
    ```

5. Configure and run ImSwitch in headless mode:
    ```python
    from google.colab.output import eval_js
    print(eval_js("google.colab.kernel.proxyPort(8002)"))
    from imswitch.__main__ import main
    import imswitch
    imswitch.IS_HEADLESS = True
    main(is_headless=True, default_config="example_virtual_microscope.json")
    input()  # Prevent from closing the cell
    ```

## Docker Container

A Docker container is available for ImSwitch, providing a convenient way to deploy and test the software.

### Docker Container Details

- **Container Registry:** [ImSwitch Container Registry](https://github.com/openUC2/ImSwitch/pkgs/container/imswitch)
- **Docker Pull Command:**
    ```sh
    docker pull ghcr.io/openuc2/imswitch:latest
    ```

- **Dockerfile:** [ImSwitch Dockerfile](https://github.com/openUC2/ImSwitch/blob/master/docker/dockerfileImSwitch)

### Running the Docker Container

1. Launch the Docker container:
    ```sh
    docker run -it --rm -p 9876:9876 -p 8001:8001 -p 2222:22 imswitch
    ```

2. Access the GUI and REST API:
    - Open your browser and go to `localhost:9876` to access the GUI.
    - Go to `localhost:8001` to access the REST API.

### Notes

- This Docker setup is primarily a demo version to freeze system dependencies.
- The next step involves integrating actual hardware for complete functionality.

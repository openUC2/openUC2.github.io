
## Updated openUC2 ImSwitch

In this guide, we'll walk you through the process of updating ImSwitch **after** you've installed it using pip. The update consists of three main steps:

1. **Updating the ImSwitch UC2 version**
2. **Updating the UC2-REST**
3. **Updating the UC2-ESP32 firmware**

### 1. Updating the ImSwitch UC2 Version

*Assumption:* You have previously cloned the ImSwitch repository using git.

1. Open your terminal.
2. Activate the ImSwitch environment:

    ```bash
    conda activate imswitch
    ```

3. Navigate to the directory where you cloned ImSwitch:

    ```bash
    cd <DIRECTORY/WHERE/YOU/DOWNLOADED/IMSWITCH>
    ```

4. Pull the latest version from the repository and install:

    ```bash
    git pull https://github.com/openUC2/ImSwitch/
    pip install -e .
    ```

### 2. Updating the UC2-REST to Interface the UC2 Electronics

*Assumption:* You have previously cloned the UC2-REST repository using git.

1. In the terminal, navigate to the directory where you cloned UC2-REST:

    ```bash
    cd <DIRECTORY/WHERE/YOU/DOWNLOADED/UC2-REST>
    ```

2. Pull the latest version from the repository and install:

    ```bash
    git pull https://github.com/openUC2/UC2-REST/
    pip install -e .
    ```

### 3. Updating the UC2-ESP32 Firmware

1. Visit the [UC2 Firmware Page](https://youseetoo.github.io/).
2. Select the board you're using. If you're uncertain about this, feel free to reach out via email.
3. Click on the "Connect" button.
4. From the browser-provided list, select the COM port.
5. Click on "Flash Firmware".
6. Wait for the installation process to complete.
7. Test the firmware on the [UC2 Web Serial Test Page](https://youseetoo.github.io/indexWebSerialTest.html).
8. Close the browser window to release the serial port.

Finally, you can start ImSwitch:

```bash
python -m imswitch
```

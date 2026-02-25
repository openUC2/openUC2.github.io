---
toc_max_heading_level: 4
---

# Logging

## System logs

### How to enable persistent logging

To make journald store logs persistently across boots:

1. Shut down the RPi.
2. Remove the RPi's SD card and insert it into your own computer instead.
3. Mount the SD card's root partition on your computer.
4. Make a new directory in the SD card's root partition at `/etc/systemd/journald.conf.d`.
5. In the new directory at `/etc/systemd/journald.conf.d`, make a new file named `99-persistent-storage.conf`, with the following contents:
   ```ini
   [Journal]
   Storage=persistent
   ```
6. Reboot

:::warning

Storing logs persistently will wear out the SD card more quickly, so only do this if necessary!

:::

To undo this change:

1. Shut down the RPi.
2. Remove the RPi's SD card and insert it into your own computer instead.
3. Mount the SD card's root partition on your computer.
4. Delete the file at `/etc/systemd/journald.conf.d/99-persistent-storage.conf`.
5. Reboot

### How to check logs from a previous boot

After [enabling persistent logging](#how-to-enable-persistent-logging):

1. Enter the RPi's terminal.
2. Run the command `journalctl --boot=-{n}` to check the logs from `n` boots ago.
   For example, run `journalctl --boot=-1` to check the logs from the previous boot.

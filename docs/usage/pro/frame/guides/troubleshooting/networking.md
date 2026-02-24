---
toc_max_heading_level: 4
---

# Networking

## Firewall

### How to disable the firewall

#### temporarily

To disable the firewall until the next boot:

1. Enter the RPi's terminal.
2. Run the command `sudo systemctl stop firewalld`.

To undo this change:

1. Enter the RPi's terminal.
2. Run the command `sudo systemctl start firewalld`.

#### persistently

To disable the firewall on every boot:

1. Enter the RPi's terminal.
2. Run the command `sudo systemctl disable --now firewalld`.
3. Run the command `sudo systemctl mask firewalld`.

To undo this change:

1. Enter the RPi's terminal.
2. Run the command `sudo systemctl enable --now firewalld`.
3. Run the command `sudo systemctl unmask firewalld`.

### How to open a new port

#### temporarily

To open up a new TCP port `{port}`:

1. Enter the RPi's terminal.
2. Run the command:
   ```bash
   sudo firewall-cmd --zone=public    --add-port={port}/tcp
   sudo firewall-cmd --zone=nm-shared --add-port={port}/tcp
   ```
   For example, to open up TCP port 8080, run:
   ```bash
   sudo firewall-cmd --zone=public    --add-port=8080/tcp
   sudo firewall-cmd --zone=nm-shared --add-port=8080/tcp
   ```

#### persistently

To open up a new TCP port `{port}`:

1. Enter the RPi's terminal.
2. Run the following command:
   ```bash
   sudo tee -a <<<'  <port port="{port}" protocol="tcp"/>' \
      /etc/firewalld/zones.d/public/80-custom-ports.xml \
      /etc/firewalld/zones.d/nm-shared/80-custom-ports.xml
   ```
   For example, to open up TCP port 8080, run:
   ```bash
   sudo tee -a <<<'  <port port="8080" protocol="tcp"/>' \
      /etc/firewalld/zones.d/public/80-custom-ports.xml \
      /etc/firewalld/zones.d/nm-shared/80-custom-ports.xml
   ```
3. Apply your changes by rebooting or running the following commands:
   ```bash
   sudo systemctl restart \
      assemble-firewalld-zone@public.service \
      assemble-firewalld-zone@nm-shared.service
   sudo firewall-cmd --reload
   ```

To undo this change:
1. Enter the RPi's terminal.
2. Run the following command:
   ```bash
   sudo sed -i '/<port port="{port}" protocol="tcp"/>/d' \
      /etc/firewalld/zones.d/public/80-custom-ports.xml \
      /etc/firewalld/zones.d/nm-shared/80-custom-ports.xml
   ```
   For example, to undo the opening of TCP port 8080, run:
   ```bash
   sudo sed -i '/<port port="8080" protocol="tcp"/>/d' \
      /etc/firewalld/zones.d/public/80-custom-ports.xml \
      /etc/firewalld/zones.d/nm-shared/80-custom-ports.xml
   ```
3. Apply your changes by rebooting or running the following commands:
   ```bash
   sudo systemctl restart \
      assemble-firewalld-zone@public.service \
      assemble-firewalld-zone@nm-shared.service
   sudo firewall-cmd --reload
   ```




## Setup Wifi Access Point on the Raspi

from: https://cdn-learn.adafruit.com/downloads/pdf/setting-up-a-raspberry-pi-as-a-wifi-access-point.pdf


```bash
sudo apt update
sudo apt -y upgrade # takes long
sudo apt install -y hostapd dnsmasq
sudo systemctl unmask hostapd
sudo systemctl enable hostapd
sudo DEBIAN_FRONTEND=noninteractive apt install -y netfilter-persistent iptablespersistent
sudo reboot
```

```bash
sudo nano /etc/dhcpcd.conf
-------
interface wlan0
 static ip_address=192.168.4.1/24
 nohook wpa_supplicant
```

```bash
sudo nano /etc/sysctl.d/routed-ap.conf
-------
````

```bash
sudo nano /etc/dnsmasq.conf
-------
interface=wlan0 # Listening interface
dhcp-range=192.168.4.2,192.168.4.20,255.255.255.0,24h
 # Pool of IP addresses served via DHCP
domain=wlan # Local wireless DNS domain
address=/gw.wlan/192.168.4.1 # Alias for this router
```
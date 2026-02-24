---
sidebar_position: 21
---

# Software Access

## How to access browser apps

1. [Connect to the FRAME](../connectivity/README.md#how-to-connect-to-the-frame).

2. In your computer's web browser, open [the FRAME's landing page](../connectivity/README.md#how-to-access-the-frames-landing-page).

3. Click on the link for the browser app.
   For example, to open ImSwitch, click on the landing page's link for ImSwitch.

## How to access the FRAME's terminal

### via Cockpit

1. [Open the browser app](#how-to-access-browser-apps) for Cockpit.

2. Log in to Cockpit, using the `pi` username and the password for the `pi` user.

   :::tip

   By default, the `pi` user's password is `youseetoo`.

   :::

3. Open the Terminal using Cockpit's navigation sidebar.

### via SSH

If you're able to [access the landing page](../connectivity/README.md#how-to-access-the-frames-landing-page) via the URL `http://{domain name}`, then:

1. Open a local terminal on your computer.

2. Run the command `ssh pi@{domain name}`.
   For example, if `{domain name}` is `open.uc2`, run the command `ssh pi@open.uc2`.

3. Enter the password for the `pi` user.

   :::tip

   By default, the `pi` user's password is `youseetoo`.

   :::

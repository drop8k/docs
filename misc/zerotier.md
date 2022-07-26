---
title: Configuring ZeroTier
parent: Other
has_children: false
nav_order: 1
---

# Configuring ZeroTier
drop servers use [ZeroTier](https://www.zerotier.com) to allow users to connect without being on the same home network. 

ZeroTier is required to join game servers or connect to some of drop's servers, and you will not be able to connect without setting up your client.

- [Windows](https://drop8k.github.io/docs/misc/zerotier.html#windows)
- [Linux](https://drop8k.github.io/docs/misc/zerotier.html#linux)

## Windows

### Downloading the ZeroTier Client
- Download the Windows installer from [ZeroTier](https://www.zerotier.com/download/) and launch the installer.
   - Direct Download Link: [`ZeroTier One.msi`](https://download.zerotier.com/dist/ZeroTier%20One.msi)
- Go to your system tray and locate ZeroTier. Right-click on the icon > ***Join New Network...***.
   - If it does not show up, relaunch the application.

![WindowsSandboxClient_XfbeXglXg1](https://user-images.githubusercontent.com/92121005/181072734-2dd13cca-d44b-4f6a-8606-e7eeab9ad2cb.gif)

### Connecting to a Network
- Paste the unique 16-digit network ID set up by you or provided by the administrator into the box and click **Join**. The network should show up in ZeroTier UI.
   - **Private networks will not show up until it is approved.** [Manage your network](https://my.zerotier.com/) or contact the network administrator.

![WindowsSandboxClient_nivqUvr532](https://user-images.githubusercontent.com/92121005/181073673-3c4769cf-7d75-471b-9517-1c35eda98567.gif)

### Leaving a Network
- Launch the ZeroTier UI. Go to your system tray and locate ZeroTier.
- Right-click on the icon and hover over the network you wish to disconnect from > ***Disconnect***.

## Linux

### Downloading the ZeroTier Client
> This guide will be using Arch. However, configuration should be similar across distros.

- Download the ZeroTier client by launching the terminal, then input the following for your Linux distribution:
   - [Arch:](https://archlinux.org/packages/community/x86_64/zerotier-one/) `sudo pacman -S zerotier-one`
   - Debian: `curl -s https://install.zerotier.com | sudo bash`

### Connecting to a Network
- In terminal, type `sudo zerotier-cli join <network_ID>`, replacing `<network_ID>` with the unique 16-digit network ID set up by you or provided by the administrator.
- Check that you are connected by typing `sudo zerotier-cli listnetworks`. *If successful, the network will show up.*
   - **Private networks will not show up until it is approved.** [Manage your network](https://my.zerotier.com/) or contact the network administrator.

### Leaving a Network
- In terminal, type `sudo zerotier-cli leave <network_ID>`, replacing `<network_ID>` with the unique 16-digit network ID you wish to disconnect from.

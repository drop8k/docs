---
title: Configuring ZeroTier
parent: Other
has_children: false
nav_order: 1
---

# Configuring ZeroTier
drop servers use [ZeroTier](https://www.zerotier.com) to allow users to connect without being on the same home network. 

ZeroTier is required to join these game servers, and you will not be able to connect without setting up your client.

## Windows

### Downloading the ZeroTier Client
- Download the Windows installer from [ZeroTier](https://www.zerotier.com/download/) and launch the installer.
   - Direct DL: [`ZeroTier One.msi`](https://download.zerotier.com/dist/ZeroTier%20One.msi)
- Go to your system tray and locate ZeroTier. Right-click on the icon > **Join New Network...**.
   - If it does not show up, relaunch the application.

![WindowsSandboxClient_XfbeXglXg1](https://user-images.githubusercontent.com/92121005/181072734-2dd13cca-d44b-4f6a-8606-e7eeab9ad2cb.gif)

- Paste the unique 16-digit network ID into the box and click **Join**. The network should show up in ZeroTier UI.
   - **Private networks will not show up until it is approved.** Contact the network administrator.

![WindowsSandboxClient_nivqUvr532](https://user-images.githubusercontent.com/92121005/181073673-3c4769cf-7d75-471b-9517-1c35eda98567.gif)

## Linux

### Downloading the ZeroTier Client
- Download the ZeroTier client for your Linux distribution.
   - [Arch:](https://archlinux.org/packages/community/x86_64/zerotier-one/) `sudo pacman -S zerotier-one`
   - Debian: ``

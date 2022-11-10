---
title: Quick Setup Guide
parent: Minecraft
has_children: false
nav_order: 1
---

# Quick Setup Guide
In order to join Minecraft servers hosted by drop, you will need to prepare and configure your client.

*If you have any questions, please contact the server administrator.*

If you want to get started, scroll through these guides:
1. [Configuring ZeroTier](https://drop8k.github.io/docs/misc/zerotier.html)
2. Installing Modpacks
    - [Installing Modpacks Using CurseForge App (Windows)](https://drop8k.github.io/docs/minecraft/installation/windows.html)
    - [Installing Modpacks Using CurseForge CLI (Linux)](https://drop8k.github.io/docs/minecraft/installation/linux.html)
3. [Extra Mods](https://drop8k.github.io/docs/minecraft/extras/main.html)
4. [Connecting to a Server](https://drop8k.github.io/docs/minecraft/connect.html)

## Step 1: Configuring ZeroTier
drop utilizes the [ZeroTier](https://www.zerotier.com/) virtual Ethernet network for connections to its servers. *This ensures security and compatibility with various clients.*

ZeroTier is supported on both Windows and Linux operating systems.

> See [Configuring ZeroTier](https://drop8k.github.io/docs/misc/zerotier.html) to set up your client.

## Step 2: Installing Modpacks
Some of drop's servers will require certain modpacks and Minecraft versions to join.

Modpacks used can be found in the [Servers](https://drop8k.github.io/docs/server/main.html#servers) section on the main page or in supported Discord servers.


> **For Windows**, see the [CurseForge App](https://drop8k.github.io/docs/server/installation1.html) setup guide on installing modpacks and configuring your launcher.

> **For Linux**, see the [CurseForge CLI](https://drop8k.github.io/docs/server/installation2.html) setup guide on installing modpacks and configuring your launcher.

## Step 3: Extra Mods
Some of drop's servers will require additional mods to be installed, usually on top of ones already provided by a modpack. *Most additional mods are required in order to join a server, otherwise your client will refuse to connect.*

Additionally, some mods operate client-only, *meaning they are not necessary to join the server*, but it may improve user experience.

> See [Extra Mods](https://drop8k.github.io/docs/server/extras.html) for the list of additional mods needed by a server. *You can also check in supported Discord servers.*

> See [Installing Extra Mods](https://drop8k.github.io/docs/server/extras-install.html) on how to install them for your client.

## Step 4: Connecting to a Server
Server IPs are provided on the [Minecraft](https://drop8k.github.io/docs/server/main.html) home page or in supported Discord servers.

**ZeroTier is required to connect to these addresses.** drop uses local IPs provided by ZeroTier, which are accessible to connected clients.

> See [Connecting to a Server](https://drop8k.github.io/docs/server/connect.html) on how to join.

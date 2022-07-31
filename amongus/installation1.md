---
title: Installing Mods
parent: Among Us
has_children: false
nav_order: 2
---

# Installing Mods
> This guide will be using Windows. *Linux operating systems may or may not be supported.*

- [Downloading Mods](https://drop8k.github.io/docs/amongus/installation1.html#downloading-mods)
- [Creating a Modded Instance](https://drop8k.github.io/docs/amongus/installation1.html#creating-a-modded-instance)
- [Connecting to a Server](https://drop8k.github.io/docs/amongus/installation1.html#connecting-to-a-server)

## Downloading Mods
### [LasMonjas](https://github.com/KiraYamato94/LasMonjas)
- Download `LasMonjas.zip` from the latest GitHub release. Head to the [LasMonjas](https://github.com/KiraYamato94/LasMonjas) repository > ***Releases***.

![WindowsSandboxClient_5n4s80I54L](https://user-images.githubusercontent.com/92121005/182039829-9ab7b697-79a0-4684-88f4-3737bf497be2.gif)

## Creating a Modded Instance
### Steam
- Create a copy of your existing Among Us installation.
- In the Steam application, navigate to ***Library***. Find Among Us, right-click > ***Manage*** > ***Browse local files***.
   - The default Steam install directory can be found under `C:\Program Files (x86)\Steam\steamapps\common\`.
- From the new File Explorer window, go back one path, right-click on `Among Us` > ***Copy*** (***Ctrl*** + ***C***). Make a duplicate by right-clicking on the folder > ***Paste*** (***Ctrl*** + ***V***).

![WindowsSandboxClient_EzKHZuzutH](https://user-images.githubusercontent.com/92121005/182039672-475841b9-6129-4202-b223-9bb6cf4ac9d8.gif)

- Navigate to the new folder. Extract the archive's contents to the new directory. *This example uses [LasMonjas](https://github.com/KiraYamato94/LasMonjas)*, however installation may vary.

![WindowsSandboxClient_Oxf0utIPjA](https://user-images.githubusercontent.com/92121005/182039923-0e6a422f-ea13-4d44-8a97-d704457867a4.gif)

- Launch the modded Among Us instance by using the `Among Us` executable in the modded folder.

### Epic Games
wip

## Connecting to a Server
> ⚠ **You must be registered on the ZeroTier network to join.** See how to join in [Configuring ZeroTier](https://drop8k.github.io/docs/misc/zerotier.html).

- Download the custom `regionInfo.json` config file from the [main page](https://drop8k.github.io/docs/amongus/main.html) or from a supported Discord server.
- Navigate to `%APPDATA%\..\LocalLow\Innersloth\Among Us` in File Explorer.
   - Alternatively, you may enter this in Windows Run (***Win*** + ***R***).
- Move/rename the existing `regionInfo.json` (e.g. `regionInfo.json.bak`). Drag the custom `regionInfo.json` from drop.

![WindowsSandboxClient_zCE7LG1hNq](https://user-images.githubusercontent.com/92121005/182037191-2fba6324-2710-4214-8dfa-9bc8ccea03ea.gif)

- If done correctly, you will see `drop8k` listed in the bottom-right.

![WindowsSandboxClient_2QPGpTChOZ](https://user-images.githubusercontent.com/92121005/182037491-cc85fc3b-7686-4fcb-b170-5b3305007396.gif)

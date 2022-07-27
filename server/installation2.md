---
title: Installing Modpacks Using CurseForge CLI (Linux)
parent: Minecraft
has_children: false
nav_order: 3
---

# Installing Modpacks Using CurseForge CLI (Linux)
> This guide will be using Arch. *However, configuration should be similar across distros.*

Modpacks from CurseForge can be downloaded by using [CurseForge-CLI](https://github.com/North-West-Wind/CurseForge-CLI).

This guide is for Linux operating systems.

- [Prerequisities](https://drop8k.github.io/docs/server/installation2.html#prerequisities)
- [Downloading CurseForge CLI](https://drop8k.github.io/docs/server/installation2.html#downloading-curseforge-cli)
- [Downloading Modpacks](https://drop8k.github.io/docs/server/installation2.html#downloading-modpacks)
- [Adding Profiles to Launcher](https://drop8k.github.io/docs/server/installation2.html#adding-profiles-to-launcher)
- [Uninstalling Modpacks](https://drop8k.github.io/docs/server/installation2.html#uninstalling-modpacks)

## Prerequisities
- [OpenJDK](https://openjdk.org/) or OpenJRE

OpenJDK/OpenJRE is required to play Minecraft Java Edition. *Certain versions of Minecraft may require a newer or older version of Java.*

Launch the terminal. Install various versions of OpenJDK with the following:
- [OpenJDK 17](https://openjdk.org/projects/jdk/17)
   - [Arch:](https://archlinux.org/packages/extra/x86_64/jdk17-openjdk/) `sudo pacman -S jdk17-openjdk`
   - Debian: `sudo apt install openjdk-17-jdk`
- [OpenJDK 11](https://openjdk.org/projects/jdk/11)
   - [Arch:](https://archlinux.org/packages/extra/x86_64/jdk11-openjdk/) `sudo pacman -S jdk11-openjdk`
   - Debian: `sudo apt install openjdk-11-jdk`
- [OpenJDK 8](https://openjdk.org/projects/jdk8/)
   - [Arch:](https://archlinux.org/packages/extra/x86_64/jdk8-openjdk/) `sudo pacman -S jdk8-openjdk`
   - Debian: `sudo apt install openjdk-8-jdk`

## Downloading CurseForge CLI
- Head to the [CurseForge-CLI](https://github.com/North-West-Wind/CurseForge-CLI) GitHub repository. Select **Releases** and download `curseforge.zip` from the latest release.

![vmware_y3UJpjjVdT](https://user-images.githubusercontent.com/92121005/181082072-5b2ada48-8f9e-4aae-85bb-421f756a3c3d.gif)

- Extract `curseforge.zip` (e.g. `~/Documents/curseforge-cli`). *Note that this will be the directory where all CurseForge modpacks will be installed.*
   - Arch: You can extract from terminal using `p7zip`. Launch terminal and enter `7z x curseforge.zip`.
      - If you do not have [p7zip](https://archlinux.org/packages/extra/x86_64/p7zip/) installed, install it by entering `sudo pacman -S p7zip` in terminal.

![vmware_aq1gdBhTym](https://user-images.githubusercontent.com/92121005/181083226-490dce8e-f0fd-4d94-a36b-4d6b92b67f4a.gif)

- Launch the folder in terminal by right-clicking the folder in your file manager or by using `cd`.
   - **Make the `curseforge` file executable by adjusting its permissions.**
      - GUI: In your file manager, right-click on the `curseforge` file > ***Properties*** and make sure ***Executable*** is set on.
      - CLI: Run `sudo chmod +x <path_to_file>`. `<path_to_file>` should be the location of the `curseforge` file.
        ![vmware_I4hP3rPeq8](https://user-images.githubusercontent.com/92121005/181083710-47c90a79-a7b7-4314-8646-6f9f75c6b2de.gif)

- Run `curseforge` in terminal to check if the executable works.
   - Use `./curseforge` if your terminal is in the working directory.

## Downloading Modpacks
Modpacks are installed in CurseForge CLI via a direct link to the file ID.

- Launch the [CurseForge](https://www.curseforge.com/minecraft/modpacks) website for Minecraft modpacks. *You may also receive a direct link to the modpack instead; open or paste this link in your browser.*
- On the right-side of the page, find and copy the ***Project ID***.
- Use `./curseforge modpack install <project_id>`, replacing `<project_id>` with the ID of the modpack.
   - The modpack can be found under `/modpack/<modpack_name>`.

![vmware_WOPsb0K5XK](https://user-images.githubusercontent.com/92121005/181084289-881fb4b1-557d-4002-ae66-16b005361a25.gif)

- Alternatively, you may wish to install a specific or older version of a modpack by clicking on the modpack's details > ***Files*** > ***Recent Files*** > ***View All***. Then, copy the file ID from the URL.
   - Add `_<file_id>` to the end of the install command, after the `<project_id>`.

![vmware_R9f8ty1gqR](https://user-images.githubusercontent.com/92121005/181086438-5df35d8d-a874-4fa1-8a0f-738ac9fd6360.gif)

## Adding Profiles to Launcher
### MultiMC/UltimMC
> *This guide assumes you have the launcher pre-configured.*

- Launch the application and click on ***Add Instance***. In ***Vanilla***, select the modpack's Minecraft version from the list, then click ***OK***.

![vmware_UXELkCJbfM](https://user-images.githubusercontent.com/92121005/181091282-d0754959-3162-451c-bbf1-ec8e857bf6cc.gif)

- Right-click on the new instance.
   - **If your modpack uses Forge/Fabric, you will need to add it before you can launch it.** Click on ***Edit Instance*** > ***Version*** > ***Install Forge*** or ***Install Fabric***. *Try to select a version that is close to the one used by the modpack.*

![vmware_9GT4vPPWo6](https://user-images.githubusercontent.com/92121005/181091811-0315a3e8-1f7a-4ae5-b24c-66349c6cfae5.gif)

- Click on ***Minecraft Folder*** to open the folder created by MultiMC. Locate your modpack installation from earlier and find the `modpack` folder (located in `/curseforge-cli/modpack`.
- Drag/copy the modpack's contents (e.g. `skyfactory-4_296062_2699752`) into the MultiMC Minecraft folder.
![vmware_6YGAKA1wHh](https://user-images.githubusercontent.com/92121005/181093056-af31ee92-3b25-44e5-b249-5634150543a7.gif)
   - If configured properly, the modpack's contents will show under ***Edit Instance*** > ***Loader Mods***, ***Resource Packs***, or ***Shader Packs***.
     ![vmware_SbEqCnAwcK](https://user-images.githubusercontent.com/92121005/181093927-31067b6f-f38b-4b70-ad55-17ce48293ae8.gif)

- **Allocate more memory to your instance.** Some modpacks will require more than the default allocated memory, and may not run properly/launch if they run out.
   - Right-click on your instance and click on  ***Edit Instance*** > ***Settings*** > ***Java*** > ***Memory***. Change the ***Minimum memory allocation*** and ***Maximum memory allocation*** as needed, then hit ***Close***.

![vmware_Ju7BKBshjy](https://user-images.githubusercontent.com/92121005/181094843-2bd52397-ef3e-4921-8c97-67e9bce1531c.gif)

## Uninstalling Modpacks
- Delete the modpack under `/modpack`.
   - If you use MultiMC/UltimMC, open the launcher and right-click on your instance, then click on ***Delete***.

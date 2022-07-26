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

## Uninstalling Modpacks
- Delete the modpack under `/modpack`.

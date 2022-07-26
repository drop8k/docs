---
title: Installing Modpacks Using CurseForge CLI (Linux)
parent: Minecraft
has_children: false
nav_order: 3
---

# Installing Modpacks Using CurseForge CLI (Linux)
Modpacks from CurseForge can be downloaded by using [CurseForge-CLI](https://github.com/North-West-Wind/CurseForge-CLI).

This guide is for Linux operating systems.

## Downloading CurseForge-CLI
- Head to the [CurseForge-CLI](https://github.com/North-West-Wind/CurseForge-CLI) GitHub repository. Select **Releases** and download `curseforge.zip` from the latest release.
- Extract `curseforge.zip` (e.g. `~/curseforge-cli`). *Note that this will be the directory where all CurseForge modpacks will be installed.*
- Launch the folder in terminal by right-clicking the folder in your file manager or by using `cd`.
   - **Make the `curseforge` file executable by adjusting its permissions.**
      - GUI: In your file manager, right-click on the `curseforge` file > ***Properties*** and make sure ***Executable*** is set on.
      - CLI: Run `sudo chmod +x <path_to_file>`. `<path_to_file>` should be the location of the `curseforge` file.
- Run `curseforge` to check if the executable works.
   - Use `./curseforge` if your terminal is in the working directory.

## Downloading Modpacks
Modpacks are installed in CurseForge-CLI via a direct link to the file ID.

- Launch the [CurseForge](https://www.curseforge.com/minecraft/modpacks) website for Minecraft modpacks. *You may also receive a direct link to the modpack instead; open or paste this link in your browser.*
- On the right-side, find and copy the ***Project ID***.
- Use `./curseforge modpack install <project_id>`, replacing `<project_id>` with the ID of the modpack.
   - The modpack can be found under `/modpack/<modpack_name>`.

## Uninstalling Modpacks
- Delete the modpack under `/modpack`.

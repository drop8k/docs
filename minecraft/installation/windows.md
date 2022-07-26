---
title: Installing Modpacks Using CurseForge App (Windows)
parent: Minecraft
has_children: false
nav_order: 2
---

# Installing Modpacks Using CurseForge App (Windows)
> Jump to [Downloading Modpacks](https://drop8k.github.io/docs/minecraft/installation/windows.html#downloading-modpacks) if you have CurseForge pre-configured.

Modpacks can be installed conveniently and easily using the CurseForge mod launcher.

This guide is for Windows operating systems.

- [Prerequisities](https://drop8k.github.io/docs/minecraft/installation/windows.html#prerequisites)
- [First-Time Setup (CurseForge)](https://drop8k.github.io/docs/minecraft/installation/windows.html#first-time-setup-curseforge)
- [Downloading Modpacks](https://drop8k.github.io/docs/minecraft/installation/windows.html#downloading-modpacks)
- [Adding Profiles to Launcher](https://drop8k.github.io/docs/minecraft/installation/windows.html#adding-profiles-to-launcher)
- [Uninstalling Modpacks](https://drop8k.github.io/docs/minecraft/installation/windows.html#uninstalling-modpacks)

## Prerequisites
- [Java Runtime Environment](https://www.java.com/en/download/)/[JDK](https://www.oracle.com/java/technologies/downloads/) or [Liberica JDK](https://bell-sw.com/pages/downloads/) (Full JRE)

## First-Time Setup (CurseForge

- Download [CurseForge](https://download.curseforge.com/) and run the installer.
   - **CurseForge requires [Overwolf](https://www.overwolf.com/) to be installed.** *If you do not have Overwolf installed, the setup will install it for you.*

![image](https://user-images.githubusercontent.com/92121005/180902006-49748f93-6da8-40ce-9475-a798a8fe7e76.png)

- Launch the application. Create a new Minecraft installation folder using CurseForge, or manually set your folder. *Note that all Minecraft modpacks installed with CurseForge will be located in this directory.*
   - **Create a new Minecraft installation folder.** If CurseForge does not detect your existing installation, or you wish to create your own, you can get CurseForge to make a new one.
     - Head to ***Settings*** > ***Game Specific*** > ***Add*** > ***Minecraft*** > ***Add Minecraft (Java Edition)***.
     - The default installation folder created by CurseForge is located under `C:\Users\<your_name>\curseforge\minecraft`, with `<your_name>` being the name of your user folder. *If you want to select a different folder or drive, select **Advanced**.*
   ![WindowsSandboxClient_u2rUfn29hR](https://user-images.githubusercontent.com/92121005/180903662-824846cc-4277-4c9d-a3b7-66b2cf76f26c.gif)

## Downloading Modpacks
Modpacks can be installed by browsing the CurseForge website or using the CurseForge app. 

**It is recommended to use the website, as you can be sure you are installing the correct pack.** *However, the app is an option if you are comfortable with using it., and may be easier to some users.*

### Using the CurseForge Website
- Launch the [CurseForge](https://www.curseforge.com/minecraft/modpacks) website for Minecraft modpacks. *You may also receive a direct link to the modpack instead; open or paste this link in your browser.*
   - You can find the modpacks servers use under [Servers](https://drop8k.github.io/docs/server/main.html#servers).
- Install modpacks using the **Install** button. It should automatically launch CurseForge and begin installation.

![WindowsSandboxClient_EdplxAV8uA](https://user-images.githubusercontent.com/92121005/180908517-ba47e568-bdba-4169-8ce7-33cf1f98f775.gif)

- Alternatively, you may wish to install a specific or older version of a modpack by clicking on the modpack's details > ***Files*** > ***Recent Files*** > ***View All***.

![WindowsSandboxClient_G2oGkfTcgv](https://user-images.githubusercontent.com/92121005/180909199-e0b21813-ff31-4ea5-a6a3-a1226d567453.gif)

### Using the CurseForge App

- In the left sidebar, select ***Minecraft*** > ***Browse Modpacks***. Modpacks can be installed using the ***Install*** button.

![WindowsSandboxClient_6lDjIrpGpg](https://user-images.githubusercontent.com/92121005/180906091-7defdf29-f9e9-43db-b946-befc78b31bd3.gif)

- Alternatively, you may wish to install a specific or older version of a modpack by clicking on the modpack's details > ***Versions***.

![WindowsSandboxClient_u5ADROmSoG](https://user-images.githubusercontent.com/92121005/180907172-1f128540-1418-44b8-9ebd-51a20a6c2274.gif)

## Adding Profiles to Launcher

### CurseForge (Official)
By default, CurseForge will automatically make profiles for your modpacks.

- In the launcher, go to ***Minecraft*** > ***My Modpacks***. Hover your mouse over the modpack you want to launch and press ***Play***.

![WindowsSandboxClient_R4wFIaJAaU](https://user-images.githubusercontent.com/92121005/181117431-e09bdd2a-42fa-4576-94d1-fe9767a04a49.gif)

### SKLauncher: Method 1 (Recommended)
SKLauncher can work with CurseForge and will automatically create a profile just like the vanilla launcher, while still allowing you to launch from CurseForge. *This method is recommended as it only needs to be set up once, allowing the launcher to work with any future modpacks.*

- Download the [SKLauncher](https://skmedix.pl/sklauncher) executable and save it to a directory. `.jar` versions will not work.
- Locate the Minecraft installation folder created by CurseForge and navigate to `Install`.
   - By default, CurseForge places it under: `C:\Users\<your_name>\curseforge\minecraft\Install`, replacing `<your_name>` with the name of your user folder.
- Delete/rename the `minecraft.exe` file found in `Install` (e.g. `minecraft.exe.bak`). Then, drag the SKLauncher executable (e.g. `SKlauncher_3-beta.21.exe`) into the directory and rename it to `minecraft.exe`.
![WindowsSandboxClient_jPOvtvhGJj](https://user-images.githubusercontent.com/92121005/181118888-f66a9114-6b8e-442a-b5af-726d91b788c0.gif)
   - If you cannot rename the `minecraft` executable, make sure you've enabled ***File name extensions*** in ***File Explorer*** > ***View*** > ***Show/hide***.
     ![WindowsSandboxClient_1g14xQ3BDe](https://user-images.githubusercontent.com/92121005/181119433-7372fadc-b394-4562-960f-073e4b2870ad.gif)
- Once complete, SKLauncher should appear instead when you hit ***Play***.

![WindowsSandboxClient_vn8raRWlHe](https://user-images.githubusercontent.com/92121005/181120330-7aa776c7-1131-420c-abed-9d121558c4cc.gif)

### SKLauncher: Method 2
You can also manually create profiles in SKLauncher.

- Download and launch the [SKLauncher](https://skmedix.pl/sklauncher) executable.
- Create a new profile with the Minecraft version of the modpack. Then, click on the ***3 Dots*** > ***Edit Profile*** > ***Game Settings*** > ***Game Directory***.
   - Set the ***Game Directory*** to the location of the modpack installed by CurseForge.

![WindowsSandboxClient_GgExcRvViV](https://user-images.githubusercontent.com/92121005/181120658-ba7d5aba-4d4e-40ff-b50a-02ebbe593807.gif)
- Launch the modpack by selecting on the profile and clicking ***Play***.

## Uninstalling Modpacks
- To uninstall a modpack, open the CurseForge app and head to the left sidebar. Select ***Minecraft*** > ***My Modpacks***. Click on the modpack > ***3 Dots*** > ***Delete Profile***.

![WindowsSandboxClient_4tTHLpNyth](https://user-images.githubusercontent.com/92121005/180910430-50bd59d9-d54e-47db-ad9c-9fcad11a4ce1.gif)

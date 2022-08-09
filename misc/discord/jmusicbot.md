---
title: Deploying JMusicBot
parent: Discord Bots
grand_parent: Other
nav_order: 2
---

# Deploying JMusicBot

## Ubuntu
> This guide assumes `sudo` or `root` access.

### Prerequisities
- Install necessary dependencies:
```
apt update && apt upgrade && apt install -y openjdk-11-jdk screen nano wget
```

### Installing JMusicBot
- Create directories for JMusicBot:
```
mkdir ~/JMusicBot/ && mkdir ~/JMusicBot/Playlists
```

- Download the latest release of [JMusicBot](https://github.com/jagrosh/MusicBot/releases) using `wget`. *The following is for version 0.3.8.*
```
wget https://github.com/jagrosh/MusicBot/releases/download/0.3.8/JMusicBot-0.3.8.jar && chmod +x ~/JMusicBot-0.3.8.jar
```

- Create the shell script (e.g. `start_bot.sh`) for the bot to start up with `screen`. *The following is for version 0.3.8.*
```
#!/bin/sh
cd ~/JMusicBot
screen -S jmusicbot bash -c "java -Dnogui=true -jar JMusicBot-0.3.8.jar"
exec $SHELL
```

- To start the bot, run `start_bot.sh`. The bot can then be accessed under the `jmusicbot` screen.

### Configuring JMusicBot
- Create necessary files:
   - `~/JMusicBot/config.txt`
   - `~/JMusicBot/serversettings.json`

- Example file structure:
```
~/JMusicBot/
 ⎿ Playlists/
   ⎿ ExamplePlaylist.txt
 ⎿ config.txt
 ⎿ JMusicBot-0.3.8.jar
 ⎿ serversettings.json
```

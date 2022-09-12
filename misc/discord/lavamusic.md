---
title: Deploying lavamusic
parent: Discord Bots
grand_parent: Other
nav_order: 1
---

# Deploying lavamusic

## Ubuntu
> This guide assumes `sudo` privilege or `root` access.

### Prerequisities
- Update packages and install required dependencies:
```
apt update && apt upgrade && apt install -y openjdk-11-jdk screen nano wget nodejs
```

### Installing Lavalink & lavamusic
- Create directories for lavamusic:
```
mkdir ~/Discord/ && mkdir ~/Discord/Lavalink
```

- Clone the latest release of [lavamusic](https://github.com/brblacky/lavamusic) using `git`.
```
git clone https://github.com/brblacky/lavamusic.git
```

- Download the latest `Lavalink.jar` from the [Lavalink](https://github.com/Cog-Creators/Lavalink-Jars) repo. *The following is for release [3.4.0_1350](https://github.com/Cog-Creators/Lavalink-Jars/releases/tag/3.4.0_1350).*
```
cd ~/Discord/Lavalink && wget https://github.com/Cog-Creators/Lavalink-Jars/releases/download/3.4.0_1350/Lavalink.jar
```

- Create the shell script to start the Lavalink server:
```
#!/bin/sh
cd ~/Discord/lavalink
screen -S lavalink bash -c "java -jar Lavalink.jar"
exec $SHELL
```

- Create the shell script to start a lavamusic instance:
```
#!/bin/sh
cd ~/Discord/lavamusic
screen -S lavamusic bash -c "node src/index.js"
exec $SHELL
```

### Configuring Lavalink
- Create [`application.yml`](https://raw.githubusercontent.com/drop8k/docs/main/misc/discord/assets/lavamusic/application.yml) in the `Lavalink` directory.

### Configuring lavamusic
- Modify [`src/config.js`](https://raw.githubusercontent.com/drop8k/docs/main/misc/discord/assets/lavamusic/config.js).


### Usage
- Start the Lavalink server with `start_lavalink.sh`.
- Start a lavamusic instance with `start_lavamusic.sh` or `node src/index.js`.

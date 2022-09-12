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
- Create `application.yml` in the `Lavalink` directory:
<details>
  <summary>Expand</summary>

`application.yml`
```
server: # REST and WS server
  port: 2333
  address: 127.0.0.1
lavalink:
  server:
    password: "drop8k" # Change this password for public services.
    sources:
      youtube: true
      bandcamp: true
      soundcloud: true
      twitch: true
      vimeo: true
      http: true
      local: false
    bufferDurationMs: 400 # The duration of the NAS buffer. Higher values fare better against longer GC pauses
    frameBufferDurationMs: 5000 # How many milliseconds of audio to keep buffered
    youtubePlaylistLoadLimit: 20 # Number of pages at 100 each
    playerUpdateInterval: 5 # How frequently to send player updates to clients, in seconds
    youtubeSearchEnabled: true
    soundcloudSearchEnabled: true
    gc-warnings: true
    #ratelimit:
      #ipBlocks: ["1.0.0.0/8", "..."] # list of ip blocks
      #excludedIps: ["...", "..."] # ips which should be explicit excluded from usage by lavalink
      #strategy: "RotateOnBan" # RotateOnBan | LoadBalance | NanoSwitch | RotatingNanoSwitch
      #searchTriggersFail: true # Whether a search 429 should trigger marking the ip as failing
      #retryLimit: -1 # -1 = use default lavaplayer value | 0 = infinity | >0 = retry will happen this numbers times

metrics:
  prometheus:
    enabled: false
    endpoint: /metrics

sentry:
  dsn: ""
  environment: ""
#  tags:
#    some_key: some_value
#    another_key: another_value

logging:
  file:
    max-history: 30
    max-size: 1GB
  path: ./logs/

  level:
    root: INFO
    lavalink: INFO
```

</details>

### Configuring lavamusic
- Modify `src/config.js`:
<details>
  <summary>Expand</summary>

`config.js`
```
require("dotenv").config();

module.exports = {
    token: process.env.TOKEN || "",  // your bot token
    clientID: process.env.CLIENT_ID || "", // your bot client id
    prefix: process.env.PREFIX || "d!", // bot prefix
    ownerID: process.env.OWNERID || "", //your discord id
    SpotifyID: process.env.SPOTIFYID || "",
    SpotifySecret: process.env.SPOTIFYSECRET || "",
    mongourl: process.env.MONGO_URI || "", // MongoDb URL
    embedColor: process.env.COlOR || "#00BAFF", // embed colour
    logs: process.env.LOGS || "", // channel id for guild create and delete logs
    links: {
        img: process.env.IMG || 'https://media.discordapp.net/attachments/963097935820750878/983300268131225651/20220606_145403.png', //setup system background image
        support: process.env.SUPPORT || '', //support server invite link
        invite: process.env.INVITE || '' //bot invite link
    },
    nodes: [
        {
            host: process.env.NODE_HOST || "127.0.0.1",
            identifier: process.env.NODE_ID || "lavalink1",
            port: parseInt(process.env.NODE_PORT || "2333"),
            password: process.env.NODE_PASSWORD || "drop8k",
            secure: parseBoolean(process.env.NODE_SECURE || "false"),

        }
    ],

}

function parseBoolean(value) {
    if (typeof (value) === 'string') {
        value = value.trim().toLowerCase();
    }
    switch (value) {
        case true:
        case "true":
            return true;
        default:
            return false;
    }
}
```

</details>

### Usage
- Start the Lavalink server with `start_lavalink.sh`.
- Start a lavamusic instance with `start_lavamusic.sh` or `node src/index.js`.

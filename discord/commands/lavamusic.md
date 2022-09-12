---
title: lavamusic
parent: Discord
has_children: false
nav_order: 1
---

# lavamusic

drop uses a modified version of [lavamusic](https://github.com/brblacky/lavamusic) for its Discord bots. lavamusic runs on the [Node.js](https://nodejs.org/en/) runtime, and is supported by various dependencies:
- [Discord.js](https://github.com/discordjs)
- [erela.js](https://github.com/MenuDocs/erela.js)
- [Discord API](https://github.com/discord)

As a service, lavamusic provides quality playback while minimizing server downtime. Additionally, [Lavalink](https://github.com/freyacodes/Lavalink) nodes are hosted locally and offsite for reliability.

## Basic Commands
> **drop now supports slash commands!** Use the `/` prefix instead for easier interaction!

List: `d!help` / `d?help` / `d&help`

### Music

| Command             | Details                                      |
| :------------------ | :------------------------------------------- |
| `/play <url/query>` | Plays/adds the song or playlist to queue.    |
| `/nowplaying`       | Check the current song.                      |
| `/queue`            | View the current queue or specific page.     |
| `/skip`             | Skips the current song.                      |
| `/pause`            | Pauses the current song.                     |
| `/stop`             | Stops playing the current song.              |
| `/remove <#>`       | Removes selected song from queue.            |
| `/shuffle`          | Shuffles all songs in queue.                 |
| `/search <query>`   | Searches for query on YouTube.               |

### Playlists

| Command               | Details                                    |
| :-------------------- | :----------------------------------------- |
| `/create <name>`      | Creates a playlist with inputted name.     |
| `/load <name>`        | Loads saved playlist from user.            |
| `/delete <name>`      | Deletes saved playlist.                    |
| `/savecurrent <name>` | Saves current song to selected playlist.   |
| `/savequeue <name>`   | Saves current queue to selected playlist.  |

### Debug

| Command   | Details                             |
| :-------- | :---------------------------------- |
| `/about`  | Shows info about the bot.           |
| `/ping`   | Checks the bot's latency.           |
| `/node`   | View lavalink node info.            |
| `/status` | View bot and server specifications. |

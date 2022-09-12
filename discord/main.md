---
title: Discord
has_children: true
nav_order: 2
---

# Discord

drop is a private bot with basic functionality.

drop runs on various hardware for *upmost reliability and flexibility*.

## Libraries
### [lavamusic](https://github.com/brblacky/lavamusic)
drop uses a modified version of [lavamusic](https://github.com/brblacky/lavamusic) for its Discord bots. lavamusic runs on the [Node.js](https://nodejs.org/en/) runtime, and is supported by various dependencies:
- [Discord.js](https://github.com/discordjs)
- [erela.js](https://github.com/MenuDocs/erela.js)
- [Discord API](https://github.com/discord)

As a service, lavamusic provides quality playback while minimizing server downtime. Additionally, [Lavalink](https://github.com/freyacodes/Lavalink) nodes are hosted locally and offsite for reliability.

### [JMusicBot](https://github.com/jagrosh/MusicBot)
> ⚠ **This service has since been depreciated.** Please use [lavamusic](https://github.com/brblacky/lavamusic).

drop uses [JMusicBot](https://github.com/jagrosh/MusicBot) for its Discord bots. It is supported by the [JDA library](https://github.com/DV8FromTheWorld/JDA) and the [Discord API](https://github.com/discord). 

## Hardware
Servers run on Debian-based Linux operating systems and use the [Node.js](https://nodejs.org/en/) runtime.

| #     | Region  | Bot Version                                                               | Node.js Version                                          | OpenJDK Version                                         | Operating System                |
| :---- | :------ | :------------------------------------------------------------------------ | :------------------------------------------------------- | :------------------------------------------------------ | :------------------------------ |
| drop1 | NA-East | [lavamusic v2.0.2](https://github.com/brblacky/lavamusic)                 | [v16.16.0](https://nodejs.org/en/blog/release/v16.16.0/) | [OpenJDK 11.0.16](https://openjdk.org/projects/jdk/11/) | Debian GNU/Linux 11 (aarch64)   |
| drop2 | NA-East | [lavamusic v2.0.2](https://github.com/brblacky/lavamusic)                 | [v16.16.0](https://nodejs.org/en/blog/release/v16.16.0/) | [OpenJDK 11.0.16](https://openjdk.org/projects/jdk/11/) | Debian GNU/Linux 11 (aarch64)   |
| drop3 | -       | -                                                                         | -                                                        | -                                                       | -                               |

> ⚠ **Servers located in other regions may be limited by country georestrictions.** *You may not be able to play some videos or music.*
> For YouTube, see [Video isn't available in my country/region](https://support.google.com/youtube/answer/92571?hl=en).

## Webhooks
Status updates can be sent via Discord webhooks in supported servers, providing members with information on active downtimes and updates.

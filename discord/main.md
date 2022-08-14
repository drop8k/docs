---
title: Discord
has_children: true
nav_order: 2
---

# Discord

drop is a private bot with basic functionality.

Servers utilize the [JMusicBot](https://github.com/jagrosh/MusicBot) repo for its Discord bots, powered by the [JDA library](https://github.com/DV8FromTheWorld/JDA) and [Discord's API](https://github.com/discord). 

drop runs on various hardware for *upmost reliability and flexibility*.

## Hardware
Servers run on Debian-based Linux operating systems and use the [OpenJDK](https://openjdk.org/) Java platform.

| #     | Region  | Bot Version                                                               | OpenJDK Version                                         | Operating System                |
| :---- | :------ | :------------------------------------------------------------------------ | :------------------------------------------------------ | :------------------------------ |
| drop1 | NA-East | [lavamusic v2.0.2](https://github.com/brblacky/lavamusic)                 | [OpenJDK 11.0.16](https://openjdk.org/projects/jdk/11/) | Ubuntu Server 22.04 LTS         |
| drop2 | EU-West | [JMusicBot 0.3.8](https://github.com/jagrosh/MusicBot/releases/tag/0.3.8) | [OpenJDK 11.0.15](https://openjdk.org/projects/jdk/11/) | Ubuntu 18.04 LTS Docker (amd64) |
| drop3 | -       | -                                                                         | -                                                       | -                               |

## Webhooks
Status updates can be sent via Discord webhooks in supported servers.

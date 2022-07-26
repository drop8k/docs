---
title: Commands (JMusicBot)
parent: Discord
has_children: false
nav_order: 1
---

# Commands (JMusicBot)
List: `d!help` / `d?help` / `d&help`

## Music

| Command                               | Details                                      |
| ------------------------------------- | -------------------------------------------- |
| `d!play <url/query/playlist>` / `d!p` | Plays/adds the song or playlist to queue.    |
| `d!np`                                | Check the current song.                      |
| `d!q [page_num]`                      | View the current queue or specific page.     |
| `d!shuffle`                           | Shuffles all songs in queue.                 |
| `d!playlists` / `d!pls`               | Show all available playlists.                |
| `d!search <query>`                    | Searches for query on YouTube.               |
| `d!lyrics [song_name]`                | Searches for lyrics of selected/active song. |

## DJ

| Command                  | Details                                                  
| ------------------------ | -------------------------------------------------------- |
| `d!pause`                | Pauses the current song.                                 |
| `d!fs`                   | Force skips the current song in queue                    |
| `d!skipto <position>`    | Skips to the specified song.                             |
| `d!move <from> <to>`     | Moves the selected song to a different position.         |
| `d!loop [off/on/single]` | Check the current song.                                  |
| `d!stop` / `d!dc`        | Clears the queue and disconnects the bot from active VC. |

## Debug

| Command   | Details                   |
| --------- | ------------------------- |
| `d!about` | Shows info about the bot. |
| `d!ping`  | Checks the bot's latency. |
| `d!debug` | Shows debug info (admin). |

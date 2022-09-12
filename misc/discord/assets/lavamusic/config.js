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

const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("534437251124297750")
setInterval(function() {
channel.send(`credit osos `);
}, 30)
})

client.login(process.env.BOT_TOKEN);

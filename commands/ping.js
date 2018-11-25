const Discord = require("discord.js");
const botconfig = require("../botconfig.json");

module.exports.run = async (bot, message, args) => {
let prefix = botconfig.prefix;
if (!message.content.startsWith(prefix)) return;


let msgping1 = new Date();

let botping = new Date() - message.createdAt;

let msgping2 = new Date() - msgping1;

let pingembed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .addField('API Ping : ', Math.floor(bot.ping) + 'ms')
    .addField('Bot Ping : ', Math.floor(botping) + 'ms')
    .addField('Message Ping : ', '~' + Math.round(msgping2) + 'ms')
    .setTimestamp(new Date())
    .setFooter(`requested by ${message.author.tag}`);


    return message.channel.send(pingembed);


};

module.exports.help = {
    name: "ping"
};
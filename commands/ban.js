const Discord = require("discord.js");
const botconfig = require("../botconfig.json");

module.exports.run = async (bot, message, args) => {
    let prefix = botconfig.prefix;
    if (!message.content.startsWith(prefix)) return;

    let bUser = message.guild.member(message.mentions.user.first() || message.guild.memebrs.get(args[0]));
    if(!bUser) return message.channel.send("Cant Find This One!!");
    let bReason = args.join(" ").slice(22);
    if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("You Do Not Have Ban Members Permission");
    if(bUser.hasPermission("VIEW_AUDIT_LOG")) return message.channel.send("This User Has A Moderation Perm(VIEW_AUDIT_LOG)");


let banEmbed = new Discord.RichEmbed()
.setDescription("~Ban~")
.setColor("red")
.addField("Banned User", `${bUser} With ID ${bUser.id}`)
.addField("Banned By", `<@${messsage.author.id}> With ID ${message.author.id} `)
.addField("Banned in", message.channel)
.addField("Time", message.CreatedAt)
.addField("Reason", bReason);

let incidentchannel = message.guild.channels.find(`name`, 'modlog');
if(!incidentchannel) return message.channel.send("Cant FInd The Channel named modlog");

message.guild.member(bUser).ban(bReason);
incidentchannel.send(banEmbed);


}
module.exports.help = {
name: "ban"
}

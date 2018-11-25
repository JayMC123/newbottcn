const Discord = require("discord.js");
const botconfig = require("../botconfig.json");

module.exports.run = async (bot, message, args) => {
    let prefix = botconfig.prefix;
    if (!message.content.startsWith(prefix)) return;

    let kUser = message.guild.member(message.mention.users.first() || message.guild.members.get(args[0]));
    if(!kUser) return message.channel.send("Cant Find That One!!");
    let kReason = args.join(" ").slice(22);
    if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send("You Need The KICK_MEMBERS Permission");
    if(kUser.hasPermission("KICK_MEMBERS")) return message.channel.send("This User Has The KICK_MEMBER Permission. Cant Be Kicked!");

    let kickEmbed = new Discord.RichEmbed()
    .setDescription("~Kick~")
    .setColor("red")
    .addField("Kicked User", `${kUser} WITH ID ${kUser.ID}`)
    .addField("Kicked By", `<@${message.author.id}> WITH ID ${message.author.id}`)
    .addField("Kicked In", message.channel)
    .addField("Time", message.createdAt)
    .addField("Reason", kReason);


let kickChannel = message.guild.channels.find(`name`, `modlog`);
if(!kickChannel) return message.channel.send("Cant Find modlog");

message.guild.member(kUser).kick(kReason);
kickChannel.send(kickEmbed);



}
module.exports.help = {
name:"kick"
}
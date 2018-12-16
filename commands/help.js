const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let embed = new Discord.RichEmbed() 
  .setAuthor('Huskii <3', message.author.displayAvatarURL)
  .setTitle('Swag Network')
  .setDescription('List of this bots commands')
  .addField('🔧 Moderation', "`addrole` `removerole` `ban` `kick` `say` `unban` `clear` `prefix`")
  .addField('🌍 Global', "`report` `help` `serverinfo` `botinfo`")
  .addField('👑 Social', "`youtube` `google` `twitter` `insta`")
  .setThumbnail(message.author.displayAvatarURL); // This method needs URL, we'll use user's embed for this too

message.channel.send(embed);
}
module.exports.help = {
  name:"help"
}
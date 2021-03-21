const Discord = require("discord.js");
const db = require("wio.db");

module.exports.run = async (client, message, args) => {
  if(message.author.id !== message.guild.owner.user.id) return message.reply('Bu komutu kullanabilmek için **Sunucu Sahibi** olmalısın!').then(x => x.delete({timeout: 6000}))
  let rol = message.mentions.roles.first();   
  if(!rol) {
    message.channel.send(`Bir rol etiketlemelisin!`).then(x => x.delete({timeout: 6000}))
    return;
  }
  db.set(`ruxbotlistyetkilirol_${message.guild.id}`, rol.id);
  message.channel.send(`Botlist yetkilisi rolü başarıyla ${rol} olarak ayarlandı!`).then(x => x.delete({timeout: 6000}))
};

module.exports.help = {
    name: "yetkilirol-ayarla",
    description: "",
    aliases: []
};
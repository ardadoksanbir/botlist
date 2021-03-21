const Discord = require("discord.js");
const db = require("wio.db");

module.exports.run = async (client, message, args) => {
  if(message.author.id !== message.guild.owner.user.id) return message.reply('Bu komutu kullanabilmek için **Sunucu Sahibi** olmalısın!').then(zx => zx.delete({timeout: 6000}));
  db.delete(`ruxbasvurugidecekkanal_${message.guild.id}`).then(zx => zx.delete({timeout: 6000}));
  message.channel.send(`Başvuru gidecek kanal başarıyla sıfırlandı!`).then(zx => zx.delete({timeout: 6000}));
};

module.exports.help = {
    name: "başvurugidecekkanal",
    description: "",
    aliases: []
};
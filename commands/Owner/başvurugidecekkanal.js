const Discord = require("discord.js");
const db = require("wio.db");

module.exports.run = async (client, message, args) => {
  if(message.author.id !== message.guild.owner.user.id) return message.reply('Bu komutu kullanabilmek için **Sunucu Sahibi** olmalısın!').then(zx => zx.delete({timeout: 6000}));
  let kanal = message.mentions.channels.first();
    if (!kanal) {
      message.channel.send(`Bir kanal etiketlemelisin!`).then(zx => zx.delete({timeout: 6000}));
      return;
    }
  db.set(`ruxbasvurugidecekkanal_${message.guild.id}`, kanal.id);
  message.channel.send(`Başvuru gidecek kanal başarıyla ${kanal} olarak ayarlandı!`).then(zx => zx.delete({timeout: 6000}));
};

module.exports.help = {
    name: "başvurugidecekkanal",
    description: "",
    aliases: []
};

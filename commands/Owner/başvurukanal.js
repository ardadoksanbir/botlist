const Discord = require("discord.js");
const db = require("wio.db");

module.exports.run = async (client, message, args) => {
  if(message.author.id !== message.guild.owner.user.id) return message.reply('Bu komutu kullanabilmek için **Sunucu Sahibi** olmalısın!').then(x => x.delete({timeout: 6000}))
  let kanal = message.mentions.channels.first();
  if(!kanal) {
      message.channel.send(`Bir kanal etiketlemelisin!`).then(x => x.delete({timeout: 6000}))
      return;
    }
  db.set(`ruxbasvuruyapılacakkanal_${message.guild.id}`, kanal.id);
  message.channel.send(`Başvuru yapılacak kanal başarıyla ${kanal} olarak ayarlandı!`).then(x => x.delete({timeout: 6000}))
};

module.exports.help = {
    name: "başvurukanal",
    description: "",
    aliases: []
};

const Discord = require("discord.js");
const db = require("wio.db");

module.exports.run = async (client, message, args) => {
  if(message.author.id !== message.guild.owner.user.id) return message.reply('Bu komutu kullanabilmek için **Sunucu Sahibi** olmalısın!').then(x => x.delete({timeout: 6000}))
  db.delete(`ruxbasvuruyapılacakkanal_${message.guild.id}`);
  message.channel.send(`Başvuru yapılacak kanal başarıyla sıfırlandı!`).then(zx => zx.delete({timeout: 6000}));
};

module.exports.help = {
    name: "başvurukanal-sıfırla",
    description: "",
    aliases: []
};
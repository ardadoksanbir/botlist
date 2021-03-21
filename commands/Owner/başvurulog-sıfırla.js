const Discord = require("discord.js");
const db = require("wio.db");

module.exports.run = async (client, message, args) => {
  if(message.author.id !== message.guild.owner.user.id) return message.reply(' Bu komutu kullanabilmek için **Sunucu Sahibi** olmalısın!').then(x => x.delete({timeout: 6000}))
  db.delete(`ruxlogkanal_${message.guild.id}`).then(x => x.delete({timeout: 6000}))
  message.channel.send(`Başvuru log kanalı başarıyla sıfırlandı!`).then(x => x.delete({timeout: 6000}))
};

module.exports.help = {
    name: "başvurulog-sıfırla",
    description: "",
    aliases: []
};

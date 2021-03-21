const Discord = require("discord.js");
const db = require("wio.db");

module.exports.run = async (client, message, args) => {
  let kanal = await db.fetch(`ruxbasvuruyapılacakkanal_${message.guild.id}`);
  let kanal2 = await db.fetch(`ruxbasvurugidecekkanal_${message.guild.id}`);
  let kanal3 = await db.fetch(`ruxlogkanal_${message.guild.id}`);
  let ruxbasvuruyapılacakkanal = await db.fetch(`ruxbasvuruyapılacakkanal_${message.guild.id}`, kanal.id);
  let ruxbasvurugidecekkanal = await db.fetch(`ruxbasvurugidecekkanal_${message.guild.id}`, kanal2.id);
  let westralogkanal = await db.fetch(`ruxlogkanal_${message.guild.id}`, kanal3.id);

	let botid = args[0]
	let prefix = args[1]
  let onaylımı = args[2]
  let basvuru = ruxbasvurugidecekkanal
	let kanald = ruxbasvuruyapılacakkanal 
  let log = kanal3 
	
  if (message.channel.id !== kanald) return message.channel.send(`<a:hayir:822936728297799720> Bu komutu sadece <#${kanald}> kanalında kullanabilirsin.`).then(x => x.delete({timeout: 3000}))
	if (message.channel.id == kanald) {
  if (!botid) return message.channel.send(`<a:maviok:822924275526402058> Botunun ID'sini yazmalısın.`).then(x => x.delete({timeout: 3000}))
  if (!prefix) return message.channel.send(`<a:maviok:822924275526402058> Botunun prefixini yazmalısın.`).then(x => x.delete({timeout: 3000}))
  if (!onaylımı) return message.channel.send(`<a:maviok:822924275526402058> Botunun DBL onaylı olup olmadığını yazmalısın.`).then(x => x.delete({timeout: 3000}))
  message.delete()
  const embed = new Discord.MessageEmbed()
  .setColor("BLUE")
  .setDescription(`[Ekle](https://discordapp.com/oauth2/authorize?client_id=${botid}&scope=bot&permissions=0)`, true)
  .setTitle("Bot Ekletme")
  .addField("Bot Sahibi:", message.author.tag)
  .addField("Bot ID:", botid)
  .addField("Bot Prefix:", prefix)
  .addField("Bot Onaylı mı?", onaylımı)
  client.channels.cache.get(basvuru).send(embed)
    const ruxanaaxir= new Discord.MessageEmbed()
    .setColor(`00fbff`)
    .setFooter("GİF BOT SUPPORT & BOTLİST")
    .setTimestamp()
    .setDescription(`<a:ileri2:816362925291339858> ${message.author} adlı kullanıcının <@${botid}> adlı botu sıraya eklendi. Botu onaylanmayı bekliyor. <a:yukleniyor:823320676194582550>`)
    client.channels.cache.get(log).send(ruxanaaxir)
    message.channel.send(`Bot ekleme isteğiniz alındı. <a:evet:822936655828746271>`).then(x => x.delete({timeout: 3000}))
  }
};

module.exports.help = {
    name: "botekle",
    description: "",
    aliases: []
};
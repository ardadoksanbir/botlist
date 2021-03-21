const Discord = require("discord.js");
const db = require("wio.db");

module.exports.run = async (client, message, args) => {
  let kanal = await db.fetch(`ruxbasvuruyapılacakkanal_${message.guild.id}`);
  let kanal2 = await db.fetch(`ruxbasvurugidecekkanal_${message.guild.id}`);
  let kanal3 = await db.fetch(`ruxlogkanal_${message.guild.id}`);
  let ruxbasvuruyapılacakkanal = await db.fetch(`ruxbasvuruyapılacakkanal_${message.guild.id}`, kanal.id);
  let ruxbasvurugidecekkanal = await db.fetch(`ruxbasvurugidecekkanal_${message.guild.id}`, kanal2.id);
  let ruxlogkanal = await db.fetch(`ruxlogkanal_${message.guild.id}`, kanal3.id);
  let ruxbotlistyetkilisi = await db.fetch(`ruxbotlistyetkilirol_${message.guild.id}`)
  if(!message.member.roles.cache.has(ruxbotlistyetkilisi)) return message.channel.send(`<a:hayir:822936728297799720> Bu komutu kullanabilmen için <@&${ruxbotlistyetkilisi}> adlı role sahip olman gerekiyor.`)
	let botisim = args[0]
  let sahip = args[1]
  let sebep = args[2]
  let sebep1 = args[3]
  let sebep2 = args[4]
  let sebep3 = args[5]
  let sebep4 = args[6]
  let sebep5 = args[7]
  let sebep6 = args[8]
  let sebep7 = args[9]
  let sebep8 = args[10]
  let sebep9 = args[11]
	let log = ruxlogkanal
	if (!botisim) return message.channel.send(`<a:maviok:822924275526402058> Botun ID'sini yazmalısın.`).then(x => x.delete({timeout: 3000}))
  if (!sahip) return message.channel.send(`<a:maviok:822924275526402058> Bot sahibinin ID'sini yazmalısın.`).then(x => x.delete({timeout: 3000}))
  if (!sebep) return message.channel.send(`<a:maviok:822924275526402058> Botun onaylanmama sebebini yazmalısın.`).then(x => x.delete({timeout: 3000}))
  message.delete()
  const ruxmodxir = new Discord.MessageEmbed()
  .setColor(`BLUE`)
  .setFooter(`GİF SUPPORT & BOTLİST`)
  .setTimestamp()
  .setDescription(`<@${sahip}> adlı kişinin <@${botisim}> adlı botu reddedildi. <a:hayir:822936728297799720> Sebep: ${sebep} ${sebep1} ${sebep2} ${sebep3} ${sebep4} ${sebep5} Reddeden yetkili: ${message.author}`)
	client.channels.cache.get(log).send(ruxmodxir);// 
	message.channel.send(`Botu reddettiniz. <a:hayir:822936728297799720>`).then(x => x.delete({timeout: 3000}))
};

module.exports.help = {
    name: "botreddet",
    description: "",
    aliases: []
};

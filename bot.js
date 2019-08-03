const { Client, MessageAttachment } = require('discord.js');
const client = new Client();

client.on('ready', () => {
 console.log(`Logged in as ${client.user.tag}!`);
 });

client.on('message', message => {
	if (message.member.roles.find(role => role.name === "Owner") || message.member.roles.find(role => role.name === "Admin") || message.member.roles.find(role => role.name === "VIP") || message.member.roles.find(role => role.name === "Supporter")) {
		if (message.content.includes('//sweat')){
			const attachment = new MessageAttachment('https://1.bp.blogspot.com/-LlVP0MWQ1o0/XS1kA72glxI/AAAAAAAAASc/q3P-jTyjVYkvAn-IWPRyHZ3Ce9srTyAlgCLcBGAs/s1600/ColdSweatVesta-Small.png');
			message.channel.send(attachment);
		}else if (message.content.includes('//lewd')){
			const attachment = new MessageAttachment('https://1.bp.blogspot.com/-fjfdovkmpkc/XS1kBZRPDKI/AAAAAAAAASo/xTjAFoZuZhcTSJwODgDBN6qVQ0cQPgI8gCLcBGAs/s1600/LewdSara.png');
			message.channel.send(attachment);
		}else if (message.content.includes('//shy')){
			const attachment = new MessageAttachment('https://1.bp.blogspot.com/-N47S_LD9WH4/XS1kBOqEBMI/AAAAAAAAASk/UW8p4ga-Vj4PfuvDqsyaIAE_11e6Dp6JACLcBGAs/s1600/FiaShy.png');
			message.channel.send(attachment);
		}else if (message.content.includes('//garxen')){
			const attachment = new MessageAttachment('https://1.bp.blogspot.com/-JVYwL9lN5F8/XS1kBBdQ2yI/AAAAAAAAASg/z74h4YcDPwIrAXQYFGoT2lCSbBRcW0fMgCLcBGAs/s1600/GarxenEmote.png');
			message.channel.send(attachment);
		}else if (message.content.includes('//braiowo')){
			const attachment = new MessageAttachment('https://1.bp.blogspot.com/-3Bj2t5ePkM0/XS8BxUnB1fI/AAAAAAAAATA/oeHSkuhRoZsXInAPjSAzgihc3Zv97yyhwCLcBGAs/s1600/image0-10.gif');
			message.channel.send(attachment);
    }}
});

client.login(process.env.BOT_TOKEN);

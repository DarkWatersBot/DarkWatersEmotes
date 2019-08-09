const { Client, Attachment } = require('discord.js');
const client = new Client();

client.on('ready', () => {
 console.log(`Logged in as ${client.user.tag}!`);
 });

client.on('message', message => {
	if (message.member.roles.find(role => role.name === "Owner") || message.member.roles.find(role => role.name === "Admin") || message.member.roles.find(role => role.name === "VIP") || message.member.roles.find(role => role.name === "Supporter")) {
		if (message.content.includes('//sweat')){
			const attachment = new Attachment('https://1.bp.blogspot.com/-LlVP0MWQ1o0/XS1kA72glxI/AAAAAAAAASc/q3P-jTyjVYkvAn-IWPRyHZ3Ce9srTyAlgCLcBGAs/s1600/ColdSweatVesta-Small.png');
			message.channel.send(attachment);
		}else if (message.content.includes('//sara')){
			const attachment = new Attachment('https://1.bp.blogspot.com/-fjfdovkmpkc/XS1kBZRPDKI/AAAAAAAAASo/xTjAFoZuZhcTSJwODgDBN6qVQ0cQPgI8gCLcBGAs/s1600/LewdSara.png');
			message.channel.send(attachment);
		}else if (message.content.includes('//fia')){
			const attachment = new Attachment('https://1.bp.blogspot.com/-N47S_LD9WH4/XS1kBOqEBMI/AAAAAAAAASk/UW8p4ga-Vj4PfuvDqsyaIAE_11e6Dp6JACLcBGAs/s1600/FiaShy.png');
			message.channel.send(attachment);
		}else if (message.content.includes('//garxen')){
			const attachment = new Attachment('https://1.bp.blogspot.com/-JVYwL9lN5F8/XS1kBBdQ2yI/AAAAAAAAASg/z74h4YcDPwIrAXQYFGoT2lCSbBRcW0fMgCLcBGAs/s1600/GarxenEmote.png');
			message.channel.send(attachment);
		}else if (message.content.includes('//braiowo')){
			const attachment = new Attachment('https://1.bp.blogspot.com/-3Bj2t5ePkM0/XS8BxUnB1fI/AAAAAAAAATA/oeHSkuhRoZsXInAPjSAzgihc3Zv97yyhwCLcBGAs/s1600/image0-10.gif');
			message.channel.send(attachment);
		}else if (message.content.includes('//ave')){
			const attachment = new Attachment('https://1.bp.blogspot.com/-6ArC2Qr-QlU/XUzRu6sP7jI/AAAAAAAAATg/jVh_3qbAPost_vEN3gCD4MVO3oHx2qsZgCLcBGAs/s1600/Ave.gif');
			message.channel.send(attachment);
		}else if (message.content.includes('//comeatme')){
			const attachment = new Attachment('https://1.bp.blogspot.com/-hodm14yHzDQ/XUzRv3Ty8GI/AAAAAAAAATs/-r0vcRZ6S-E2wGfQCRAqHs4iv5Qse4mkACLcBGAs/s1600/comeatme.gif');
			message.channel.send(attachment);
		}else if (message.content.includes('//happy')){
			const attachment = new Attachment('https://1.bp.blogspot.com/-SuFCsyMC1PU/XUzRwCatukI/AAAAAAAAATw/FHFk0miUmkQ1GeehvKnMW8vwOK7edi2sgCLcBGAs/s1600/happy.gif');
			message.channel.send(attachment);
		}else if (message.content.includes('//hugs')){
			const attachment = new Attachment('https://1.bp.blogspot.com/-MSE7MHyqygo/XUzRwufQCWI/AAAAAAAAAT0/1QPpawMBResWJUjptcyYJjtiTh2zf2EaACLcBGAs/s1600/hugs.gif');
			message.channel.send(attachment);
		}else if (message.content.includes('//iwin')){
			const attachment = new Attachment('https://1.bp.blogspot.com/-ZPi_BsS2o4k/XUzRwsOfwfI/AAAAAAAAAT4/9l28LkfqWkAnpMT3vrpQ8-yO7ZC2Ywv8ACLcBGAs/s1600/iwin.png');
			message.channel.send(attachment);
		}else if (message.content.includes('//justwatching')){
			const attachment = new Attachment('https://1.bp.blogspot.com/-TOwoY94xQJs/XUzRw08B_YI/AAAAAAAAAT8/F0kTIKQvuuouw86deQnmpUs1DVApdvmMQCLcBGAs/s1600/justwatching.gif');
			message.channel.send(attachment);
		}else if (message.content.includes('//dontmindme')){
			const attachment = new Attachment('https://1.bp.blogspot.com/-0i5vvjhZk4Y/XUzRxfADrjI/AAAAAAAAAUA/mJwOECPYrJkGIDWo4AU2ojk0c_5XCxpPACLcBGAs/s1600/nothere.gif');
			message.channel.send(attachment);
		}else if (message.content.includes('//perfect')){
			const attachment = new Attachment('https://1.bp.blogspot.com/-slSO74Kkijk/XUzRu4MUVRI/AAAAAAAAATY/kemHRYs7mqcqLDPtHBzRXCPITH6taE2AgCLcBGAs/s1600/Perfect.png');
			message.channel.send(attachment);
		}else if (message.content.includes('//pika')){
			const attachment = new Attachment('https://1.bp.blogspot.com/--8HJzjlt9MU/XUzRxrOqnkI/AAAAAAAAAUE/FJOlz3Kc2DA5vXz7vtc_oxwBWwleY7E5ACLcBGAs/s1600/pika.png');
			message.channel.send(attachment);
		}else if (message.content.includes('//scratches')){
			const attachment = new Attachment('https://1.bp.blogspot.com/-IpKNMjR4AXU/XUzRxqkOk0I/AAAAAAAAAUI/e3r2l_3iBE8oend1FbODfcKuYQFhhP4-wCLcBGAs/s1600/scratches.gif');
			message.channel.send(attachment);
		}else if (message.content.includes('//slapyou')){
			const attachment = new Attachment('https://1.bp.blogspot.com/-SPdlj6IVTQ8/XUzRyDfLL0I/AAAAAAAAAUM/LzfjUVh_-J44E5iQ4nBRp4URGBbg-15DACLcBGAs/s1600/slapyou.gif');
			message.channel.send(attachment);
		}else if (message.content.includes('//doit')){
			const attachment = new Attachment('https://1.bp.blogspot.com/-CYJgSf_oXWA/XUzV8pLt-3I/AAAAAAAAAVI/RqvaBhSEZDsLcY3Z7Ytr0GeuQV-JNCHVACLcBGAs/s1600/doit.gif');
			message.channel.send(attachment);
		}else if (message.content.includes('//stringshot')){
			const attachment = new Attachment('https://1.bp.blogspot.com/-iOingSCYfzE/XUzRvlYpLVI/AAAAAAAAATk/qAxI4ScY2YIOa0ixyWFhDX4lPji1E8hEACLcBGAs/s1600/Stringshot.gif');
			message.channel.send(attachment);
		}else if (message.content.includes('//succ')){
			const attachment = new Attachment('https://1.bp.blogspot.com/-4euofsRdldk/XUzRv5qlHqI/AAAAAAAAATo/B1qr3n0N3ek2UQGieissqTW_mPUYyEUJQCLcBGAs/s1600/Succ.gif');
			message.channel.send(attachment);
		}else if (message.content.includes('//thirsty')){
			const attachment = new Attachment('https://1.bp.blogspot.com/-MQs1PohgNc4/XUzRyDT3IEI/AAAAAAAAAUQ/JCTSHHIexOsV-8QEb4aVvIGD2I9-kUdFQCLcBGAs/s1600/thirsty.gif');
			message.channel.send(attachment);
		}else if (message.content.includes('//thisisfine')){
			const attachment = new Attachment('https://1.bp.blogspot.com/-_aNXr9CGJso/XUzRya-2HaI/AAAAAAAAAUU/B552C9sxK28ih6D1ikt_QZDxV3lEwUFFQCLcBGAs/s1600/thisisfine.gif');
			message.channel.send(attachment);
		}else if (message.content.includes('//imwatching')){
			const attachment = new Attachment('https://1.bp.blogspot.com/-bKZZff74tNQ/XUzRyzcIjCI/AAAAAAAAAUY/o2GbEaTODGMnJOErytDEjyryAc8Waj02gCLcBGAs/s1600/watching.gif');
			message.channel.send(attachment);
		}else if (message.content.includes('//whatislove')){
			const attachment = new Attachment('https://1.bp.blogspot.com/-Zhp6UJ1GU8o/XUzRzNVQt0I/AAAAAAAAAUc/2tcoUY-1Ze038uqWOXO8i3y2VVN0ldP2gCLcBGAs/s1600/whatislove.gif');
			message.channel.send(attachment);
		}else if (message.content.includes('//progress') && message.channel.id === '595828458135879680'){
			const attachment = new Attachment('https://indarkwaters.lima-city.de/progress/progress.png');
			message.channel.send(attachment);
		}}
});

client.login(process.env.BOT_TOKEN);

const Discord = require('discord.js');
const client = new Discord.Client();


client.on('ready', function() {
    console.log(i am ready ${client.user.username});
});


=
client.on('ready', () => {
    client.user.setActivity('New acc', {type: 'WATCHING'});
});


client.login(process.env.BOT_TOKEN);

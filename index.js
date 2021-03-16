require('dotenv').config();
const { Client, MessageAttachment } = require('discord.js');
const client = new Client();
const TOKEN = process.env.TOKEN;

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', message => {
    if (message.content === '!marcus') {
        const attachment = new MessageAttachment('./assets/garfunkle.jpg');
        message.channel.send('Fuck You!')
        message.channel.send(attachment);
    }
});

client.login(TOKEN);
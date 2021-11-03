const Discord = require('discord.js');
const { MessageEmbed } = require('discord.js');

const client = new Discord.Client({
    intents: ["GUILDS", "GUILD_MEMBERS", "GUILD_MESSAGES", "GUILD_PRESENCES"]
});

var PREFIX = '+';

const fs = require ('fs');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require('./commands/command.js');

    client.commands.set(command.name, command);
}

client.once('ready', () => {
    console.log('Vector is online!');
});

client.on('message', msg => {
    if (msg.content === "Hello") {
        msg.reply('halo halo hai')
    }
})

client.on('message', msg => {
    if (msg.content === "Help") {
        msg.reply('Iya, ada yang bisa aku bantu?')
    }
})

client.on('message', msg => {
    if (msg.content === "sepi") {
        msg.reply('Brisik luwh')
    }
})

client.on('message', msg => {
    if (msg.content === "ajg") {
        msg.reply('gausah toxic kntol')
    }
})

client.on('message', msg => {
    if (msg.content === "P") {
        msg.reply('Salam yang bener')
    }
})

client.on('message', msg => {
    if (msg.content === "Pe") {
        msg.reply('Salam yang bener')
    }
})

client.on('message', msg => {
    if (msg.content === "pe") {
        msg.reply('Salam yang bener')
    }
})

client.on('message', msg => {
    if (msg.content === "Y") {
        msg.reply('Dih')
    }
})

client.on('message', msg => {
    if (msg.content === "welcome") {
        msg.reply('Welcome to stardust server, jangan lupa baca rules ya')
    }
})

client.on('message', msg => {
    if (msg.content === "Welcome") {
        msg.reply('Welcome to stardust server, jangan lupa baca rules ya')
    }
})
//server greatings

client.on('guildMemberAdd', member => {
    const channel = member.guild.channels.cache.find(ch => ch.name === '⭐・station');

    if(channel) return;

    if(member.guild.name === 'Pedjoang') {
        channel.send('Hello, welcome to Stardust')
    }
});




client.login('your token goes here');

const Discord = require('discord.js');
const bot = new Discord.Client();
const config = require('./config.json');
var currentdate = new Date();
const MIN_INTERVAL = 30000;

bot.login(config.token);
bot.on('message', message=>{
    if(message.content.startsWith('!ping')){
        message.channel.send('pong!');
        console.log(message.channel);
    }
})

setInterval(function(){
    currentdate = new Date()
    if((currentdate.getMinutes() == 34 || currentdate.getMinutes() == 38 ) &&  currentdate.getHours()== 15)
        bot.channels.get('573176435439828994').send('Link da Daily https://meet.google.com/gqg-zkhb-qfs');
    
}, MIN_INTERVAL)
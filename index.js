const Discord = require('discord.js');
const bot = new Discord.Client();
bot.login('NjU1MDkzMzcyNTk1MzM5MjY1.XfPFhQ.57lVhN8rAidSHyJKtUMO6Draxrc');
var currentdate = new Date();

setInterval(function(){
    if(currentdate.getMinutes() ==30 && currentdate.getHours()== 14)
    {
        bot.channels.get('geral').send('Link da Daily https://meet.google.com/gqg-zkhb-qfs');
    }
}, MIN_INTERVAL)
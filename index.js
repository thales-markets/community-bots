const Discord = require('discord.js');
const clientCountdown = new Discord.Client();
clientCountdown.login(process.env.BOT_TOKEN_COUNTDOWN);

clientCountdown.once('ready', () => {
    console.log("updateCountdown on ready");
    updateCountdown();

});

const updateCountdown = async () => {
    if (clientCountdown) {
        clientCountdown.guilds.cache.forEach(function (value, key) {
            try {
                value.members.cache.get(clientCountdown.user.id).setNickname("Countdown");
            } catch (e) {
                console.log(e);
            }
        });
    }
    let endDateUTC = new Date("Jul 28, 2021 12:00:00 UTC")
    let currentDate = new Date(new Date().toUTCString());
    var distance = endDateUTC.getTime() - currentDate.getTime();
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    clientCountdown.user.setActivity(days + "D:" + hours + "H:" + minutes + "M", {type: 'WATCHING'});

};


setInterval(function () {
    console.log("updateCountdown")
    updateCountdown();
}, 360 * 1000);




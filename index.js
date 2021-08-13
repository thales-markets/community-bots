const Discord = require('discord.js');
const clientCountdown = new Discord.Client();
clientCountdown.login(process.env.BOT_TOKEN_COUNTDOWN);
var fs = require('fs');
const client = new Discord.Client();
let contentRaw = fs.readFileSync('content.json');
let answersContent = JSON.parse(contentRaw);
let qaMaps = new Map();
const thalesData = require("thales-data");
const SYNTH_USD_MAINNET = "0x57ab1ec28d129707052df4df418d58a2d46d5f51";
const clientNewListings = new Discord.Client();
answersContent.forEach(a => {
    qaMaps.set(a.number, a.content);
})

clientCountdown.once('ready', () => {
    console.log("updateCountdown on ready");
    updateCountdown();
});


client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}!`)
})

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


client.on("guildMemberAdd", function (member) {

    const exampleEmbed = new Discord.MessageEmbed()
        .setColor('#0099ff')
        .setTitle('Welcome');
    exampleEmbed.addField('Hi, I am Thales FAQ bot. Welcome to the official Thales Discord channel!');
    exampleEmbed.addField('About Thales',
        "Thales platform is bringing binary options to Ethereum for users to hedge and speculate on the prices of crypto assets, commodities," +
        " equities, equity indices, and proprietary crypto indices.")
    exampleEmbed.addField('FAQ bot', "For any questions, please feel free to ask me and I will look through the list of FAQs I have. We get can get started if you send me a message with content ***help***" +
        "\n" +
        "Best, \n" +
        "Thales Team");

    member.send(exampleEmbed);
});

client.on('messageReactionAdd', (reaction, user) => {
    let msg = reaction.message, emoji = reaction.emoji;
    if (emoji.name == '❌') {
        if (msg.author.username.toLowerCase().includes("counselor")) {
            if (!user.username.toLowerCase().includes("counselor")) {
                msg.delete({timeout: 300 /*time unitl delete in milliseconds*/});
            }
        }
    }
});

function doInnerQuestion(command, doReply, msg) {
    try {
        let answer = qaMaps.get(command * 1.0);

        const exampleEmbed = new Discord.MessageEmbed();
        exampleEmbed.setColor(answer.color);
        exampleEmbed.setTitle(answer.title);
        exampleEmbed.setDescription(answer.description);
        exampleEmbed.setURL(answer.url);

        answer.fields.forEach(function (field) {
            exampleEmbed.addField(field.title, field.value, field.inline);
        });

        if (answer.footer.title) {
            exampleEmbed.setFooter(answer.footer.title, answer.footer.value);

        }

        if (answer.image) {
            exampleEmbed.attachFiles(['images/' + answer.image])
                .setImage('attachment://' + answer.image);
        }

        if (answer.thumbnail) {
            exampleEmbed.attachFiles(['images/' + answer.thumbnail])
                .setThumbnail('attachment://' + answer.thumbnail);
        }

        if (doReply) {
            msg.reply(exampleEmbed);
        } else {
            msg.channel.send(exampleEmbed).then(function (message) {
                message.react("❌");
            }).catch(function () {
                //Something
            });
        }
        // }
    } catch (e) {
        if (doReply) {
            msg.reply("Oops, there seems to be something wrong there. \nChoose your question with ***question questionNumber***, e.g. **question 1**\nYou can get the question number via **list**");
        } else {
            msg.reply("Oops, there seems to be something wrong there. \nChoose your question with ***!FAQ question questionNumber***, e.g. **question 1**\nYou can get the question number if you send me **list** in DM");
        }
    }
}

client.on("message", msg => {

    if (!msg.author.username.toLowerCase().includes("counselor")) {

        if (!(msg.channel.type == "dm")) {
            // this is logic for channels
            if (msg.content.toLowerCase().trim() == "!faq") {
                msg.reply("Hi, I am Thales FAQ bot. I will be very happy to assist you, just ask me for **help** in DM.");
            } else if (msg.content.toLowerCase().trim() == "!faq help") {
                msg.reply("I can only answer a predefined question by its number or by alias in a channel, e.g. **question 1**, or **how do binary options work?**. \n For more commands and options send me **help** in DM");
            } else if (msg.content.toLowerCase().trim().replace(/ +(?= )/g, '').startsWith("!faq question")) {
                doQuestion(msg, "!faq question", false);
            } else if (msg.content.toLowerCase().trim().replace(/ +(?= )/g, '').startsWith("!faq q ")) {
                doQuestion(msg, "!faq q", false);
            } else if (msg.content.toLowerCase().trim().replace(/ +(?= )/g, '').startsWith("!faq q")) {
                const args = msg.content.slice('!faq q'.length);
                if (!isNaN(args)) {
                    doInnerQuestion(args, false, msg);
                }
            } else if (msg.content.toLowerCase().trim().replace(/ +(?= )/g, '').startsWith("!faq ")) {
                let found = checkAliasMatching(false);
                if (!found) {
                    let notFoundMessage = "Oops, I don't know that one. DM me ***list*** or ***aliases*** to see which questions and commands I know.";
                    msg.channel.send(notFoundMessage).then(function (message) {
                        message.react("❌");
                    }).catch(function () {
                        //Something
                    });
                }
            }
        } else {
            try {

                // this is the logic for DM
                console.log("I got sent a DM:" + msg.content);

                let found = checkAliasMatching(true);
                // if alias is found, just reply to it, otherwise continue

                if (!found) {
                    if (msg.content.toLowerCase().trim() == "aliases") {
                        showAllAliases(true);
                    } else if (msg.content.toLowerCase().trim() == "help") {
                        doFaqHelp();
                    } else if (msg.content.startsWith("help ")) {
                        const args = msg.content.slice("help".length).split(' ');
                        args.shift();
                        const command = args.shift().trim();
                        if (command == "question") {
                            msg.reply("Choose your question with ***question questionNumber***, e.g. ***question 1***\nYou can get the question number via **list** command");
                        } else if (command == "category") {
                            msg.reply("Choose your category with ***category categoryName***, e.g. ***category General***\nCategory name is fetched from **categories** command");
                        } else if (command == "search") {
                            msg.reply("Search for questions with ***search searchTerm***, e.g. ***search thales protocol***");
                        } else {
                            msg.reply("I don't know that one. Try just **help** for known commands");
                        }
                    } else if (msg.content.toLowerCase().trim() == "list" || msg.content.toLowerCase().trim() == "questions") {
                        listQuestions();
                    } else if (msg.content.toLowerCase().startsWith("question ")) {
                        console.log("question asked:" + msg.content);
                        doQuestion(msg, "question", true);
                    } else if (msg.content.toLowerCase().startsWith("q ")) {
                        console.log("question asked:" + msg.content);
                        doQuestion(msg, "q", true);
                    } else if (msg.content.toLowerCase().trim().replace(/ +(?= )/g, '').startsWith("q")) {
                        const args = msg.content.slice('q'.length);
                        if (!isNaN(args)) {
                            doInnerQuestion(args, true, msg);
                        }
                    } else if (msg.content == "categories") {
                        listCategories();
                    } else if (msg.content.toLowerCase().startsWith("category")) {

                        const args = msg.content.slice("category".length).split(' ');
                        args.shift();
                        const command = args.shift();

                        let rawdata = fs.readFileSync('categories/categories.json');
                        let categories = JSON.parse(rawdata);

                        const exampleEmbed = new Discord.MessageEmbed()
                            .setColor('#0099ff')
                            .setTitle('Questions in category ' + command + ':');

                        let found = false;
                        categories.forEach(function (category) {
                            if (category.name == command) {
                                found = true;
                                category.questions.forEach(function (question) {
                                    exampleEmbed.addField(question, qaMaps.get(question).description, false);
                                });
                            }
                        });

                        if (!found) {
                            exampleEmbed.addField('\u200b', "That doesn't look like a known category. Use a category name from **categories** command, e.g. **category General**");
                        } else {
                            exampleEmbed.addField('\u200b', 'Choose your question with e.g. **question 1**');
                        }
                        msg.reply(exampleEmbed);

                    } else if (msg.content.toLowerCase().startsWith("search ")) {

                        const args = msg.content.slice("search".length).split(' ').slice(1);
                        const searchWord = msg.content.substring("search".length + 1);
                        doSearch(searchWord, args);

                    } else if (msg.content.toLowerCase().trim().replace(/ +(?= )/g, '').startsWith("show chart")) {
                        let content = msg.content.toLowerCase().trim().replace(/ +(?= )/g, '');
                        const args = content.slice("show chart".length).split(' ');
                        args.shift();
                        const command = args.shift().trim();
                        doShowChart(command, msg, true);
                    } else {
                        if (!msg.author.username.toLowerCase().includes("counselor")) {
                            if (msg.content.endsWith("?")) {
                                const args = msg.content.substring(0, msg.content.length - 1).split(' ');
                                const searchWord = msg.content;
                                doCustomQuestion(searchWord, args);
                            } else {
                                msg.reply("Oops, I don't know that one. Try **help** to see what I do know, or if you want to ask a custom question, make sure it ends with a question mark **?**");
                            }
                        }
                    }
                }
            } catch (e) {
                console.log(e);
                msg.reply("Unknown error ocurred.  Try **help** to see what I do know, or if you want to ask a custom question, make sure it ends with a question mark **?**");
            }
        }
    }

    function showAllAliases(isDM) {
        let rawdata = fs.readFileSync('categories/aliases.json');
        let aliases = JSON.parse(rawdata);
        let questionMap = new Map();
        aliases.forEach(function (alias) {
            let aliasQuestion = questionMap.get(alias.number);
            if (aliasQuestion) {
                aliasQuestion.push(alias.alias);
                questionMap.set(alias.number, aliasQuestion);
            } else {
                let aliasQuestion = new Array();
                aliasQuestion.push(alias.alias);
                questionMap.set(alias.number, aliasQuestion);
            }
        });

        let exampleEmbed = new Discord.MessageEmbed()
            .setColor('#0099ff')
            .setTitle('Known aliases')
            .setURL('https://github.com/thales-markets/community-bots');
        exampleEmbed.setDescription('Hello, here are the aliases I know:');

        let counter = 0;
        let pagenumber = 2;
        for (let [questionNumber, questions] of questionMap) {
            let questionsString = "";
            questions.forEach(function (q) {
                questionsString += (isDM ? "" : "!faq ") + q + "\n";
            })
            let answer = qaMaps.get(questionNumber);
            exampleEmbed.addField(answer.title + ' ' + answer.description, questionsString);

            counter++;
            if (counter == 10) {
                if (isDM) {
                    msg.reply(exampleEmbed);
                } else {
                    msg.channel.send(exampleEmbed).then(function (message) {
                        message.react("❌");
                    }).catch(function () {
                        //Something
                    });
                }
                exampleEmbed = new Discord.MessageEmbed()
                    .setColor('#0099ff')
                    .setTitle('Known aliases page ' + pagenumber)
                    .setURL('https://github.com/thales-markets/community-bots');
                exampleEmbed.setDescription('Hello, here are the aliases I know:');
                pagenumber++;
                counter = 0;
            }

        }

        if (isDM) {
            msg.reply(exampleEmbed);
        } else {
            msg.channel.send(exampleEmbed).then(function (message) {
                message.react("❌");
            }).catch(function () {
                //Something
            });
        }
    }

    function checkAliasMatching(doReply) {
        let potentialAlias = msg.content.toLowerCase().replace("!faq", "").trim();
        let rawdata = fs.readFileSync('categories/aliases.json');
        let aliases = JSON.parse(rawdata);
        let found = false;
        aliases.forEach(function (alias) {
            if (alias.alias.toLowerCase().trim() == potentialAlias) {
                found = true;
                msg.content = "!faq question " + alias.number;
                doQuestion(msg, "!faq question", doReply);
            }
        });
        return found;
    }

    function doFaqHelp() {
        const exampleEmbed = new Discord.MessageEmbed()
            .setColor('#0099ff')
            .setTitle('Thales Frequently Asked Questions')
            .setURL('https://docs.thales.market/getting-started/faqs');
        exampleEmbed.setDescription('Hello, here is list of commands I know:');
        exampleEmbed.addField("list", "Lists all known questions");
        exampleEmbed.addField("categories", "Lists all categories of known questions");
        exampleEmbed.addField("category categoryName", "Lists all known questions for a given category name, e.g. ** category *General* **");
        exampleEmbed.addField("question questionNumber", "Shows the answer to the question defined by its number, e.g. ** question *7* **");
        exampleEmbed.addField("search searchTerm", "Search all known questions by given search term, e.g. ** search *gas price* **");
        exampleEmbed.addField("aliases", "List all known aliases");
        exampleEmbed.addField("\u200b", "*Or just ask me a question and I will do my best to find a match for you, e.g. **What order books is Thales using?***");

        msg.reply(exampleEmbed);
    }


    function listQuestions() {
        let exampleEmbed = new Discord.MessageEmbed()
            .setColor('#0099ff')
            .setTitle('Frequently Asked Questions')
            .setURL('https://docs.thales.market/getting-started/faqs');

        let counter = 0;
        let pagenumber = 2;
        qaMaps.forEach((value, key) => {
            exampleEmbed.addField(key, value.description, false)
            counter++;
            if (counter == 20) {
                msg.reply(exampleEmbed);
                exampleEmbed = new Discord.MessageEmbed()
                    .setColor('#0099ff')
                    .setTitle('Frequently Asked Questions page ' + pagenumber)
                    .setURL('https://docs.thales.market/getting-started/faqs');
                pagenumber++;
                counter = 0;
            }
        })
        msg.reply(exampleEmbed);
    }

    function listCategories() {
        let rawdata = fs.readFileSync('categories/categories.json');
        let categories = JSON.parse(rawdata);

        const exampleEmbed = new Discord.MessageEmbed()
            .setColor('#0099ff')
            .setTitle('Categories');

        categories.forEach(function (category) {
            exampleEmbed.addField(category.name, category.desc, false);
        });
        exampleEmbed.addField('\u200b', "Choose the category with **category categoryName**, e.g. **category General*");
        msg.reply(exampleEmbed);
    }

    function doSearch(searchWord, args) {
        const exampleEmbed = new Discord.MessageEmbed()
            .setColor('#0099ff')
            .setTitle('Questions found for ***' + searchWord + '***:');

        const Match = class {
            constructor(title, value) {
                this.title = title;
                this.value = value;
            }

            matchedCount = 0;
            title;
            value;
        };

        const fullMatches = [];
        const partialMatches = [];
        qaMaps.forEach((value, key) => {
            let res = value.description;
            if (res.includes(searchWord)) {
                res = replaceString(res, searchWord, '**' + searchWord + '**');
                fullMatches.push(new Match(file.substring(0, file.lastIndexOf(".")), res));
            } else {
                let matchedCount = 0;
                args.sort(function (a, b) {
                    return a.length - b.length;
                });
                args.forEach(function (arg) {
                    if (res.toLowerCase().includes(arg.toLowerCase())) {
                        res = replaceString(res, arg, '**' + arg + '**');
                        res = replaceString(res, arg.toLowerCase(), '**' + arg.toLowerCase() + '**');
                        res = replaceString(res, arg.toUpperCase(), '**' + arg.toUpperCase() + '**');
                        matchedCount++;
                    }
                });
                if (matchedCount > 0) {
                    let match = new Match(key, res);
                    match.matchedCount = matchedCount;
                    partialMatches.push(match);
                }
            }
        })


        if (fullMatches.length == 0 && partialMatches.length == 0) {
            exampleEmbed.setTitle('No questions found for ***' + searchWord + '***. Please refine your search.');
        } else {

            let counter = 0;
            fullMatches.forEach(function (match) {
                counter++;
                if (counter < 6) {
                    exampleEmbed.addField(match.title, match.value, false);
                }
            });

            partialMatches.sort(function (a, b) {
                return b.matchedCount - a.matchedCount;
            });
            partialMatches.forEach(function (match) {
                counter++;
                if (counter < 6) {
                    exampleEmbed.addField(match.title, match.value, false);
                }
            });

            exampleEmbed.addField('\u200b', 'Choose your question with e.g. **question 1**');
        }
        msg.reply(exampleEmbed);

    }

    function doCustomQuestion(searchWord, args) {
        const exampleEmbed = new Discord.MessageEmbed()
            .setColor('#0099ff')
            .setTitle('Looks like you asked a custom question. This is the best I could find for your query:');

        const Match = class {
            constructor(title, value) {
                this.title = title;
                this.value = value;
            }

            matchedCount = 0;
            title;
            value;
        };

        const fullMatches = [];
        const partialMatches = [];
        qaMaps.forEach((value, key) => {
            let res = value.description;
            if (res.includes(searchWord)) {
                res = replaceString(res, searchWord, '**' + searchWord + '**');
                fullMatches.push(new Match(file.substring(0, file.lastIndexOf(".")), res));
            } else {
                let matchedCount = 0;
                args.sort(function (a, b) {
                    return a.length - b.length;
                });
                args.forEach(function (arg) {
                    if (res.toLowerCase().includes(arg.toLowerCase())) {
                        res = replaceString(res, arg, '**' + arg + '**');
                        res = replaceString(res, arg.toLowerCase(), '**' + arg.toLowerCase() + '**');
                        res = replaceString(res, arg.toUpperCase(), '**' + arg.toUpperCase() + '**');
                        matchedCount++;
                    }
                });
                if (matchedCount > 0) {
                    let match = new Match(key, res);
                    match.matchedCount = matchedCount;
                    partialMatches.push(match);
                }
            }
        })


        if (fullMatches.length == 0 && partialMatches.length == 0) {
            exampleEmbed.setTitle('No questions found for ***' + searchWord + '***. Please refine your search.');
        } else {

            let counter = 0;
            fullMatches.forEach(function (match) {
                counter++;
                if (counter < 6) {
                    exampleEmbed.addField(match.title, match.value, false);
                }
            });

            partialMatches.sort(function (a, b) {
                return b.matchedCount - a.matchedCount;
            });
            partialMatches.forEach(function (match) {
                counter++;
                if (counter < 6) {
                    exampleEmbed.addField(match.title, match.value, false);
                }
            });

            exampleEmbed.addField('\u200b', 'Choose your question with e.g. **question 1**');
        }
        msg.reply(exampleEmbed);
    }


    function doQuestion(msg, toSlice, doReply) {
        const args = msg.content.slice(toSlice.length).split(' ');
        args.shift();
        const command = args.shift();
        doInnerQuestion(command, doReply, msg);
    }

})

client.login(process.env.BOT_TOKEN);

clientNewListings.once('ready', () => {
    console.log("initial new operations")
    getThalesNewOperations();
});


setInterval(function () {
    try {
        console.log("starting new operations")
        getThalesNewOperations();
    } catch (e) {
        console.log('problem with new operations' + e);
    }
}, 60 * 4.5 * 1000);

let network = 1;

function sendMarketMessage(market) {
    clientNewListings.guilds.cache.forEach(function (guildValue, key) {
        const category = guildValue.channels.cache.find(channel => channel.name.toLowerCase().includes("transactions"));
        if (category) {
            const channel = category.children.find(channel => channel.name.toLowerCase().includes('trades'));
            if (channel) {
                var message = new Discord.MessageEmbed()
                    .addFields(
                        {
                            name: ':lock: New Thales Market created :lock:',
                            value: "\u200b"
                        },
                        {
                            name: ':link: URL:',
                            value: "[" + market.address + "](https://etherscan.io/address/" + market.address + ")"
                        },
                        {
                            name: ':coin: Token:',
                            value: market.currencyKey
                        },
                        {
                            name: ':classical_building: Creator:',
                            value: "[" + market.creator + "](https://etherscan.io/address/" + market.creator + ")"
                        },
                        {
                            name: ':dollar: Strike price:',
                            value: market.strikePrice
                        },
                        {
                            name: ':alarm_clock: Timestamp:',
                            value: new Date(market.timestamp)
                        }
                    )
                    .setColor("#0037ff")
                channel.send(message);
            }
        }
    });
}


function getNumberLabel(labelValue) {

    // Nine Zeroes for Billions
    return Math.abs(Number(labelValue)) >= 1.0e+9

        ? Math.round(Math.abs(Number(labelValue)) / 1.0e+9) + "B"
        // Six Zeroes for Millions
        : Math.abs(Number(labelValue)) >= 1.0e+6

            ? Math.round(Math.abs(Number(labelValue)) / 1.0e+6) + "M"
            // Three Zeroes for Thousands
            : Math.abs(Number(labelValue)) >= 1.0e+3

                ? Math.round(Math.abs(Number(labelValue)) / 1.0e+3) + "K"

                : Math.round(Math.abs(Number(labelValue)));

}

function sendNewTradeMessage(trade) {
    clientNewListings.guilds.cache.forEach(function (guildValue, key) {
        const category = guildValue.channels.cache.find(channel => channel.name.toLowerCase().includes("transactions"));
        if (category) {
            const channel = category.children.find(channel => channel.name.toLowerCase().includes('trades'));
            if (channel) {
                var message = new Discord.MessageEmbed()
                    .addFields(
                        {
                            name: ':lock: New Thales Trade :lock:',
                            value: "\u200b"
                        },
                        {
                            name: ':link: Market address:',
                            value: "[" + trade.transactionHash + "](https://etherscan.io/tx/" + trade.transactionHash + ")"
                        },
                        {
                            name: ':coin: Maker token:',
                            value: trade.makerToken
                        },
                        {
                            name: ':coin: Taker token:',
                            value: trade.takerToken
                        },
                        {
                            name: ':classical_building: Maker:',
                            value: "[" + trade.maker + "](https://etherscan.io/address/" + trade.maker + ")"
                        },
                        {
                            name: ':dollar: Maker amount:',
                            value: getNumberLabel(trade.makerAmount)
                        },
                        {
                            name: ':dollar: Taker amount:',
                            value: getNumberLabel(trade.takerAmount)
                        },
                        {
                            name: ':alarm_clock: Timestamp:',
                            value: new Date(trade.timestamp)
                        }
                    )
                    .setColor("#0037ff")
                channel.send(message);
            }
        }
    });

}

async function getThalesNewOperations() {

    thalesData.binaryOptions.markets({
        max: Infinity,
        network: 1,
    }).then(markets => {
            var startdate = new Date();
            var durationInMinutes = 5;
            startdate.setMinutes(startdate.getMinutes() - durationInMinutes);
            let startDateUnixTime = startdate.getTime();
            for (const market of markets) {

                if (startDateUnixTime < market.timestamp) {
                    console.log("new market");
                    sendMarketMessage(market);
                }

                thalesData.binaryOptions.trades({
                    network: 1,
                    makerToken: market.longAddress,
                    takerToken: SYNTH_USD_MAINNET
                }).then(trades => {
                    //send messages
                    if (trades.length > 0) {
                        for (let trade of trades) {
                            if (startDateUnixTime < trade.timestamp) {
                                console.log("new trade message")
                                sendNewTradeMessage(trade);
                            }
                        }
                    }
                });
                thalesData.binaryOptions.trades({
                    network: network,
                    makerToken: SYNTH_USD_MAINNET,
                    takerToken: market.longAddress,
                }).then(trades => {
                    if (trades.length > 0) {
                        for (let trade of trades) {
                            if (startDateUnixTime < trade.timestamp) {
                                console.log("new trade message")
                                sendNewTradeMessage(trade);
                            }
                        }
                    }
                });
                thalesData.binaryOptions.trades({
                    network: network,
                    makerToken: market.shortAddress,
                }).then(trades => {
                    if (trades.length > 0) {
                        for (let trade of trades) {
                            if (startDateUnixTime < trade.timestamp) {
                                console.log("new trade message")
                                sendNewTradeMessage(trade);
                            }
                        }
                    }
                });
                thalesData.binaryOptions.trades({
                    network: network,
                    makerToken: SYNTH_USD_MAINNET
                }).then(trades => {
                    if (trades.length > 0) {
                        for (let trade of trades) {
                            if (startDateUnixTime < trade.timestamp) {
                                console.log("new trade message")
                                sendNewTradeMessage(trade);
                            }
                        }
                    }
                });
            }
        }
    );
}

clientNewListings.login(process.env.BOT_TOKEN_LISTINGS);


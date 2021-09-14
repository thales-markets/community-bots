const Discord = require('discord.js');
const clientCountdown = new Discord.Client();
clientCountdown.login(process.env.BOT_TOKEN_COUNTDOWN);
var fs = require('fs');
const client = new Discord.Client();
let contentRaw = fs.readFileSync('content.json');
const axios = require('axios');
let answersContent = JSON.parse(contentRaw);
let qaMaps = new Map();
let contractRaw = fs.readFileSync('contracts/Synthetix.json');
const thalesData = require("thales-data");
const SYNTH_USD_MAINNET = "0x57ab1ec28d129707052df4df418d58a2d46d5f51";
const clientNewListings = new Discord.Client();
const clientETHBurned = new Discord.Client();
const Web3 = require('web3');
let contract = JSON.parse(contractRaw);
const web3 = new Web3(new Web3.providers.HttpProvider(process.env.INFURA_URL))
let mapThalesTrades = new Map();
let mapThalesAsks = new Map();
let mapThalesBids = new Map();
let bobeMM = '0xadcf4a36baa86882c06e259ea93c439e1ab191e2';
let almaMM = '0x036b8c9f7C31713c3a47863afe0031630395FaCD';
let rickMM = '0xc637dB6c413db9439944d0DFDA47172890A6e313';
const fetch = require("node-fetch");
const thalesGraphURL =
    'https://api.thegraph.com/subgraphs/name/thales-markets/thales-options';
let mapBobeMM = new Map();
let mapAlmaMM = new Map();
let mapRickMM = new Map();
let mapMint = new Map();
answersContent
    .forEach(a => {
        qaMaps.set(a.number, a.content);
    })

clientETHBurned.once('ready', () => {
    console.log("updating ETH burned on ready");
    getETHBurned();
});

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
    console.log("updateCountdown and eth burned")
    getETHBurned();
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

function delay(time) {
    return new Promise(function (resolve) {
        setTimeout(resolve, time)
    });
}

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
}, 60 * 4.8 * 1000);

let network = 1;

function sendMarketMessage(market) {
    clientNewListings.guilds.cache.forEach(function (guildValue, key) {
        const category = guildValue.channels.cache.find(channel => channel.name.toLowerCase().includes("transactions"));
        if (category) {
            const channel = category.children.find(channel => channel.name.toLowerCase().includes('new-markets'));
            if (channel) {
                var message = new Discord.MessageEmbed()
                    .addFields(
                        {
                            name: ':lock: New Thales Market created :lock:',
                            value: "\u200b"
                        },
                        {
                            name: ':link: URL:',
                            value: "[" + market.address + "](https://thales.market/markets/" + market.address + ")"
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
                            name: ':alarm_clock: When:',
                            value: new Date(market.maturityDate)
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

async function sendNewTradeMessage(trade, market) {

    var shortLong;
    await delay(1001)
    const makerToken = new web3.eth.Contract(contract, trade.makerToken);
    const makerTokenName = await makerToken.methods.name().call();
    const takerToken = new web3.eth.Contract(contract, trade.takerToken);
    const takerTokenName = await takerToken.methods.name().call();
    var amountUSD;
    var amountShortLong;
    var isLong = false;
    var isBuy = false;
    if (makerTokenName.toLowerCase().includes('long') || makerTokenName.toLowerCase().includes('short')) {
        if (makerTokenName.toLowerCase().includes('long')) {
            shortLong = " > ";
            isLong = true;

        } else {
            shortLong = " < ";
            isLong = false;
        }
        amountShortLong = getNumberLabel(trade.makerAmount);
        amountUSD = getNumberLabel(trade.takerAmount);
        isBuy = true;
    } else {
        if (takerTokenName.toLowerCase().includes('long')) {
            shortLong = " > ";
            isLong = true;
        } else {
            shortLong = " < ";
            isLong = false;
        }


        amountUSD = getNumberLabel(trade.makerAmount);
        amountShortLong = getNumberLabel(trade.takerAmount);
        shortLong = takerTokenName.toLowerCase().includes('long') ? " > " : " < ";
    }
    var marketMessage = market.currencyKey + shortLong + Math.round(((market.strikePrice) + Number.EPSILON) * 1000) / 1000;
    marketMessage = marketMessage + "@" + new Date(market.maturityDate).toISOString().slice(0, 10);

    var message = new Discord.MessageEmbed()
        .addFields(
            {
                name: ':lock: New Thales Trade :lock:',
                value: "\u200b"
            },
            {
                name: ':link: Transaction:',
                value: "[" + trade.transactionHash + "](https://etherscan.io/tx/" + trade.transactionHash + ")"
            },
            {
                name: ':coin: Transaction type:',
                value: isBuy ? "Buy" : "Sell"
            },
            {
                name: ':classical_building: Market:',
                value: "[" + marketMessage + "](https://thales.market/markets/" + market.address + ")"
            },
            {
                name: isLong ? ':dollar: Amount (sLONG)' : ':dollar: Amount (sSHORT)',
                value: amountShortLong
            },
            {
                name: ':dollar: Total:',
                value: amountUSD + " sUSD"
            },
            {
                name: ':alarm_clock: Timestamp:',
                value: new Date(trade.timestamp)
            }
        )
        .setColor("#0037ff")
    mapThalesTrades.set(trade.transactionHash, message);
    if (bobeMM.toLowerCase() == trade.maker.toLowerCase() || bobeMM.toLowerCase() == trade.taker.toLowerCase()) {
        console.log("its bobe transaction");
        mapBobeMM.set(trade.transactionHash, message);
    } else if (almaMM.toLowerCase() == trade.maker.toLowerCase() || almaMM.toLowerCase() == trade.taker.toLowerCase()) {
        console.log("its alma transaction");
        mapAlmaMM.set(trade.transactionHash, message);
    } else if (rickMM.toLowerCase() == trade.maker.toLowerCase() || rickMM.toLowerCase() == trade.taker.toLowerCase()) {
        console.log("its rick transaction");
        mapRickMM.set(trade.transactionHash, message);
    }
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

                if (market.isOpen || market.expiryDate < startDateUnixTime) {
                    getThalesNewTrades(market, startDateUnixTime);

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
                                    sendNewTradeMessage(trade, market);
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
                                    sendNewTradeMessage(trade, market);
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
                                    sendNewTradeMessage(trade, market);
                                }
                            }
                        }
                    });
                    thalesData.binaryOptions.trades({
                        network: network,
                        makerToken: SYNTH_USD_MAINNET,
                        takerToken: market.shortAddress,
                    }).then(trades => {
                        if (trades.length > 0) {
                            for (let trade of trades) {
                                if (startDateUnixTime < trade.timestamp) {
                                    console.log("new trade message")
                                    sendNewTradeMessage(trade, market);
                                }
                            }
                        }
                    });
                }
            }
        }
    );
}

setInterval(function () {
    try {
        if (mapThalesTrades.size > 0 || mapThalesBids.size > 0 || mapThalesAsks.size > 0 || mapBobeMM.size > 0 || mapRickMM.size > 0 || mapAlmaMM.size > 0) {
            clientNewListings.guilds.cache.forEach(function (guildValue, key) {
                const category = guildValue.channels.cache.find(channel => channel.name.toLowerCase().includes("transactions"));
                if (category) {
                    const channelTrades = category.children.find(channel => channel.name.toLowerCase().includes('trades'));
                    const channelBuys = category.children.find(channel => channel.name.toLowerCase().includes('new-buy-orders'));
                    const channelSells = category.children.find(channel => channel.name.toLowerCase().includes('new-sell-orders'));
                    if (channelTrades) {
                        for (const message of mapThalesTrades.values()) {

                            channelTrades.send(message);
                        }
                    }
                    if (channelBuys) {
                        for (const message of mapThalesBids.values()) {
                            channelBuys.send(message);
                        }
                    }
                    if (channelSells) {
                        for (const message of mapThalesAsks.values()) {
                            channelSells.send(message);
                        }
                    }
                    clientNewListings.channels.fetch('882186211198914590').then(bobChannel => {
                        for (const message of mapBobeMM.values()) {
                            bobChannel.send(message);
                        }
                        mapBobeMM = new Map();
                    });
                    clientNewListings.channels.fetch('882186251913015307').then(almaChannel => {
                        for (const message of mapAlmaMM.values()) {
                            almaChannel.send(message);
                        }
                        mapAlmaMM = new Map();
                    });
                    clientNewListings.channels.fetch('882186413519564840').then(rickChannel => {
                        for (const message of mapRickMM.values()) {
                            rickChannel.send(message);
                        }
                        mapRickMM = new Map();
                    });
                }
            });
            mapThalesTrades = new Map();
            mapThalesBids = new Map();
            mapThalesAsks = new Map();
        }
    } catch (e) {
        console.log('sending messages error ' + e);
    }
}, 60 * 5.2 * 1000);


async function getThalesNewTrades(market, startDateUnixTime) {
    try {
        let baseUrl = "https://api.0x.org/sra/v4/";
        var response = await axios.get(baseUrl + `orderbook?baseToken=` + market.longAddress + "&quoteToken=" + "0x57Ab1ec28D129707052df4dF418D58a2D46d5f51")
        if (response.data) {
            //check bids
            for (const bid of response.data.bids.records) {
                if (startDateUnixTime < new Date(bid.metaData.createdAt).getTime()) {
                    console.log("web 3 " + web3);
                    console.log("infura " + process.env.INFURA_URL);
                    await delay(1001)
                    const takerToken = new web3.eth.Contract(contract, bid.order.takerToken);
                    const takerTokenName = await takerToken.methods.name().call();
                    console.log("token name is " + takerTokenName);
                    var shortLong = takerTokenName.toLowerCase().includes('long') ? " > " : " < ";
                    var message = new Discord.MessageEmbed()
                        .addFields(
                            {
                                name: ':lock: New Thales Buy order :lock:',
                                value: "\u200b"
                            },
                            {
                                name: ':classical_building: Market:',
                                value: market.currencyKey + shortLong + Math.round(((market.strikePrice) + Number.EPSILON) * 1000) / 1000
                            },
                            {
                                name: ':dollar: Amount :',
                                value: "$" + Math.round(((bid.order.makerAmount / 1e18) + Number.EPSILON) * 1000) / 1000
                            },
                            {
                                name: ':dollar: Price:',
                                value: parseFloat(bid.order.makerAmount / bid.order.takerAmount).toFixed(3) + " sUSD"
                            },
                            {
                                name: ':dollar: Amount of options:',
                                value: Math.round(((bid.order.takerAmount / 1e18) + Number.EPSILON) * 1000) / 1000
                            },
                            {
                                name: ':alarm_clock: Created at:',
                                value: new Date(bid.metaData.createdAt).toISOString().replace(/T/, ' ').replace(/\..+/, '')
                            },
                            {
                                name: ':alarm_clock: Expiries:',
                                value: new Date(bid.order.expiry * 1000).toISOString().replace(/T/, ' ').replace(/\..+/, '')
                            }
                        )
                        .setColor("#0037ff")
                    mapThalesBids.set(bid.metaData.orderHash, message);
                    if (bobeMM.toLowerCase() == bid.order.taker.toLowerCase() || bobeMM.toLowerCase() == bid.order.maker.toLowerCase()) {
                        mapBobeMM.set(bid.metaData.orderHash, message);
                    } else if (almaMM.toLowerCase() == bid.order.taker.toLowerCase() || almaMM.toLowerCase() == bid.order.maker.toLowerCase()) {
                        mapAlmaMM.set(bid.metaData.orderHash, message);
                    } else if (rickMM.toLowerCase() == bid.order.taker.toLowerCase() || rickMM.toLowerCase() == bid.order.maker.toLowerCase()) {
                        mapRickMM.set(bid.metaData.orderHash, message);
                    }
                }
            }
            //check asks
            for (const ask of response.data.asks.records) {
                if (startDateUnixTime < new Date(ask.metaData.createdAt).getTime()) {
                    //check and send messages here
                    console.log("web 3 " + web3);
                    console.log("infura " + process.env.INFURA_URL);
                    await delay(1001)
                    const makerToken = new web3.eth.Contract(contract, ask.order.makerToken);
                    const makerTokenName = await makerToken.methods.name().call();
                    console.log("m token name is " + makerTokenName);
                    var shortLong = makerTokenName.toLowerCase().includes('long') ? " > " : " < ";
                    var message = new Discord.MessageEmbed()
                        .addFields(
                            {
                                name: ':lock: New Thales Sell order :lock:',
                                value: "\u200b"
                            },
                            {
                                name: ':classical_building: Market:',
                                value: market.currencyKey + shortLong + Math.round(((market.strikePrice) + Number.EPSILON) * 1000) / 1000
                            },
                            {
                                name: ':dollar: Amount :',
                                value: "$" + Math.round(((ask.order.takerAmount / 1e18) + Number.EPSILON) * 1000) / 1000
                            },
                            {
                                name: ':dollar: Price:',
                                value: parseFloat(ask.order.takerAmount / ask.order.makerAmount).toFixed(3) + " sUSD"
                            },
                            {
                                name: ':dollar: Amount of options:',
                                value: Math.round(((ask.order.makerAmount / 1e18) + Number.EPSILON) * 1000) / 1000
                            }, {
                                name: ':dollar: Return if win:',
                                value: ((((ask.order.makerAmount - ask.order.takerAmount)) / ask.order.takerAmount) * 100).toFixed(2) + '%'
                            },
                            {
                                name: ':alarm_clock: Created at:',
                                value: new Date(ask.metaData.createdAt).toISOString().replace(/T/, ' ').replace(/\..+/, '')
                            },
                            {
                                name: ':alarm_clock: Expiries:',
                                value: new Date(ask.order.expiry * 1000).toISOString().replace(/T/, ' ').replace(/\..+/, '')
                            }
                        )
                        .setColor("#0037ff")
                    mapThalesAsks.set(ask.metaData.orderHash, message);
                    if (bobeMM.toLowerCase() == ask.order.taker.toLowerCase() || bobeMM.toLowerCase() == ask.order.maker.toLowerCase()) {
                        mapBobeMM.set(ask.metaData.orderHash, message);
                    } else if (almaMM.toLowerCase() == ask.order.taker.toLowerCase() || almaMM.toLowerCase() == ask.order.maker.toLowerCase()) {
                        mapAlmaMM.set(ask.metaData.orderHash, message);
                    } else if (rickMM.toLowerCase() == ask.order.taker.toLowerCase() || rickMM.toLowerCase() == ask.order.maker.toLowerCase()) {
                        mapRickMM.set(ask.metaData.orderHash, message);
                    }
                }
            }
        }
    } catch (e) {
        console.log("error while getting new trades " + e);
    }
}


clientNewListings.login(process.env.BOT_TOKEN_LISTINGS);


async function getETHBurned() {

    try {
        var response = await axios.get('https://ethburned.info/api/v1/burned');
        clientETHBurned.guilds.cache.forEach(function (value, key) {
            try {
                console.log("Updating burning ETH");
                value.members.cache.get(clientETHBurned.user.id).setNickname(getNumberLabel(response.data.total) + ' ETH burned');
            } catch (e) {
                console.log(e);
            }
        });
        clientETHBurned.user.setActivity(getNumberLabel(response.data.totalUSD) + "$", {type: 'WATCHING'});
    } catch (e) {
        console.log("error in eth burned", e);
    }

}


setInterval(function () {
    try {
        console.log("starting new mints")
        getMintData();
    } catch (e) {
        console.log('starting new mints' + e);
    }
}, 60 * 4.8 * 1000);


async function getMintData() {
    const body = JSON.stringify({
        query: `{
  optionTransactions(first: 20, orderBy:timestamp,
        orderDirection:desc, where: { type: mint }) {
    id
    timestamp
    type
    account
    market
    amount
  }
}`,
        variables: null,
    });
    const response = await fetch(thalesGraphURL, {
        method: 'POST',
        body,
    });
    const json = await response.json();


    let startdate = new Date();
    let durationInMinutes = 5;
    startdate.setMinutes(startdate.getMinutes() - durationInMinutes);
    let unixTimestamp = Math.floor(startdate / 1000);
    var newMint = 0;
    for (const mint of json.data.optionTransactions) {
        if (unixTimestamp < mint.timestamp) {
            mapMint.set(mint.timestamp, mint);
            newMint = 1;
        }
    }
    let wantedMarket;
    let markets;
    if (newMint == 1) {
        markets = await thalesData.binaryOptions.markets({
            max: Infinity,
            network: 1,
        });
    }

    if (mapMint.size > 0) {
        clientNewListings.guilds.cache.forEach(function (guildValue, key) {
            const category = guildValue.channels.cache.find(channel => channel.name.toLowerCase().includes("transactions"));
            if (category) {
                const channelMint = category.children.find(channel => channel.name.toLowerCase().includes('new-mints'));
                if (channelMint) {
                    for (const mint of mapMint.values()) {
                        for (const market of markets) {
                            if (market.address == mint.market) {
                                wantedMarket = market;
                                break;
                            }
                        }
                        var marketMessage = wantedMarket.currencyKey + " > " + Math.round(((wantedMarket.strikePrice) + Number.EPSILON) * 1000) / 1000;
                        marketMessage = marketMessage + "@" + new Date(wantedMarket.maturityDate).toISOString().slice(0, 10);

                        var message = new Discord.MessageEmbed()
                            .addFields(
                                {
                                    name: ':lock: New Thales Mint :lock:',
                                    value: "\u200b"
                                },
                                {
                                    name: ':classical_building: Market:',
                                    value: "[" + marketMessage + "](https://thales.market/markets/" + mint.market + ")"
                                },
                                {
                                    name: ':link: Account:',
                                    value: "[" + mint.account + "]" +
                                        "(https://etherscan.io/address/" + mint.account + ")"
                                },
                                {
                                    name: ':dollar: Amount :',
                                    value: "$" + getNumberLabel(mint.amount / 1e18)
                                },
                                {
                                    name: ':alarm_clock: Timestamp:',
                                    value: new Date(mint.timestamp * 1000).toISOString().replace(/T/, ' ').replace(/\..+/, '')
                                }
                            )
                            .setColor("#0037ff");

                        channelMint.send(message);
                    }
                }
            }
        });
    }

}

clientETHBurned.login(process.env.BOT_TOKEN_ETH_BURNED);
require("dotenv").config();
const Discord = require("discord.js");
const clientCountdown = new Discord.Client();
clientCountdown.login(process.env.BOT_TOKEN_COUNTDOWN);
const clientGameCountdown = new Discord.Client();
clientGameCountdown.login(process.env.BOT_TOKEN_GAME_COUNTDOWN);
const clientThalesL2APR = new Discord.Client();
clientThalesL2APR.login(process.env.BOT_TOKEN_THALES_L2_APR);
const clientThalesOPCountdown = new Discord.Client();
clientThalesOPCountdown.login(process.env.BOT_TOKEN_OPTHALES_COUNTDOWN);
const clientRoyaleMainnetCountdown = new Discord.Client();
clientRoyaleMainnetCountdown.login(process.env.BOT_TOKEN_TROYALEM_COUNTDOWN);
var fs = require("fs");
const client = new Discord.Client();
let contentRaw = fs.readFileSync("content.json");
const axios = require("axios");
let answersContent = JSON.parse(contentRaw);
let qaMaps = new Map();
let contractRaw = fs.readFileSync("contracts/erc20Contract.json");
const thalesData = require("thales-data");
const SYNTH_USD_MAINNET = "0x57ab1ec28d129707052df4df418d58a2d46d5f51";
const clientNewListings = new Discord.Client();
const clientETHBurned = new Discord.Client();
const clientCountdownChannel = new Discord.Client();
const clientTotalL2Trades = new Discord.Client();
clientCountdownChannel.login(process.env.BOT_TOKEN_COUNTDOWN_CHANNEL);
clientTotalL2Trades.login(process.env.BOT_TOKEN_TOTAL_L2);
const Web3 = require("web3");
let contract = JSON.parse(contractRaw);
const web3 = new Web3(new Web3.providers.HttpProvider(process.env.INFURA_URL));
const web3L2 = new Web3(new Web3.providers.HttpProvider(process.env.INFURA_L2_URL));
const CoinGecko = require('coingecko-api');
const CoinGeckoClient = new CoinGecko();
const clientUniswap = new Discord.Client();
clientUniswap.login(process.env.BOT_TOKEN_UNISWAP);
const clientSOL = new Discord.Client();
clientSOL.login(process.env.BOT_TOKEN_SOL);
const clientLink = new Discord.Client();
clientLink.login(process.env.BOT_TOKEN_LINK);
const clientAAVE = new Discord.Client();
clientAAVE.login(process.env.BOT_TOKEN_AAVE);
const clientCURVE = new Discord.Client();
clientCURVE.login(process.env.BOT_TOKEN_CURVE);
let mapThalesTrades = new Map();
let mapThalesAsks = new Map();
let mapThalesBids = new Map();
let deckardMM = "0x71C5a24F6eDe7861A32A5f81AF5b1B70Ff250B80";
let almaMM = "0x036b8c9f7C31713c3a47863afe0031630395FaCD";
let sladeMM = "0xC0E554C1951c0193E020156F68Dce15064769937";
let nonMMordersList = new Array();
nonMMordersList.push(
  "0x6eb3f5d9b8f83fef7411709e0dfb42da9d4a85da",
  "0xd558914fa43581584b460bba220f25175bbcf67a",
  "0xd76224d26b01e9733a0e67209929b2eadff67d36",
  "0x924ef47993be036ebe72be1449d8bef627cd30a2",
  "0x036b8c9f7c31713c3a47863afe0031630395facd",
  "0xc0e554c1951c0193e020156f68dce15064769937",
  "0x71c5a24f6ede7861a32a5f81af5b1b70ff250b80"
);
const fetch = require("node-fetch");
const thalesGraphURL =
  "https://api.thegraph.com/subgraphs/name/thales-markets/thales-options";
const ethers = require("ethers");
const provider = ethers.getDefaultProvider();
let walletTest = new ethers.Wallet(
  ethers.Wallet.createRandom().privateKey,
  provider
);
const stakingThalesABI = require("./contracts/StakingThales.js");
const stakingContract = new ethers.Contract(
  "0x883D651429B0829BC045A94F288f3b514021B8C1",
  stakingThalesABI.stakingthales.abi,
  walletTest
);
const gelatoContract = require("./contracts/GelatoContract.js");
let mapSladeMM = new Map();
let mapAlmaMM = new Map();
let mapDeckardMM = new Map();
let mapMint = new Map();
let nonMMOrdersMap = new Map();
let setConcludedTradesPastHour = new Set();
answersContent.forEach((a) => {
  qaMaps.set(a.number, a.content);
});

clientETHBurned.once("ready", () => {
  console.log("updating ETH burned on ready");
  getETHBurned();
});

clientCountdown.once("ready", () => {
  console.log("updateCountdown on ready");
  updateCountdown();
});

clientGameCountdown.once("ready", () => {
  console.log("update Game Countdown on ready");
  updateGameCountdown();
});


clientRoyaleMainnetCountdown.once("ready", () => {
  console.log("update clientRoyaleMainnetCountdown on ready");
  updateThalesRoyaleMainnetCountdown();
});


clientThalesOPCountdown.once("ready", () => {
  console.log("update clientThalesOPCountdown Countdown on ready");
  updateThalesOPCountdown();
});

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

clientUniswap.on("ready", () => {
  setPriceBot(clientUniswap,"uniswap","UNI Price");
});

clientSOL.on("ready", () => {
  setPriceBot(clientSOL,"solana","SOL Price");
});

clientLink.on("ready", () => {
  setPriceBot(clientLink,"chainlink","LINK Price");
});

clientAAVE.on("ready", () => {
  setPriceBot(clientAAVE,"aave","AAVE Price");
});

clientCURVE.on("ready", () => {
  setPriceBot(clientCURVE,"curve-dao-token","CURVE Price");
});

setInterval(function () {
  console.log("updating price bots");
    setPriceBot(clientUniswap,"uniswap","UNI Price");
    setPriceBot(clientSOL,"solana","SOL Price");
    setPriceBot(clientLink,"chainlink","LINK Price");
    setPriceBot(clientAAVE,"aave","AAVE Price");
    setPriceBot(clientCURVE,"curve-dao-token","CURVE Price");
}, 380 * 1000);

const setPriceBot = async (clientForSetting,tokenForPrice,nameOfTheToken) => {

  let data = await CoinGeckoClient.coins.fetch(tokenForPrice);

  clientForSetting.guilds.cache.forEach(function (value, key) {
    try {
      console.log("Updating "+nameOfTheToken+" Price info " + data.data.market_data.current_price.usd);
      value.members.cache.get(clientForSetting.user.id).setNickname("$" + round(data.data.market_data.current_price.usd));
    } catch (e) {
      console.log(e);
    }
  });
  clientForSetting.user.setActivity(nameOfTheToken, {type: 'WATCHING'});
}

const round = function (num) {
  var m = Number((Math.abs(num) * 100).toPrecision(15));
  return Math.round(m) / 100 * Math.sign(num);
}

const updateCountdown = async () => {
  let  stakingContractL2=  new web3L2.eth.Contract(stakingThalesABI.stakingthales.abi, "0xC392133eEa695603B51a5d5de73655d571c2CE51");
  const lastPeriodTimeStamp = await stakingContractL2.methods.lastPeriodTimeStamp().call();
  const durationPeriod = await stakingContractL2.methods.durationPeriod().call();
  let closingDate = new Date(
    lastPeriodTimeStamp * 1000.0 + durationPeriod * 1000.0
  );
  console.log("lastPeriodTS", lastPeriodTimeStamp);
  console.log("durationPeriod", durationPeriod);
  console.log("closingDate", closingDate.getTime());
  if (clientCountdown) {
    clientCountdown.guilds.cache.forEach(function (value, key) {
      try {
        value.members.cache
          .get(clientCountdown.user.id)
          .setNickname("Staking rewards");
      } catch (e) {
        console.log(e);
      }
    });
  }
  let endDateUTC = new Date(closingDate.toUTCString());
  let currentDate = new Date(new Date().toUTCString());
  var distance = endDateUTC.getTime() - currentDate.getTime();
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  clientCountdown.user.setActivity(days + "D:" + hours + "H:" + minutes + "M", {
    type: "WATCHING",
  });
};

const updateGameCountdown = async () => {
  if (clientGameCountdown) {
    clientGameCountdown.guilds.cache.forEach(function (value, key) {
      try {
        value.members.cache
            .get(clientGameCountdown.user.id)
            .setNickname("Tale of Thales");
      } catch (e) {
        console.log(e);
      }
    });
  }

  clientGameCountdown.user.setActivity("Live: https://thalesmarket.io/tale-of-thales", {
    type: "WATCHING",
  });
};


const updateThalesRoyaleMainnetCountdown = async () => {
  if (clientRoyaleMainnetCountdown) {
    clientRoyaleMainnetCountdown.guilds.cache.forEach(function (value, key) {
      try {
        value.members.cache
            .get(clientRoyaleMainnetCountdown.user.id)
            .setNickname("Thales Royale Mainnet");
      } catch (e) {
        console.log(e);
      }
    });
  }
  let endDateUTC = new Date("Jan 31, 2022 16:00:00 UTC")
  let currentDate = new Date(new Date().toUTCString());
  var distance = endDateUTC.getTime() - currentDate.getTime();
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  clientRoyaleMainnetCountdown.user.setActivity("It's live!", {
    type: "WATCHING",
  });
};


const updateThalesOPCountdown = async () => {
  let response = await axios.get('https://api.1inch.exchange/v3.0/10/quote?fromTokenAddress=0x217D47011b23BB961eB6D93cA9945B7501a5BB11&toTokenAddress=0x7f5c764cbc14f9669b88837ca1490cca17c31607&amount=1000000000000000000000');
  let  thalesOPValue= Math.round((response.data.toTokenAmount/1000000000) * 100) / 100;
  if (thalesOPValue) {
    clientThalesOPCountdown.guilds.cache.forEach(function (value, key) {
      try {
        value.members.cache
            .get(clientThalesOPCountdown.user.id)
            .setNickname("$"+thalesOPValue);
      } catch (e) {
        console.log(e);
      }
    });
  }


  clientThalesOPCountdown.user.setActivity("OpTHALES", {
    type: "WATCHING",
  });
};

setInterval(function () {
  console.log("updateCountdown and eth burned");
  getETHBurned();
  updateCountdown();
  updateThalesRoyaleMainnetCountdown();
  updateThalesOPCountdown();
  updateGameCountdown();
}, 360 * 1000);

setInterval(function () {
  console.log("get L2 trades");
  getL2Trades();
}, 2 * 60 * 1000);

client.on("guildMemberAdd", function (member) {
  const exampleEmbed = new Discord.MessageEmbed()
    .setColor("#0099ff")
    .setTitle("Welcome");
  exampleEmbed.addField(
    "Hi, I am Thales FAQ bot. Welcome to the official Thales Discord channel!"
  );
  exampleEmbed.addField(
    "About Thales",
    "Thales platform is bringing binary options to Ethereum for users to hedge and speculate on the prices of crypto assets, commodities," +
      " equities, equity indices, and proprietary crypto indices."
  );
  exampleEmbed.addField(
    "FAQ bot",
    "For any questions, please feel free to ask me and I will look through the list of FAQs I have. We get can get started if you send me a message with content ***help***" +
      "\n" +
      "Best, \n" +
      "Thales Team"
  );

  member.send(exampleEmbed);
});

client.on("messageReactionAdd", (reaction, user) => {
  let msg = reaction.message,
    emoji = reaction.emoji;
  if (emoji.name == "❌") {
    if (msg.author.username.toLowerCase().includes("counselor")) {
      if (!user.username.toLowerCase().includes("counselor")) {
        msg.delete({ timeout: 300 /*time unitl delete in milliseconds*/ });
      }
    }
  }
});

function doInnerQuestion(command, doReply, msg) {
  let discordUserFAQ = "<@!" + msg.author.id + ">";
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
      exampleEmbed
        .attachFiles(["images/" + answer.image])
        .setImage("attachment://" + answer.image);
    }

    if (answer.thumbnail) {
      exampleEmbed
        .attachFiles(["images/" + answer.thumbnail])
        .setThumbnail("attachment://" + answer.thumbnail);
    }

    if (doReply) {
      msg.reply(exampleEmbed);
    } else {
      msg.channel
        .send(exampleEmbed)
        .then(function (message) {
          message.react("❌");
        })
        .catch(function () {
          //Something
        });
    }
    // }
  } catch (e) {
    if (doReply) {
      msg.reply(
          discordUserFAQ+ " Oops, there seems to be something wrong there. \nChoose your question with ***question questionNumber***, e.g. **question 1**\nYou can get the question number via **list**"
      );
    } else {
      msg.reply(
          discordUserFAQ+ " Oops, there seems to be something wrong there. \nChoose your question with ***!FAQ question questionNumber***, e.g. **question 1**\nYou can get the question number if you send me **list** in DM"
      );
    }
  }
}

client.on("message", (msg) => {
  if (!msg.author.username.toLowerCase().includes("counselor")) {
    if (!(msg.channel.type == "dm")) {
      // this is logic for channels
      let discordUserFAQ = "<@!" + msg.author.id + ">";

      if (msg.content.toLowerCase().trim() == "!faq") {
        msg.reply(
          "Hi "+discordUserFAQ +", I am Thales FAQ bot. I will be very happy to assist you, just ask me for **help** in DM."
        );
      } else if (msg.content.toLowerCase().trim() == "!faq help") {
        msg.reply(
            discordUserFAQ+" I can only answer a predefined question by its number or by alias in a channel, e.g. **question 1**, or **how do binary options work?**. \n For more commands and options send me **help** in DM"
        );
      } else if (
        msg.content
          .toLowerCase()
          .trim()
          .replace(/ +(?= )/g, "")
          .startsWith("!faq question")
      ) {
        doQuestion(msg, "!faq question", false);
      } else if (
        msg.content
          .toLowerCase()
          .trim()
          .replace(/ +(?= )/g, "")
          .startsWith("!faq q ")
      ) {
        doQuestion(msg, "!faq q", false);
      } else if (
        msg.content
          .toLowerCase()
          .trim()
          .replace(/ +(?= )/g, "")
          .startsWith("!faq q")
      ) {
        const args = msg.content.slice("!faq q".length);
        if (!isNaN(args)) {
          doInnerQuestion(args, false, msg);
        }
      } else if (
        msg.content
          .toLowerCase()
          .trim()
          .replace(/ +(?= )/g, "")
          .startsWith("!faq ")
      ) {
        let found = checkAliasMatching(false);
        if (!found) {
          let notFoundMessage =
            discordUserFAQ+" Oops, I don't know that one. DM me ***list*** or ***aliases*** to see which questions and commands I know.";
          msg.channel
            .send(notFoundMessage)
            .then(function (message) {
              message.react("❌");
            })
            .catch(function () {
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
            const args = msg.content.slice("help".length).split(" ");
            args.shift();
            const command = args.shift().trim();
            if (command == "question") {
              msg.reply(
                "Choose your question with ***question questionNumber***, e.g. ***question 1***\nYou can get the question number via **list** command"
              );
            } else if (command == "category") {
              msg.reply(
                "Choose your category with ***category categoryName***, e.g. ***category General***\nCategory name is fetched from **categories** command"
              );
            } else if (command == "search") {
              msg.reply(
                "Search for questions with ***search searchTerm***, e.g. ***search thales protocol***"
              );
            } else {
              msg.reply(
                "I don't know that one. Try just **help** for known commands"
              );
            }
          } else if (
            msg.content.toLowerCase().trim() == "list" ||
            msg.content.toLowerCase().trim() == "questions"
          ) {
            listQuestions();
          } else if (msg.content.toLowerCase().startsWith("question ")) {
            console.log("question asked:" + msg.content);
            doQuestion(msg, "question", true);
          } else if (msg.content.toLowerCase().startsWith("q ")) {
            console.log("question asked:" + msg.content);
            doQuestion(msg, "q", true);
          } else if (
            msg.content
              .toLowerCase()
              .trim()
              .replace(/ +(?= )/g, "")
              .startsWith("q")
          ) {
            const args = msg.content.slice("q".length);
            if (!isNaN(args)) {
              doInnerQuestion(args, true, msg);
            }
          } else if (msg.content == "categories") {
            listCategories();
          } else if (msg.content.toLowerCase().startsWith("category")) {
            const args = msg.content.slice("category".length).split(" ");
            args.shift();
            const command = args.shift();

            let rawdata = fs.readFileSync("categories/categories.json");
            let categories = JSON.parse(rawdata);

            const exampleEmbed = new Discord.MessageEmbed()
              .setColor("#0099ff")
              .setTitle("Questions in category " + command + ":");

            let found = false;
            categories.forEach(function (category) {
              if (category.name == command) {
                found = true;
                category.questions.forEach(function (question) {
                  exampleEmbed.addField(
                    question,
                    qaMaps.get(question).description,
                    false
                  );
                });
              }
            });

            if (!found) {
              exampleEmbed.addField(
                "\u200b",
                "That doesn't look like a known category. Use a category name from **categories** command, e.g. **category General**"
              );
            } else {
              exampleEmbed.addField(
                "\u200b",
                "Choose your question with e.g. **question 1**"
              );
            }
            msg.reply(exampleEmbed);
          } else if (msg.content.toLowerCase().startsWith("search ")) {
            const args = msg.content.slice("search".length).split(" ").slice(1);
            const searchWord = msg.content.substring("search".length + 1);
            doSearch(searchWord, args);
          } else if (
            msg.content
              .toLowerCase()
              .trim()
              .replace(/ +(?= )/g, "")
              .startsWith("show chart")
          ) {
            let content = msg.content
              .toLowerCase()
              .trim()
              .replace(/ +(?= )/g, "");
            const args = content.slice("show chart".length).split(" ");
            args.shift();
            const command = args.shift().trim();
            doShowChart(command, msg, true);
          } else {
            if (!msg.author.username.toLowerCase().includes("counselor")) {
              if (msg.content.endsWith("?")) {
                const args = msg.content
                  .substring(0, msg.content.length - 1)
                  .split(" ");
                const searchWord = msg.content;
                doCustomQuestion(searchWord, args);
              } else {
                msg.reply(
                  "Oops, I don't know that one. Try **help** to see what I do know, or if you want to ask a custom question, make sure it ends with a question mark **?**"
                );
              }
            }
          }
        }
      } catch (e) {
        console.log(e);
        msg.reply(
          "Unknown error ocurred.  Try **help** to see what I do know, or if you want to ask a custom question, make sure it ends with a question mark **?**"
        );
      }
    }
  }

  function showAllAliases(isDM) {
    let rawdata = fs.readFileSync("categories/aliases.json");
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
      .setColor("#0099ff")
      .setTitle("Known aliases")
      .setURL("https://github.com/thales-markets/community-bots");
    exampleEmbed.setDescription("Hello, here are the aliases I know:");

    let counter = 0;
    let pagenumber = 2;
    for (let [questionNumber, questions] of questionMap) {
      let questionsString = "";
      questions.forEach(function (q) {
        questionsString += (isDM ? "" : "!faq ") + q + "\n";
      });
      let answer = qaMaps.get(questionNumber);
      exampleEmbed.addField(
        answer.title + " " + answer.description,
        questionsString
      );

      counter++;
      if (counter == 10) {
        if (isDM) {
          msg.reply(exampleEmbed);
        } else {
          msg.channel
            .send(exampleEmbed)
            .then(function (message) {
              message.react("❌");
            })
            .catch(function () {
              //Something
            });
        }
        exampleEmbed = new Discord.MessageEmbed()
          .setColor("#0099ff")
          .setTitle("Known aliases page " + pagenumber)
          .setURL("https://github.com/thales-markets/community-bots");
        exampleEmbed.setDescription("Hello, here are the aliases I know:");
        pagenumber++;
        counter = 0;
      }
    }

    if (isDM) {
      msg.reply(exampleEmbed);
    } else {
      msg.channel
        .send(exampleEmbed)
        .then(function (message) {
          message.react("❌");
        })
        .catch(function () {
          //Something
        });
    }
  }

  function checkAliasMatching(doReply) {
    let potentialAlias = msg.content.toLowerCase().replace("!faq", "").trim();
    let rawdata = fs.readFileSync("categories/aliases.json");
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
      .setColor("#0099ff")
      .setTitle("Thales Frequently Asked Questions")
      .setURL("https://docs.thales.market/getting-started/faqs");
    exampleEmbed.setDescription("Hello, here is list of commands I know:");
    exampleEmbed.addField("list", "Lists all known questions");
    exampleEmbed.addField(
      "categories",
      "Lists all categories of known questions"
    );
    exampleEmbed.addField(
      "category categoryName",
      "Lists all known questions for a given category name, e.g. ** category *General* **"
    );
    exampleEmbed.addField(
      "question questionNumber",
      "Shows the answer to the question defined by its number, e.g. ** question *7* **"
    );
    exampleEmbed.addField(
      "search searchTerm",
      "Search all known questions by given search term, e.g. ** search *gas price* **"
    );
    exampleEmbed.addField("aliases", "List all known aliases");
    exampleEmbed.addField(
      "\u200b",
      "*Or just ask me a question and I will do my best to find a match for you, e.g. **What order books is Thales using?***"
    );

    msg.reply(exampleEmbed);
  }

  function listQuestions() {
    let exampleEmbed = new Discord.MessageEmbed()
      .setColor("#0099ff")
      .setTitle("Frequently Asked Questions")
      .setURL("https://docs.thales.market/getting-started/faqs");

    let counter = 0;
    let pagenumber = 2;
    qaMaps.forEach((value, key) => {
      exampleEmbed.addField(key, value.description, false);
      counter++;
      if (counter == 20) {
        msg.reply(exampleEmbed);
        exampleEmbed = new Discord.MessageEmbed()
          .setColor("#0099ff")
          .setTitle("Frequently Asked Questions page " + pagenumber)
          .setURL("https://docs.thales.market/getting-started/faqs");
        pagenumber++;
        counter = 0;
      }
    });
    msg.reply(exampleEmbed);
  }

  function listCategories() {
    let rawdata = fs.readFileSync("categories/categories.json");
    let categories = JSON.parse(rawdata);

    const exampleEmbed = new Discord.MessageEmbed()
      .setColor("#0099ff")
      .setTitle("Categories");

    categories.forEach(function (category) {
      exampleEmbed.addField(category.name, category.desc, false);
    });
    exampleEmbed.addField(
      "\u200b",
      "Choose the category with **category categoryName**, e.g. **category General*"
    );
    msg.reply(exampleEmbed);
  }

  function doSearch(searchWord, args) {
    const exampleEmbed = new Discord.MessageEmbed()
      .setColor("#0099ff")
      .setTitle("Questions found for ***" + searchWord + "***:");

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
        res = replaceString(res, searchWord, "**" + searchWord + "**");
        fullMatches.push(
          new Match(file.substring(0, file.lastIndexOf(".")), res)
        );
      } else {
        let matchedCount = 0;
        args.sort(function (a, b) {
          return a.length - b.length;
        });
        args.forEach(function (arg) {
          if (res.toLowerCase().includes(arg.toLowerCase())) {
            res = replaceString(res, arg, "**" + arg + "**");
            res = replaceString(
              res,
              arg.toLowerCase(),
              "**" + arg.toLowerCase() + "**"
            );
            res = replaceString(
              res,
              arg.toUpperCase(),
              "**" + arg.toUpperCase() + "**"
            );
            matchedCount++;
          }
        });
        if (matchedCount > 0) {
          let match = new Match(key, res);
          match.matchedCount = matchedCount;
          partialMatches.push(match);
        }
      }
    });

    if (fullMatches.length == 0 && partialMatches.length == 0) {
      exampleEmbed.setTitle(
        "No questions found for ***" +
          searchWord +
          "***. Please refine your search."
      );
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

      exampleEmbed.addField(
        "\u200b",
        "Choose your question with e.g. **question 1**"
      );
    }
    msg.reply(exampleEmbed);
  }

  function doCustomQuestion(searchWord, args) {
    const exampleEmbed = new Discord.MessageEmbed()
      .setColor("#0099ff")
      .setTitle(
        "Looks like you asked a custom question. This is the best I could find for your query:"
      );

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
        res = replaceString(res, searchWord, "**" + searchWord + "**");
        fullMatches.push(
          new Match(file.substring(0, file.lastIndexOf(".")), res)
        );
      } else {
        let matchedCount = 0;
        args.sort(function (a, b) {
          return a.length - b.length;
        });
        args.forEach(function (arg) {
          if (res.toLowerCase().includes(arg.toLowerCase())) {
            res = replaceString(res, arg, "**" + arg + "**");
            res = replaceString(
              res,
              arg.toLowerCase(),
              "**" + arg.toLowerCase() + "**"
            );
            res = replaceString(
              res,
              arg.toUpperCase(),
              "**" + arg.toUpperCase() + "**"
            );
            matchedCount++;
          }
        });
        if (matchedCount > 0) {
          let match = new Match(key, res);
          match.matchedCount = matchedCount;
          partialMatches.push(match);
        }
      }
    });

    if (fullMatches.length == 0 && partialMatches.length == 0) {
      exampleEmbed.setTitle(
        "No questions found for ***" +
          searchWord +
          "***. Please refine your search."
      );
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

      exampleEmbed.addField(
        "\u200b",
        "Choose your question with e.g. **question 1**"
      );
    }
    msg.reply(exampleEmbed);
  }

  function doQuestion(msg, toSlice, doReply) {
    const args = msg.content.slice(toSlice.length).split(" ");
    args.shift();
    const command = args.shift();
    doInnerQuestion(command, doReply, msg);
  }
});

client.login(process.env.BOT_TOKEN);

function delay(time) {
  return new Promise(function (resolve) {
    setTimeout(resolve, time);
  });
}

clientNewListings.once("ready", () => {
  console.log("initial new operations");
  getThalesNewOperations();
});

setInterval(function () {
  try {
    console.log("starting new operations");
    getThalesNewOperations();
  } catch (e) {
    console.log("problem with new operations" + e);
  }
}, 60 * 4.8 * 1000);

let network = 1;

function sendMarketMessage(market) {
  clientNewListings.guilds.cache.forEach(function (guildValue, key) {
    const category = guildValue.channels.cache.find((channel) =>
      channel.name.toLowerCase().includes("transactions")
    );
    if (category) {
      const channel = category.children.find((channel) =>
        channel.name.toLowerCase().includes("new-markets")
      );
      if (channel) {
        var message = new Discord.MessageEmbed()
          .addFields(
            {
              name: ":lock: New Thales Market created :lock:",
              value: "\u200b",
            },
            {
              name: ":link: URL:",
              value:
                "[" +
                market.address +
                "](https://thalesmarket.io/markets/" +
                market.address +
                ")",
            },
            {
              name: ":coin: Token:",
              value: market.currencyKey,
            },
            {
              name: ":classical_building: Creator:",
              value:
                "[" +
                market.creator +
                "](https://etherscan.io/address/" +
                market.creator +
                ")",
            },
            {
              name: ":dollar: Strike price:",
              value: market.strikePrice,
            },
            {
              name: ":alarm_clock: When:",
              value: new Date(market.maturityDate),
            }
          )
          .setColor("#0037ff");
        channel.send(message);
      }
    }
  });
}

function getNumberLabel(labelValue) {
  // Nine Zeroes for Billions
  return Math.abs(Number(labelValue)) >= 1.0e9
    ? Math.round(Math.abs(Number(labelValue)) / 1.0e9) + "B"
    : // Six Zeroes for Millions
    Math.abs(Number(labelValue)) >= 1.0e6
    ? Math.round(Math.abs(Number(labelValue)) / 1.0e6) + "M"
    : // Three Zeroes for Thousands
    Math.abs(Number(labelValue)) >= 1.0e3
    ? Math.round(Math.abs(Number(labelValue)) / 1.0e3) + "K"
    : Math.round(Math.abs(Number(labelValue)));
}

function getNumberLabelDecimals(labelValue) {

  // Nine Zeroes for Billions
  return Math.abs(Number(labelValue)) >= 1.0e+9

      ? Math.round(Math.abs(Number(labelValue)) / 1.0e+9) + "B"
      // Six Zeroes for Millions
      : Math.abs(Number(labelValue)) >= 1.0e+6

          ? Math.round((Math.abs(Number(labelValue)) / 1.0e+6) * 100) / 100 + "M"
          // Three Zeroes for Thousands
          : Math.abs(Number(labelValue)) >= 1.0e+3

              ? Math.round(Math.abs(Number(labelValue)) / 1.0e+3) + "K"

              : Math.abs(Number(labelValue));

}

async function sendNewTradeMessage(trade, market) {
  try {
    var shortLong;
    await delay(1001);
    const makerToken = new web3.eth.Contract(contract, trade.makerToken);
    const makerTokenName = await makerToken.methods.name().call();
    const takerToken = new web3.eth.Contract(contract, trade.takerToken);
    const takerTokenName = await takerToken.methods.name().call();
    var amountUSD;
    var amountShortLong;
    var isLong = false;
    var isBuy = false;
    if (
      makerTokenName.toLowerCase().includes("long") ||
      makerTokenName.toLowerCase().includes("short")
    ) {
      if (makerTokenName.toLowerCase().includes("long")) {
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
      if (takerTokenName.toLowerCase().includes("long")) {
        shortLong = " > ";
        isLong = true;
      } else {
        shortLong = " < ";
        isLong = false;
      }

      amountUSD = getNumberLabel(trade.makerAmount);
      amountShortLong = getNumberLabel(trade.takerAmount);
      shortLong = takerTokenName.toLowerCase().includes("long") ? " > " : " < ";
    }
    var marketMessage =
      market.currencyKey +
      shortLong +
      Math.round((market.strikePrice + Number.EPSILON) * 1000) / 1000;
    marketMessage =
      marketMessage +
      "@" +
      new Date(market.maturityDate).toISOString().slice(0, 10);

    var message = new Discord.MessageEmbed()
      .addFields(
        {
          name: ":lock: New Thales Trade :lock:",
          value: "\u200b",
        },
        {
          name: ":link: Transaction:",
          value:
            "[" +
            trade.transactionHash +
            "](https://etherscan.io/tx/" +
            trade.transactionHash +
            ")",
        },
        {
          name: ":coin: Transaction type:",
          value: isBuy ? "Buy" : "Sell",
        },
        {
          name: ":classical_building: Market:",
          value:
            "[" +
            marketMessage +
            "](https://thalesmarket.io/markets/" +
            market.address +
            ")",
        },
        {
          name: isLong ? ":dollar: Amount (sLONG)" : ":dollar: Amount (sSHORT)",
          value: amountShortLong,
        },
        {
          name: ":dollar: Total:",
          value: amountUSD + " sUSD",
        },
        {
          name: ":alarm_clock: Timestamp:",
          value: new Date(trade.timestamp),
        }
      )
      .setColor("#0037ff");
    mapThalesTrades.set(trade.transactionHash, message);
    setConcludedTradesPastHour.add(trade.transactionHash);
    if (
      deckardMM.toLowerCase() == trade.maker.toLowerCase() ||
      deckardMM.toLowerCase() == trade.taker.toLowerCase()
    ) {
      console.log("its bobe transaction");
      mapDeckardMM.set(trade.transactionHash, message);
    } else if (
      almaMM.toLowerCase() == trade.maker.toLowerCase() ||
      almaMM.toLowerCase() == trade.taker.toLowerCase()
    ) {
      console.log("its alma transaction");
      mapAlmaMM.set(trade.transactionHash, message);
    } else if (
      sladeMM.toLowerCase() == trade.maker.toLowerCase() ||
      sladeMM.toLowerCase() == trade.taker.toLowerCase()
    ) {
      console.log("its rick transaction");
      mapSladeMM.set(trade.transactionHash, message);
    }
  } catch (e) {
    console.log("Problem while getting new trades" + e);
  }
}

let checkDurationInMinutes = 0;

setInterval(function () {
  try {
    console.log("checking unsent trades");
    checkUnsentTrades();
  } catch (e) {
    console.log("error checking unsent trades" + e);
    checkDurationInMinutes = 60;
  }
}, 60 * 60 * 1000);

async function checkUnsentTrades() {
  const body = JSON.stringify({
    query: `{
      markets(
        orderBy:timestamp,
        orderDirection:desc,
      )
      {
        id
        timestamp
        creator
        currencyKey
        strikePrice
        maturityDate
        expiryDate
        isOpen
        poolSize
        longAddress
        shortAddress
        result
        customMarket
        customOracle
      }
    }`,
    variables: null,
  });

  const response = await fetch(
    "https://api.thegraph.com/subgraphs/name/thales-markets/thales-options",
    {
      method: "POST",
      body,
    }
  );

  const json = await response.json();
  const markets = json.data.markets;
  var startdate = new Date();
  checkDurationInMinutes = checkDurationInMinutes + 60;
  startdate.setMinutes(startdate.getMinutes() - checkDurationInMinutes);
  checkDurationInMinutes = 0;
  let startDateUnixTime = startdate.getTime();
  for (const market of markets) {
    try {
      thalesData.binaryOptions
        .trades({
          network: 1,
          makerToken: market.longAddress,
          takerToken: SYNTH_USD_MAINNET,
        })
        .then((trades) => {
          //send messages
          if (trades.length > 0) {
            for (let trade of trades) {
              if (
                startDateUnixTime < trade.timestamp &&
                !setConcludedTradesPastHour.has(trade.transactionHash)
              ) {
                console.log("new trade message");
                try {
                  sendNewTradeMessage(trade, market);
                } catch (e) {
                  console.log("error checking unsent trades" + e);
                  checkDurationInMinutes = 60;
                }
              }
            }
          }
        });
      thalesData.binaryOptions
        .trades({
          network: network,
          makerToken: SYNTH_USD_MAINNET,
          takerToken: market.longAddress,
        })
        .then((trades) => {
          if (trades.length > 0) {
            for (let trade of trades) {
              if (
                startDateUnixTime < trade.timestamp &&
                !setConcludedTradesPastHour.has(trade.transactionHash)
              ) {
                console.log("new trade message");
                try {
                  sendNewTradeMessage(trade, market);
                } catch (e) {
                  console.log("error checking unsent trades" + e);
                  checkDurationInMinutes = 60;
                }
              }
            }
          }
        });
      thalesData.binaryOptions
        .trades({
          network: network,
          makerToken: market.shortAddress,
          takerToken: SYNTH_USD_MAINNET,
        })
        .then((trades) => {
          if (trades.length > 0) {
            for (let trade of trades) {
              if (
                startDateUnixTime < trade.timestamp &&
                !setConcludedTradesPastHour.has(trade.transactionHash)
              ) {
                console.log("new trade message");
                try {
                  sendNewTradeMessage(trade, market);
                } catch (e) {
                  console.log("error checking unsent trades" + e);
                  checkDurationInMinutes = 60;
                }
              }
            }
          }
        });
      thalesData.binaryOptions
        .trades({
          network: network,
          makerToken: SYNTH_USD_MAINNET,
          takerToken: market.shortAddress,
        })
        .then((trades) => {
          if (trades.length > 0) {
            for (let trade of trades) {
              if (
                startDateUnixTime < trade.timestamp &&
                !setConcludedTradesPastHour.has(trade.transactionHash)
              ) {
                console.log("new trade message");
                try {
                  sendNewTradeMessage(trade, market);
                } catch (e) {
                  console.log("error checking unsent trades" + e);
                  checkDurationInMinutes = 60;
                }
              }
            }
          }
        });
    } catch (e) {
      console.log("error checking unsent trades" + e);
      checkDurationInMinutes = 60;
    }
  }
}

async function getThalesNewOperations() {
  const body = JSON.stringify({
    query: `{
      markets(
        orderBy:timestamp,
        orderDirection:desc,
      )
      {
        id
        timestamp
        creator
        currencyKey
        strikePrice
        maturityDate
        expiryDate
        isOpen
        poolSize
        longAddress
        shortAddress
        result
        customMarket
        customOracle
      }
    }`,
    variables: null,
  });

  const response = await fetch(
    "https://api.thegraph.com/subgraphs/name/thales-markets/thales-options",
    {
      method: "POST",
      body,
    }
  );

  const json = await response.json();
  const markets = json.data.markets;

  var startdate = new Date();
  var durationInMinutes = 5;
  startdate.setMinutes(startdate.getMinutes() - durationInMinutes);
  let startDateUnixTime = startdate.getTime();
  waitAndDo(markets.length);

  function waitAndDo(times) {
    if (times < 1) {
      return;
    }
    setTimeout(function () {
      // console.log("Doing a request market " + times);
      getThalesNewTrades(markets[times - 1], startDateUnixTime);
      waitAndDo(times - 1);
    }, 1000);
  }

  for (const market of markets) {
    if (startDateUnixTime < market.timestamp) {
      console.log("new market");
      sendMarketMessage(market);
    }

    thalesData.binaryOptions
      .trades({
        network: 1,
        makerToken: market.longAddress,
        takerToken: SYNTH_USD_MAINNET,
      })
      .then((trades) => {
        //send messages
        if (trades.length > 0) {
          for (let trade of trades) {
            if (startDateUnixTime < trade.timestamp) {
              console.log("new trade message");
              sendNewTradeMessage(trade, market);
            }
          }
        }
      });
    thalesData.binaryOptions
      .trades({
        network: network,
        makerToken: SYNTH_USD_MAINNET,
        takerToken: market.longAddress,
      })
      .then((trades) => {
        if (trades.length > 0) {
          for (let trade of trades) {
            if (startDateUnixTime < trade.timestamp) {
              console.log("new trade message");
              sendNewTradeMessage(trade, market);
            }
          }
        }
      });
    thalesData.binaryOptions
      .trades({
        network: network,
        makerToken: market.shortAddress,
        takerToken: SYNTH_USD_MAINNET,
      })
      .then((trades) => {
        if (trades.length > 0) {
          for (let trade of trades) {
            if (startDateUnixTime < trade.timestamp) {
              console.log("new trade message");
              sendNewTradeMessage(trade, market);
            }
          }
        }
      });
    thalesData.binaryOptions
      .trades({
        network: network,
        makerToken: SYNTH_USD_MAINNET,
        takerToken: market.shortAddress,
      })
      .then((trades) => {
        if (trades.length > 0) {
          for (let trade of trades) {
            if (startDateUnixTime < trade.timestamp) {
              console.log("new trade message");
              sendNewTradeMessage(trade, market);
            }
          }
        }
      });
  }
}

setInterval(function () {
  try {
    if (
      mapThalesTrades.size > 0 ||
      mapThalesBids.size > 0 ||
      mapThalesAsks.size > 0 ||
      mapSladeMM.size > 0 ||
      mapDeckardMM.size > 0 ||
      mapAlmaMM.size > 0 ||
      nonMMOrdersMap.size > 0
    ) {
      clientNewListings.guilds.cache.forEach(function (guildValue, key) {
        const category = guildValue.channels.cache.find((channel) =>
          channel.name.toLowerCase().includes("transactions")
        );
        if (category) {
          const channelTrades = category.children.find((channel) =>
            channel.name.toLowerCase().includes("trades")
          );
          const channelBuys = category.children.find((channel) =>
            channel.name.toLowerCase().includes("new-buy-orders")
          );
          const channelSells = category.children.find((channel) =>
            channel.name.toLowerCase().includes("new-sell-orders")
          );
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
          clientNewListings.channels
            .fetch("906873236208369674")
            .then((bobChannel) => {
              for (const message of mapSladeMM.values()) {
                bobChannel.send(message);
              }
              mapSladeMM = new Map();
            });
          clientNewListings.channels
            .fetch("906873110366650369")
            .then((almaChannel) => {
              for (const message of mapAlmaMM.values()) {
                almaChannel.send(message);
              }
              mapAlmaMM = new Map();
            });
          clientNewListings.channels
            .fetch("906873194697334784")
            .then((rickChannel) => {
              for (const message of mapDeckardMM.values()) {
                rickChannel.send(message);
              }
              mapDeckardMM = new Map();
            });
          clientNewListings.channels
            .fetch("906873072496300033")
            .then((nonMMchannel) => {
              for (const message of nonMMOrdersMap.values()) {
                nonMMchannel.send(message);
              }
              nonMMOrdersMap = new Map();
            });
        }
      });
      mapThalesTrades = new Map();
      mapThalesBids = new Map();
      mapThalesAsks = new Map();
    }
  } catch (e) {
    console.log("sending messages error " + e);
  }
}, 60 * 6 * 1000);

async function getThalesNewTrades(market, startDateUnixTime) {
  try {
    let baseUrl = "https://api.0x.org/sra/v4/";
    // console.log("calling " + market.longAddress);
    var response = await axios.get(
      baseUrl +
        `orderbook?baseToken=` +
        market.longAddress +
        "&quoteToken=" +
        "0x57Ab1ec28D129707052df4dF418D58a2D46d5f51"
    );
    if (response.data) {
      //check bids
      for (const bid of response.data.bids.records) {
        if (startDateUnixTime < new Date(bid.metaData.createdAt).getTime()) {
          console.log("web 3 " + web3);
          console.log("infura " + process.env.INFURA_URL);
          const takerToken = new web3.eth.Contract(
            contract,
            bid.order.takerToken
          );
          const takerTokenName = await takerToken.methods.name().call();
          // console.log("token name is " + takerTokenName);
          var shortLong = takerTokenName.toLowerCase().includes("long")
            ? " > "
            : " < ";
          let marketMessage =
            market.currencyKey +
            shortLong +
            Math.round((market.strikePrice + Number.EPSILON) * 1000) / 1000;
          var message = new Discord.MessageEmbed()
            .addFields(
              {
                name: ":lock: New Thales Buy order :lock:",
                value: "\u200b",
              },
              {
                name: ":classical_building: Market:",
                value:
                  "[" +
                  marketMessage +
                  "](https://thalesmarket.io/markets/" +
                  market.address +
                  ")",
              },
              {
                name: ":dollar: Amount :",
                value:
                  "$" +
                  Math.round(
                    (bid.order.makerAmount / 1e18 + Number.EPSILON) * 1000
                  ) /
                    1000,
              },
              {
                name: ":dollar: Price:",
                value:
                  parseFloat(
                    bid.order.makerAmount / bid.order.takerAmount
                  ).toFixed(3) + " sUSD",
              },
              {
                name: ":dollar: Amount of options:",
                value:
                  Math.round(
                    (bid.order.takerAmount / 1e18 + Number.EPSILON) * 1000
                  ) / 1000,
              },
              {
                name: ":link: Order taker:",
                value: bid.order.taker,
              },
              {
                name: ":link: Order maker:",
                value: bid.order.maker,
              },
              {
                name: ":alarm_clock: Created at:",
                value: new Date(bid.metaData.createdAt)
                  .toISOString()
                  .replace(/T/, " ")
                  .replace(/\..+/, ""),
              },
              {
                name: ":alarm_clock: Expiries:",
                value: new Date(bid.order.expiry * 1000)
                  .toISOString()
                  .replace(/T/, " ")
                  .replace(/\..+/, ""),
              }
            )
            .setColor("#0037ff");
          mapThalesBids.set(bid.metaData.orderHash, message);
          if (
            deckardMM.toLowerCase() == bid.order.taker.toLowerCase() ||
            deckardMM.toLowerCase() == bid.order.maker.toLowerCase()
          ) {
            mapSladeMM.set(bid.metaData.orderHash, message);
          } else if (
            almaMM.toLowerCase() == bid.order.taker.toLowerCase() ||
            almaMM.toLowerCase() == bid.order.maker.toLowerCase()
          ) {
            mapAlmaMM.set(bid.metaData.orderHash, message);
          } else if (
            sladeMM.toLowerCase() == bid.order.taker.toLowerCase() ||
            sladeMM.toLowerCase() == bid.order.maker.toLowerCase()
          ) {
            mapDeckardMM.set(bid.metaData.orderHash, message);
          }
          if (
            !nonMMordersList.includes(bid.order.taker.toLowerCase()) &&
            !nonMMordersList.includes(bid.order.maker.toLowerCase())
          ) {
            nonMMOrdersMap.set(bid.metaData.orderHash, message);
          }
        }
      }
      //check asks
      for (const ask of response.data.asks.records) {
        if (startDateUnixTime < new Date(ask.metaData.createdAt).getTime()) {
          //check and send messages here
          // console.log("web 3 " + web3);
          // console.log("infura " + process.env.INFURA_URL);
          await delay(1001);
          const makerToken = new web3.eth.Contract(
            contract,
            ask.order.makerToken
          );
          const makerTokenName = await makerToken.methods.name().call();
          console.log("m token name is " + makerTokenName);
          var shortLong = makerTokenName.toLowerCase().includes("long")
            ? " > "
            : " < ";
          let marketMessage =
            market.currencyKey +
            shortLong +
            Math.round((market.strikePrice + Number.EPSILON) * 1000) / 1000;
          var message = new Discord.MessageEmbed()
            .addFields(
              {
                name: ":lock: New Thales Sell order :lock:",
                value: "\u200b",
              },
              {
                name: ":classical_building: Market:",
                value:
                  "[" +
                  marketMessage +
                  "](https://thalesmarket.io/markets/" +
                  market.address +
                  ")",
              },
              {
                name: ":dollar: Amount :",
                value:
                  "$" +
                  Math.round(
                    (ask.order.takerAmount / 1e18 + Number.EPSILON) * 1000
                  ) /
                    1000,
              },
              {
                name: ":dollar: Price:",
                value:
                  parseFloat(
                    ask.order.takerAmount / ask.order.makerAmount
                  ).toFixed(3) + " sUSD",
              },
              {
                name: ":dollar: Amount of options:",
                value:
                  Math.round(
                    (ask.order.makerAmount / 1e18 + Number.EPSILON) * 1000
                  ) / 1000,
              },
              {
                name: ":dollar: Return if win:",
                value:
                  (
                    ((ask.order.makerAmount - ask.order.takerAmount) /
                      ask.order.takerAmount) *
                    100
                  ).toFixed(2) + "%",
              },
              {
                name: ":link: Order taker:",
                value: ask.order.taker,
              },
              {
                name: ":link: Order maker:",
                value: ask.order.maker,
              },
              {
                name: ":alarm_clock: Created at:",
                value: new Date(ask.metaData.createdAt)
                  .toISOString()
                  .replace(/T/, " ")
                  .replace(/\..+/, ""),
              },
              {
                name: ":alarm_clock: Expiries:",
                value: new Date(ask.order.expiry * 1000)
                  .toISOString()
                  .replace(/T/, " ")
                  .replace(/\..+/, ""),
              }
            )
            .setColor("#0037ff");
          mapThalesAsks.set(ask.metaData.orderHash, message);
          if (
            deckardMM.toLowerCase() == ask.order.taker.toLowerCase() ||
            deckardMM.toLowerCase() == ask.order.maker.toLowerCase()
          ) {
            mapSladeMM.set(ask.metaData.orderHash, message);
          } else if (
            almaMM.toLowerCase() == ask.order.taker.toLowerCase() ||
            almaMM.toLowerCase() == ask.order.maker.toLowerCase()
          ) {
            mapAlmaMM.set(ask.metaData.orderHash, message);
          } else if (
            sladeMM.toLowerCase() == ask.order.taker.toLowerCase() ||
            sladeMM.toLowerCase() == ask.order.maker.toLowerCase()
          ) {
            mapDeckardMM.set(ask.metaData.orderHash, message);
          }
          if (
            !nonMMordersList.includes(ask.order.taker.toLowerCase()) &&
            !nonMMordersList.includes(ask.order.maker.toLowerCase())
          ) {
            nonMMOrdersMap.set(ask.metaData.orderHash, message);
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
    var response = await axios.get("https://ethburned.info/api/v1/burned");
    clientETHBurned.guilds.cache.forEach(function (value, key) {
      try {
        value.members.cache
          .get(clientETHBurned.user.id)
          .setNickname(getNumberLabelDecimals(response.data.total) + " ETH burned");
      } catch (e) {
        console.log(e);
      }
    });
    clientETHBurned.user.setActivity(
      getNumberLabel(response.data.totalUSD) + "$",
      { type: "WATCHING" }
    );
  } catch (e) {
    console.log("error in eth burned", e);
  }
}

setInterval(function () {
  try {
    console.log("starting new mints");
    getMintData();
  } catch (e) {
    console.log("starting new mints" + e);
  }
}, 60 * 4.8 * 1000);

clientCountdownChannel.once("ready", () => {
    try {
        console.log("starting update countdown");
        updateCountdownChannel();
    } catch (e) {
        console.log("starting countdown" + e);
    }
});

setInterval(function () {
  try {
    console.log("starting update countdown");
    updateCountdownChannel();
  } catch (e) {
    console.log("starting countdown" + e);
  }
}, 60 * 6 * 1000);

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
    method: "POST",
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
    const body = JSON.stringify({
      query: `{
      markets(
        orderBy:timestamp,
        orderDirection:desc,
      )
      {
        id
        timestamp
        creator
        currencyKey
        strikePrice
        maturityDate
        expiryDate
        isOpen
        poolSize
        longAddress
        shortAddress
        result
        customMarket
        customOracle
      }
    }`,
      variables: null,
    });

    const response = await fetch(
      "https://api.thegraph.com/subgraphs/name/thales-markets/thales-options",
      {
        method: "POST",
        body,
      }
    );

    const json = await response.json();
    markets = json.data.markets;
  }

  if (mapMint.size > 0) {
    clientNewListings.guilds.cache.forEach(function (guildValue, key) {
      const category = guildValue.channels.cache.find((channel) =>
        channel.name.toLowerCase().includes("transactions")
      );
      if (category) {
        const channelMint = category.children.find((channel) =>
          channel.name.toLowerCase().includes("mints")
        );
        if (channelMint) {
          for (const mint of mapMint.values()) {
            for (const market of markets) {
              if (market.address == mint.market) {
                wantedMarket = market;
                break;
              }
            }
            var marketMessage =
              wantedMarket.currencyKey +
              " > " +
              Math.round((wantedMarket.strikePrice + Number.EPSILON) * 1000) /
                1000;
            marketMessage =
              marketMessage +
              "@" +
              new Date(wantedMarket.maturityDate).toISOString().slice(0, 10);

            var message = new Discord.MessageEmbed()
              .addFields(
                {
                  name: ":lock: New Thales Mint :lock:",
                  value: "\u200b",
                },
                {
                  name: ":classical_building: Market:",
                  value:
                    "[" +
                    marketMessage +
                    "](https://thalesmarket.io/markets/" +
                    mint.market +
                    ")",
                },
                {
                  name: ":link: Account:",
                  value:
                    "[" +
                    mint.account +
                    "]" +
                    "(https://etherscan.io/address/" +
                    mint.account +
                    ")",
                },
                {
                  name: ":dollar: Amount :",
                  value: "$" + getNumberLabel(mint.amount / 1e18),
                },
                {
                  name: ":alarm_clock: Timestamp:",
                  value: new Date(mint.timestamp * 1000)
                    .toISOString()
                    .replace(/T/, " ")
                    .replace(/\..+/, ""),
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

const redis = require("redis");
let redisClient = null;
let L2tradesKey = "L2Trades";
let totalAmountOfTradesL2 = 5929;
let numberOfTradesL2 = 35;
let writenL2Trades = [];
let verifiedUsersMap = new Map();
if (process.env.REDIS_URL) {
  redisClient = redis.createClient(process.env.REDIS_URL);
  redisClient.on("error", function (error) {
    console.error(error);
  });

  /*redisClient.get("verifiedUsersMap", function (err, obj) {
    let verifiedUsersMapRaw = obj;
    if (verifiedUsersMapRaw) {
      verifiedUsersMap = new Map(JSON.parse(verifiedUsersMapRaw));
    }
  });*/

  redisClient.get("totalAmountL2", function (err, obj) {
    if(obj){
      console.log("setting object "+obj);
      totalAmountOfTradesL2 = Number(obj);
    }
  });
  redisClient.get("totalTradesL2", function (err, obj) {
    if(obj){
      console.log("setting object "+obj);
      numberOfTradesL2 = Number(obj);
    }
  });

    redisClient.lrange(L2tradesKey, 0, -1, function (err, l2Trades) {
      writenL2Trades = l2Trades;
    });

}

var express = require("express");
var app = express();
app.listen(process.env.PORT || 3001, () => {
  console.log("Server running on port " + (process.env.PORT || 3001));
});

app.get("/verified", function (req, res) {
  /*res.send(Object.fromEntries(verifiedUsersMap));*/
});

var ENS = require("ethereum-ens");
var ens = new ENS(new Web3.providers.HttpProvider(process.env.INFURA_URL));

let allowedChannel = "915979901373395045";
client.on("message", async (msg) => {
  let discordUser = "<@!" + msg.author.id + ">";
  try {
    if (!msg.author.username.toLowerCase().includes("counselor")) {
      if (!(msg.channel.type == "dm")) {
        if (msg.content.toLowerCase().startsWith("!verify")) {
          if (allowedChannel.includes(msg.channel.id)) {
            let createdTimestamp = msg.author.createdTimestamp;
            let createdDaysAgo = Date.now() - createdTimestamp;
            createdDaysAgo = createdDaysAgo / 1000 / 60 / 60 / 24;
            createdDaysAgo =
              Math.round((createdDaysAgo + Number.EPSILON) * 100) / 100;
            if (createdDaysAgo < 7) {
              msg.channel.send(discordUser+" Account not at least 7 days old!");
              return;
            }

            let address = msg.content.toLowerCase().substring(7).trim();

            /*if (verifiedUsersMap.has(address)) {
              msg.channel.send(discordUser+" Address already used for verification");
              return;
            }*/

            let found = false;
            let foundKey = "";
            /*verifiedUsersMap.forEach(function (value, key) {
              if (value.id == msg.author.id) {
                found = true;
                foundKey = key;
              }
            });
            if (found) {
              verifiedUsersMap.delete(foundKey);
            }*/

            if (!address.startsWith("0x") || address.length != 42) {
              address = await ens.resolver(address).addr();
              if (!address.startsWith("0x") || address.length != 42) {
                msg.channel.send(discordUser+" Invalid address!");
                return;
              }
            }
            let verifiedObject = {};
            verifiedObject.id = msg.author.id;
            verifiedObject.name = msg.author.username;
            verifiedObject.avatar = msg.author.avatarURL();
            /*verifiedUsersMap.set(address, verifiedObject);*/
            if (process.env.REDIS_URL) {
             /* redisClient.set(
                "verifiedUsersMap",
                JSON.stringify([...verifiedUsersMap]),
                function () {}
              );*/
            }

            if (found) {
              msg.channel.send(discordUser + " updated your address!");
            } else {
              msg.channel.send(
                discordUser + " verified. May the odds be with you!"
              );
            }
          } else {
            msg.channel.send(discordUser+" Signup ended!");
          }
        }
      }
    }
  } catch (e) {
    console.log(e);
    msg.channel.send(discordUser+" Unknown error, ping the botmaster to look into it!");
  }
});

function pollVerifiedUsers() {
  console.log("Started polling verified users");
  let vi = 0;
  client.guilds.cache.forEach(function (value, key) {
    let roleToAssign = null;
    value.roles.fetch("912740968929841152").then((r) => {
      roleToAssign = r;
    });
    try {
      if (value.name.toLowerCase().includes("thales")) {
        /*verifiedUsersMap.forEach(function (memberObject, keyMap) {
          try {
            vi = vi + 1;

            value.members
              .fetch(memberObject.id)
              .then((m) => {
                if (!m.roles.cache.some((role) => role.id == roleToAssign.id)) {
                  m.roles
                    .add(roleToAssign)
                    .then(console.log("role added"))
                    .catch((e) => console.error("error on adding role " + e));
                } else {
                }
                memberObject.name = m.user.username;
                memberObject.avatar = m.user.avatarURL();
                /!*verifiedUsersMap.set(key, memberObject);*!/
                if (process.env.REDIS_URL) {
                  /!*redisClient.set(
                    "verifiedUsersMap",
                    JSON.stringify([...verifiedUsersMap]),
                    function () {}
                  );*!/
                }
              })
              .catch((e) => {
                console.log(
                  "Removing user from verification list as he was banned " +
                    memberObject.id
                );
                verifiedUsersMap.delete(keyMap);
                if (process.env.REDIS_URL) {
                  /!*redisClient.set(
                    "verifiedUsersMap",
                    JSON.stringify([...verifiedUsersMap]),
                    function () {}
                  );*!/
                }
              });
          } catch (e) {
            console.log(e);
          }
        });*/
      }
    } catch (e) {
      console.log(e);
    }
  });
}
setTimeout(function () {
  pollVerifiedUsers();
}, 1000 * 30 * 1);

setInterval(function () {
  pollVerifiedUsers();
}, 1000 * 60 * 20);

let currentChannelName;
let currentWantedTime;
let currentGoalName;

clientCountdownChannel.on("message", (msg) => {
  if (msg.content.toLowerCase().startsWith("!countdown")) {
    const args = msg.content.slice(`!countdown`.length).trim().split(" ");
    const dateTime = args.shift();
    var channelName = "";
    while (args.length > 0) {
      channelName = channelName + args.shift() + " ";
    }
    console.log(channelName);

    var wantedDate = new Date(dateTime);
    currentWantedTime = wantedDate;
    var today = new Date();
    var difference = wantedDate.getTime() - today.getTime();
    var seconds = Math.floor(difference / 1000);
    var minutes = Math.floor(seconds / 60);
    var hours = Math.floor(minutes / 60);
    var days = Math.floor(hours / 24);
    hours %= 24;
    minutes %= 60;
    seconds %= 60;
    var channelMessage;
    if (days < 1) {
      channelMessage = channelName + hours + "H:" + minutes + "M";
    } else {
      channelMessage = channelName + days + "D:" + hours + "H:" + minutes + "M";
    }
    currentChannelName = channelName;
    redisClient.set("currentChannelName", channelName, function (err, reply) {
      console.log(reply); // OK
    });
    redisClient.set("currentWantedTime", wantedDate, function (err, reply) {
      console.log(reply); // OK
    });
    console.log(days + "D:" + hours + "H:" + minutes + "M");
    try {
      clientCountdownChannel.channels
        .fetch("907012352623403018")
        .then((channel) => {
          channel.setName(channelMessage).catch(console.error);
        });
    } catch (e) {
      console.log("error while fetching channel with  id 907012352623403018");
    }
  } else if (msg.content.toLowerCase().startsWith("!goalname")) {
    const args = msg.content.slice(`!goalname`.length).trim().split(" ");
    var goalname = "";
    while (args.length > 0) {
      goalname = goalname + args.shift() + " ";
    }
    currentGoalName = goalname;
    redisClient.set("currentGoalName", goalname, function (err, reply) {
      console.log(reply); // OK
    });
    console.log(currentGoalName);
  }
});

async function updateCountdownChannel() {
  await redisClient.get("currentGoalName", function (err, obj) {
    console.log("1redis " + obj);
    currentGoalName = obj;
  });
  await redisClient.get("currentChannelName", function (err, obj) {
    console.log("2redis " + obj);
    currentChannelName = obj;
  });
  await redisClient.get("currentWantedTime", function (err, obj) {
    console.log("3redis " + obj);
    currentWantedTime = new Date(obj);
  });

  if (currentChannelName && currentWantedTime) {
    console.log("channel name found and time")
    var today = new Date();
    var difference = currentWantedTime.getTime() - today.getTime();
    var seconds = Math.floor(difference / 1000);
    var minutes = Math.floor(seconds / 60);
    var hours = Math.floor(minutes / 60);
    var days = Math.floor(hours / 24);
    hours %= 24;
    minutes %= 60;
    seconds %= 60;
    var channelMessage;
    if (currentWantedTime.getTime() < today.getTime()) {
      console.log("goal is reached");
      if (currentGoalName) {
        channelMessage = currentGoalName;
      } else {
        channelMessage = "goal reached";
      }
    } else {
      if (days < 1) {
        channelMessage = currentChannelName + hours + "H:" + minutes + "M";
      } else {
        channelMessage =
          currentChannelName + days + "D:" + hours + "H:" + minutes + "M";
      }
    }

    await redisClient.set(
      "currentChannelName",
      currentChannelName,
      function (err, reply) {
        console.log(reply); // OK
      }
    );
    await redisClient.set(
      "currentWantedTime",
      currentWantedTime,
      function (err, reply) {
        console.log(reply); // OK
      }
    );

    console.log(days + "D:" + hours + "H:" + minutes + "M");
    try {
      clientCountdownChannel.channels
        .fetch("907012352623403018")
        .then((channel) => {
          channel.setName(channelMessage).catch(console.error);
        });
    } catch (e) {
      console.log("error while fetching channel with  id 907012352623403018");
    }
  }
}

let ammTradeAddress="0x5ae7454827d83526261f3871c1029792644ef1b1";


async function  getMarketL2(tradeL2) {

  const body = JSON.stringify({
    query: `{markets(where:{
    id: "${tradeL2.market}"
  }) {
    id
    timestamp
    creator
    currencyKey
    maturityDate
    strikePrice
  }}`,
    variables: null,
  });

  const response = await fetch(
      "https://api.thegraph.com/subgraphs/name/thales-markets/thales-optimism",
      {
        method: "POST",
        body,
      }
  );

  const json = await response.json();
  const markets = json.data.markets;

  return markets[0];
}

let l2ReleaseDate = 1640181600000;

async function getL2Trades() {

  const body = JSON.stringify({
    query: `{
      trades(
        orderBy:timestamp,
        orderDirection:desc,
      ) {
    id
    timestamp
    transactionHash
    orderHash
    maker
    taker
    makerToken
    takerToken
    makerAmount
    takerAmount
    market
    optionSide
    orderSide
  }
}`,
    variables: null,
  });

  const response = await fetch(
      "https://api.thegraph.com/subgraphs/name/thales-markets/thales-optimism",
      {
        method: "POST",
        body,
      }
  );

  const json = await response.json();
  const tradesL2 = json.data.trades;

  var startdate = new Date();
  var durationInMinutes = 30;
  startdate.setMinutes(startdate.getMinutes() - durationInMinutes);
  let startDateUnixTime = Math.floor(startdate.getTime()/1000);
  for (const tradeL2 of tradesL2) {
    if (startDateUnixTime < Number(tradeL2.timestamp) && !writenL2Trades.includes(tradeL2.transactionHash)) {
      try{
        console.log("new trade l2");
        var shortLong;
        const makerToken = new web3L2.eth.Contract(contract, tradeL2.makerToken);
        const makerTokenName = await makerToken.methods.name().call();
        const takerToken = new web3L2.eth.Contract(contract, tradeL2.takerToken);
        const takerTokenName = await takerToken.methods.name().call();
        var amountUSD;
        var amountShortLong;
        var isLong = false;
        var isBuy = false;
        if (
            makerTokenName.toLowerCase().includes("long") ||
            makerTokenName.toLowerCase().includes("short")
        ) {
          if (makerTokenName.toLowerCase().includes("long")) {
            shortLong = " > ";
            isLong = true;
          } else {
            shortLong = " < ";
            isLong = false;
          }
          amountShortLong = tradeL2.makerAmount/1e18;
          amountUSD = tradeL2.takerAmount / 1e18;
          isBuy = true;
        } else {
          if (takerTokenName.toLowerCase().includes("long")) {
            shortLong = " > ";
            isLong = true;
          } else {
            shortLong = " < ";
            isLong = false;
          }

          amountUSD =tradeL2.makerAmount / 1e18;
          amountShortLong = tradeL2.takerAmount / 1e18;
          shortLong = takerTokenName.toLowerCase().includes("long") ? " > " : " < ";
        }

        let market = await  getMarketL2(tradeL2);

        var marketMessage =
            web3.utils.hexToAscii(market.currencyKey).replace(/\0/g, '') +
            shortLong +
            Math.round(((market.strikePrice/1e18) + Number.EPSILON) * 1000) / 1000;
        marketMessage =
            marketMessage +
            "@" +
            new Date(market.maturityDate*1000).toISOString().slice(0, 10);

        let isAmmTrade = false;
        let messageTitle;
        if (
            ammTradeAddress == tradeL2.maker.toLowerCase() ||
            ammTradeAddress.toLowerCase() == tradeL2.taker.toLowerCase()
        ) {
          isAmmTrade = true;
          messageTitle = ":lock: New Amm Thales Trade :lock:"
        } else{
          messageTitle = ":lock: New Orderbook Thales Trade :lock:"
        }


        var message = new Discord.MessageEmbed()
            .addFields(
                {
                  name: messageTitle,
                  value: "\u200b",
                },
                {
                  name: ":link: Transaction:",
                  value:
                      "[" +
                      tradeL2.transactionHash +
                      "](https://optimistic.etherscan.io/tx/" +
                      tradeL2.transactionHash +
                      ")",
                },
                {
                  name: ":coin: Transaction type:",
                  value: isBuy ? "Buy" : "Sell",
                },
                {
                  name: ":classical_building: Market:",
                  value:
                      "[" +
                      marketMessage +
                      "](https://thalesmarket.io/markets/" +
                      tradeL2.market +
                      ")",
                },
                {
                  name: isLong ? ":dollar: Amount (sLONG)" : ":dollar: Amount (sSHORT)",
                  value: parseFloat((amountShortLong).toFixed(3)),
                },
                {
                  name: ":dollar: Total:",
                  value: parseFloat((amountUSD).toFixed(3)) + " sUSD",
                },
                {
                  name: ":alarm_clock: Timestamp:",
                  value: new Date(tradeL2.timestamp*1000),
                }
            )
            .setColor("#0037ff");
        if (
           isAmmTrade
        ) {
          clientNewListings.channels
              .fetch("922816179276488736")
              .then((ammTradesChannel) => {
                ammTradesChannel.send(message);
              });
        }else {
          clientNewListings.channels
              .fetch("906872836235362306")
              .then((orderBookChannel) => {
                orderBookChannel.send(message);
              });
        }

      writenL2Trades.push(tradeL2.transactionHash);
      redisClient.lpush(L2tradesKey, tradeL2.transactionHash);
      totalAmountOfTradesL2 = totalAmountOfTradesL2 + Math.round(amountUSD);
      numberOfTradesL2++;
      redisClient.set("totalAmountL2", totalAmountOfTradesL2, function (err, reply) {
            console.log(reply); // OK
      });
      redisClient.set("totalTradesL2", numberOfTradesL2, function (err, reply) {
          console.log(reply); // OK
        });
      }catch (e) {
        console.log("error in l2 trades "+e);
      }
    }
  }

}

async function updateTotalL2Trades() {

  try {

    clientTotalL2Trades.guilds.cache.forEach(function (value, key) {
      try {
        console.log("for guild "+value+" value is "+totalAmountOfTradesL2);
        value.members.cache
            .get(clientTotalL2Trades.user.id)
            .setNickname("L2="+getNumberLabelDecimals(totalAmountOfTradesL2)+"$");
      } catch (e) {
        console.log('error while updating amount of trades '+e);
      }
    });
    clientTotalL2Trades.user.setActivity(
        "Trades L2="+numberOfTradesL2,
        { type: "WATCHING" }
    );
  }catch (e) {
    console.log("there was an error while updating total l2");
  }

}

clientTotalL2Trades.once("ready", () => {
  console.log("totalL2 on ready");
  updateTotalL2Trades();
});

setInterval(function () {
  console.log("update l2 trades");
  updateTotalL2Trades();
}, 360 * 1000);


clientThalesL2APR.once("ready", () => {
  console.log("calculate L2 APR");
  calculateThalesL2APR();
});

setInterval(function () {
  console.log("calculate L2 APR");
  calculateThalesL2APR();
}, 360 * 1000);

async function calculateThalesL2APR() {

  const priceL2ThalesURL =
      'https://api.1inch.exchange/v3.0/10/quote?fromTokenAddress=0x217D47011b23BB961eB6D93cA9945B7501a5BB11&toTokenAddress=0x7f5c764cbc14f9669b88837ca1490cca17c31607&amount=1000000000000000000';

  const [res1, res2] = await Promise.all([
    fetch(priceL2ThalesURL),
    fetch('https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd'),
  ]);
  const data1 = await res1.json();
  const data2 = await res2.json();
  const thalesValue = await Number(ethers.utils.formatUnits(data1.toTokenAmount, data1.toToken.decimals)).toFixed(2);
  const ethValue = data2.ethereum.usd;
  let  gelatoContractThales =  new web3L2.eth.Contract(gelatoContract.gelatoContract.abi, "0xac6705BC7f6a35eb194bdB89066049D6f1B0B1b5");
  const balances = await gelatoContractThales.methods.getUnderlyingBalances().call();
  let wethBalance = await web3.utils.fromWei(balances[1],"ether");
  let thalesBalance = await web3.utils.fromWei(balances[0],"ether");
  let wethBalanceNumber = Number(wethBalance).toFixed(2);
  let thalesBalanceNumber = Number(thalesBalance).toFixed(2);

  const totalInUSD = Number(
      (wethBalanceNumber * ethValue + thalesBalanceNumber * thalesValue).toFixed(2)
  );

  const apr = ((100 * (35000 * thalesValue * 52)) / totalInUSD).toFixed(0);
  let formatedAPR = Math.round(apr*100)/100+"%";


  if (formatedAPR) {
    clientThalesL2APR.guilds.cache.forEach(function (value, key) {
      try {
        value.members.cache
            .get(clientThalesL2APR.user.id)
            .setNickname(formatedAPR);
      } catch (e) {
        console.log(e);
      }
    });
  }

  clientThalesL2APR.user.setActivity("APR L2 WETH/THALES", {
    type: "WATCHING",
  });
};
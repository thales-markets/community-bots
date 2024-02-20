require("dotenv").config();
const Discord = require("discord.js");
const clientCountdown = new Discord.Client();
clientCountdown.login(process.env.BOT_TOKEN_COUNTDOWN);
const BASE_APY_INF = process.env.BASE_APY_INF;
const clientGameCountdown = new Discord.Client();
clientGameCountdown.login(process.env.BOT_TOKEN_GAME_COUNTDOWN);
const clientThalesL2APR = new Discord.Client();
clientThalesL2APR.login(process.env.BOT_TOKEN_THALES_L2_APR);
const clientARBAPR = new Discord.Client();
clientARBAPR.login(process.env.BOT_TOKEN_ARB_APR);
const clientThalesOPCountdown = new Discord.Client();
clientThalesOPCountdown.login(process.env.BOT_TOKEN_OPTHALES_COUNTDOWN);
const clientRoyaleMainnetCountdown = new Discord.Client();
clientRoyaleMainnetCountdown.login(process.env.BOT_TOKEN_TROYALEM_COUNTDOWN);
const clientRoyalePingingBot = new Discord.Client();
clientRoyalePingingBot.login(process.env.BOT_TOKEN_ROYALE_PING);
const clientMATICBot = new Discord.Client();
clientMATICBot.login(process.env.BOT_TOKEN_MATIC);
const clientKWENTABot = new Discord.Client();
clientKWENTABot.login(process.env.BOT_TOKEN_KWENTA);
const clientARBPriceBot = new Discord.Client();
clientARBPriceBot.login(process.env.BOT_TOKEN_ARB_PRICE);
const clientGMXBot = new Discord.Client();
clientGMXBot.login(process.env.BOT_TOKEN_GMX);
const clientILVBot = new Discord.Client();
clientILVBot.login(process.env.BOT_TOKEN_ILV);
const clientThalesBot = new Discord.Client();
const clientMagicBot = new Discord.Client();
clientMagicBot.login(process.env.BOT_TOKEN_MAGIC);
clientThalesBot.login(process.env.BOT_TOKEN_THLS_PRICE);
const clientETHPriceBot = new Discord.Client();
clientETHPriceBot.login(process.env.BOT_TOKEN_ETH_PRICE);
const clientLiqOPOT = new Discord.Client();
clientLiqOPOT.login(process.env.BOT_TOKEN_LQ_OP_OT);
const clientLiqOPTHLS = new Discord.Client();
clientLiqOPTHLS.login(process.env.BOT_TOKEN_LQ_OP_THLS);
const clientLiqARBOT = new Discord.Client();
clientLiqARBOT.login(process.env.BOT_TOKEN_LQ_ARB_OT);
const clientLiqARBThales = new Discord.Client();
clientLiqARBThales.login(process.env.BOT_TOKEN_LQ_ARB_THLS);
const clientLiqParlayOP = new Discord.Client();
clientLiqParlayOP.login(process.env.BOT_TOKEN_LQ_PARLAY_OP);
const clientLiqParlayARB = new Discord.Client();
clientLiqParlayARB.login(process.env.BOT_TOKEN_LQ_PARLAY_ARB);
var fs = require("fs");
const { CCIPCollector } = require('./cc.js');
const client = new Discord.Client();
let contentRaw = fs.readFileSync("content.json");
const axios = require("axios");
let answersContent = JSON.parse(contentRaw);
let qaMaps = new Map();
let aprRAW = fs.readFileSync('contracts/apr.json');
let aprContract = JSON.parse(aprRAW);
let contractRaw = fs.readFileSync("contracts/erc20Contract.json");
let polygonRaw = fs.readFileSync('contracts/polygon.json');
const thalesData = require("thales-data");
const SYNTH_USD_MAINNET = "0x57ab1ec28d129707052df4df418d58a2d46d5f51";
const clientNewListings = new Discord.Client();
const clientETHBurned = new Discord.Client();
const clientCountdownChannel = new Discord.Client();
const clientTotalL2Trades = new Discord.Client();
clientTotalL2Trades.login(process.env.BOT_TOKEN_TOTAL_L2);
const clientOvertimeTrades = new Discord.Client();
clientOvertimeTrades.login(process.env.BOT_TOKEN_TOTAL_OT);
const clientBSCTrades = new Discord.Client();
clientBSCTrades.login(process.env.BOT_TOKEN_TOTAL_BSC);
const clientARBTrades = new Discord.Client();
clientARBTrades.login(process.env.BOT_TOKEN_TOTAL_ARB);
clientCountdownChannel.login(process.env.BOT_TOKEN_COUNTDOWN_CHANNEL);
const clientTotalPolygonTrades = new Discord.Client();
clientTotalPolygonTrades.login(process.env.BOT_TOKEN_TOTAL_POLYGON);
const triviaBot = new Discord.Client();
triviaBot.login(process.env.BOT_TOKEN_TRIVIA);
const Web3 = require("web3");
let speedMarketRaw = fs.readFileSync('contracts/speedMarket.json');
let speedMarketContract = JSON.parse(speedMarketRaw);
let speedMarketDataRaw = fs.readFileSync('contracts/speedMarketDataContract.json');
let speedMarketDataContract = JSON.parse(speedMarketDataRaw);
let contract = JSON.parse(contractRaw);
let polygonContract = JSON.parse(polygonRaw);
let burnedRaw = fs.readFileSync('contracts/burned.json');
let contractBurned = JSON.parse(burnedRaw);
const web3Polygon = new Web3(new Web3.providers.HttpProvider("https://polygon-mainnet.infura.io/v3/71f890a2441d49088e4e145b2bc23bc7"));
const web3Arbitrum = new Web3(new Web3.providers.HttpProvider("https://arbitrum-mainnet.infura.io/v3/71f890a2441d49088e4e145b2bc23bc7"));
const web3ZKSYNC = new Web3(new Web3.providers.HttpProvider("https://mainnet.era.zksync.io"));
const web3BSC = new Web3(new Web3.providers.HttpProvider("https://winter-spring-frost.bsc.discover.quiknode.pro/360e06c724df630e0a6aa4417dedfb41142a3184/"));
let bscRaw = fs.readFileSync('contracts/bsc.json');
let bscContract = JSON.parse(bscRaw);
let arbitrumRaw = fs.readFileSync('contracts/arbitrum.json');
let arbitrumContract = JSON.parse(arbitrumRaw);
const web3 = new Web3(new Web3.providers.HttpProvider(process.env.INFURA_URL));
const web3L2 = new Web3(new Web3.providers.HttpProvider(process.env.INFURA_L2_URL));
const web3Base = new Web3(new Web3.providers.HttpProvider("https://mainnet.base.org"));
const CoinGecko = require('coingecko-api');
const CoinGeckoClient = new CoinGecko();
const clientUniswap = new Discord.Client();
clientUniswap.login(process.env.BOT_TOKEN_UNISWAP);
const clientBTC = new Discord.Client();
clientBTC.login(process.env.BOT_TOKEN_BTC);
const clientLink = new Discord.Client();
clientLink.login(process.env.BOT_TOKEN_LINK);
const clientAAVE = new Discord.Client();
clientAAVE.login(process.env.BOT_TOKEN_AAVE);
const clientCURVE = new Discord.Client();
clientCURVE.login(process.env.BOT_TOKEN_CURVE);
const clientSTARGATE = new Discord.Client();
clientSTARGATE.login(process.env.BOT_TOKEN_STARGATE);
const clientLUNA = new Discord.Client();
clientLUNA.login(process.env.BOT_TOKEN_LUNA);
const clientLYRA = new Discord.Client();
clientLYRA.login(process.env.BOT_TOKEN_LYRA);
const clientOP = new Discord.Client();
clientOP.login(process.env.BOT_TOKEN_OP);
const clientOHM = new Discord.Client();
clientOHM.login(process.env.BOT_TOKEN_OHM);
const clientAPE = new Discord.Client();
clientAPE.login(process.env.BOT_TOKEN_APE);
const clientCVX = new Discord.Client();
clientCVX.login(process.env.BOT_TOKEN_CVX);
const clientPERP = new Discord.Client();
clientPERP.login(process.env.BOT_TOKEN_PERP);
const clientTotalBurnedThales = new Discord.Client();
clientTotalBurnedThales.login(process.env.BOT_TOKEN_TOTAL_BURNED_THALES);
const clientOverTimeArbTotal = new Discord.Client();
clientOverTimeArbTotal.login(process.env.BOT_TOKEN_OVERTIME_ARB);

const clientOPSTAKE = new Discord.Client();
clientOPSTAKE.login(process.env.BOT_OP_STAKE);

const clientBASESTAKE = new Discord.Client();
clientBASESTAKE.login(process.env.BOT_BASE_STAKE);

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
let parlayAMMList = new Array();
parlayAMMList.push(
  "0x82b3634c0518507d5d817be6dab6233ebe4d68d9",
  "0x2bb7d689780e7a34dd365359bd7333ab24903268",
  "0x5625c3233b52206a5f23c5fc1ce16f6a7e3874dd"
);
const fetch = require("node-fetch");
const thalesGraphURL =
  "https://api.thegraph.com/subgraphs/name/thales-markets/thales-markets";
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
let  burnedContract =  new web3L2.eth.Contract(contractBurned, "0x217D47011b23BB961eB6D93cA9945B7501a5BB11");
let  deadburnedContract =  new web3.eth.Contract(contractBurned, "0x8947da500eb47f82df21143d0c01a29862a8c3c5");
let  deadARBburnedContract =  new web3Arbitrum.eth.Contract(contractBurned, "0xe85b662fe97e8562f4099d8a1d5a92d4b453bf30");
let  baseburnedContract =  new web3Base.eth.Contract(contractBurned, "0xf34e0cff046e154cafcae502c7541b9e5fd8c249");
const gelatoContract = require("./contracts/GelatoContract.js");
let contractRoyaleRaw = fs.readFileSync('contracts/royale.json');
let contractRoyale = JSON.parse(contractRoyaleRaw);
let royaleContract =  new web3L2.eth.Contract(contractRoyale, "0x3198ab211CdF3E4d13a698E1Fb819507BcA2e579");
let contractARBThalesRaw = fs.readFileSync('contracts/thalesARB.json');
let arbThalesContractRaw = JSON.parse(contractARBThalesRaw);
let arbThalesContract = new web3Arbitrum.eth.Contract(arbThalesContractRaw,"0x160Ca569999601bca06109D42d561D85D6Bb4b57");
let contractECROWRaw = fs.readFileSync('contracts/thalesECROW.json');
let ecrowThalesContractRaw = JSON.parse(contractECROWRaw);
let ecrowThalesContract = new web3Arbitrum.eth.Contract(ecrowThalesContractRaw,"0x391a45F31c1837E3d837c23e05F42A098329D50d");
let opThalesContract = new web3L2.eth.Contract(arbThalesContractRaw,"0xC392133eEa695603B51a5d5de73655d571c2CE51");
let ecrowOPThalesContract = new web3L2.eth.Contract(ecrowThalesContractRaw,"0xa25816b9605009aa446d4d597F0AA46FD828f056");
let baseThalesContract = new web3Base.eth.Contract(arbThalesContractRaw,"0x84aB38e42D8Da33b480762cCa543eEcA6135E040");
let ecrowBASEThalesContract = new web3Base.eth.Contract(ecrowThalesContractRaw,"0x29dfc5fee05578CD913c75fF1C7A0d315595939A");
let speedMarketZKSYNCRaw = fs.readFileSync('contracts/speedMarketZKSYNC.json');
let speedMarketZKSYNCContract = JSON.parse(speedMarketZKSYNCRaw);
let speedMarketZKSYNCDataRaw = fs.readFileSync('contracts/speedMarketZKSYNCDataContract.json');
let speedMarketZKSYNCDataContract = JSON.parse(speedMarketZKSYNCDataRaw);
const speedZKSYNCContract = new web3ZKSYNC.eth.Contract(speedMarketZKSYNCContract, "0x508F31897c25C436b257E37763E157Cb53D0a6fa");
const speedDataMarketZKSYNCContract = new web3ZKSYNC.eth.Contract(speedMarketZKSYNCDataContract, "0x6356454D76642c72edb9170EF1102418D656887d");


let mapSladeMM = new Map();
let mapAlmaMM = new Map();
let mapDeckardMM = new Map();
let mapMint = new Map();
let nonMMOrdersMap = new Map();
let setConcludedTradesPastHour = new Set();
const Twitter = require('twitter-api-v2');
// Instantiate with desired auth type (here's Bearer v2 auth)
const twitterClientOvertimeAMMMarket = new Twitter.TwitterApi(
    {
      appKey: process.env.TWITTER_OVERTIME_AMM_CONSUMER_KEY,
      appSecret: process.env.TWITTER_OVERTIME_AMM_CONSUMER_SECRET,
      accessToken: process.env.TWITTER_OVERTIME_AMM_ACCESS_TOKEN,
      accessSecret: process.env.TWITTER_OVERTIME_AMM_TOKEN_SECRET,
    }
);

const twitterClientAMMMarket = new Twitter.TwitterApi(
    {
      appKey: process.env.TWITTER_AMM_CONSUMER_KEY,
      appSecret: process.env.TWITTER_AMM_CONSUMER_SECRET,
      accessToken: process.env.TWITTER_AMM_ACCESS_TOKEN,
      accessSecret: process.env.TWITTER_AMM_TOKEN_SECRET,
    }
);


answersContent.forEach((a) => {
  qaMaps.set(a.number, a.content);
});


clientTotalBurnedThales.once("ready", () => {
  console.log("updating Burned Thales on ready");
  getBurnedThalesBalance();
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
  //updateThalesOPCountdown();
});

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

/*clientMagicBot.once("ready", () => {
  setPriceBot(clientMagicBot,"magic","Magic");
});*/

clientThalesBot.once("ready", () => {
  setPriceBot(clientThalesBot,"thales","Thales");
});

/*clientThalesBot.once("ready", () => {
  setPriceBot(clientETHPriceBot,"ethereum","ETH");
});*/

clientILVBot.once("ready", () => {
  setPriceBot(clientILVBot,"illuvium","ILV");
});

/*clientBTC.on("ready", () => {
  setPriceBot(clientBTC,"bitcoin","BTC");
});*/

/*clientLink.on("ready", () => {
  setPriceBot(clientLink,"chainlink","LINK");
});*/

/*clientOP.on("ready", () => {
  setPriceBot(clientOP,"optimism","OP");
});*/

/*clientMATICBot.on("ready", () => {
  setPriceBot(clientMATICBot,"matic-network","MATIC");
});*/

clientKWENTABot.once("ready", () => {
  setPriceBot(clientKWENTABot,"kwenta","KWENTA");
});

/*clientARBPriceBot.once("ready", () => {
  setPriceBot(clientARBPriceBot,"arbitrum","ARB");
});*/

/*clientGMXBot.once("ready", () => {
  setPriceBot(clientGMXBot,"gmx","GMX");
});*/




setInterval(function () {
  console.log("updating price bots");
   /* setPriceBot(clientBTC,"bitcoin","BTC");
    setPriceBot(clientThalesBot,"thales","Thales");
    setPriceBot(clientETHPriceBot,"ethereum","ETH");*/
    setPriceBot(clientILVBot,"illuvium","ILV");
   // setPriceBot(clientLink,"chainlink","LINK");
}, 30 * 60 * 1000);

setInterval(function () {
  console.log("updating price 2 bots");

 /* setPriceBot(clientOP,"optimism","OP");
  setPriceBot(clientMATICBot,"matic-network","MATIC");*/
  setPriceBot(clientKWENTABot,"kwenta","KWENTA");
/*  setPriceBot(clientARBPriceBot,"arbitrum","ARB");
  setPriceBot(clientGMXBot,"gmx","GMX");
  setPriceBot(clientMagicBot,"magic","Magic");*/
}, 10 * 60 *  1000);

const setPriceBot = async (clientForSetting,tokenForPrice,nameOfTheToken) => {

  let data = await CoinGeckoClient.coins.fetch(tokenForPrice);
  if(data.data && data.data.market_data){
  clientForSetting.guilds.cache.forEach(function (value, key) {
    try {
      console.log("Updating "+nameOfTheToken+" Price info " + data.data.market_data.current_price.usd);
      if(data.data.market_data.price_change_percentage_24h>0){
        value.members.cache.get(clientForSetting.user.id).setNickname(nameOfTheToken.toUpperCase() +" $"+ data.data.market_data.current_price.usd+"(↗)");
      }else{
        value.members.cache.get(clientForSetting.user.id).setNickname(nameOfTheToken.toUpperCase() +" $"+ data.data.market_data.current_price.usd+"(↘)");
      }
    } catch (e) {
      console.log(e);
    }
  });
    if(data.data.market_data.price_change_percentage_24h>0){
      clientForSetting.user.setActivity("24h:+"+Math.round(data.data.market_data.price_change_percentage_24h * 100) / 100+"%", {type: 'WATCHING'});
    }else{
      clientForSetting.user.setActivity("24h:"+Math.round(data.data.market_data.price_change_percentage_24h * 100) / 100+"%", {type: 'WATCHING'});
    }
  }
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
            .setNickname("Thales Royale Optimism");
      } catch (e) {
        console.log(e);
      }
    });
  }
  let endDateUTC = new Date("May 26, 2022 16:00:00 UTC")
  let currentDate = new Date(new Date().toUTCString());
  let distance;
  if(currentDate.getTime()>endDateUTC.getTime()){
    let currentTimestamp = Math.floor(Date.now() / 1000);
    const roundInASeasonStartTime =  await royaleContract.methods.roundInASeasonStartTime(seasonNumber).call();
    const roundChoosingLength = await royaleContract.methods.roundChoosingLength().call();
    let positioningEnd = Number(roundInASeasonStartTime)+Number(roundChoosingLength);
    if(currentTimestamp<positioningEnd){
      distance = (Number(positioningEnd) - currentTimestamp) * 1000;
    }else{
      const roundLength = await royaleContract.methods.roundLength().call();
      let roundEnd = Number(roundInASeasonStartTime)+Number(roundLength);
      distance = (Number(roundEnd) - currentTimestamp) * 1000;
    }
  }
  else{
    distance = endDateUTC.getTime() - currentDate.getTime();
  }
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  clientRoyaleMainnetCountdown.user.setActivity(days + "D:" + hours + "H:" + minutes + "M", {
    type: "WATCHING",
  });
};


/*const updateThalesOPCountdown = async () => {
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
};*/

setInterval(function () {
  console.log("updateCountdown and eth burned");
  updateCountdown();
  updateThalesRoyaleMainnetCountdown();
  //updateThalesOPCountdown();
  updateGameCountdown();
  getBurnedThalesBalance();
}, 360 * 1000);

setInterval(function () {
  console.log("get L2 trades");
  getL2Trades();
  getBASETrades();
  getPolygonTrades();
  getArbitrumTrades();
  getBSCTrades();
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
});



clientOPSTAKE.once("ready", () => {
  console.log("initial op apr");
  getStakingAPY(clientOPSTAKE);
});


setInterval(function () {
  try {
    console.log("starting new operations");
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

function getNumberLabelDecimalsMil(labelValue) {

  // Nine Zeroes for Billions
  return Math.abs(Number(labelValue)) >= 1.0e+9

      ? Math.round(Math.abs(Number(labelValue)) / 1.0e+9) + "B"
      // Six Zeroes for Millions
      : Math.abs(Number(labelValue)) >= 1.0e+6

          ? Math.round((Math.abs(Number(labelValue)) / 1.0e+6) * 100000) / 100000 + "M"
          // Three Zeroes for Thousands
          : Math.abs(Number(labelValue)) >= 1.0e+3

              ? Math.round(Math.abs(Number(labelValue)) / 1.0e+3) + "K"

              : Math.abs(Number(labelValue));

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
    "https://api.thegraph.com/subgraphs/name/thales-markets/thales-markets",
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
    }, 10000);
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
      "https://api.thegraph.com/subgraphs/name/thales-markets/thales-markets",
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
let L2tradesKey = "L2TradesAMM";
let BASEtradesKey = "BASETradesAMM";
let speedMarketsKey = "speedMarketsKey";
let chainedSpeedMarketsKey = "chainedSpeedMarketsKey";
let speedMaturedMarketsKey = "speedMaturedMarketsKey";
let chainedSpeedMaturedMarketsKey = "chainedSpeedMaturedMarketsNewKey";
let polygonTradesKey = "PolygonTrades";
let arbitrumTradesKey = "ArbitrumTrades";
let bscTradesKey = "BSCTrades";
let exoticMarketsKey = "ExoticMarkets";
let overtimeMarketsKey = "OvertimeMarketsMap";
let overtimeTradesKey = "OvertimeTrades";
let overtimeParlaysKey = "OvertimeParlays";
let exoticMarketPositionsKey = "ExoticMarketPositions";
let exoticMarketDisputesKey = "ExoticMarketDisputes";
let exoticMarketResultSet = "ExoticMarketResultSet";
let totalAmountOfTradesL2 = 4992821;
let totalAmountOvertimeARB= 316925;
let numberOfTradesL2 = 13110;
let totalAmountOfTradesOT = 1403;
let numberOfTradesOT = 245;
let totalAmountOfTradesBSC = 67;
let numberOfTradesBSC = 77;
let totalAmountOfTradesARB = 2377;
let numberOfTradesARB = 130;
let totalAmountOfTradesPolygon = 455;
let numberOfTradesPolygon = 75;
let writenL2Trades = [];
let writenBASETrades = [];
let writenPolygonTrades = [];
let writenArbitrumTrades = [];
let writenBSCTrades = [];
let writenExoticMarkets = [];
let writenOvertimeMarkets = new Map();
let writenOvertimeTrades = [];
let writenOvertimeParlays = [];
let writenExoticDisputes = [];
let writenExoticPositions = [];
let writenExoticMarketResultSet = [];
let writenSpeedMarkets = [];
let writenChainedSpeedMarkets = [];
let writenMaturedMarkets = [];
let writenChainedMaturedMarkets = [];
let verifiedUsersMap = new Map();
let totalAmountOTKey = "totalAmountOTKey";
let totalTradesOTKey = "totalTradesOTKey";
const totalAmountL2Key = "totalAmountL2OPKey";
const totalTradesL2Key = "totalNumberTradesL2Key";
const totalTradesARBKey = "totalTradesARBKey";
const totalAmountARBKey = "totalAmountTradesARBKey";
const totalAmountBSCKey = "totalAmountBSCKey";
const totalTradesBSCKey = "totalTradesBSCKey";
const totalAmountARBOvertimeKey = "totalAmountARBOvertimeKey";

let triviaParticipants = new Array ();
let triviaAdmins = new Array();
let triviaMultichoiceUsers = new Map();
triviaAdmins.push(
    "495254971680423947",
    "330728548908138497",
    "804078003915063296",
    "518430369985331203"
);
let numberEmojis = new Map();
numberEmojis.set( 1, "1️⃣");
numberEmojis.set( 2, "2️⃣");
numberEmojis.set( 3, "3️⃣");
numberEmojis.set( 4, "4️⃣");
numberEmojis.set( 5, "5️⃣");
numberEmojis.set( 6, "6️⃣");
let triviaParticipantsKey = "triviaParticipantsKey";
let triviaKey = "triviaRedisKeyFive";
let triviaMultichoiceUserKey = "triviaMultichoiceUserRedisKeyTwo";
let triviaList = new Array();
let firstToAnswerChannelId = "1072785665491746886";
let multichoiceChannelId = "1072785587511238666";
let currentTriviaAnswer;
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

  redisClient.lrange(triviaParticipantsKey, 0, -1, function (err, triviaParticipantsList) {
    if(triviaParticipantsList && triviaParticipantsList.length>0)
    triviaParticipants = triviaParticipantsList;
  });

  redisClient.lrange(triviaKey, 0, -1, function (err, trivias) {
    for (const trivia of trivias) {
      triviaList.push(JSON.parse(trivia,reviver));
    }
  });

  redisClient.lrange(triviaMultichoiceUserKey, 0, -1, function (err, triviaMultichoice) {
    if(triviaMultichoice && triviaMultichoice.length>0)
      triviaMultichoiceUsers = JSON.parse(triviaMultichoice,reviver);
  });


  redisClient.get("currentTriviaAnswer", function (err, obj) {
    console.log("2redis " + obj);
    if(obj){
      currentTriviaAnswer = JSON.parse(obj);
    }
  });

  redisClient.get(totalAmountL2Key, function (err, obj) {
    if(obj){
      console.log("setting object "+obj);
      totalAmountOfTradesL2 = Number(obj);
    }
  });

  redisClient.get(totalAmountARBOvertimeKey, function (err, obj) {
    if(obj){
      console.log("setting object "+obj);
      totalAmountOvertimeARB = Number(obj);
    }
  });

  redisClient.get(totalAmountOTKey, function (err, obj) {
    if(obj){
      console.log("setting object "+obj);
      totalAmountOfTradesOT = Number(obj);
    }
  });

  redisClient.get(totalTradesOTKey, function (err, obj) {
    if(obj){
      console.log("setting object "+obj);
      numberOfTradesOT = Number(obj);
    }
  });

  redisClient.get(totalAmountBSCKey, function (err, obj) {
    if(obj){
      console.log("setting object "+obj);
      totalAmountOfTradesBSC = Number(obj);
    }
  });

  redisClient.get(totalTradesBSCKey, function (err, obj) {
    if(obj){
      console.log("setting object "+obj);
      numberOfTradesBSC = Number(obj);
    }
  });

  redisClient.get(totalAmountARBKey, function (err, obj) {
    if(obj){
      console.log("setting object "+obj);
      totalAmountOfTradesARB = Number(obj);
    }
  });

  redisClient.get(totalTradesARBKey, function (err, obj) {
    if(obj){
      console.log("setting object "+obj);
      numberOfTradesARB = Number(obj);
    }
  });

  redisClient.get(totalTradesL2Key, function (err, obj) {
    if(obj){
      console.log("setting object "+obj);
      numberOfTradesL2 = Number(obj);
    }
  });
  redisClient.get("totalAmountPolygon", function (err, obj) {
    if(obj){
      console.log("setting object "+obj);
      totalAmountOfTradesPolygon = Number(obj);
    }
  });
  redisClient.get("totalTradesPolygon", function (err, obj) {
    if(obj){
      console.log("setting object "+obj);
      numberOfTradesPolygon = Number(obj);
    }
  });


    redisClient.lrange(L2tradesKey, 0, -1, function (err, l2Trades) {
      writenL2Trades = l2Trades;
    });

    redisClient.lrange(BASEtradesKey, 0, -1, function (err, l2Trades) {
      writenBASETrades = l2Trades;
    });

  redisClient.lrange(speedMarketsKey, 0, -1, function (err, l2Trades) {
    writenSpeedMarkets = l2Trades;
  });

  redisClient.lrange(chainedSpeedMarketsKey, 0, -1, function (err, l2Trades) {
    writenChainedSpeedMarkets = l2Trades;
  });

  redisClient.lrange(speedMaturedMarketsKey, 0, -1, function (err, l2Trades) {
    writenMaturedMarkets = l2Trades;
  });

  redisClient.lrange(chainedSpeedMaturedMarketsKey, 0, -1, function (err, l2Trades) {
    writenChainedMaturedMarkets = l2Trades;
  });

  redisClient.lrange(polygonTradesKey, 0, -1, function (err, polygonTrades) {
    writenPolygonTrades = polygonTrades;
  });

  redisClient.lrange(arbitrumTradesKey, 0, -1, function (err, polygonTrades) {
    writenArbitrumTrades = polygonTrades;
  });

  redisClient.lrange(bscTradesKey, 0, -1, function (err, polygonTrades) {
    writenBSCTrades = polygonTrades;
  });

  redisClient.lrange(exoticMarketsKey, 0, -1, function (err, polygonTrades) {
    writenExoticMarkets = polygonTrades;
  });

  redisClient.get(overtimeMarketsKey, function (err, obj) {
    if (obj) {
      writenOvertimeMarkets = new Map(JSON.parse(obj));
    }
  });

  redisClient.lrange(overtimeTradesKey, 0, -1, function (err, polygonTrades) {
    writenOvertimeTrades = polygonTrades;
  });

  redisClient.lrange(overtimeParlaysKey, 0, -1, function (err, polygonTrades) {
    writenOvertimeParlays = polygonTrades;
  });

  redisClient.lrange(exoticMarketPositionsKey, 0, -1, function (err, polygonTrades) {
    writenExoticPositions = polygonTrades;
  });

  redisClient.lrange(exoticMarketDisputesKey, 0, -1, function (err, polygonTrades) {
    writenExoticDisputes = polygonTrades;
  });

  redisClient.lrange(exoticMarketResultSet, 0, -1, function (err, polygonTrades) {
    writenExoticMarketResultSet = polygonTrades;
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

let ammTradeAddress="0x278B5A44397c9D8E52743fEdec263c4760dc1A1A";

async function  getPolygonMarket(tradeL2) {

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
      "https://api.thegraph.com/subgraphs/name/thales-markets/thales-polygon",
      {
        method: "POST",
        body,
      }
  );

  const json = await response.json();
  const markets = json.data.markets;

  return markets[0];
}


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
      "https://api.thegraph.com/subgraphs/name/thales-markets/thales-markets",
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

function calculateProfitPercentageTotal(paid, total) {
  return  Math.round(100 * Math.abs( ( paid - total ) / ( (paid+total)/2 ) ));
}

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
      "https://api.thegraph.com/subgraphs/name/thales-markets/thales-markets",
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
      writenL2Trades.push(tradeL2.transactionHash);
      redisClient.lpush(L2tradesKey, tradeL2.transactionHash);
      console.log("###### amount for l2 trade is "+amountUSD);
      amountUSD = Math.trunc(amountUSD);
      numberOfTradesL2++;
      redisClient.set(totalTradesL2Key, numberOfTradesL2, function (err, reply) {
          console.log(reply); // OK
        });
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
        var isRanged = false;

        if (
            makerTokenName.toLowerCase().includes("in") ||
            makerTokenName.toLowerCase().includes("out")
        ){
          amountShortLong = tradeL2.makerAmount/1e18;
          amountUSD = tradeL2.takerAmount / 1e18;
          isRanged = true;
        }else if(takerTokenName.toLowerCase().includes("in") ||
            takerTokenName.toLowerCase().includes("out")){
          isRanged = true;
          amountUSD =tradeL2.makerAmount / 1e18;
          amountShortLong = tradeL2.takerAmount / 1e18;
        }else if (
            makerTokenName.toLowerCase().includes("up") ||
            makerTokenName.toLowerCase().includes("down")
        ) {
          if (makerTokenName.toLowerCase().includes("up")) {
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
          if (takerTokenName.toLowerCase().includes("up")) {
            shortLong = " > ";
            isLong = true;
          } else {
            shortLong = " < ";
            isLong = false;
          }

          amountUSD =tradeL2.makerAmount / 1e18;
          amountShortLong = tradeL2.takerAmount / 1e18;
          shortLong = takerTokenName.toLowerCase().includes("up") ? " > " : " < ";
        }

        if(!isRanged){
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
            ammTradeAddress.toLowerCase() == tradeL2.maker.toLowerCase() ||
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
                  name: isLong ? ":dollar: UP tokens" : ":dollar: DOWN tokens",
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

          if(parseFloat((amountUSD).toFixed(3))>1000){
            clientNewListings.channels
                .fetch("1143883712921075742")
                .then((ammTradesChannel) => {
                  ammTradesChannel.send(message);
                });
          }else{
            clientNewListings.channels
                .fetch("922816179276488736")
                .then((ammTradesChannel) => {
                  ammTradesChannel.send(message);
                });
          }


          let newAMMTradeMessage = isBuy ? 'New Optimism AMM position bought\n' : 'New Optimism AMM position sold\n';
          var date = new Date(tradeL2.timestamp*1000);

          newAMMTradeMessage = newAMMTradeMessage + 'Condition: '+marketMessage+'\n';
          let downOrUP;
          if(isLong){
            downOrUP='UP';
          }else{
            downOrUP='DOWN';
          };
          let amountAMM = parseFloat((amountShortLong).toFixed(3));
          let paidAMM = parseFloat((amountUSD).toFixed(3));
          let potentialProfit = (amountAMM-paidAMM)>0.51? Math.round(amountAMM-paidAMM): amountAMM-paidAMM;
          newAMMTradeMessage = newAMMTradeMessage + 'Amount: '+parseFloat((amountShortLong).toFixed(3))+' '+downOrUP+' tokens\n';
          newAMMTradeMessage = newAMMTradeMessage + 'Paid: '+parseFloat((amountUSD).toFixed(3))+' sUSD\n';
          newAMMTradeMessage = newAMMTradeMessage + 'Potential profit: '+potentialProfit+' sUSD ('+calculateProfitPercentageTotal(paidAMM,amountAMM)+'%)\n';
          //let tweetV2PostTweetResult = await twitterClientAMMMarket.v2.tweet(newAMMTradeMessage);

        }else {
          clientNewListings.channels
              .fetch("906872836235362306")
              .then((orderBookChannel) => {
                orderBookChannel.send(message);
              });
        }
      } else {
          let rangedMarket = await  getRangedMarketL2(tradeL2);
          var marketMessage =
              web3.utils.hexToAscii(rangedMarket.currencyKey).replace(/\0/g, '') +
              " "+tradeL2.optionSide.toUpperCase() + " > $"+
              Math.round(((rangedMarket.leftPrice/1e18) + Number.EPSILON) * 1000) / 1000+" < $"+Math.round(((rangedMarket.rightPrice/1e18) + Number.EPSILON) * 1000) / 1000;
          let discordMarketMessage
          discordMarketMessage =
              marketMessage +
              "@" +
              new Date(rangedMarket.maturityDate*1000).toISOString().slice(0, 10);


          var message = new Discord.MessageEmbed()
              .addFields(
                  {
                    name: ":lock: New Ranged Market Thales Trade :lock:",
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
                    value: tradeL2.orderSide.toUpperCase(),
                  },
                  {
                    name: ":classical_building: Market:",
                    value:
                        "[" +
                        discordMarketMessage +
                        "](https://thales-dapp-git-feature-ranged-markets-thales-market.vercel.app/ranged-markets/" +
                        tradeL2.market +
                        ")",
                  },
                  {
                    name: ":dollar: "+tradeL2.optionSide.toUpperCase()+" tokens",
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
          let channel =  await clientNewListings.channels
              .fetch("976063364662956042");
          channel.send(message);

          let newRangeTradeMessage = tradeL2.orderSide.toUpperCase()=="BUY" ? 'New Optimism Ranged Market position bought\n' : 'New Optimism Ranged Market position sold\n';
          var date = new Date(tradeL2.timestamp*1000);

          newRangeTradeMessage = newRangeTradeMessage + 'Condition: '+marketMessage+'\n';
          let amountAMM = parseFloat((amountShortLong).toFixed(3));
          let paidAMM = parseFloat((amountUSD).toFixed(3));
          let potentialProfit = (amountAMM-paidAMM)>0.51? Math.round(amountAMM-paidAMM): amountAMM-paidAMM;
          newRangeTradeMessage = newRangeTradeMessage + 'Maturity date: '+new Date(rangedMarket.maturityDate*1000).toISOString().slice(0, 10)+'\n';
          newRangeTradeMessage = newRangeTradeMessage + 'Amount: '+parseFloat((amountShortLong).toFixed(3))+' '+tradeL2.optionSide.toUpperCase()+' tokens\n';
          newRangeTradeMessage = newRangeTradeMessage + 'Paid: '+parseFloat((amountUSD).toFixed(3))+' sUSD\n';
          newRangeTradeMessage = newRangeTradeMessage + 'Potential profit: '+potentialProfit+' sUSD ('+calculateProfitPercentageTotal(paidAMM,amountAMM)+'%)\n';



          //let tweetV2PostTweetResult = await twitterClientAMMMarket.v2.tweet(newRangeTradeMessage);

        }
      writenL2Trades.push(tradeL2.transactionHash);
      redisClient.lpush(L2tradesKey, tradeL2.transactionHash);
      console.log("###### amount for l2 trade is "+amountUSD);
      amountUSD = Math.trunc(amountUSD);
      numberOfTradesL2++;
      redisClient.set(totalTradesL2Key, numberOfTradesL2, function (err, reply) {
          console.log(reply); // OK
        });
      }catch (e) {
        console.log("error in l2 trades "+e);
      }
    }
  }

}

async function getPolygonTrades() {

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
      "https://api.thegraph.com/subgraphs/name/thales-markets/thales-polygon",
      {
        method: "POST",
        body,
      }
  );

  const json = await response.json();
  const polygonTrades = json.data.trades;

  var startdate = new Date();
  var durationInMinutes = 30;
  startdate.setMinutes(startdate.getMinutes() - durationInMinutes);
  let startDateUnixTime = Math.floor(startdate.getTime()/1000);
  for (const polygonTrade of polygonTrades) {
    if (startDateUnixTime < Number(polygonTrade.timestamp) && !writenPolygonTrades.includes(polygonTrade.transactionHash)) {
      try{
        console.log("new polygon trade");
        var shortLong;
        const makerToken = new web3Polygon.eth.Contract(polygonContract, polygonTrade.makerToken);
        const makerTokenName = await makerToken.methods.name().call();
        const takerToken = new web3Polygon.eth.Contract(polygonContract, polygonTrade.takerToken);
        const takerTokenName = await takerToken.methods.name().call();
        var amountUSD;
        var amountShortLong;
        var isLong = false;
        var isBuy = false;
        var isRanged = false;
        var makerTokenNamesArray = makerTokenName.split(" ");
        const lowerMakerTokenNamesArray = makerTokenNamesArray.map(element => {
          return element.toLowerCase();
        });

        var takerTokenNamesArray = takerTokenName.split(" ");
        const lowerTakerTokenNamesArray = takerTokenNamesArray.map(element => {
          return element.toLowerCase();
        });


        if (
            lowerMakerTokenNamesArray.includes("in") ||
            lowerMakerTokenNamesArray.includes("out")
        ){
          amountShortLong = polygonTrade.makerAmount/1e18;
          amountUSD = polygonTrade.takerAmount / 1e6;
          isRanged = true;
        }else if(lowerTakerTokenNamesArray.includes("in") ||
            lowerTakerTokenNamesArray.includes("out")){
          isRanged = true;
          amountUSD =polygonTrade.makerAmount / 1e6;
          amountShortLong = polygonTrade.takerAmount / 1e18;
        }else if (
            lowerMakerTokenNamesArray.includes("up") ||
            lowerMakerTokenNamesArray.includes("down")
        ) {
          if (lowerMakerTokenNamesArray.includes("up")) {
            shortLong = " > ";
            isLong = true;
          } else {
            shortLong = " < ";
            isLong = false;
          }
          amountShortLong = polygonTrade.makerAmount/1e18;
          amountUSD = polygonTrade.takerAmount / 1e6;
          isBuy = true;
        } else {
          if (lowerTakerTokenNamesArray.includes("up")) {
            shortLong = " > ";
            isLong = true;
          } else {
            shortLong = " < ";
            isLong = false;
          }

          amountUSD =polygonTrade.makerAmount / 1e6;
          amountShortLong = polygonTrade.takerAmount / 1e18;
          shortLong = takerTokenName.toLowerCase().includes("up") ? " > " : " < ";
        }

        if(isRanged){

          let rangedMarket = await  getRangedMarketPolygon(polygonTrade);
          var marketMessage =
              web3.utils.hexToAscii(rangedMarket.currencyKey).replace(/\0/g, '') +
              " "+polygonTrade.optionSide.toUpperCase() + " > $"+
              Math.round(((rangedMarket.leftPrice/1e18) + Number.EPSILON) * 1000) / 1000+" < $"+Math.round(((rangedMarket.rightPrice/1e18) + Number.EPSILON) * 1000) / 1000;
          let discordMarketMessage
          discordMarketMessage =
              marketMessage +
              "@" +
              new Date(rangedMarket.maturityDate*1000).toISOString().slice(0, 10);


          var message = new Discord.MessageEmbed()
              .addFields(
                  {
                    name: ":lock: New Polygon Ranged Market Thales Trade :lock:",
                    value: "\u200b",
                  },
                  {
                    name: ":link: Transaction:",
                    value:
                        "[" +
                        polygonTrade.transactionHash +
                        "](https://polygonscan.com/tx/" +
                        polygonTrade.transactionHash +
                        ")",
                  },
                  {
                    name: ":coin: Transaction type:",
                    value: polygonTrade.orderSide.toUpperCase(),
                  },
                  {
                    name: ":classical_building: Market:",
                    value:
                        "[" +
                        discordMarketMessage +
                        "](https://thalesmarket.io/markets/" +
                        polygonTrade.market +
                        ")",
                  },
                  {
                    name: ":dollar: "+polygonTrade.optionSide.toUpperCase()+" tokens",
                    value: parseFloat((amountShortLong).toFixed(3)),
                  },
                  {
                    name: ":dollar: Total:",
                    value: parseFloat((amountUSD).toFixed(3)) + " sUSD",
                  },
                  {
                    name: ":alarm_clock: Timestamp:",
                    value: new Date(polygonTrade.timestamp*1000),
                  }
              )
              .setColor("#0037ff");
          let newRangeTradeMessage = polygonTrade.orderSide.toUpperCase()=="BUY" ? 'New Polygon Ranged Market position bought\n' : 'New Polygon Ranged Market position sold\n';
          var date = new Date(polygonTrade.timestamp*1000);

          newRangeTradeMessage = newRangeTradeMessage + 'Condition: '+marketMessage+'\n';
          let amountAMM = parseFloat((amountShortLong).toFixed(3));
          let paidAMM = parseFloat((amountUSD).toFixed(3));
          let potentialProfit = (amountAMM-paidAMM)>0.51? Math.round(amountAMM-paidAMM): amountAMM-paidAMM;
          newRangeTradeMessage = newRangeTradeMessage + 'Maturity date: '+new Date(rangedMarket.maturityDate*1000).toISOString().slice(0, 10)+'\n';
          newRangeTradeMessage = newRangeTradeMessage + 'Amount: '+parseFloat((amountShortLong).toFixed(3))+' '+polygonTrade.optionSide.toUpperCase()+' tokens\n';
          newRangeTradeMessage = newRangeTradeMessage + 'Paid: '+parseFloat((amountUSD).toFixed(3))+' sUSD\n';
          newRangeTradeMessage = newRangeTradeMessage + 'Potential profit: '+potentialProfit+' sUSD ('+calculateProfitPercentageTotal(paidAMM,amountAMM)+'%)\n';


          //let tweetV2PostTweetResult = await twitterClientAMMMarket.v2.tweet(newRangeTradeMessage);

          clientNewListings.channels
              .fetch("1006161731837501461")
              .then((ammTradesChannel) => {
                ammTradesChannel.send(message);
              });

      }
        else {
          let market = await getPolygonMarket(polygonTrade);

          var marketMessage =
              web3.utils.hexToAscii(market.currencyKey).replace(/\0/g, '') +
              shortLong +
              Math.round(((market.strikePrice / 1e18) + Number.EPSILON) * 1000) / 1000;
          marketMessage =
              marketMessage +
              "@" +
              new Date(market.maturityDate * 1000).toISOString().slice(0, 10);

          let messageTitle;
          messageTitle = ":lock: New Polygon Amm Thales Trade :lock:"


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
                        polygonTrade.transactionHash +
                        "](https://polygonscan.com/tx/" +
                        polygonTrade.transactionHash +
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
                        polygonTrade.market +
                        ")",
                  },
                  {
                    name: isLong ? ":dollar: UP tokens" : ":dollar: DOWN tokens",
                    value: parseFloat((amountShortLong).toFixed(3)),
                  },
                  {
                    name: ":dollar: Total:",
                    value: parseFloat((amountUSD).toFixed(3)) + " USDC",
                  },
                  {
                    name: ":alarm_clock: Timestamp:",
                    value: new Date(polygonTrade.timestamp * 1000),
                  }
              )
              .setColor("#0037ff");
          clientNewListings.channels
              .fetch("963823355595747338")
              .then((ammTradesChannel) => {
                ammTradesChannel.send(message);
              });


          let newAMMTradeMessage = isBuy ? 'New Polygon AMM position bought\n' : 'New Polygon AMM position sold\n';
          var date = new Date(polygonTrade.timestamp * 1000);

          newAMMTradeMessage = newAMMTradeMessage + 'Condition: ' + marketMessage + '\n';
          let downOrUP;
          if (isLong) {
            downOrUP = 'UP';
          } else {
            downOrUP = 'DOWN';
          }
          ;
          let amountAMM = parseFloat((amountShortLong).toFixed(3));
          let paidAMM = parseFloat((amountUSD).toFixed(3));
          let potentialProfit = (amountAMM - paidAMM) > 0.51 ? Math.round(amountAMM - paidAMM) : amountAMM - paidAMM;
          newAMMTradeMessage = newAMMTradeMessage + 'Amount: ' + parseFloat((amountShortLong).toFixed(3)) + ' ' + downOrUP + ' tokens\n';
          newAMMTradeMessage = newAMMTradeMessage + 'Paid: ' + parseFloat((amountUSD).toFixed(3)) + ' USDC\n';
          newAMMTradeMessage = newAMMTradeMessage + 'Potential profit: ' + potentialProfit + ' USDC (' + calculateProfitPercentageTotal(paidAMM, amountAMM) + '%)\n';
          //let tweetV2PostTweetResult = await twitterClientAMMMarket.v2.tweet(newAMMTradeMessage);

        }
        writenPolygonTrades.push(polygonTrade.transactionHash);
        redisClient.lpush(polygonTradesKey, polygonTrade.transactionHash);
        totalAmountOfTradesPolygon = totalAmountOfTradesPolygon + Math.round(amountUSD);
        numberOfTradesPolygon++;
        redisClient.set("totalAmountPolygon", totalAmountOfTradesPolygon, function (err, reply) {
          console.log(reply); // OK
        });
        redisClient.set("totalTradesPolygon", numberOfTradesPolygon, function (err, reply) {
          console.log(reply); // OK
        });
      }catch (e) {
        console.log("error in polygon trades "+e);
      }
    }
  }

}


async function  getRangedMarketPolygon(tradeL2) {

  const body = JSON.stringify({
    query: `{rangedMarkets(where:{
    id: "${tradeL2.market}"
  }) {
    id
    timestamp
    currencyKey
    maturityDate
    expiryDate
    leftPrice
    rightPrice
    rightMarket{
    id
    strikePrice
      currencyKey
      maturityDate
      expiryDate
    }
    leftMarket{
      id
    strikePrice
      currencyKey
      maturityDate
      expiryDate
    }
    
  }}`,
    variables: null,
  });

  const response = await fetch(
      "https://api.thegraph.com/subgraphs/name/thales-markets/thales-polygon",
      {
        method: "POST",
        body,
      }
  );

  const json = await response.json();
  const markets = json.data.rangedMarkets;

  return markets[0];
}

const getL2TotalVolume = async () => {
  try {
    let response = await axios.get('https://api.dune.com/api/v1/query/323926/results?api_key=3Qen5RZeSwOpwE3616qSNIqYVTJ7j9dj');
    if(!isNaN(response.data.result.rows[0]["Total Volume"])){
      totalAmountOfTradesL2 =  Math.trunc((response.data.result.rows[0]["Total Volume"]));
      console.log("OP amount is "+totalAmountOfTradesL2);
      await redisClient.set(totalAmountL2Key,totalAmountOfTradesL2);
    }
  }catch (e) {
    console.log("error while updating dune "+e);
  }
};

async function updateTotalL2Trades() {
  try {
    clientTotalL2Trades.guilds.cache.forEach(function (value, key) {
      try {
        console.log("for guild "+value+" value is "+totalAmountOfTradesL2);
        value.members.cache
            .get(clientTotalL2Trades.user.id)
            .setNickname("Optimism="+getNumberLabelDecimals(totalAmountOfTradesL2)+"$");
      } catch (e) {
        console.log('error while updating amount of trades '+e);
      }
    });
    clientTotalL2Trades.user.setActivity(
        "Trades OP="+numberWithCommas(numberOfTradesL2),
        { type: "WATCHING" }
    );
  }catch (e) {
    console.log("there was an error while updating total l2");
  }
}

async function updateTotalPolygonTrades() {
  try {
    clientTotalPolygonTrades.guilds.cache.forEach(function (value, key) {
      try {
        console.log("for guild "+value+" value is "+totalAmountOfTradesPolygon);
        value.members.cache
            .get(clientTotalPolygonTrades.user.id)
            .setNickname("Polygon="+getNumberLabelDecimals(totalAmountOfTradesPolygon)+"$");
      } catch (e) {
        console.log('error while updating amount of trades polygon '+e);
      }
    });
    clientTotalPolygonTrades.user.setActivity(
        "Trades Polygon="+numberWithCommas(numberOfTradesPolygon),
        { type: "WATCHING" }
    );
  }catch (e) {
    console.log("there was an error while updating total polygon");
  }
}

setTimeout(function () {
  updateTotalL2Trades();
  updateTotalOvertimeTrades();
  updateTotalARBTrades();
  updateTotalBSCTrades();
  updateTotalOvertimeARBTrades();
}, 1000 * 30 * 1);

setInterval(function () {
  console.log("update l2 trades");
  updateTotalL2Trades();
  updateTotalOvertimeTrades();
  updateTotalOvertimeARBTrades();
  updateTotalARBTrades();
  updateTotalBSCTrades();
}, 360 * 1000);

setInterval(function () {
  console.log("get total l2 volume");
  getL2TotalVolume();
}, 360 * 2 * 1000);



setTimeout(function () {
  updateTotalPolygonTrades();
}, 1000 * 30 * 1);

setInterval(function () {
  console.log("update polygon trades");
  updateTotalPolygonTrades();
}, 360 * 1000);

clientThalesL2APR.once("ready", () => {
  console.log("calculate L2 APR");
  calculateThalesL2APR();
});

setInterval(function () {
  console.log("calculate L2 APR");
  calculateThalesL2APR();
  getStakingAPY(clientOPSTAKE);
  getLiqOPThales();
  getLiqOPOvertime();
  getLiqARBThales();
  getLiqARBOvertime();
  getLiqParlayOP();
  getLiqParlayARB();
}, 360 * 1000);

async function calculateThalesL2APR() {

  const priceL2ThalesURL =
      'https://api.coingecko.com/api/v3/simple/price?ids=thales&vs_currencies=usd';

  const [res1, res2] = await Promise.all([
    fetch(priceL2ThalesURL),
    fetch('https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd'),
  ]);
  const data1 = await res1.json();
  const data2 = await res2.json();
  if( data2.ethereum && data1.thales){
   const ethValue = data2.ethereum.usd;
   const thalesValue = data1.thales.usd;
  let  gelatoContractThales =  new web3L2.eth.Contract(gelatoContract.gelatoContract.abi, "0xac6705BC7f6a35eb194bdB89066049D6f1B0B1b5");
  const balances = await gelatoContractThales.methods.getUnderlyingBalances().call();
  let wethBalance = await web3.utils.fromWei(balances[1],"ether");
  let thalesBalance = await web3.utils.fromWei(balances[0],"ether");
  let wethBalanceNumber = Number(wethBalance).toFixed(2);
  let thalesBalanceNumber = Number(thalesBalance).toFixed(2);
  let  thalestotalsupply =  new web3L2.eth.Contract(aprContract, "0x31a20E5b7b1b067705419D57Ab4F72E81cC1F6Bf");
  const totalSupply = await gelatoContractThales.methods.totalSupply().call() /1e18;
  const totalGelatoLocked = await thalestotalsupply.methods.totalSupply().call() /1e18;

  const totalInUSD = totalGelatoLocked * (Number(
          (wethBalanceNumber * ethValue + thalesBalanceNumber * thalesValue).toFixed(2))
  )/totalSupply;

  const apr = ((100 * (18500 * thalesValue * 52)) / totalInUSD).toFixed(0);
  let formatedAPR = Math.round(apr*100)/100+"%";

  const resOP = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=optimism&vs_currencies=usd');
  const dataOP =  await resOP.json();
  if(dataOP.optimism){
  const opValue = dataOP.optimism.usd;
  console.log("op value is "+opValue);
  const aprOP = ((100 * (1000 * opValue * 52)) / totalInUSD).toFixed(0);
  let formatedAPROP = Math.round(aprOP*100)/100+"%";
  console.log("formated APR OP is "+formatedAPROP);

  if (formatedAPR) {
    clientThalesL2APR.guilds.cache.forEach(function (value, key) {
      try {
        value.members.cache
            .get(clientThalesL2APR.user.id)
            .setNickname(formatedAPR+" + "+formatedAPROP);
      } catch (e) {
        console.log(e);
      }
    });
  }

  clientThalesL2APR.user.setActivity("APR L2 WETH/THALES + OP", {
    type: "WATCHING",
  });
  } }
};


let seasonNumber=3;
let currentRoundNumber=0;
let seasonRegistrationStarts = "seasonNumber"+seasonNumber+"starts";
let seasonRegistration24hCloseKey = "seasonNumber"+seasonNumber+"closingTime24h";
let seasonRegistration2hCloseKey = "seasonNumber"+seasonNumber+"closingTime2h";
let positionStartsKey = "seasonNumber"+seasonNumber+"posistionRound"+currentRoundNumber+"starts";
let position2hCloseKey = "seasonNumber"+seasonNumber+"posistionRound"+currentRoundNumber+"closes2h";
let isRegistrationStartedMessageSent = false
let isRegistration2hMessageSent = false
let isRegistration24hMessageSent = false
let isPositionStartedSent = false
let isPostion2hSent = false
let mapRoyaleCounterBot = new Map();

async function setSeasonAndCurrentRound(){
  try {

    seasonNumber = await royaleContract.methods.season().call();
    currentRoundNumber = await royaleContract.methods.roundInASeason(seasonNumber).call();
    seasonRegistrationStarts = "seasonNumber"+seasonNumber+"starts";
    seasonRegistration24hCloseKey = "seasonNumber"+seasonNumber+"closingTime24h";
    seasonRegistration2hCloseKey = "seasonNumber"+seasonNumber+"closingTime2h";
    positionStartsKey = "seasonNumber"+seasonNumber+"posistionRound"+currentRoundNumber+"starts";
    position2hCloseKey = "seasonNumber"+seasonNumber+"posistionRound"+currentRoundNumber+"closes2h";

    await redisClient.get(seasonRegistrationStarts, function (err, obj) {
      console.log("3redis " + obj);
      if(obj !=null) {
        mapRoyaleCounterBot.set(seasonRegistrationStarts,true);
      } else {
        mapRoyaleCounterBot.set(seasonRegistrationStarts,false);
      }
    });
    await redisClient.get(seasonRegistration24hCloseKey, function (err, obj) {
      console.log("3redis " + obj);
      if(obj !=null){
        mapRoyaleCounterBot.set(seasonRegistration24hCloseKey,true);
      }
      else {
        mapRoyaleCounterBot.set(seasonRegistration24hCloseKey,false);
      }
    });
    await redisClient.get(seasonRegistration2hCloseKey, function (err, obj) {
      console.log("3redis " + obj);
      if(obj != null){
        mapRoyaleCounterBot.set(seasonRegistration2hCloseKey,true);
      }else {
        mapRoyaleCounterBot.set(seasonRegistration2hCloseKey,false);
      }
    });
    await redisClient.get(positionStartsKey, function (err, obj) {
      console.log("3redis " + obj);
      if(obj !=null ){
        mapRoyaleCounterBot.set(positionStartsKey,true);
      }else {
        mapRoyaleCounterBot.set(positionStartsKey,false);
      }
    });
    await redisClient.get(position2hCloseKey, function (err, obj) {
      console.log("3redis " + obj);
      if(obj != null){
        mapRoyaleCounterBot.set(position2hCloseKey,true);
      }else {
        mapRoyaleCounterBot.set(position2hCloseKey,false);
      }
    });
  }catch (e) {
    console.log("there was error while calling current season/round"+e);
  }
}

async function checkSeasonStarts() {
if(seasonNumber!=3){
  if(!mapRoyaleCounterBot.get(seasonRegistrationStarts)){
    const seasonCreationTime = await royaleContract.methods.seasonCreationTime(seasonNumber).call();
    let currentTimestamp = Math.floor(Date.now() / 1000);
    const timeDifference=Number(seasonCreationTime) - currentTimestamp;
    if((currentTimestamp>Number(seasonCreationTime)) && Math.abs(timeDifference)<=750){
      sendThalesRoyaleMessage("Hey Thales Royale enthusiasts, the registration phase (lasting 72 hours) has just started! You can register here: <https://thalesmarket.io/royale?page=scoreboard>")
      await redisClient.set(seasonRegistrationStarts,true);
      mapRoyaleCounterBot.set(seasonRegistrationStarts,true)
    }
  }else
  if(!mapRoyaleCounterBot.get(seasonRegistration24hCloseKey)) {

    const signUpPeriod =  await royaleContract.methods.signUpPeriod().call();
    const seasonCreationTime = await royaleContract.methods.seasonCreationTime(seasonNumber).call();
    let oneDay = 86400;
    const registration24Close =  Number(seasonCreationTime) + Number(signUpPeriod) - oneDay ;
    let currentTimestamp = Math.floor(Date.now() / 1000);
    const timeDifference=Number(registration24Close) - currentTimestamp;
    if((currentTimestamp > registration24Close) && Math.abs(timeDifference)<=750){
      sendThalesRoyaleMessage("Only one more day (24 hours) to go for Thales Royale, don't miss it! If you still haven't registered you can do so here: <https://thalesmarket.io/royale?page=scoreboard>")
      await redisClient.set(seasonRegistration24hCloseKey,true);
      mapRoyaleCounterBot.set(seasonRegistration24hCloseKey,true);
    }
  } else
  if(!mapRoyaleCounterBot.get(seasonRegistration2hCloseKey)){
    const signUpPeriod =  await royaleContract.methods.signUpPeriod().call();
    const seasonCreationTime = await royaleContract.methods.seasonCreationTime(seasonNumber).call();
    let twoHours = 7200;
    const registration2hClose =  Number(seasonCreationTime) + Number(signUpPeriod) - twoHours ;
    let currentTimestamp = Math.floor(Date.now() / 1000);
    const timeDifference=Number(registration2hClose) - currentTimestamp;
    if((currentTimestamp > registration2hClose) && Math.abs(timeDifference)<=750){
      sendThalesRoyaleMessage("Two more hours to register in Thales Royale. Last call. Register here: <https://thalesmarket.io/royale?page=scoreboard>");
      await redisClient.set(seasonRegistration2hCloseKey,true);
      mapRoyaleCounterBot.set(seasonRegistration2hCloseKey,true);
    }
  }
}
}



async function sendThalesRoyaleMessage(message){
  let channel =  await clientRoyalePingingBot.channels
      .fetch("913143283033722990");
  let roleId = "939868108749942785" ;
  channel.send("<@&" + roleId + "> "+message);
}

async function checkPositioning() {
  if(seasonNumber!=3 && currentRoundNumber!=0) {
    if (!mapRoyaleCounterBot.get(positionStartsKey)) {

      const positioningStarted = await royaleContract.methods.royaleInSeasonStarted(seasonNumber).call();
      const roundInASeasonStartTime = await royaleContract.methods.roundInASeasonStartTime(seasonNumber).call();
      console.log("checking position started " + positioningStarted + " round in a season start time" + roundInASeasonStartTime);
      let currentTimestamp = Math.floor(Date.now() / 1000);
      const timeDifference = Number(roundInASeasonStartTime) - currentTimestamp;
      if (positioningStarted && (currentTimestamp > Number(roundInASeasonStartTime)) && (Math.abs(timeDifference) <= 550)) {
        console.log("check passed sending message positioning started message");
        if(currentRoundNumber!=1){
        const roundResult = await royaleContract.methods.roundResultPerSeason(seasonNumber,currentRoundNumber-1).call();
        console.log('round result is '+roundResult);
        if(roundResult==1){
          sendThalesRoyaleMessage("Aaaaand we are live! Thales Royale round " + currentRoundNumber + " has started. Last round went DOWN. You have 8 hours to choose a position. Remember that you can change your position at any time before this period ends. See you in the arena, good luck!")
        }else {
          sendThalesRoyaleMessage("Aaaaand we are live! Thales Royale round " + currentRoundNumber + " has started. Last round went UP. You have 8 hours to choose a position. Remember that you can change your position at any time before this period ends. See you in the arena, good luck!")
        }
        }else{
        sendThalesRoyaleMessage("Aaaaand we are live! Thales Royale round " + currentRoundNumber + " has started. You have 8 hours to choose a position. Remember that you can change your position at any time before this period ends. See you in the arena, good luck!")
        }
        await redisClient.set(positionStartsKey, true);
        mapRoyaleCounterBot.set(positionStartsKey, true);
      }
    }  if (!mapRoyaleCounterBot.get(position2hCloseKey)) {

      const positioningStarted = await royaleContract.methods.royaleInSeasonStarted(seasonNumber).call();
      const roundInASeasonStartTime = await royaleContract.methods.roundInASeasonStartTime(seasonNumber).call();
      const roundChoosingLength = await royaleContract.methods.roundChoosingLength().call();
      let twoHours = 7200;
      const positioning2hoursToClose = Number(roundInASeasonStartTime) + Number(roundChoosingLength) - twoHours;
      console.log("checking positioning2hoursToClose " + positioning2hoursToClose + " roundInASeasonStartTime" + roundInASeasonStartTime);
      let currentTimestamp = Math.floor(Date.now() / 1000);
      const timeDifference = Number(positioning2hoursToClose) - currentTimestamp;
      if (positioningStarted && (currentTimestamp > positioning2hoursToClose) && (Math.abs(timeDifference) <= 550)) {
        console.log("check passed sending message 2 hours left");
        sendThalesRoyaleMessage("Only 2 hours left to choose a position for Thales Royale round " + currentRoundNumber + ". After the positioning period ends you won't be able to change your position and the resolution phase will start, lasting 16 hours. After resolution phase ends, if you chose the correct side, you'll advance to the next round, if not... better luck next time!")
        await redisClient.set(position2hCloseKey, true);
        mapRoyaleCounterBot.set(position2hCloseKey, true);
      }
    }
  }
}

clientRoyalePingingBot.once("ready", () => {
  console.log("updating royale settings");
  setSeasonAndCurrentRound();
});


setInterval(function () {
  console.log("updating current thales season bots");
  setSeasonAndCurrentRound();
}, 60 * 2 * 1000);

setInterval(function () {
  console.log("updating updating season starts bots");
  checkSeasonStarts();
  checkPositioning();
}, 60 * 5 * 1000);

async function  getPosition() {

  const body = JSON.stringify({
    query: `{
  positions(orderBy:timestamp,
        orderDirection:desc) {
    id
    timestamp
    account
    market
    positions
    position
    isWithdrawn
    isClaimed
  }
}`,
    variables: null,
  });

  const response = await fetch(
      "https://api.thegraph.com/subgraphs/name/thales-markets/exotic-markets-optimism",
      {
        method: "POST",
        body,
      }
  );

  const json = await response.json();
  const positions = json.data.positions;

  var startdate = new Date();
  var durationInMinutes = 30;
  startdate.setMinutes(startdate.getMinutes() - durationInMinutes);
  let startDateUnixTime = Math.floor(startdate.getTime()/1000);
  for (const position of positions) {
    if (startDateUnixTime < Number(position.timestamp) && !writenExoticPositions.includes(position.id) && (position.position!=0 || isOpenBidPosition(position.positions))) {
      try {
        console.log("new exotic market position");

        let messageTitle = "New Exotic Market Position";
        let market = await getExoticMarket(position);
        let poolSize = market.poolSize / 1e18;
        let ticketPrice = 0;
        let posistionsMade="";
        if(!market.isTicketType){
          for (var i = 0; i < position.positions.length; i++) {
            if(position.positions[i]!="0"){
              if(posistionsMade!=""){
                posistionsMade =posistionsMade +  ", "+ market.positions[i]
              }else{
                posistionsMade =  market.positions[i];
              }
              ticketPrice = ticketPrice + Number(position.positions[i]);
            }
          }
          ticketPrice = ticketPrice / 1e18;
        } else {
          posistionsMade = market.positions[position.position-1];
          ticketPrice = market.ticketPrice / 1e18;
        }

        var message = new Discord.MessageEmbed()
            .addFields(
                {
                  name: messageTitle,
                  value: "\u200b",
                },
                {
                  name: ":classical_building: Market:",
                  value:
                      "[" +
                      market.question +
                      "](https://exoticmarkets.xyz/#/markets/" +
                      market.address +
                      ")",
                },
                {
                  name: ":coin: Position:",
                  value: posistionsMade,
                },
                {
                  name: ":coin: Ticket price:",
                  value: ticketPrice+" sUSD",
                },
                {
                  name: ":coin: Pool size:",
                  value: poolSize+" sUSD",
                },
                {
                  name: ":alarm_clock: Timestamp:",
                  value: new Date(position.timestamp * 1000),
                }
            )
            .setColor("#0037ff");
        clientNewListings.channels
            .fetch("968912147826507796")
            .then((ammTradesChannel) => {
              ammTradesChannel.send(message);
            });
        writenExoticPositions.push(position.id);
        redisClient.lpush(exoticMarketPositionsKey, position.id);
      } catch (e) {
        console.log("There was a problem while getting exotic markets", e);
      }
    }
  }
}

async function  getExoticMarket(dispute) {

  const body = JSON.stringify({
    query: `{
  markets(where:{
    id: "${dispute.market}"
  }) {
     id
    timestamp
    creator
    creationTime
    isTicketType
    resolver
    resolvedTime
    address
    question
    dataSource
    endOfPositioning
    ticketPrice
    isWithdrawalAllowed
    positions
    tags
    isOpen
    numberOfDisputes
    numberOfOpenDisputes
    marketClosedForDisputes
    isResolved
    isCancelled
    winningPosition
    backstopTimeout
    isPaused
    isDisputed
    disputeClosedTime
    poolSize
    numberOfParticipants
    noWinners
    cancelledByCreator
  }
}`,
    variables: null,
  });

  const response = await fetch(
      "https://api.thegraph.com/subgraphs/name/thales-markets/exotic-markets-optimism",
      {
        method: "POST",
        body,
      }
  );

  const json = await response.json();
  const markets = json.data.markets;

  return markets[0];
}

async function getOpenDisputesExotic() {

  const body = JSON.stringify({
    query: `{
  disputes(orderBy:timestamp,
        orderDirection:desc) {
    id
    timestamp
    creationDate
    disputeNumber
    disputer
    market
    reasonForDispute
    isInPositioningPhase
    disputeCode
  }
}`,
    variables: null,
  });

  const response = await fetch(
      "https://api.thegraph.com/subgraphs/name/thales-markets/exotic-markets-optimism",
      {
        method: "POST",
        body,
      }
  );

  const json = await response.json();
  const disputes = json.data.disputes;

  var startdate = new Date();
  var durationInMinutes = 30;
  startdate.setMinutes(startdate.getMinutes() - durationInMinutes);
  let startDateUnixTime = Math.floor(startdate.getTime()/1000);
  for (const dispute of disputes) {
     if (startDateUnixTime < Number(dispute.timestamp) && !writenExoticDisputes.includes(dispute.id)) {
    try {
      console.log("new dispute");
      let messageTitle = "New Exotic Market Dispute";
      let market = await getExoticMarket(dispute);

      var message = new Discord.MessageEmbed()
          .addFields(
              {
                name: messageTitle,
                value: "\u200b",
              },
              {
                name: ":question: Dispute Reason:",
                value: dispute.reasonForDispute,
              },
              {
                name: ":classical_building: Market:",
                value:
                    "[" +
                    market.question +
                    "](https://exoticmarkets.xyz/#/markets/" +
                    dispute.market +
                    ")",
              },
              {
                name: ":alarm_clock: Timestamp:",
                value: new Date(dispute.timestamp*1000),
              }
          )
          .setColor("#0037ff");
      clientNewListings.channels
          .fetch("968805375015014410")
          .then((ammTradesChannel) => {
            ammTradesChannel.send(message);
          });
      writenExoticDisputes.push(dispute.id);
      redisClient.lpush(exoticMarketDisputesKey, dispute.id);
    } catch (e) {
      console.log("There was a problem while getting exotic market disputes",e);
    }
  }
  }
}

async function getExoticMarkets(){
  const body = JSON.stringify({
    query: `{
  markets(orderBy:timestamp,
        orderDirection:desc) {
    id
    timestamp
    creator
    creationTime
    resolver
    resolvedTime
    address
    question
    dataSource
    endOfPositioning
    ticketPrice
    isWithdrawalAllowed
    positions
    tags
    isTicketType
    isOpen
    numberOfDisputes
    numberOfOpenDisputes
    marketClosedForDisputes
    isResolved
    isCancelled
    winningPosition
    backstopTimeout
    isPaused
    isDisputed
    disputeClosedTime
    poolSize
    numberOfParticipants
    noWinners
    cancelledByCreator
  }
}`,
    variables: null,
  });

  const response = await fetch(
      "https://api.thegraph.com/subgraphs/name/thales-markets/exotic-markets-optimism",
      {
        method: "POST",
        body,
      }
  );

  const json = await response.json();
  const exoticMarkets = json.data.markets;

  var startdate = new Date();
  var durationInMinutes = 30;
  startdate.setMinutes(startdate.getMinutes() - durationInMinutes);
  let startDateUnixTime = Math.floor(startdate.getTime()/1000);
  for (const exoticMarket of exoticMarkets) {
     if (startDateUnixTime < Number(exoticMarket.timestamp) && !writenExoticMarkets.includes(exoticMarket.id)) {
    try {
      console.log("new exotic market");

      let messageTitle = "New Exotic Market";
      let exoticMarketQuestion = exoticMarket.question;
      let ticketPrice = exoticMarket.ticketPrice / 1e18;
      let poolSize = exoticMarket.poolSize / 1e18;
      let bidType = "";
      if(!exoticMarket.isTicketType){
        bidType = "Open bid";
      }else{
        bidType = "Ticket"
      }
      var message = new Discord.MessageEmbed()
          .addFields(
              {
                name: messageTitle,
                value: "\u200b",
              },
              {
                name: ":classical_building: Market:",
                value:
                    "[" +
                    exoticMarketQuestion +
                    "](https://exoticmarkets.xyz/#/markets/" +
                    exoticMarket.address +
                    ")",
              },
              {
                name: ":coin: Ticket price:",
                value: ticketPrice+" sUSD",
              },
              {
                name: ":coin: Bid type:",
                value: bidType,
              },
              {
                name: ":alarm_clock: Deadline:",
                value: new Date(exoticMarket.endOfPositioning *1000),
              },
              {
                name: ":alarm_clock: Timestamp:",
                value: new Date(exoticMarket.timestamp*1000),
              }
          )
          .setColor("#0037ff");
      clientNewListings.channels
          .fetch("968805331104841738")
          .then((ammTradesChannel) => {
            ammTradesChannel.send(message);
          });
      writenExoticMarkets.push(exoticMarket.id);
      redisClient.lpush(exoticMarketsKey, exoticMarket.id);
    } catch (e) {
      console.log("There was a problem while getting exotic markets",e);
    }
  }
  }
}

async function  getRangedMarketL2(tradeL2) {

  const body = JSON.stringify({
    query: `{rangedMarkets(where:{
    id: "${tradeL2.market}"
  }) {
    id
    timestamp
    currencyKey
    maturityDate
    expiryDate
    leftPrice
    rightPrice
    rightMarket{
    id
    strikePrice
      currencyKey
      maturityDate
      expiryDate
    }
    leftMarket{
      id
    strikePrice
      currencyKey
      maturityDate
      expiryDate
    }
    
  }}`,
    variables: null,
  });

  const response = await fetch(
      "https://api.thegraph.com/subgraphs/name/thales-markets/thales-markets",
      {
        method: "POST",
        body,
      }
  );

  const json = await response.json();
  const markets = json.data.rangedMarkets;

  return markets[0];
}



async function getExoticMarketResultSet() {

  const body = JSON.stringify({
    query: `{
  marketTransactions(orderBy:timestamp,
        orderDirection:desc
  where:{
    type: resolveMarket
  }) {
    id
    hash
    timestamp
    blockNumber
    type
    account
    market
    amount
    position
  }
}`,
    variables: null,
  });

  const response = await fetch(
      "https://api.thegraph.com/subgraphs/name/thales-markets/exotic-markets-optimism",
      {
        method: "POST",
        body,
      }
  );

  const json = await response.json();
  const marketTransactions = json.data.marketTransactions;

  var startdate = new Date();
  var durationInMinutes = 30;
  startdate.setMinutes(startdate.getMinutes() - durationInMinutes);
  let startDateUnixTime = Math.floor(startdate.getTime()/1000);
  for (const marketTransaction of marketTransactions) {
    if (startDateUnixTime < Number(marketTransaction.timestamp) && !writenExoticMarketResultSet.includes(marketTransaction.id)) {
      try {
        console.log("new market result set");
        let messageTitle = "New Exotic Market Result Set";
        let market = await getExoticMarket(marketTransaction);
        let outcomePosistion;
        if(marketTransaction.position==0){
          outcomePosistion="Market is Canceled";
        }else{
          outcomePosistion=market.positions[marketTransaction.position-1];
        }
        var message = new Discord.MessageEmbed()
            .addFields(
                {
                  name: messageTitle,
                  value: "\u200b",
                },
                {
                  name: ":classical_building: Market:",
                  value:
                      "[" +
                      market.question +
                      "](https://exoticmarkets.xyz/#/markets/" +
                      marketTransaction.market +
                      ")",
                },
                {
                  name: ":coin: Outcome Position:",
                  value: outcomePosistion,
                },
                {
                  name: ":alarm_clock: Timestamp:",
                  value: new Date(marketTransaction.timestamp*1000),
                }
            )
            .setColor("#0037ff");
        clientNewListings.channels
            .fetch("972190551078236210")
            .then((ammTradesChannel) => {
              ammTradesChannel.send(message);
            });
        writenExoticMarketResultSet.push(marketTransaction.id);
        redisClient.lpush(exoticMarketResultSet, marketTransaction.id);
      } catch (e) {
        console.log("There was a problem while getting exotic market result sets",e);
      }
    }
  }
}

function isOpenBidPosition(array){
  for (var i = 0; i < array.length; i++) {
    if(array[i]!="0"){
      return true;
    }
  }
}


setInterval(function () {
  console.log("get L2 trades");
  getExoticMarkets();
  getPosition();
  getOpenDisputesExotic();
  getExoticMarketResultSet();
  getOvertimeMarkets(10);
  getOvertimeMarkets(42161);
  getOvertimeMarkets(8453);
  getOvertimeTrades(10);
  getOvertimeTrades(42161);
  getOvertimeTrades(8453);
  getOvertimeParlays(10);
  getOvertimeParlays(42161);
  getOvertimeParlays(8453);
}, 2 * 60 * 1000);


async  function getBurnedThalesBalance (){

  const tokenBalance = await burnedContract.methods.balanceOf("0x679C0174f6c288C4bcd5C95C9Ec99D50357C59E7").call();
  let amountOfThales = tokenBalance / 1e18;
  const deadTokenBalance = await deadburnedContract.methods.balanceOf("0x000000000000000000000000000000000000dEaD").call();
  let amountOfDeadTokens = deadTokenBalance / 1e18;
  const deadArbTokenBalance = await deadARBburnedContract.methods.balanceOf("0xE9F5E7579931a46e4beaC08Ca9ab52961AD66203").call();
  let amountOfArbDeadTokens = deadArbTokenBalance / 1e18;
  const baseBurnedTokens = await baseburnedContract.methods.balanceOf("0x860C4DD827DdDd98755e0843b89d909f5A0347Ff").call();
  let amountOfbaseBurnedTokens = baseBurnedTokens / 1e18;
  let sumOfAllBurnedThales = amountOfThales+amountOfDeadTokens + amountOfArbDeadTokens + amountOfbaseBurnedTokens;


  try {
    clientTotalBurnedThales.guilds.cache.forEach(function (value, key) {
      try {
        value.members.cache
            .get(clientTotalBurnedThales.user.id)
            .setNickname(getNumberLabelDecimalsMil(sumOfAllBurnedThales));
      } catch (e) {
        console.log('error while updating amount of thales'+e);
      }
    });
    clientTotalBurnedThales.user.setActivity(
        "THALES burned",
        { type: "WATCHING" }
    );
  }catch (e) {
    console.log("there was an error while updating total opThales");
  }
}

function getOvertimeMarketDTO(market) {
  return {
    isCanceled: market.isCanceled,
    isResolved: market.isResolved,
    homeOdds: market.homeOdds
  }
}

function titleCase(str) {
  var splitStr = str.toLowerCase().split(' ');
  for (var i = 0; i < splitStr.length; i++) {
    // You do not need to check if i is larger than splitStr length, as your for does that for you
    // Assign it back to the array
    splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
  }
  // Directly return the joined string
  return splitStr.join(' ');
}

let tagsMAP = new Map( [
  [9001, "NCAA Men's Football"],
  [9002, "NFL"],
  [9003, "MLB"],
  [9004, "NBA"],
  [9005, "NCAA Men's Basketball"],
  [9006, "NHL"],
  [9007, "UFC"],
  [9008, "WNBA"],
  [9010, "MLS"],
  [9011, "EPL"],
  [9012, "Ligue 1"],
  [9013, "Bundesliga"],
  [9014, "La Liga"],
  [9015, "Serie A"],
  [9016, "UEFA Champions League"],
  [9100, "Formula 1"],
  [9101, "MotoGP"],
  [9018, "FIFA World Cup 2022"],
  [9017, "UEFA League"],
  [9019, "J1 League"],
  [9005,"NCAA"],
  [9153,"Grand Slam Tennis"],
  [9156,"ATP Tournament"],
  [9977,"CSGO"],
  [18977,"CSGO"],
  [9020,"Cricket"],
  [9399,"EuroLeague"],
  [9196,"Boxing"],
  [9033,"IIHF World Championship"],
  [9045,"Copa Libertadores"],
  [9057,"Eredivisie"],
  [9061,"Liga Portugal"],
  [9296,"FIFA World Cup U20"],
  [9445,"Formula 1"],
  [9050,"EURO Qualification"],
  [9021,"T20 Blast"],
  [9806,"UEFA Nations League "],
  [9821,"CONCACAF Nations League"],
  [9497,"MotoGp"],
  [9288,"UEFA EURO U21"],
  [9042,"Champions League Qualification"],
  [9076,"Female World Cup Soccer"],
  [19216,"Europa Conference League Qualification"],
  [109121,"GOLF Tournament Winner"],
  [109021,"GOLF H2H"],
  [9536,"Saudi league"],
  [9268,"Brasil league"]
]);

let ppMAP = new Map( [
  [11051, "Player passing yards"],
  [11052, "Player passing touchdowns"],
  [11053, "Player rushing yards"],
  [11010, "Home runs"],
  [11011, "Bases"],
  [11012, "Hits"],
  [11019, "Pitcher strikeouts"],
  [11029, "How many points player will have?"],
  [11047, "Pitcher hits allowed"],
  [11055, "Touchdowns"],
  [11057, "Player receiving yards"],
  [11060, "Player field goals"],
  [11037, "How many shots will be recorded?"],
  [11086, "Will this player score a goal?"],
  [11012, "Hits: How many hits will be recorded?"],
  [11035, "How many rebounds will this player record?"],
  [11039, "How many assists will the player record?"],
  [11087, "Player double-double"],
  [11088, "Player triple-double"],
  [11058, "Player receptions"],
  [11056, "Last touchdown scorer"],
  [11049, "First touchdown"]
]);

async function getOvertimeMarkets(networkId){
  var startdate = new Date();
  var durationInMinutes = 30;
  startdate.setMinutes(startdate.getMinutes() - durationInMinutes);
  let startDateUnixTimeSeconds = Math.floor(startdate.getTime()/1000);
  let startDateUnixTime = Math.floor(startdate.getTime());
  let sportMarkets = await  thalesData.sportMarkets.markets({
    network:networkId,
    max:100,
    minTimestamp:startDateUnixTimeSeconds
  });
  for (const sportMarket of sportMarkets) {
    if (startDateUnixTime < Number(sportMarket.timestamp)) {
      try {
        console.log("new overtime market");
        let sportID = tagsMAP.get(Number(sportMarket.tags[0]))? tagsMAP.get(Number(sportMarket.tags[0])):sportMarket.tags[0];
        let messageTitle;
        let channelToSend="";
        let isResolved = false;
        let existingMarket = writenOvertimeMarkets.get(sportMarket.id)
        if(existingMarket){
        if(!existingMarket.isCanceled && sportMarket.isCanceled){
          //cancelled
          messageTitle = "Overtime Market Canceled";
          if(networkId == 10){
            channelToSend = "994917658833190922";
          } else if(networkId == 8453){
            channelToSend = "1154039272077283368";
          } else {
            channelToSend = "1075044525971607682";
          }
        } else if (!existingMarket.isResolved && sportMarket.isResolved){
          //resolved
          messageTitle = "Overtime Market Resolved";
          if(networkId == 10){
            channelToSend = "994917622640549908";
          } else if(networkId == 8453){
            channelToSend = "1154039156184461402";
          } else {
            channelToSend = "1075044483768516688";
          }
          isResolved = true;
        } else if (existingMarket.homeOdds!=sportMarket.homeOdds){
          messageTitle = "New Overtime Market Odds";
          if(networkId == 10){
            channelToSend = "997150060959776848";
          } else if(networkId == 8453){
            channelToSend = "1154039479712092270";
          } else {
            channelToSend = "1075437625667756092";
          }
        }else{
          continue;
        }
        } else if(!sportMarket.isCanceled && !sportMarket.isResolved){
         messageTitle = "New Overtime Market";
          if(networkId == 10){
            channelToSend = "994917583302172742";
          } else if(networkId == 8453){
            channelToSend = "1154039387269644298";
          } else {
            channelToSend = "1075439149152211175";
          }
        }else if(sportMarket.isCanceled){
           messageTitle = "Overtime Market Canceled";
          if(networkId == 10){
            channelToSend = "994917658833190922";
          } else if(networkId == 8453){
            channelToSend = "1154039272077283368";
          } else {
            channelToSend = "1075044525971607682";
          }
        }else{
          messageTitle = "Overtime Market Resolved";
          if(networkId == 10){
            channelToSend = "994917622640549908";
          }else if(networkId == 8453){
            channelToSend = "1154039156184461402";
          } else {
            channelToSend = "1075044483768516688";
          }
          isResolved = true;
        }

        let betType = "";
        if (sportMarket.betType && sportMarket.betType == 10002) {
          let totalPointsOvertime = Number(sportMarket.total)/100;
          totalPointsOvertime =  Math.round((totalPointsOvertime + Number.EPSILON) * 100) / 100;
          betType = "O/U("+totalPointsOvertime+")";
        } else if (sportMarket.betType && sportMarket.betType == 10001) {
          var rounded = Math.round(Number(sportMarket.spread)/10)/10;
          betType = "H1("+rounded+")/H2";
        }  else if (sportMarket.betType && sportMarket.betType == 10003){
         if(sportMarket.doubleChanceMarketType.toLowerCase().includes("hometeam")){
           betType = "1X";
        }else if(sportMarket.doubleChanceMarketType.toLowerCase().includes("awayteam")) {
           betType = "X2";
        }else {
           betType = "12";
        }
        } else if(ppMAP.has(Number(sportMarket.betType))){
          betType = 'Player props O/U '+sportMarket.playerPropsLine;
        }else {
          betType =  "1x2";
        }

    if(!isResolved){

      let homeOddsMessage = "Home team winning odds:";
      let awayOdds = sportMarket.awayOdds.toFixed(3);
      let homeTeam =  await fixDuplicatedTeamName(sportMarket.homeTeam);
      let awayTeam  = await fixDuplicatedTeamName(sportMarket.awayTeam);
      let contestantName="";
      let awayOddsMessage = "Away team winning odds:"
      if(sportMarket.tags[0]=="9100" || sportMarket.tags[0]=="9101" || sportMarket.tags[0]=="9445"){
        contestantName = titleCase(homeTeam).replace('YES','')+" will win the race" ;
        homeOddsMessage = "Will win odds";
        awayOdds = "No away available";
      } else if (ppMAP.has(Number(sportMarket.betType))){
        contestantName = sportMarket.playerName+" "+ppMAP.get(Number(sportMarket.betType))
        homeOddsMessage = "Over odds";
        awayOddsMessage = "Under odds";
      }else {
        contestantName = homeTeam +" - "+awayTeam
      }

        var message = new Discord.MessageEmbed()
            .addFields(
                {
                  name: messageTitle,
                  value: "\u200b",
                },
                {
                  name: ":classical_building: Overtime market:",
                  value:
                      "[" +
                      contestantName+
                      "](https://overtimemarkets.xyz/markets/" +
                      sportMarket.address +
                      ")",
                },
                {
                  name: ":medal: Bet type:",
                  value: betType,
                },
                {
                  name: ":medal: Sport:",
                  value: sportID,
                },
                {
                  name: ":coin: "+homeOddsMessage,
                  value: sportMarket.homeOdds.toFixed(3),
                },
                {
                  name: ":coin: Draw odds:",
                  value: sportMarket.drawOdds!=0?sportMarket.drawOdds.toFixed(3):"No draw available",
                },
                {
                  name: ":coin: "+awayOddsMessage,
                  value: awayOdds,
                },
                {
                  name: ":alarm_clock: Deadline:",
                  value: new Date(sportMarket.maturityDate),
                },
                {
                  name: ":alarm_clock: Timestamp:",
                  value: new Date(sportMarket.timestamp),
                }
            )
            .setColor("#0037ff");
        let marketsChannel =   await clientNewListings.channels.fetch(channelToSend);
        marketsChannel.send(message);
    } else {

      let homeTeam =  await fixDuplicatedTeamName(sportMarket.homeTeam);
      let awayTeam  = await fixDuplicatedTeamName(sportMarket.awayTeam);
      let finalScore = "";
      if(sportMarket.tags[0]=="9007"){
        finalScore = sportMarket.homeScore > sportMarket.awayScore ?
            homeTeam +" Wins":
            awayTeam +" Wins";
      }  else {
        finalScore = sportMarket.homeScore +" - "+ sportMarket.awayScore;
      }

      let contestantName="";
      if(sportMarket.tags[0]=="9100" || sportMarket.tags[0]=="9101"){
        contestantName = titleCase(homeTeam) +" - "+titleCase(awayTeam);
      }else {
        contestantName = homeTeam +" - "+awayTeam
     }

      let overtimeMarketsTrades = await  thalesData.sportMarkets.marketTransactions({
        network:networkId,
        market:sportMarket.address
      });
      let ammHomeTradeSum = 0;
      let ammAwayTradeSum = 0;
      let ammDrawTradeSum = 0;


      for (const ammTrade of overtimeMarketsTrades) {
        if(ammTrade.type.toLowerCase()=="buy") {
          if (ammTrade.position == 0) {
            ammHomeTradeSum = ammHomeTradeSum + Number(ammTrade.amount);
          } else if (ammTrade.position == 1) {
            ammAwayTradeSum = ammAwayTradeSum + Number(ammTrade.amount);
          } else {
            ammDrawTradeSum = ammDrawTradeSum + Number(ammTrade.amount);
          }
        }
      }
      var maxOfSums = Math.max(ammHomeTradeSum, ammAwayTradeSum, ammDrawTradeSum);
      let ammHomeSumPosition = 0;
      let ammAwaySumPosition = 0;
      let ammDrawSumPosition = 0;
      let homeMessage = "Home AMM options"
      let awayMessage = "Away AMM options"
      let drawMessage = "Draw AMM options"
      let winningMessage = " (winning position):";
      if(sportMarket.finalResult ==1){
        homeMessage =  homeMessage+winningMessage;
      }else if(sportMarket.finalResult ==2 ){
        awayMessage =  awayMessage+winningMessage;
      }else {
        drawMessage =  drawMessage+ winningMessage;
      }
      //home win
      ammHomeSumPosition = maxOfSums - ammHomeTradeSum;
      //away win
      ammAwaySumPosition = maxOfSums - ammAwayTradeSum;
      //draw
      ammDrawSumPosition = sportMarket.drawOdds!=0? maxOfSums - ammDrawTradeSum:0;



      var message = new Discord.MessageEmbed()
          .addFields(
              {
                name: messageTitle,
                value: "\u200b",
              },
              {
                name: ":classical_building: Overtime market:",
                value:
                    "[" +
                    contestantName+
                    "](https://overtimemarkets.xyz/markets/" +
                    sportMarket.address +
                    ")",
              },
              {
                name: ":coin: Final result:",
                value: finalScore,
              },
              {
                name: ":medal: Bet type:",
                value: betType,
              },
              {
                name: ":coin: Home team winning odds:",
                value: sportMarket.homeOdds.toFixed(3),
              },
              {
                name: ":coin: Draw odds:",
                value: sportMarket.drawOdds!=0?sportMarket.drawOdds.toFixed(3):"No draw available",
              },
              {
                name: ":coin: Away team winning odds:",
                value: sportMarket.awayOdds.toFixed(3),
              },
              {
                name: ":coin: "+homeMessage,
                value: Math.round(ammHomeSumPosition),
              },
              {
                name: ":coin: "+drawMessage,
                value: Math.round(ammDrawSumPosition),
              },
              {
                name: ":coin: "+awayMessage,
                value: Math.round(ammAwaySumPosition),
              },
              {
                name: ":alarm_clock: Deadline:",
                value: new Date(sportMarket.maturityDate),
              },
              {
                name: ":alarm_clock: Timestamp:",
                value: new Date(sportMarket.timestamp),
              }
          )
          .setColor("#0037ff");
      let marketsChannel =   await clientNewListings.channels.fetch(channelToSend);
      marketsChannel.send(message);
    }
        writenOvertimeMarkets.set(sportMarket.id,getOvertimeMarketDTO(sportMarket));
        redisClient.set(overtimeMarketsKey, JSON.stringify([...writenOvertimeMarkets]), function () {
          console.log("added correctly map market")
        });
      } catch (e) {
        console.log("There was a problem while getting overtime markets",e);
      }
    }
  }
}

function  calculatePercentageProfit(total,paid) {
  return Math.round(((total-paid)/paid)*100)
}


async function fixDuplicatedTeamName (name) {
  const middle = Math.floor(name.length / 2);
  const firstHalf = name.substring(0, middle).trim();
  const secondHalf = name.substring(middle, name.length).trim();

  if (firstHalf === secondHalf) {
    return firstHalf;
  }

  const splittedName = name.split(' ');
  const uniqueWordsInName = new Set(splittedName);
  if (uniqueWordsInName.size !== splittedName.length) {
    return Array.from(uniqueWordsInName).join(' ');
  }

  return name;
};

async function getOvertimeTrades(networkId){

  let overtimeMarketsTrades = await  thalesData.sportMarkets.marketTransactions({
    max:100,
    network:networkId
  });
  var startdate = new Date();
  var durationInMinutes = 30;
  startdate.setMinutes(startdate.getMinutes() - durationInMinutes);
  let startDateUnixTime = Math.floor(startdate.getTime());
  for (const overtimeMarketTrade of overtimeMarketsTrades) {
    if (startDateUnixTime < Number(overtimeMarketTrade.timestamp) && !writenOvertimeTrades.includes(overtimeMarketTrade.id)) {
      try {
        let specificMarket = await  thalesData.sportMarkets.markets({
          network:networkId,
          market:overtimeMarketTrade.market
        });
        let position = overtimeMarketTrade.position;
        let odds;

        let homeTeam =  await fixDuplicatedTeamName(specificMarket[0].homeTeam);
        let awayTeam  = await fixDuplicatedTeamName(specificMarket[0].awayTeam);

        if(specificMarket[0].tags[0]=="9100" || specificMarket[0].tags[0]=="9101"){
          homeTeam = titleCase(homeTeam);
          awayTeam  = titleCase(awayTeam)
        }

        if(position==0){
          if (specificMarket[0].betType && specificMarket[0].betType == 10002) {
            let totalPointsOvertime = Number(specificMarket[0].total)/100;
            totalPointsOvertime =  Math.round((totalPointsOvertime + Number.EPSILON) * 100) / 100
            position = "O("+totalPointsOvertime+")";
          } else if(ppMAP.has(Number(specificMarket[0].betType))){
            position = "O("+specificMarket[0].playerPropsLine+")";
          } else if (specificMarket[0].betType && specificMarket[0].betType == 10001) {
            var rounded = Math.round(Number(specificMarket[0].spread)/10)/10;
            position = "H1("+rounded+")";
          } else if (specificMarket[0].betType && specificMarket[0].betType == 10003){
            if(specificMarket[0].doubleChanceMarketType.toLowerCase().includes("hometeam")){
              position = "1X";
            }else if(specificMarket[0].doubleChanceMarketType.toLowerCase().includes("awayteam")) {
              position = "X2";
            }else {
              position = "12";
            }
          }
          else {
            position =  homeTeam;
          }

        }else if(position==1){
          if (specificMarket[0].betType && specificMarket[0].betType == 10002) {
            let totalPointsOvertime = Number(specificMarket[0].total)/100;
            totalPointsOvertime =  Math.round((totalPointsOvertime + Number.EPSILON) * 100) / 100
            position = "U("+totalPointsOvertime +")";
          }else if(ppMAP.has(Number(specificMarket[0].betType))){
            position = "U("+specificMarket[0].playerPropsLine+")";
          } else if (specificMarket[0].betType && specificMarket[0].betType == 10001) {
            var rounded = Math.round(Number(specificMarket[0].spread)/10)/10;
            position = "H2("+rounded+")";
          } else {
            position = awayTeam
          }
        }else{
          position = "Draw";
        }

        let marketMessage = ppMAP.has(Number(specificMarket[0].betType))? specificMarket[0].playerName+": "+ppMAP.get(Number(specificMarket[0].betType)) : homeTeam + " - " + awayTeam;

        let linkTransaction;
        if(networkId == 10 ){
          linkTransaction = "https://optimistic.etherscan.io/tx/"
        } else if(networkId == 8453){
          linkTransaction = "https://basescan.org/tx/";
        } else{
          linkTransaction = "https://arbiscan.io/tx/"
        }
        var message = new Discord.MessageEmbed()
            .addFields(
                {
                  name: "Overtime Market Trade",
                  value: "\u200b",
                },
                {
                  name: ":classical_building: Overtime market:",
                  value:
                      "[" +
                      marketMessage+
                      "](https://overtimemarkets.xyz/markets/" +
                      overtimeMarketTrade.market +
                      ")",
                },
                {
                  name: ":link: Transaction:",
                  value:
                      "[" +
                      overtimeMarketTrade.hash +
                      "](" + linkTransaction +
                      overtimeMarketTrade.hash +
                      ")",
                },
                {
                  name: ":coin: Transaction type:",
                  value: overtimeMarketTrade.type.toUpperCase(),
                },
                {
                  name: ":coin: Amount:",
                  value: overtimeMarketTrade.amount,
                },
                {
                  name: ":coin: Paid:",
                  value: "$"+overtimeMarketTrade.paid.toFixed(3),
                },
                {
                  name: ":coin: Position:",
                  value: position,
                },
                {
                  name: ":alarm_clock: Game time:",
                  value: new Date(specificMarket[0].maturityDate),
                },
                {
                  name: ":alarm_clock: Timestamp:",
                  value: new Date(overtimeMarketTrade.timestamp),
                }
            )
            .setColor("#0037ff");

        if(networkId == 10){
        if(Math.round(overtimeMarketTrade.amount)>500){
          let overtimeTrades = await clientNewListings.channels
              .fetch("1057735441870241932");
          await message.addFields(
            {
              name: ":coin: is Parlay AMM:",
              value: parlayAMMList.includes(overtimeMarketTrade.account.toLowerCase()),
            });
          overtimeTrades.send(message);
        } else{
          let overtimeTrades = await clientNewListings.channels
              .fetch("994914814419808346");
          overtimeTrades.send(message);
        }
        } else if(networkId == 8453){
          if(Math.round(overtimeMarketTrade.amount)>500){
            let overtimeTrades = await clientNewListings.channels
                .fetch("1154038984368984084");
            await message.addFields(
            {
              name: ":coin: is Parlay AMM:",
              value: parlayAMMList.includes(overtimeMarketTrade.account.toLowerCase()),
            });
            overtimeTrades.send(message);
          } else{
            let overtimeTrades = await clientNewListings.channels
                .fetch("1154038914563178586");
            overtimeTrades.send(message);
          }
        } else {
          if(Math.round(overtimeMarketTrade.amount)>500){
            let overtimeTrades = await clientNewListings.channels
                .fetch("1075367077940043867");
            await message.addFields(
            {
              name: ":coin: is Parlay AMM:",
              value: parlayAMMList.includes(overtimeMarketTrade.account.toLowerCase()),
            });
            overtimeTrades.send(message);
          } else{
            let overtimeTrades = await clientNewListings.channels
                .fetch("1075044402176725003");
            overtimeTrades.send(message);
          }
          totalAmountOvertimeARB = totalAmountOvertimeARB + Math.round(overtimeMarketTrade.paid);
          redisClient.set(totalAmountARBOvertimeKey, totalAmountOvertimeARB, function (err, reply) {
            console.log(reply); // OK
          });
        }
        writenOvertimeTrades.push(overtimeMarketTrade.id);
        redisClient.lpush(overtimeTradesKey, overtimeMarketTrade.id);
        totalAmountOfTradesOT = totalAmountOfTradesOT + Math.round(overtimeMarketTrade.paid);
        numberOfTradesOT++;
        redisClient.set(totalAmountOTKey, totalAmountOfTradesOT, function (err, reply) {
          console.log(reply); // OK
        });
        redisClient.set(totalTradesOTKey, numberOfTradesOT, function (err, reply) {
          console.log(reply); // OK
        });

        let newOvertimeAMMMessage ="";
        if(networkId == 10) {
          newOvertimeAMMMessage = overtimeMarketTrade.type.toUpperCase() === "BUY" ? 'New Overtime AMM position bought\n' : 'New Overtime AMM position sold\n';
        } else if(networkId == 8453){
          newOvertimeAMMMessage = overtimeMarketTrade.type.toUpperCase() === "BUY" ? 'New Overtime Base AMM position bought\n' : 'New Overtime Base AMM position sold\n';
        } else {
          newOvertimeAMMMessage = overtimeMarketTrade.type.toUpperCase() === "BUY" ? 'New Overtime Arbitrum AMM position bought\n' : 'New Overtime Arbitrum AMM position sold\n';
        }
         let potentialProfit = (overtimeMarketTrade.amount-overtimeMarketTrade.paid.toFixed(3))>0.51? Math.round(overtimeMarketTrade.amount-overtimeMarketTrade.paid.toFixed(3)): overtimeMarketTrade.amount-overtimeMarketTrade.paid.toFixed(3);
        newOvertimeAMMMessage = newOvertimeAMMMessage + marketMessage+'\n';
        newOvertimeAMMMessage = newOvertimeAMMMessage + 'Amount: '+ overtimeMarketTrade.amount+"\n";
        newOvertimeAMMMessage = newOvertimeAMMMessage + 'Paid: '+ overtimeMarketTrade.paid.toFixed(3)+' sUSD\n';
        newOvertimeAMMMessage = newOvertimeAMMMessage + 'Position: '+ position+'\n';
        newOvertimeAMMMessage = newOvertimeAMMMessage + 'Potential profit: '+potentialProfit+' sUSD ('+calculatePercentageProfit(overtimeMarketTrade.amount,Number(overtimeMarketTrade.paid.toFixed(3)))+'%)\n';

        let tweetV2PostTweetResult = await twitterClientOvertimeAMMMarket.v2.tweet(newOvertimeAMMMessage);


      } catch (e) {
        console.log("There was a problem while getting overtime trades",e);
      }
    }
  }
}


/*clientNewListings.on("message", (msg) => {
  if (msg.content.toLowerCase().startsWith("!syncovertime")) {
    syncOvertimeMarkets();
  }
});*/

async function syncOvertimeMarkets() {
  console.log("starting sync")
  let sportMarkets = await  thalesData.sportMarkets.markets({network:10});
  for (const sportMarket of sportMarkets) {
    try {
      writenOvertimeMarkets.set(sportMarket.id,getOvertimeMarketDTO(sportMarket));
      redisClient.set(overtimeMarketsKey, JSON.stringify([...writenOvertimeMarkets]), function () {
        console.log("added correctly map market")
      });
    } catch (e) {
      console.log("There was a problem while syncing overtime markets",e);
    }
  }

}


async function updateTotalOvertimeTrades() {
  try {
    clientOvertimeTrades.guilds.cache.forEach(function (value, key) {
      try {
        console.log("for guild "+value+" value is "+totalAmountOfTradesOT);
        value.members.cache
            .get(clientOvertimeTrades.user.id)
            .setNickname("OT Op="+getNumberLabelDecimals(totalAmountOfTradesOT)+"$");
      } catch (e) {
        console.log('error while updating amount of trades OT'+e);
      }
    });
    clientOvertimeTrades.user.setActivity(
        "Trades OT="+numberWithCommas(numberOfTradesOT),
        { type: "WATCHING" }
    );
  }catch (e) {
    console.log("there was an error while updating total OT");
  }
}

async function updateTotalOvertimeARBTrades() {
  try {
    clientOverTimeArbTotal.guilds.cache.forEach(function (value, key) {
      try {
        console.log("for guild "+value+" value is "+totalAmountOvertimeARB);
        value.members.cache
            .get(clientOverTimeArbTotal.user.id)
            .setNickname("OT Arb="+getNumberLabelDecimals(totalAmountOvertimeARB)+"$");
      } catch (e) {
        console.log('error while updating amount of trades OT'+e);
      }
    });
    clientOverTimeArbTotal.user.setActivity(
        "ARB OT Total Vol",
        { type: "WATCHING" }
    );
  }catch (e) {
    console.log("there was an error while updating total OT");
  }
}

async function getArbitrumTrades() {

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
      "https://api.thegraph.com/subgraphs/name/thales-markets/thales-arbitrum",
      {
        method: "POST",
        body,
      }
  );
  const json = await response.json();
  const arbitrumTrades = json.data.trades;
  var startdate = new Date();
  var durationInMinutes = 30;
  startdate.setMinutes(startdate.getMinutes() - durationInMinutes);
  let startDateUnixTime = Math.floor(startdate.getTime()/1000);
  for (const arbitrumTrade of arbitrumTrades) {
      if (startDateUnixTime < Number(arbitrumTrade.timestamp) && !writenArbitrumTrades.includes(arbitrumTrade.transactionHash)) {
    try{
      console.log("new arbitrum trade");
      var shortLong;
      const makerToken = new web3Arbitrum.eth.Contract(arbitrumContract, arbitrumTrade.makerToken);
      const makerTokenName = await makerToken.methods.name().call();
      const takerToken = new web3Arbitrum.eth.Contract(arbitrumContract, arbitrumTrade.takerToken);
      const takerTokenName = await takerToken.methods.name().call();
      var amountUSD;
      var amountShortLong;
      var isLong = false;
      var isBuy = false;
      var isRanged = false;
      var makerTokenNamesArray = makerTokenName.split(" ");
      const lowerMakerTokenNamesArray = makerTokenNamesArray.map(element => {
        return element.toLowerCase();
      });

      var takerTokenNamesArray = takerTokenName.split(" ");
      const lowerTakerTokenNamesArray = takerTokenNamesArray.map(element => {
        return element.toLowerCase();
      });


      if (
          lowerMakerTokenNamesArray.includes("in") ||
          lowerMakerTokenNamesArray.includes("out")
      ){
        amountShortLong = arbitrumTrade.makerAmount/1e18;
        amountUSD = arbitrumTrade.takerAmount / 1e6;
        isRanged = true;
      }else if(lowerTakerTokenNamesArray.includes("in") ||
          lowerTakerTokenNamesArray.includes("out")){
        isRanged = true;
        amountUSD =arbitrumTrade.makerAmount / 1e6;
        amountShortLong = arbitrumTrade.takerAmount / 1e18;
      }else if (
          lowerMakerTokenNamesArray.includes("up") ||
          lowerMakerTokenNamesArray.includes("down")
      ) {
        if (lowerMakerTokenNamesArray.includes("up")) {
          shortLong = " > ";
          isLong = true;
        } else {
          shortLong = " < ";
          isLong = false;
        }
        amountShortLong = arbitrumTrade.makerAmount/1e18;
        amountUSD = arbitrumTrade.takerAmount / 1e6;
        isBuy = true;
      } else {
        if (lowerTakerTokenNamesArray.includes("up")) {
          shortLong = " > ";
          isLong = true;
        } else {
          shortLong = " < ";
          isLong = false;
        }

        amountUSD =arbitrumTrade.makerAmount / 1e6;
        amountShortLong = arbitrumTrade.takerAmount / 1e18;
        shortLong = takerTokenName.toLowerCase().includes("up") ? " > " : " < ";
      }

      if(isRanged){

        let rangedMarket = await  getRangedMarketArbitrum(arbitrumTrade);
        var marketMessage =
            web3.utils.hexToAscii(rangedMarket.currencyKey).replace(/\0/g, '') +
            " "+arbitrumTrade.optionSide.toUpperCase() + " > $"+
            Math.round(((rangedMarket.leftPrice/1e18) + Number.EPSILON) * 1000) / 1000+" < $"+Math.round(((rangedMarket.rightPrice/1e18) + Number.EPSILON) * 1000) / 1000;
        let discordMarketMessage
        discordMarketMessage =
            marketMessage +
            "@" +
            new Date(rangedMarket.maturityDate*1000).toISOString().slice(0, 10);


        var message = new Discord.MessageEmbed()
            .addFields(
                {
                  name: ":lock: New Arbitrum Ranged Market Thales Trade :lock:",
                  value: "\u200b",
                },
                {
                  name: ":link: Transaction:",
                  value:
                      "[" +
                      arbitrumTrade.transactionHash +
                      "](https://arbiscan.io/tx/" +
                      arbitrumTrade.transactionHash +
                      ")",
                },
                {
                  name: ":coin: Transaction type:",
                  value: arbitrumTrade.orderSide.toUpperCase(),
                },
                {
                  name: ":classical_building: Market:",
                  value:
                      "[" +
                      discordMarketMessage +
                      "](https://thalesmarket.io/markets/" +
                      arbitrumTrade.market +
                      ")",
                },
                {
                  name: ":dollar: "+arbitrumTrade.optionSide.toUpperCase()+" tokens",
                  value: parseFloat((amountShortLong).toFixed(3)),
                },
                {
                  name: ":dollar: Total:",
                  value: parseFloat((amountUSD).toFixed(3)) + " sUSD",
                },
                {
                  name: ":alarm_clock: Timestamp:",
                  value: new Date(arbitrumTrade.timestamp*1000),
                }
            )
            .setColor("#0037ff");
        let newRangeTradeMessage = arbitrumTrade.orderSide.toUpperCase()=="BUY" ? 'New Arbitrum Ranged Market position bought\n' : 'New Arbitrum Ranged Market position sold\n';
        var date = new Date(arbitrumTrade.timestamp*1000);

        newRangeTradeMessage = newRangeTradeMessage + 'Condition: '+marketMessage+'\n';
        let amountAMM = parseFloat((amountShortLong).toFixed(3));
        let paidAMM = parseFloat((amountUSD).toFixed(3));
        let potentialProfit = (amountAMM-paidAMM)>0.51? Math.round(amountAMM-paidAMM): amountAMM-paidAMM;
        newRangeTradeMessage = newRangeTradeMessage + 'Maturity date: '+new Date(rangedMarket.maturityDate*1000).toISOString().slice(0, 10)+'\n';
        newRangeTradeMessage = newRangeTradeMessage + 'Amount: '+parseFloat((amountShortLong).toFixed(3))+' '+arbitrumTrade.optionSide.toUpperCase()+' tokens\n';
        newRangeTradeMessage = newRangeTradeMessage + 'Paid: '+parseFloat((amountUSD).toFixed(3))+' sUSD\n';
        newRangeTradeMessage = newRangeTradeMessage + 'Potential profit: '+potentialProfit+' sUSD ('+calculateProfitPercentageTotal(paidAMM,amountAMM)+'%)\n';

       // let tweetV2PostTweetResult = await twitterClientAMMMarket.v2.tweet(newRangeTradeMessage);

        clientNewListings.channels
            .fetch("1017059106093281400")
            .then((ammTradesChannel) => {
              ammTradesChannel.send(message);
            });

      }
      else {
        let market = await getArbitrumMarket(arbitrumTrade);

        var marketMessage =
            web3.utils.hexToAscii(market.currencyKey).replace(/\0/g, '') +
            shortLong +
            Math.round(((market.strikePrice / 1e18) + Number.EPSILON) * 1000) / 1000;
        marketMessage =
            marketMessage +
            "@" +
            new Date(market.maturityDate * 1000).toISOString().slice(0, 10);

        let messageTitle;
        messageTitle = ":lock: New Arbitrum Amm Thales Trade :lock:"


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
                      arbitrumTrade.transactionHash +
                      "](https://arbiscan.io/tx/" +
                      arbitrumTrade.transactionHash +
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
                      arbitrumTrade.market +
                      ")",
                },
                {
                  name: isLong ? ":dollar: UP tokens" : ":dollar: DOWN tokens",
                  value: parseFloat((amountShortLong).toFixed(3)),
                },
                {
                  name: ":dollar: Total:",
                  value: parseFloat((amountUSD).toFixed(3)) + " USDC",
                },
                {
                  name: ":alarm_clock: Timestamp:",
                  value: new Date(arbitrumTrade.timestamp * 1000),
                }
            )
            .setColor("#0037ff");

        if(parseFloat((amountUSD).toFixed(3))>1000){
        clientNewListings.channels
            .fetch("1143886623289909388")
            .then((ammTradesChannel) => {
              ammTradesChannel.send(message);
            });
        } else {
          clientNewListings.channels
              .fetch("1017058994973573153")
              .then((ammTradesChannel) => {
                ammTradesChannel.send(message);
              });
        }

        let newAMMTradeMessage = isBuy ? 'New Arbitrum AMM position bought\n' : 'New Arbitrum AMM position sold\n';
        var date = new Date(arbitrumTrade.timestamp * 1000);

        newAMMTradeMessage = newAMMTradeMessage + 'Condition: ' + marketMessage + '\n';
        let downOrUP;
        if (isLong) {
          downOrUP = 'UP';
        } else {
          downOrUP = 'DOWN';
        }
        ;
        let amountAMM = parseFloat((amountShortLong).toFixed(3));
        let paidAMM = parseFloat((amountUSD).toFixed(3));
        let potentialProfit = (amountAMM - paidAMM) > 0.51 ? Math.round(amountAMM - paidAMM) : amountAMM - paidAMM;
        newAMMTradeMessage = newAMMTradeMessage + 'Amount: ' + parseFloat((amountShortLong).toFixed(3)) + ' ' + downOrUP + ' tokens\n';
        newAMMTradeMessage = newAMMTradeMessage + 'Paid: ' + parseFloat((amountUSD).toFixed(3)) + ' USDC\n';
        newAMMTradeMessage = newAMMTradeMessage + 'Potential profit: ' + potentialProfit + ' USDC (' + calculateProfitPercentageTotal(paidAMM, amountAMM) + '%)\n';
        //let tweetV2PostTweetResult = await twitterClientAMMMarket.v2.tweet(newAMMTradeMessage);
      }
      writenArbitrumTrades.push(arbitrumTrade.transactionHash);
      redisClient.lpush(arbitrumTradesKey, arbitrumTrade.transactionHash);
      totalAmountOfTradesARB = totalAmountOfTradesARB + Math.round(amountUSD);
      numberOfTradesARB++;
      redisClient.set(totalAmountARBKey, totalAmountOfTradesARB, function (err, reply) {
        console.log(reply); // OK
      });
      redisClient.set(totalTradesARBKey, numberOfTradesARB, function (err, reply) {
        console.log(reply); // OK
      });
    }catch (e) {
      console.log("error in arbitrum trades "+e);
    }
    }
  }

}

async function  getArbitrumMarket(tradeL2) {

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
      "https://api.thegraph.com/subgraphs/name/thales-markets/thales-arbitrum",
      {
        method: "POST",
        body,
      }
  );

  const json = await response.json();
  const markets = json.data.markets;

  return markets[0];
}

async function  getRangedMarketArbitrum(tradeL2) {

  const body = JSON.stringify({
    query: `{rangedMarkets(where:{
    id: "${tradeL2.market}"
  }) {
    id
    timestamp
    currencyKey
    maturityDate
    expiryDate
    leftPrice
    rightPrice
    rightMarket{
    id
    strikePrice
      currencyKey
      maturityDate
      expiryDate
    }
    leftMarket{
      id
    strikePrice
      currencyKey
      maturityDate
      expiryDate
    }
    
  }}`,
    variables: null,
  });

  const response = await fetch(
      "https://api.thegraph.com/subgraphs/name/thales-markets/thales-arbitrum",
      {
        method: "POST",
        body,
      }
  );

  const json = await response.json();
  const markets = json.data.rangedMarkets;

  return markets[0];
}

async function getBSCTrades() {

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
      "https://api.thegraph.com/subgraphs/name/thales-markets/thales-bsc",
      {
        method: "POST",
        body,
      }
  );
  const json = await response.json();
  const bscTrades = json.data.trades;
  var startdate = new Date();
  var durationInMinutes = 30;
  startdate.setMinutes(startdate.getMinutes() - durationInMinutes);
  let startDateUnixTime = Math.floor(startdate.getTime()/1000);
  for (const bscTrade of bscTrades) {
    if (startDateUnixTime < Number(bscTrade.timestamp) && !writenBSCTrades.includes(bscTrade.transactionHash)) {
    try{
      console.log("new bsc trade");
      var shortLong;
      const makerToken = new web3BSC.eth.Contract(bscContract, bscTrade.makerToken);
      const makerTokenName = await makerToken.methods.name().call();
      const takerToken = new web3BSC.eth.Contract(bscContract, bscTrade.takerToken);
      const takerTokenName = await takerToken.methods.name().call();
      var amountUSD;
      var amountShortLong;
      var isLong = false;
      var isBuy = false;
      var isRanged = false;
      var makerTokenNamesArray = makerTokenName.split(" ");
      const lowerMakerTokenNamesArray = makerTokenNamesArray.map(element => {
        return element.toLowerCase();
      });

      var takerTokenNamesArray = takerTokenName.split(" ");
      const lowerTakerTokenNamesArray = takerTokenNamesArray.map(element => {
        return element.toLowerCase();
      });


      if (
          lowerMakerTokenNamesArray.includes("in") ||
          lowerMakerTokenNamesArray.includes("out")
      ){
        amountShortLong = bscTrade.makerAmount/1e18;
        amountUSD = bscTrade.takerAmount / 1e18;
        isRanged = true;
      }else if(lowerTakerTokenNamesArray.includes("in") ||
          lowerTakerTokenNamesArray.includes("out")){
        isRanged = true;
        amountUSD =bscTrade.makerAmount / 1e18;
        amountShortLong = bscTrade.takerAmount / 1e18;
      }else if (
          lowerMakerTokenNamesArray.includes("up") ||
          lowerMakerTokenNamesArray.includes("down")
      ) {
        if (lowerMakerTokenNamesArray.includes("up")) {
          shortLong = " > ";
          isLong = true;
        } else {
          shortLong = " < ";
          isLong = false;
        }
        amountShortLong = bscTrade.makerAmount/1e18;
        amountUSD = bscTrade.takerAmount / 1e18;
        isBuy = true;
      } else {
        if (lowerTakerTokenNamesArray.includes("up")) {
          shortLong = " > ";
          isLong = true;
        } else {
          shortLong = " < ";
          isLong = false;
        }

        amountUSD =bscTrade.makerAmount / 1e18;
        amountShortLong = bscTrade.takerAmount / 1e18;
        shortLong = takerTokenName.toLowerCase().includes("up") ? " > " : " < ";
      }

      if(isRanged){

        let rangedMarket = await  getRangedMarketBSC(bscTrade);
        var marketMessage =
            web3.utils.hexToAscii(rangedMarket.currencyKey).replace(/\0/g, '') +
            " "+bscTrade.optionSide.toUpperCase() + " > $"+
            Math.round(((rangedMarket.leftPrice/1e18) + Number.EPSILON) * 1000) / 1000+" < $"+Math.round(((rangedMarket.rightPrice/1e18) + Number.EPSILON) * 1000) / 1000;
        let discordMarketMessage
        discordMarketMessage =
            marketMessage +
            "@" +
            new Date(rangedMarket.maturityDate*1000).toISOString().slice(0, 10);


        var message = new Discord.MessageEmbed()
            .addFields(
                {
                  name: ":lock: New BSC Ranged Market Thales Trade :lock:",
                  value: "\u200b",
                },
                {
                  name: ":link: Transaction:",
                  value:
                      "[" +
                      bscTrade.transactionHash +
                      "](https://bscscan.com/tx/" +
                      bscTrade.transactionHash +
                      ")",
                },
                {
                  name: ":coin: Transaction type:",
                  value: bscTrade.orderSide.toUpperCase(),
                },
                {
                  name: ":classical_building: Market:",
                  value:
                      "[" +
                      discordMarketMessage +
                      "](https://thalesmarket.io/markets/" +
                      bscTrade.market +
                      ")",
                },
                {
                  name: ":dollar: "+bscTrade.optionSide.toUpperCase()+" tokens",
                  value: parseFloat((amountShortLong).toFixed(3)),
                },
                {
                  name: ":dollar: Total:",
                  value: parseFloat((amountUSD).toFixed(3)) + " sUSD",
                },
                {
                  name: ":alarm_clock: Timestamp:",
                  value: new Date(bscTrade.timestamp*1000),
                }
            )
            .setColor("#0037ff");
        let newRangeTradeMessage = bscTrade.orderSide.toUpperCase()=="BUY" ? 'New BSC Ranged Market position bought\n' : 'New BSC Ranged Market position sold\n';
        var date = new Date(bscTrade.timestamp*1000);

        newRangeTradeMessage = newRangeTradeMessage + 'Condition: '+marketMessage+'\n';
        let amountAMM = parseFloat((amountShortLong).toFixed(3));
        let paidAMM = parseFloat((amountUSD).toFixed(3));
        let potentialProfit = (amountAMM-paidAMM)>0.51? Math.round(amountAMM-paidAMM): amountAMM-paidAMM;
        newRangeTradeMessage = newRangeTradeMessage + 'Maturity date: '+new Date(rangedMarket.maturityDate*1000).toISOString().slice(0, 10)+'\n';
        newRangeTradeMessage = newRangeTradeMessage + 'Amount: '+parseFloat((amountShortLong).toFixed(3))+' '+bscTrade.optionSide.toUpperCase()+' tokens\n';
        newRangeTradeMessage = newRangeTradeMessage + 'Paid: '+parseFloat((amountUSD).toFixed(3))+' sUSD\n';
        newRangeTradeMessage = newRangeTradeMessage + 'Potential profit: '+potentialProfit+' sUSD ('+calculateProfitPercentageTotal(paidAMM,amountAMM)+'%)\n';

        //let tweetV2PostTweetResult = await twitterClientAMMMarket.v2.tweet(newRangeTradeMessage);

         clientNewListings.channels
             .fetch("1017059039085068308")
             .then((ammTradesChannel) => {
                 ammTradesChannel.send(message);
             });

      }
      else {
        let market = await getBSCMarket(bscTrade);

        var marketMessage =
            web3.utils.hexToAscii(market.currencyKey).replace(/\0/g, '') +
            shortLong +
            Math.round(((market.strikePrice / 1e18) + Number.EPSILON) * 1000) / 1000;
        marketMessage =
            marketMessage +
            "@" +
            new Date(market.maturityDate * 1000).toISOString().slice(0, 10);

        let messageTitle;
        messageTitle = ":lock: New BSC Amm Thales Trade :lock:"


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
                      bscTrade.transactionHash +
                      "](https://bscscan.com/tx/" +
                      bscTrade.transactionHash +
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
                      bscTrade.market +
                      ")",
                },
                {
                  name: isLong ? ":dollar: UP tokens" : ":dollar: DOWN tokens",
                  value: parseFloat((amountShortLong).toFixed(3)),
                },
                {
                  name: ":dollar: Total:",
                  value: parseFloat((amountUSD).toFixed(3)) + " USDC",
                },
                {
                  name: ":alarm_clock: Timestamp:",
                  value: new Date(bscTrade.timestamp * 1000),
                }
            )
            .setColor("#0037ff");
         clientNewListings.channels
              .fetch("1017058966842384394")
              .then((ammTradesChannel) => {
                  ammTradesChannel.send(message);
              });


        let newAMMTradeMessage = isBuy ? 'New BSC AMM position bought\n' : 'New BSC AMM position sold\n';
        var date = new Date(bscTrade.timestamp * 1000);

        newAMMTradeMessage = newAMMTradeMessage + 'Condition: ' + marketMessage + '\n';
        let downOrUP;
        if (isLong) {
          downOrUP = 'UP';
        } else {
          downOrUP = 'DOWN';
        }
        ;
        let amountAMM = parseFloat((amountShortLong).toFixed(3));
        let paidAMM = parseFloat((amountUSD).toFixed(3));
        let potentialProfit = (amountAMM - paidAMM) > 0.51 ? Math.round(amountAMM - paidAMM) : amountAMM - paidAMM;
        newAMMTradeMessage = newAMMTradeMessage + 'Amount: ' + parseFloat((amountShortLong).toFixed(3)) + ' ' + downOrUP + ' tokens\n';
        newAMMTradeMessage = newAMMTradeMessage + 'Paid: ' + parseFloat((amountUSD).toFixed(3)) + ' USDC\n';
        newAMMTradeMessage = newAMMTradeMessage + 'Potential profit: ' + potentialProfit + ' USDC (' + calculateProfitPercentageTotal(paidAMM, amountAMM) + '%)\n';
      //  let tweetV2PostTweetResult = await twitterClientAMMMarket.v2.tweet(newAMMTradeMessage);
      }
        writenBSCTrades.push(bscTrade.transactionHash);
        redisClient.lpush(bscTradesKey, bscTrade.transactionHash);
      totalAmountOfTradesBSC = totalAmountOfTradesBSC + Math.round(amountUSD);
      numberOfTradesBSC++;
      redisClient.set(totalAmountBSCKey, totalAmountOfTradesBSC, function (err, reply) {
        console.log(reply); // OK
      });
      redisClient.set(totalTradesBSCKey, numberOfTradesBSC, function (err, reply) {
        console.log(reply); // OK
      });
    }
    catch (e) {
      console.log("error in bsc trades "+e);
    }
    }
  }

}

async function  getBSCMarket(tradeL2) {

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
      "https://api.thegraph.com/subgraphs/name/thales-markets/thales-bsc",
      {
        method: "POST",
        body,
      }
  );

  const json = await response.json();
  const markets = json.data.markets;

  return markets[0];
}

async function  getRangedMarketBSC(tradeL2) {

  const body = JSON.stringify({
    query: `{rangedMarkets(where:{
    id: "${tradeL2.market}"
  }) {
    id
    timestamp
    currencyKey
    maturityDate
    expiryDate
    leftPrice
    rightPrice
    rightMarket{
    id
    strikePrice
      currencyKey
      maturityDate
      expiryDate
    }
    leftMarket{
      id
    strikePrice
      currencyKey
      maturityDate
      expiryDate
    }
    
  }}`,
    variables: null,
  });

  const response = await fetch(
      "https://api.thegraph.com/subgraphs/name/thales-markets/thales-bsc",
      {
        method: "POST",
        body,
      }
  );

  const json = await response.json();
  const markets = json.data.rangedMarkets;

  return markets[0];
}

async function updateTotalARBTrades() {
  try {
    clientARBTrades.guilds.cache.forEach(function (value, key) {
      try {
        console.log("for guild "+value+" value is "+totalAmountOfTradesARB);
        value.members.cache
            .get(clientARBTrades.user.id)
            .setNickname("Arbitrum="+getNumberLabelDecimals(totalAmountOfTradesARB)+"$");
      } catch (e) {
        console.log('error while updating amount of trades ARB'+e);
      }
    });
    clientARBTrades.user.setActivity(
        "Trades ARB="+numberWithCommas(numberOfTradesARB),
        { type: "WATCHING" }
    );
  }catch (e) {
    console.log("there was an error while updating total ARB");
  }
}

async function updateTotalBSCTrades() {
  try {
    clientBSCTrades.guilds.cache.forEach(function (value, key) {
      try {
        console.log("for guild "+value+" value is "+totalAmountOfTradesBSC);
        value.members.cache
            .get(clientBSCTrades.user.id)
            .setNickname("BSC="+getNumberLabelDecimals(totalAmountOfTradesBSC)+"$");
      } catch (e) {
        console.log('error while updating amount of trades BSC'+e);
      }
    });
    clientBSCTrades.user.setActivity(
        "Trades BSC="+numberOfTradesBSC,
        { type: "WATCHING" }
    );
  }catch (e) {
    console.log("there was an error while updating total BSC");
  }
}


async function getParlayMessage(parlayPosition) {
  let specificMarket = parlayPosition.market;
  let position = parlayPosition.side;
  let homeTeam =  await fixDuplicatedTeamName(specificMarket.homeTeam);
  let awayTeam  = await fixDuplicatedTeamName(specificMarket.awayTeam);
  let odds;
  if (specificMarket.betType && specificMarket.betType == 10003) {
    if(specificMarket.doubleChanceMarketType.toLowerCase().includes("hometeam")){
      position = "1X";
    }else if(specificMarket.doubleChanceMarketType.toLowerCase().includes("awayteam")) {
      position = "X2";
    }else {
      position = "12";
    }
    odds = Math.round((((1 / (specificMarket.homeOdds / 1e18))) + Number.EPSILON) * 100) / 100;
  }
  else if(position=="home"){
      if (specificMarket.betType && specificMarket.betType == 10002) {
        let totalPointsOvertime = Number(specificMarket.total)/100;
        totalPointsOvertime =  Math.round((totalPointsOvertime + Number.EPSILON) * 100) / 100
        position = "O("+totalPointsOvertime+")";
      } else if(ppMAP.has(Number(specificMarket.betType))){
        position = "O("+specificMarket.playerPropsLine+")";
      }else if (specificMarket.betType && specificMarket.betType == 10001) {
        var rounded = Math.round(Number(specificMarket.spread)/10)/10;
        position = "H1("+rounded+")";
      } else {
        position = "1";
      }
      odds = Math.round((((1 / (specificMarket.homeOdds / 1e18))) + Number.EPSILON) * 100) / 100;
    } else if (position == "away") {
      if (specificMarket.betType && specificMarket.betType == 10002) {
        let totalPointsOvertime = Number(specificMarket.total)/100;
        totalPointsOvertime =  Math.round((totalPointsOvertime + Number.EPSILON) * 100) / 100
        position = "U("+totalPointsOvertime+")";
      } else if(ppMAP.has(Number(specificMarket.betType))){
        position = "U("+specificMarket.playerPropsLine+")";
      }else if (specificMarket.betType && specificMarket.betType == 10001) {
        var rounded = Math.round(Number(specificMarket.spread)/10)/10;
        position = "H2("+rounded+")";
      } else {
        position = "2";
      }
      odds = Math.round((((1 / (specificMarket.awayOdds / 1e18))) + Number.EPSILON) * 100) / 100;
    } else {
      position = "X";
      odds = Math.round((((1 / (specificMarket.drawOdds / 1e18))) + Number.EPSILON) * 100) / 100;
    }

  return ppMAP.has(Number(specificMarket.betType))? specificMarket.playerName+": "+ppMAP.get(Number(specificMarket.betType)) : homeTeam + " - " + awayTeam + " @ " + position+ " - "+odds +"\n";
}


async function getOvertimeParlays(networkId){
  let overtimeMarketParlays = await  thalesData.sportMarkets.parlayMarkets({
    network:networkId,
    max:100
  });
  var startdate = new Date();
  var durationInMinutes = 30;
  startdate.setMinutes(startdate.getMinutes() - durationInMinutes);
  let startDateUnixTime = Math.floor(startdate.getTime());
  for (const overtimeMarketParlay of overtimeMarketParlays) {
    if (startDateUnixTime < Number(overtimeMarketParlay.timestamp) && !writenOvertimeParlays.includes(overtimeMarketParlay.txHash)) {
      try {
        let linkAccount ;
        let linkTransaction;
        if(networkId == 10 ){
          linkAccount = "https://optimistic.etherscan.io/address/"
          linkTransaction = "https://optimistic.etherscan.io/tx/"
        } else if(networkId == 8453){
          linkAccount = "https://basescan.org/address/"
          linkTransaction = "https://basescan.org/tx"
        }  else{
          linkAccount = "https://arbiscan.io/address/"
          linkTransaction = "https://arbiscan.io/tx/"
        }
        var message = new Discord.MessageEmbed()
            .addFields(
                {
                  name: "Overtime Market Parlay",
                  value: "\u200b",
                },
                {
                  name: ":link: Account",
                  value:
                      "[" +
                      overtimeMarketParlay.account +
                      "](" + linkAccount +
                      overtimeMarketParlay.account +
                      ")",
                },
                {
                  name: ":link: Transaction:",
                  value:
                      "[" +
                      overtimeMarketParlay.txHash +
                      "](" + linkTransaction +
                      overtimeMarketParlay.txHash +
                      ")",
                }
            )
            .setColor("#0037ff");
        let parlayMessage="";
        for (const overtimeMarketParlayPosition of overtimeMarketParlay.positions) {
          parlayMessage =  parlayMessage + await getParlayMessage(overtimeMarketParlayPosition) + "\n"
        }
        await message.addFields(
            {
              name: ":coin: Positions:",
              value: parlayMessage,
            },
            {
              name: ":coin: Total Quote:",
              value: Math.round(((1 / overtimeMarketParlay.totalQuote) + Number.EPSILON) * 100) / 100,
            },
            {
              name: ":coin: Amount:",
              value: overtimeMarketParlay.totalAmount.toFixed(3),
            },
            {
              name: ":coin: Paid:",
              value: "$"+overtimeMarketParlay.sUSDPaid.toFixed(3),
            },
            {
              name: ":alarm_clock: Timestamp:",
              value: new Date(overtimeMarketParlay.timestamp),
            });

        if(networkId == 10){
        if(Math.round(overtimeMarketParlay.sUSDPaid)>1000){
          let overtimeParlaysChannel = await clientNewListings.channels
              .fetch("1057735441870241932");
          await message.addFields(
            {
              name: ":coin: is Parlay AMM:",
              value: parlayAMMList.includes(overtimeMarketParlay.account.toLowerCase()),
            });
          overtimeParlaysChannel.send(message);
        } else{
          let overtimeParlaysChannel = await clientNewListings.channels
              .fetch("1039875869927280711");
          overtimeParlaysChannel.send(message);
        }
        } else if(networkId == 8453){
          if(Math.round(overtimeMarketParlay.sUSDPaid)>1000){
            let overtimeParlaysChannel = await clientNewListings.channels
                .fetch("1155009733049188415");
            overtimeParlaysChannel.send(message);
          } else{
            let overtimeParlaysChannel = await clientNewListings.channels
                .fetch("1154039064387924099");
            overtimeParlaysChannel.send(message);
          }
        } else {
          if(Math.round(overtimeMarketParlay.sUSDPaid)>1000){
            let overtimeParlaysChannel = await clientNewListings.channels
                .fetch("1075367077940043867");
            await message.addFields(
            {
              name: ":coin: is Parlay AMM:",
              value: parlayAMMList.includes(overtimeMarketParlay.account.toLowerCase()),
            });
            overtimeParlaysChannel.send(message);
          } else{
            let overtimeParlaysChannel = await clientNewListings.channels
                .fetch("1075044441712250890");
            overtimeParlaysChannel.send(message);
          }
          totalAmountOvertimeARB = totalAmountOvertimeARB + Math.round(overtimeMarketParlay.sUSDPaid);
          redisClient.set(totalAmountARBOvertimeKey, totalAmountOvertimeARB, function (err, reply) {
            console.log(reply); // OK
          });
        }
        writenOvertimeParlays.push(overtimeMarketParlay.txHash);
        redisClient.lpush(overtimeParlaysKey, overtimeMarketParlay.txHash);
        totalAmountOfTradesOT = totalAmountOfTradesOT + Math.round(overtimeMarketParlay.sUSDPaid);
        numberOfTradesOT++;
        redisClient.set(totalAmountOTKey, totalAmountOfTradesOT, function (err, reply) {
          console.log(reply); // OK
        });
        redisClient.set(totalTradesOTKey, numberOfTradesOT, function (err, reply) {
          console.log(reply); // OK
        });
        let newOvertimeParlayMessage ='New Overtime Market Parlay\n';
        let potentialProfit = (overtimeMarketParlay.totalAmount-overtimeMarketParlay.sUSDPaid.toFixed(3))>0.51? Math.round(overtimeMarketParlay.totalAmount-overtimeMarketParlay.sUSDPaid.toFixed(3)): overtimeMarketParlay.totalAmount-overtimeMarketParlay.sUSDPaid.toFixed(3);
        newOvertimeParlayMessage = newOvertimeParlayMessage + 'Paid: '+ "$"+overtimeMarketParlay.sUSDPaid.toFixed(3)+'\n';
        newOvertimeParlayMessage = newOvertimeParlayMessage + 'Positions:\n'+ parlayMessage;
        newOvertimeParlayMessage = newOvertimeParlayMessage + 'Potential profit: '+potentialProfit+' sUSD ('+calculatePercentageProfit(overtimeMarketParlay.totalAmount,Number(overtimeMarketParlay.sUSDPaid.toFixed(3)))+'%)\n';

        let tweetV2PostTweetResult = await twitterClientOvertimeAMMMarket.v2.tweet(newOvertimeParlayMessage);


      } catch (e) {
        console.log("There was a problem while getting overtime parlays",e);
      }
    }
  }
}



function sendTriviaValidationErrorMessage(triviaDTO, msg) {
  var messageEmbed = new Discord.MessageEmbed()
      .addFields(
          {
            name: 'Trivia Error',
            value: "Your trivia json format is not okay for type: " + triviaDTO.type
          }
      ).setColor("#d32222");
  msg.channel.send(messageEmbed);
}
function sentTriviaAddedSuccessMessage(triviaDTO, msg) {
  var messageEmbed = new Discord.MessageEmbed()
      .addFields(
          {
            name: 'Trivia added',
            value: "Your trivia was added for type: " + triviaDTO.type
          }
      ).setColor("#224ed3");
  msg.channel.send(messageEmbed);
}

async function sendFirstToAnswerQuestion(triviaDTO) {
  var messageEmbed = new Discord.MessageEmbed()
      .addFields(
          {
            name: 'First to answer question: ',
            value: triviaDTO.question
          },
          {
            name: 'Reward',
            value: triviaDTO.reward
          }
      ).setColor("#22d325");
  let firstAnswerChannel = await triviaBot.channels
      .fetch(firstToAnswerChannelId);
  firstAnswerChannel.send(messageEmbed);
}

function saveParticipantAnswerToTrivia(triviaDTO, user, reaction) {
  let triviaStringList = new Array();
  for (const trivia of triviaList) {
    if (triviaDTO.questionNumber == trivia.questionNumber) {
      let answerNumber;
      for (var entry of numberEmojis.entries()) {
        var key = entry[0],
            value = entry[1];
        if(value==reaction.emoji.name){
          answerNumber = key;
        }
      }

      if (trivia.answers) {
        trivia.answers.set(user.id, answerNumber);
      } else {
        trivia.answers = new Map();
        trivia.answers.set(user.id, answerNumber);
      }
    }
    triviaStringList.push(JSON.stringify(trivia,replacer));
  }
  redisClient.del(triviaKey);
  console.log("trivia stirng after submiting answers "+triviaStringList);
  redisClient.lpush(triviaKey, triviaStringList);
}


async function sendMultichoiceMessage(triviaDTO, msg) {
  let buttonsList = new Array();
  var messageEmbed = new Discord.MessageEmbed()
      .addFields(
          {
            name: 'Multichoice question: ',
            value: triviaDTO.question
          }
      ).setColor("#0500fd");
  let br = 1;
  let choicesString = "";
  for (const choice of triviaDTO.choices) {
    choicesString = choicesString + " " + br + ") " + choice + "\n";
    br++;
  }
  messageEmbed.addFields(
      {
        name: "Possible choices:",
        value: choicesString,
      }, {
        name: ":coin: Points:",
        value: triviaDTO.points,
      }, {
        name: "Time to answer:",
        value: triviaDTO.time+" minutes",
      });
  let firstAnswerChannel = await triviaBot.channels
      .fetch(multichoiceChannelId);
  let messageSent = await firstAnswerChannel.send(messageEmbed);
  br = 1;
  for (const choice of triviaDTO.choices) {
    await messageSent.react(numberEmojis.get(br));
    console.log("react is "+numberEmojis.get(br));
    br++;
  }
  const values = [...numberEmojis.values()];
  const filter = (reaction, user) => {
    return values.includes(reaction.emoji.name) && triviaParticipants.includes(user.id);
  };
  let timeToAnswerInMiliseconds = Number(triviaDTO.time) * 60 * 1000;
  const collector = messageSent.createReactionCollector(filter, { time: timeToAnswerInMiliseconds  });
  triviaDTO.timestamp = Date.now();
  triviaDTO.active = true;
  triviaDTO.isAnswered = false;
  let triviaJson = JSON.stringify(triviaDTO);
  let isAdded = false;
  let triviaStringList = new Array();
  for (let trivia of triviaList) {
    if(trivia.questionNumber == triviaDTO.questionNumber){
      trivia = triviaDTO;
      isAdded = true;
      triviaStringList.push(JSON.stringify(trivia));
    }
  }
  if(!isAdded){
    triviaList.push(triviaDTO);
    triviaStringList.push(JSON.stringify(triviaDTO));
  }

  redisClient.del(triviaKey);
  redisClient.lpush(triviaKey, triviaStringList);


  collector.on('collect', (reaction, user) => {
    console.log(`Collected ${reaction.emoji.name} from ${user.tag}`);
    saveParticipantAnswerToTrivia(triviaDTO, user, reaction);
  });

  collector.on('end', collected => {
    console.log(`Collected ${collected.size} items`);
    messageEmbed.setColor("#ff4600");
    messageSent.edit(messageEmbed);
  });
}


function addPointsToUser(key, points) {

  if(triviaMultichoiceUsers && triviaMultichoiceUsers.has(key)){
    let existingPoints = triviaMultichoiceUsers.get(key);
    console.log("for user "+key+" existing points are "+existingPoints);
    if(existingPoints){
      existingPoints = Number(existingPoints) + Number(points);
      triviaMultichoiceUsers.set(key,existingPoints);
      console.log("for user "+key+" after sum are "+existingPoints);
    } else {
      triviaMultichoiceUsers.set(key,Number(points));
    }
  } else {
    triviaMultichoiceUsers.set(key,Number(points));
  }

  const triviaUsersString = JSON.stringify(triviaMultichoiceUsers, replacer);
  console.log("string is "+triviaUsersString);
  redisClient.del(triviaMultichoiceUserKey);
  redisClient.lpush(triviaMultichoiceUserKey, triviaUsersString);
}

async function listTop20Users(msg) {
  const mapSort1 = new Map([...triviaMultichoiceUsers.entries()].sort((a, b) => b[1] - a[1]));
  var messageEmbed = new Discord.MessageEmbed()
      .addFields(
          {
            name: 'Top 20 users: ',
            value: ' '
          }
      ).setColor("#0500fd");
  let br = 1;
  for (var entry of mapSort1.entries()) {
    if (br > 20) {
      break;
    }
    var key = entry[0],
        value = entry[1];
    messageEmbed.addFields(
        {
          name: br + ") Total points: " +value,
          value: "<@!" + key + ">"
        }
    );
    br++;
  }
  let multiChannel = await triviaBot.channels
      .fetch(multichoiceChannelId);
   await multiChannel.send(messageEmbed);
}

async function fastestAnswerLogic(currentTriviaAnswer, msg) {
  if (currentTriviaAnswer && currentTriviaAnswer.answer.toLowerCase() == msg.content.trim().toLowerCase()) {
    //this user succesfully answered
    var messageEmbed = new Discord.MessageEmbed()
        .addFields(
            {
              name: 'First to answer winner!',
              value: "<@!" + msg.author.id + "> has won " + currentTriviaAnswer.reward
            }
        ).setColor("#22d325");
    msg.channel.send(messageEmbed);
    redisClient.set("currentTriviaAnswer", "", function (err, reply) {
      console.log(reply); // OK
    });
    currentTriviaAnswer = "";
  }
}

function setAnswer(triviaDTO) {
  let triviaStringList = new Array();
  for (const trivia of triviaList) {
    if (triviaDTO.questionNumber == trivia.questionNumber) {
      trivia.answer = triviaDTO.answer;
      if(trivia.answers){
        for (var entry of trivia.answers.entries()) {
          var key = entry[0],
              value = entry[1];
          if (value == triviaDTO.answer) {
            addPointsToUser(key, trivia.points);
          }
        }
      }
    }
    triviaStringList.push(JSON.stringify(trivia,replacer));
  }
  redisClient.del(triviaKey);
  redisClient.lpush(triviaKey, triviaStringList);
}


  triviaBot.on("message", msg => {
    try{
    if ((!msg.author.username.includes("trivia-bot"))) {

      if(msg.channel.type == "dm"){
        if (msg.content.toLowerCase().trim() == "sign me up for the sport party") {
          //add user to triviaUsers
          triviaParticipants.push(msg.author.id);
          redisClient.lpush(triviaParticipantsKey, msg.author.id);
          var messageEmbed = new Discord.MessageEmbed()
              .addFields(
                  {
                    name: 'Trivia user registered',
                    value: "You have been successfully registered for trivia quizz"
                  }
              ).setColor("#224ed3");
          msg.channel.send(messageEmbed);
        } else if (msg.content.toLowerCase().trim() == "!list top 20" && triviaAdmins.includes(msg.author.id)) {
          listTop20Users(msg);
        }else if (msg.content.toLowerCase().trim() == "!reset trivia" && triviaAdmins.includes(msg.author.id)) {
          triviaList = new Array();
          triviaMultichoiceUsers = new Map();
          redisClient.del(triviaKey);
          redisClient.del(triviaMultichoiceUserKey);
        }
        // check if message author is admin
        else if (triviaAdmins.includes(msg.author.id) && isJsonString(msg.content.toLowerCase().trim())){
          let triviaDTO =  JSON.parse(msg.content);
          //check if valid trivia
          if(triviaDTO.type.toLowerCase() == "first to answer"){
            if((!triviaDTO.answer || !triviaDTO.reward || !triviaDTO.question)){
              sendTriviaValidationErrorMessage(triviaDTO, msg);
            } else {
              currentTriviaAnswer = triviaDTO;
              redisClient.set("currentTriviaAnswer", msg.content, function (err, reply) {
                console.log(reply); // OK
              });
              sentTriviaAddedSuccessMessage(triviaDTO, msg);
              sendFirstToAnswerQuestion(triviaDTO);
            }
          } else if (triviaDTO.type.toLowerCase() == "multichoice"){
            if((!triviaDTO.questionNumber || !triviaDTO.question || !triviaDTO.time || !triviaDTO.choices || !triviaDTO.points )){
              sendTriviaValidationErrorMessage(triviaDTO, msg);
            } else {
              sentTriviaAddedSuccessMessage(triviaDTO, msg);
              sendMultichoiceMessage(triviaDTO, msg);
            }
          } else if (triviaDTO.type.toLowerCase() == "setanswer"){
            if((!triviaDTO.questionNumber || !triviaDTO.answer )){
              sendTriviaValidationErrorMessage(triviaDTO, msg);
            } else {
              sentTriviaAddedSuccessMessage(triviaDTO, msg);
              setAnswer(triviaDTO);
            }
          }
        }
      } else {
        if (msg.content.toLowerCase().trim() == "!list top 20" && triviaAdmins.includes(msg.author.id)) {
          listTop20Users(msg);
        }
        else if (msg.channel.id == firstToAnswerChannelId &&  triviaParticipants.includes(msg.author.id)) {
          fastestAnswerLogic(currentTriviaAnswer, msg);
        }
      }
    } }catch (e) {
      console.log("error while doing trivia")
    }
  });

function isJsonString(str) {
  try {
    JSON.parse(str);
  } catch (e) {
    return false;
  }
  return true;
}

function replacer(key, value) {
  if(value instanceof Map) {
    return {
      dataType: 'Map',
      value: Array.from(value.entries()), // or with spread: value: [...value]
    };
  } else {
    return value;
  }
}
function reviver(key, value) {
  if(typeof value === 'object' && value !== null) {
    if (value.dataType === 'Map') {
      return new Map(value.value);
    }
  }
  return value;
}

function getGlobalStakingData() {
  return {
    totalStakedAmount: 0,
    thalesApy: 0,
    feeApy: 0,
    baseRewards: 0,
    extraRewards: 0,
  }
}

async function getStakingAPY(clientForStaking){


    const stakingData = getGlobalStakingData();

    // Thales staked - Base
    const baseAnkrProvider = new ethers.providers.JsonRpcProvider(
        BASE_APY_INF,
        8453
    );

    const CCIPCollectorContract = new ethers.Contract(
        '0x25f29136801b0Eac63C586FFD249B49F1d96DB9c',
        CCIPCollector.abi,
        baseAnkrProvider
    );

    const period = Number(await CCIPCollectorContract.period()) - 1;
    const [
      price,
      stakedAmount,
      escrowedAmount,
      calculatedRevenueForPeriod,
      baseRewardsPool,
      bonusRewardsPool,
    ] = await Promise.all([
      fetch(`https://api.thalesmarket.io/token/price`),
      CCIPCollectorContract.calculatedStakedAmountForPeriod(Number(period)),
      CCIPCollectorContract.calculatedEscrowedAmountForPeriod(Number(period)),
      CCIPCollectorContract.calculatedRevenueForPeriod(Number(period)),
      CCIPCollectorContract.baseRewardsPerPeriod(),
      CCIPCollectorContract.extraRewardsPerPeriod(),
    ]);

    const revShare = period <= 3 ? 30000 :  bigNumberFormatter(calculatedRevenueForPeriod);
    const thalesTokenPrice = Number(await price.text());

    const feeAPR =
        (revShare * 52 * 100) /
        ((bigNumberFormatter(stakedAmount) + bigNumberFormatter(escrowedAmount)) * thalesTokenPrice);

    const thalesRewardsAPR =
        ((bigNumberFormatter(baseRewardsPool) + bigNumberFormatter(bonusRewardsPool)) * 52 * 100) /
        (bigNumberFormatter(stakedAmount) + bigNumberFormatter(escrowedAmount));

    stakingData.feeApy =  aprToApy(feeAPR);
    stakingData.thalesApy =  aprToApy(thalesRewardsAPR);

    stakingData.feeApy = Number((Math.round(stakingData.feeApy * 100) / 100).toFixed(2));
    stakingData.thalesApy = Number((Math.round(stakingData.thalesApy * 100) / 100).toFixed(2));

    stakingData.totalStakedAmount = bigNumberFormatter(stakedAmount) + bigNumberFormatter(escrowedAmount);
    stakingData.baseRewards = bigNumberFormatter(baseRewardsPool);
    stakingData.extraRewards = bigNumberFormatter(bonusRewardsPool);

   clientForStaking.guilds.cache.forEach(function (value, key) {
    try {
      value.members.cache
          .get(clientForStaking.user.id)
          .setNickname(stakingData.thalesApy+"% APY / "+stakingData.feeApy +"% Stable APY");
    } catch (e) {
      console.log(e);
    }
  });
  clientForStaking.user.setActivity(getNumberLabelDecimals((Math.round(Number(stakingData.totalStakedAmount))))+" staked", {
    type: "WATCHING",
  });

  }



function bigNumberFormatter(value)
{
  return (Number(ethers.utils.formatUnits(value, 18)));
}

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}


function aprToApy(interest){
  let APR_FREQUENCY = 52;
  return ((1 + interest / 100 / APR_FREQUENCY) ** APR_FREQUENCY - 1) * 100;
}

let liqArbitrumThalesRaw = fs.readFileSync('contracts/liqARBThales.json');
let liqArbitrumThalesContract = JSON.parse(liqArbitrumThalesRaw);

let liqArbitrumOTRaw = fs.readFileSync('contracts/liqARB.json');
let liqArbitrumOTContract = JSON.parse(liqArbitrumOTRaw);

let liqOPThalesRAW = fs.readFileSync('contracts/liqOPThales.json');
let liqOPThalesContract = JSON.parse(liqOPThalesRAW);

let liqOPOTRaw = fs.readFileSync('contracts/liqOP.json');
let liqOPOTContract = JSON.parse(liqOPOTRaw);

let liqParlayARBRAW = fs.readFileSync('contracts/liqParlayARB.json');
let liqParlayARBContract = JSON.parse(liqParlayARBRAW);

let liqParlayOPRaw = fs.readFileSync('contracts/liqParlayOP.json');
let liqParlayOPContract = JSON.parse(liqParlayOPRaw);

async function getLiqOPOvertime(){

  const liqContract = new web3L2.eth.Contract(liqOPOTContract, "0x842e89b7a7eF8Ce099540b3613264C933cE0eBa5");
  const round = await liqContract.methods.round().call();
  let cumulativeProfitAndLoss = 0;
  if(round>1)
    cumulativeProfitAndLoss = await liqContract.methods.cumulativeProfitAndLoss(round-1).call();
  else
    cumulativeProfitAndLoss = await liqContract.methods.cumulativeProfitAndLoss(round).call();
  cumulativeProfitAndLoss = Math.round(cumulativeProfitAndLoss/1e16) - 100;
  if(cumulativeProfitAndLoss<0){
    cumulativeProfitAndLoss = 0;
  }
  let allocationPerRound = await liqContract.methods.allocationPerRound(round).call();
  allocationPerRound = Math.round(allocationPerRound / 1e18);
  clientLiqOPOT.guilds.cache.forEach(function (value, key) {
    try {
      value.members.cache
          .get(clientLiqOPOT.user.id)
          .setNickname("OP OT PNL +"+getNumberLabelDecimals(cumulativeProfitAndLoss)+"%");
    } catch (e) {
      console.log('error while clientLiqARBThales '+e);
    }
  });
  clientLiqOPOT.user.setActivity(
      "Total LP= $"+getNumberLabelDecimals(allocationPerRound),
      { type: "WATCHING" }
  );
}



async function getLiqOPThales(){

  const liqContract = new web3L2.eth.Contract(liqOPThalesContract, "0xC10a0A6fF6496E0BD896F9f6da5a7B640b85ea40");
  const round = await liqContract.methods.round().call();
  let cumulativeProfitAndLoss = 0;
  if(round>1)
    cumulativeProfitAndLoss = await liqContract.methods.cumulativeProfitAndLoss(round-1).call();
  else
    cumulativeProfitAndLoss = await liqContract.methods.cumulativeProfitAndLoss(round).call();
  cumulativeProfitAndLoss = Math.round(cumulativeProfitAndLoss/1e16) - 100;
  if(cumulativeProfitAndLoss<0){
    cumulativeProfitAndLoss = 0;
  }
  let allocationPerRound = await liqContract.methods.allocationPerRound(round).call();
  allocationPerRound = Math.round(allocationPerRound / 1e18);
  clientLiqOPTHLS.guilds.cache.forEach(function (value, key) {
    try {
      value.members.cache
          .get(clientLiqOPTHLS.user.id)
          .setNickname("Thales PNL +"+getNumberLabelDecimals(cumulativeProfitAndLoss)+"%");
    } catch (e) {
      console.log('error while clientLiqARBThales '+e);
    }
  });
  clientLiqOPTHLS.user.setActivity(
      "Total LP= $"+getNumberLabelDecimals(allocationPerRound),
      { type: "WATCHING" }
  );

}

async function getLiqARBOvertime(){

  const liqContract = new web3Arbitrum.eth.Contract(liqArbitrumOTContract, "0x8e9018b48456202aA9bb3E485192B8475822B874");
  const round = await liqContract.methods.round().call();
  let cumulativeProfitAndLoss = 0;
  if(round>1)
    cumulativeProfitAndLoss = await liqContract.methods.cumulativeProfitAndLoss(round-1).call();
  else
    cumulativeProfitAndLoss = await liqContract.methods.cumulativeProfitAndLoss(round).call();
  cumulativeProfitAndLoss = Math.round(cumulativeProfitAndLoss/1e16) - 100;
  if(cumulativeProfitAndLoss<0){
    cumulativeProfitAndLoss = 0;
  }
  let allocationPerRound = await liqContract.methods.allocationPerRound(round).call();
  allocationPerRound = Math.round(allocationPerRound / 1e6);
  clientLiqARBOT.guilds.cache.forEach(function (value, key) {
    try {
      value.members.cache
          .get(clientLiqARBOT.user.id)
          .setNickname("ARB OT PNL +"+getNumberLabelDecimals(cumulativeProfitAndLoss)+"%");
    } catch (e) {
      console.log('error while clientLiqARBThales '+e);
    }
  });
  clientLiqARBOT.user.setActivity(
      "Total LP= $"+getNumberLabelDecimals(allocationPerRound),
      { type: "WATCHING" }
  );

}

async function getLiqARBThales(){

  const liqContract = new web3Arbitrum.eth.Contract(liqArbitrumThalesContract, "0xea4c2343Fd3C239c23Dd37dd3ee51AEc84544735");
  const round = await liqContract.methods.round().call();
  let cumulativeProfitAndLoss = 0;
  if(round>1)
    cumulativeProfitAndLoss = await liqContract.methods.cumulativeProfitAndLoss(round-1).call();
  else
    cumulativeProfitAndLoss = await liqContract.methods.cumulativeProfitAndLoss(round).call();
  cumulativeProfitAndLoss = Math.round(cumulativeProfitAndLoss/1e16) - 100;
  if(cumulativeProfitAndLoss<0){
    cumulativeProfitAndLoss = 0;
  }
  let allocationPerRound = await liqContract.methods.allocationPerRound(round).call();
  allocationPerRound = Math.round(allocationPerRound / 1e6);

  clientLiqARBThales.guilds.cache.forEach(function (value, key) {
    try {
      value.members.cache
          .get(clientLiqARBThales.user.id)
          .setNickname("Thales PNL +"+getNumberLabelDecimals(cumulativeProfitAndLoss)+"%");
    } catch (e) {
      console.log('error while clientLiqARBThales '+e);
    }
  });
  clientLiqARBThales.user.setActivity(
      "Total LP= $"+getNumberLabelDecimals(allocationPerRound),
      { type: "WATCHING" }
  );

}

async function getLiqParlayOP(){

  const liqContract = new web3L2.eth.Contract(liqParlayOPContract, "0x2Dc1fe64Afa2281FF38dF998bE029E94C561937f");
  const round = await liqContract.methods.round().call();
  let cumulativeProfitAndLoss = 0;
  if(round>1)
    cumulativeProfitAndLoss = await liqContract.methods.cumulativeProfitAndLoss(round-1).call();
  else
    cumulativeProfitAndLoss = await liqContract.methods.cumulativeProfitAndLoss(round).call();
  cumulativeProfitAndLoss = Math.round(cumulativeProfitAndLoss/1e16) - 100;
  if(cumulativeProfitAndLoss<0){
    cumulativeProfitAndLoss = 0;
  }
  let allocationPerRound = await liqContract.methods.allocationPerRound(round).call();
  allocationPerRound = Math.round(allocationPerRound / 1e18);
  clientLiqParlayOP.guilds.cache.forEach(function (value, key) {
    try {
      value.members.cache
          .get(clientLiqParlayOP.user.id)
          .setNickname("Parlay PNL +"+getNumberLabelDecimals(cumulativeProfitAndLoss)+"%");
    } catch (e) {
      console.log('error while clientLiqARBThales '+e);
    }
  });
  clientLiqParlayOP.user.setActivity(
      "Total LP= $"+getNumberLabelDecimals(allocationPerRound),
      { type: "WATCHING" }
  );

}

async function getLiqParlayARB(){

  const liqContract = new web3Arbitrum.eth.Contract(liqParlayARBContract, "0x6848f7C1B5aa2da86F6529bed9d641A67663f0bE");
  const round = await liqContract.methods.round().call();
  let cumulativeProfitAndLoss = 0;
  if(round>1)
    cumulativeProfitAndLoss = await liqContract.methods.cumulativeProfitAndLoss(round-1).call();
  else
    cumulativeProfitAndLoss = await liqContract.methods.cumulativeProfitAndLoss(round).call();
  cumulativeProfitAndLoss = Math.round(cumulativeProfitAndLoss/1e16) - 100;
  if(cumulativeProfitAndLoss<0){
    cumulativeProfitAndLoss = 0;
  }
  let allocationPerRound = await liqContract.methods.allocationPerRound(round).call();
  allocationPerRound = Math.round(allocationPerRound / 1e6);

  clientLiqParlayARB.guilds.cache.forEach(function (value, key) {
    try {
      value.members.cache
          .get(clientLiqParlayARB.user.id)
          .setNickname("Parlay PNL +"+getNumberLabelDecimals(cumulativeProfitAndLoss)+"%");
    } catch (e) {
      console.log('error while clientLiqARBThales '+e);
    }
  });
  clientLiqParlayARB.user.setActivity(
      "Total LP= $"+getNumberLabelDecimals(allocationPerRound),
      { type: "WATCHING" }
  );

}


const speedMarketType = {
  ARB: 'arb',
  OP: 'op',
  BASE: 'base',
  POLYGON:'polygon',
  BSC:'bsc',
  ZKSYNC:'zksync'
}
const speedMarketOPContract = new web3L2.eth.Contract(speedMarketContract, "0xE16B8a01490835EC1e76bAbbB3Cadd8921b32001");
const speedMarketARBContract = new web3Arbitrum.eth.Contract(speedMarketContract, "0x02D0123a89Ae6ef27419d5EBb158d1ED4Cf24FA3");
const speedMarketBASEContract = new web3Base.eth.Contract(speedMarketContract, "0x85b827d133FEDC36B844b20f4a198dA583B25BAA");
const speedMarketBSCContract = new web3BSC.eth.Contract(speedMarketContract, "0x72ca0765d4bE0529377d656c9645600606214610");
const speedMarketPOLYGONContract = new web3Polygon.eth.Contract(speedMarketContract, "0x4B1aED25f1877E1E9fBECBd77EeE95BB1679c361");


const chainedSpeedMarketOPContract = new web3L2.eth.Contract(speedMarketContract, "0xFf8Cf5ABF583D0979C0B9c35d62dd1fD52cce7C7");
const chainedSpeedARBContract = new web3Arbitrum.eth.Contract(speedMarketContract, "0xe92B4c614b04c239d30c31A7ea1290AdDCb8217D");
const chainedSpeedBASEContract = new web3Base.eth.Contract(speedMarketContract, "0x6848F001ddDb4442d352C495c7B4a231e3889b70");
const chainedSpeedPOLYGONContract = new web3Polygon.eth.Contract(speedMarketContract, "0x14D2d7f64D6F10f8eF06372c2e5E36850661a537");


const speedDataMarketOPContract = new web3L2.eth.Contract(speedMarketDataContract, "0x467e14ac025499d60c417D7F00A7D9E83293F43c");
const speedDataMarketARBContract = new web3Arbitrum.eth.Contract(speedMarketDataContract, "0xbbE161Bf57799104eFd6524133e305BBcB7C07EA");
const speedDataMarketBASEContract = new web3Base.eth.Contract(speedMarketDataContract, "0xD6155E7C948458D6Ab58f9D63E1566493b9304C1");
const speedDataMarketPOLYGONContract = new web3Polygon.eth.Contract(speedMarketDataContract, "0xA30200A8eD9655d7096814D0cC1f76639aa42AED");

setInterval(function () {
  console.log("get speedMarkets");
  speedMarkets(speedMarketOPContract,speedMarketType.OP,speedDataMarketOPContract);
  speedMarkets(speedMarketARBContract,speedMarketType.ARB,speedDataMarketARBContract);
  speedMarkets(speedMarketPOLYGONContract,speedMarketType.POLYGON,speedDataMarketPOLYGONContract);
  speedMarkets(speedMarketBASEContract,speedMarketType.BASE,speedDataMarketBASEContract);
  speedMarkets(speedZKSYNCContract,speedMarketType.ZKSYNC,speedDataMarketZKSYNCContract);

  chainedSpeedMarkets(chainedSpeedMarketOPContract,speedMarketType.OP,speedDataMarketOPContract);
  chainedSpeedMarkets(chainedSpeedARBContract,speedMarketType.ARB,speedDataMarketARBContract);
  chainedSpeedMarkets(chainedSpeedBASEContract,speedMarketType.POLYGON,speedDataMarketPOLYGONContract);
  chainedSpeedMarkets(chainedSpeedPOLYGONContract,speedMarketType.BASE,speedDataMarketBASEContract);

  speedResolvedMarkets(speedMarketOPContract,speedMarketType.OP,speedDataMarketOPContract);
  speedResolvedMarkets(speedMarketARBContract,speedMarketType.ARB,speedDataMarketARBContract);
  speedResolvedMarkets(speedMarketPOLYGONContract,speedMarketType.POLYGON,speedDataMarketPOLYGONContract);
  speedResolvedMarkets(speedMarketBASEContract,speedMarketType.BASE,speedDataMarketBASEContract);
  speedResolvedMarkets(speedZKSYNCContract,speedMarketType.ZKSYNC,speedDataMarketZKSYNCContract);

}, 2 * 60 * 1000);

setInterval(function () {
  console.log(" chained resolved speedMarkets");

  chainedSpeedResolvedMarkets(chainedSpeedMarketOPContract,speedMarketType.OP,speedDataMarketOPContract);
  chainedSpeedResolvedMarkets(chainedSpeedARBContract,speedMarketType.ARB,speedDataMarketARBContract);
  chainedSpeedResolvedMarkets(chainedSpeedPOLYGONContract,speedMarketType.POLYGON,speedDataMarketPOLYGONContract);
  chainedSpeedResolvedMarkets(chainedSpeedBASEContract,speedMarketType.BASE,speedDataMarketBASEContract);

}, 3 * 60 * 1000);

async function speedMarkets(speedMarketsContract,givenSpeedMarketType,speedDataMarketContract){

  const ammParams = await speedDataMarketContract.methods.getSpeedMarketsAMMParameters('0x0000000000000000000000000000000000000000').call();
  const activeMarkets = await speedMarketsContract.methods.activeMarkets(0, ammParams.numActiveMarkets).call();
  for (const activeMarket of activeMarkets) {
    if(!writenSpeedMarkets.includes(activeMarket)){

      let speedMarket = await speedDataMarketContract.methods.getMarketsData(Array(activeMarket)).call();
      speedMarket = speedMarket [0];
      let side = speedMarket.direction == 0 ? "UP" : "DOWN";
    const [lpFee, safeBoxImpact] = await Promise.all([
      speedMarketsContract.methods.lpFee().call(),
      speedMarketsContract.methods.safeBoxImpact().call()
    ]);
    const fees = (lpFee/1e18) + (safeBoxImpact/1e18);
    let SPEED_MARKETS_QUOTE = 2;
    let payout = (speedMarket.buyinAmount / getDefaultDecimalsForNetwork (givenSpeedMarketType)) * SPEED_MARKETS_QUOTE;

    let size = (speedMarket.buyinAmount / getDefaultDecimalsForNetwork (givenSpeedMarketType)) * (1 + fees);

    var message = new Discord.MessageEmbed()
        .addFields(
            {
              name: "New Speed Market Trade",
              value: "\u200b",
            },
            {
              name: ":link: Account",
              value: speedMarket.user,
            },
            {
              name: ":coin: Asset and strike price :",
              value: web3.utils.toAscii(speedMarket.asset).replace(/\0/g, '') + " $"+  Math.round(speedMarket.strikePrice / 1e8)
            },
            {
              name: ":coin: Size:",
              value: payout + " "+side,
            },{
              name: ":coin: Paid:",
              value: size,
            },{
              name: ":alarm_clock: End time:",
              value: timeConverter(speedMarket.strikeTime)
            },
        )
        .setColor("#0037ff");
    if(givenSpeedMarketType == speedMarketType.OP){
      let speedMarketChannel = await clientNewListings.channels
          .fetch("1139487259943518269");
      speedMarketChannel.send(message);
    } else if(givenSpeedMarketType == speedMarketType.ARB){
      let speedMarketChannel = await clientNewListings.channels
          .fetch("1139487337529737256");
      speedMarketChannel.send(message);
    }if(givenSpeedMarketType == speedMarketType.BSC){
        let speedMarketChannel = await clientNewListings.channels
            .fetch("1139487508833513482");
        speedMarketChannel.send(message);
      }if(givenSpeedMarketType == speedMarketType.BASE){
        let speedMarketChannel = await clientNewListings.channels
            .fetch("1139487398716264458");
        speedMarketChannel.send(message);
      }if(givenSpeedMarketType == speedMarketType.POLYGON){
        let speedMarketChannel = await clientNewListings.channels
            .fetch("1139487451568680970");
        speedMarketChannel.send(message);
      }if(givenSpeedMarketType == speedMarketType.ZKSYNC){
        let speedMarketChannel = await clientNewListings.channels
            .fetch("1204438310651695115");
        speedMarketChannel.send(message);
      }
      writenSpeedMarkets.push(activeMarket);
      redisClient.lpush(speedMarketsKey, activeMarket);

    }
  }


}

async function speedResolvedMarkets(speedMarketsContract,givenSpeedMarketType,speedDataMarketContract){

  const ammParams = await speedDataMarketContract.methods.getSpeedMarketsAMMParameters('0x0000000000000000000000000000000000000000').call();
  let index = ammParams.numMaturedMarkets < 20 ? ammParams.numMaturedMarkets : 20;
  const maturedMarkets = await speedMarketsContract.methods.maturedMarkets(ammParams.numMaturedMarkets - index, ammParams.numMaturedMarkets).call();
  for (const maturedMarket of maturedMarkets) {
    if(!writenMaturedMarkets.includes(maturedMarket)){

      let speedMarket = await speedDataMarketContract.methods.getMarketsData(Array(maturedMarket)).call();
      speedMarket = speedMarket [0];
      let side = speedMarket.direction == 0 ? "UP" : "DOWN";
      const [lpFee, safeBoxImpact] = await Promise.all([
        speedMarketsContract.methods.lpFee().call(),
        speedMarketsContract.methods.safeBoxImpact().call()
      ]);
      const fees = (lpFee/1e18) + (safeBoxImpact/1e18);
      let SPEED_MARKETS_QUOTE = 2;
      let payout = (speedMarket.buyinAmount / getDefaultDecimalsForNetwork (givenSpeedMarketType)) * SPEED_MARKETS_QUOTE;

      let size = (speedMarket.buyinAmount / getDefaultDecimalsForNetwork (givenSpeedMarketType)) * (1 + fees);

      var message = new Discord.MessageEmbed()
          .addFields(
              {
                name: "New Speed Market Trade",
                value: "\u200b",
              },
              {
                name: ":link: Account",
                value: speedMarket.user,
              },
              {
                name: ":coin: Asset and strike price :",
                value: web3.utils.toAscii(speedMarket.asset).replace(/\0/g, '') + " $"+  Math.round(speedMarket.strikePrice / 1e8)
              },
              {
                name: ":coin: Size:",
                value: payout + " "+side,
              },{
                name: ":coin: Paid:",
                value: size,
              },{
                name: ":coin: Final price:",
                value: " $"+Math.round(speedMarket.finalPrice / 1e8),
              },{
                name: ":coin: User won:",
                value: speedMarket.isUserWinner,
              },{
                name: ":alarm_clock: End time:",
                value: timeConverter(speedMarket.strikeTime)
              },
          )
          .setColor("#0037ff");
      if(givenSpeedMarketType == speedMarketType.OP){
        let speedMarketChannel = await clientNewListings.channels
            .fetch("1140924764127494225");
        speedMarketChannel.send(message);
      } else if(givenSpeedMarketType == speedMarketType.ARB){
        let speedMarketChannel = await clientNewListings.channels
            .fetch("1140924860336439406");
        speedMarketChannel.send(message);
      }if(givenSpeedMarketType == speedMarketType.BSC){
        let speedMarketChannel = await clientNewListings.channels
            .fetch("1140924950438477834");
        speedMarketChannel.send(message);
      }if(givenSpeedMarketType == speedMarketType.BASE){
        let speedMarketChannel = await clientNewListings.channels
            .fetch("1140924993774034944");
        speedMarketChannel.send(message);
      }if(givenSpeedMarketType == speedMarketType.POLYGON){
        let speedMarketChannel = await clientNewListings.channels
            .fetch("1140924911716671488");
        speedMarketChannel.send(message);
      }if(givenSpeedMarketType == speedMarketType.ZKSYNC){
        let speedMarketChannel = await clientNewListings.channels
            .fetch("1204438423700512799");
        speedMarketChannel.send(message);
      }
      writenMaturedMarkets.push(maturedMarket);
      redisClient.lpush(speedMaturedMarketsKey, maturedMarket);

    }
  }
}

function getDefaultDecimalsForNetwork (givenSpeedMarket) {
  if (givenSpeedMarket == speedMarketType.ARB || givenSpeedMarket == speedMarketType.POLYGON || givenSpeedMarket == speedMarketType.BASE || givenSpeedMarket == speedMarketType.ZKSYNC) return 1e6;
  return 1e18;
};

process.on('unhandledRejection', (reason, p) => {
  console.log('Unhandled Rejection at: Promise', p, 'reason:', reason);
  // application specific logging, throwing an error, or other logic here
});

function timeConverter(UNIX_timestamp){
  var a = new Date(UNIX_timestamp * 1000);
  var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  var year = a.getFullYear();
  var month = months[a.getMonth()];
  var date = a.getDate();
  var hour = a.getHours();
  var min = a.getMinutes();
  var sec = a.getSeconds();
  var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec ;
  return time;
}

let baseAMMAddress = "0xe41cD3A25CBdeDA0BC46D48C380393D953bD2034";
async function getBASETrades() {

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
      "https://api.studio.thegraph.com/query/11948/thales-markets-base/version/latest",
      {
        method: "POST",
        body,
      }
  );

  const json = await response.json();
  const tradesBASE = json.data.trades;

  var startdate = new Date();
  var durationInMinutes = 30;
  startdate.setMinutes(startdate.getMinutes() - durationInMinutes);
  let startDateUnixTime = Math.floor(startdate.getTime()/1000);
  for (const tradeBASE of tradesBASE) {
    if (startDateUnixTime < Number(tradeBASE.timestamp) && !writenBASETrades.includes(tradeBASE.transactionHash)) {
      try{
        console.log("new trade base");
        var shortLong;
        const makerToken = new web3Base.eth.Contract(contract, tradeBASE.makerToken);
        const makerTokenName = await makerToken.methods.name().call();
        const takerToken = new web3Base.eth.Contract(contract, tradeBASE.takerToken);
        const takerTokenName = await takerToken.methods.name().call();
        var amountUSD;
        var amountShortLong;
        var isLong = false;
        var isBuy = false;
        var isRanged = false;

       if (
            (makerTokenName.toLowerCase().includes("in") ||
            makerTokenName.toLowerCase().includes("out")) && !makerTokenName.toLowerCase().includes("coin")
        ){
          amountShortLong = tradeBASE.makerAmount/1e18;
          amountUSD = tradeBASE.takerAmount / 1e6;
          isRanged = true;
        }else if((takerTokenName.toLowerCase().includes("in") ||
            takerTokenName.toLowerCase().includes("out"))&& !takerTokenName.toLowerCase().includes("coin")){
          isRanged = true;
          amountUSD =tradeBASE.makerAmount / 1e6;
          amountShortLong = tradeBASE.takerAmount / 1e18;
        }else if (
            makerTokenName.toLowerCase().includes("up") ||
            makerTokenName.toLowerCase().includes("down")
        ) {
          if (makerTokenName.toLowerCase().includes("up")) {
            shortLong = " > ";
            isLong = true;
          } else {
            shortLong = " < ";
            isLong = false;
          }
          amountShortLong = tradeBASE.makerAmount/1e18;
          amountUSD = tradeBASE.takerAmount / 1e6;
          isBuy = true;
        } else {
          if (takerTokenName.toLowerCase().includes("up")) {
            shortLong = " > ";
            isLong = true;
          } else {
            shortLong = " < ";
            isLong = false;
          }

          amountUSD =tradeBASE.makerAmount / 1e6;
          amountShortLong = tradeBASE.takerAmount / 1e18;
          shortLong = takerTokenName.toLowerCase().includes("up") ? " > " : " < ";
        }

        if(!isRanged){
        let market = await getMarketBASE(tradeBASE);

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
            baseAMMAddress.toLowerCase() == tradeBASE.maker.toLowerCase() ||
            baseAMMAddress.toLowerCase() == tradeBASE.taker.toLowerCase()
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
                      tradeBASE.transactionHash +
                      "](https://basescan.org/tx/" +
                      tradeBASE.transactionHash +
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
                      tradeBASE.market +
                      ")",
                },
                {
                  name: isLong ? ":dollar: UP tokens" : ":dollar: DOWN tokens",
                  value: parseFloat((amountShortLong).toFixed(3)),
                },
                {
                  name: ":dollar: Total:",
                  value: parseFloat((amountUSD).toFixed(3)) + " sUSD",
                },
                {
                  name: ":alarm_clock: Timestamp:",
                  value: new Date(tradeBASE.timestamp*1000),
                }
            )
            .setColor("#0037ff");
        if (
           isAmmTrade
        ) {

          if(parseFloat((amountUSD).toFixed(3))>1000){
            clientNewListings.channels
                .fetch("1164609163234643968")
                .then((ammTradesChannel) => {
                  ammTradesChannel.send(message);
                });
          }else{
            clientNewListings.channels
                .fetch("1164608939556618380")
                .then((ammTradesChannel) => {
                  ammTradesChannel.send(message);
                });
          }


          let newAMMTradeMessage = isBuy ? 'New BASE AMM position bought\n' : 'New BASE AMM position sold\n';
          var date = new Date(tradeBASE.timestamp*1000);

          newAMMTradeMessage = newAMMTradeMessage + 'Condition: '+marketMessage+'\n';
          let downOrUP;
          if(isLong){
            downOrUP='UP';
          }else{
            downOrUP='DOWN';
          };
          let amountAMM = parseFloat((amountShortLong).toFixed(3));
          let paidAMM = parseFloat((amountUSD).toFixed(3));
          let potentialProfit = (amountAMM-paidAMM)>0.51? Math.round(amountAMM-paidAMM): amountAMM-paidAMM;
          newAMMTradeMessage = newAMMTradeMessage + 'Amount: '+parseFloat((amountShortLong).toFixed(3))+' '+downOrUP+' tokens\n';
          newAMMTradeMessage = newAMMTradeMessage + 'Paid: '+parseFloat((amountUSD).toFixed(3))+' sUSD\n';
          newAMMTradeMessage = newAMMTradeMessage + 'Potential profit: '+potentialProfit+' sUSD ('+calculateProfitPercentageTotal(paidAMM,amountAMM)+'%)\n';
          //let tweetV2PostTweetResult = await twitterClientAMMMarket.v2.tweet(newAMMTradeMessage);

        }
      } else {
          let rangedMarket = await  getRangedMarketBASE(tradeBASE);
          var marketMessage =
              web3.utils.hexToAscii(rangedMarket.currencyKey).replace(/\0/g, '') +
              " "+tradeBASE.optionSide.toUpperCase() + " > $"+
              Math.round(((rangedMarket.leftPrice/1e18) + Number.EPSILON) * 1000) / 1000+" < $"+Math.round(((rangedMarket.rightPrice/1e18) + Number.EPSILON) * 1000) / 1000;
          let discordMarketMessage
          discordMarketMessage =
              marketMessage +
              "@" +
              new Date(rangedMarket.maturityDate*1000).toISOString().slice(0, 10);


          var message = new Discord.MessageEmbed()
              .addFields(
                  {
                    name: ":lock: New Ranged Market Thales Trade :lock:",
                    value: "\u200b",
                  },
                  {
                    name: ":link: Transaction:",
                    value:
                        "[" +
                        tradeBASE.transactionHash +
                        "](https://basescan.org/tx/" +
                        tradeBASE.transactionHash +
                        ")",
                  },
                  {
                    name: ":coin: Transaction type:",
                    value: tradeBASE.orderSide.toUpperCase(),
                  },
                  {
                    name: ":classical_building: Market:",
                    value:
                        "[" +
                        discordMarketMessage +
                        "](https://thales-dapp-git-feature-ranged-markets-thales-market.vercel.app/ranged-markets/" +
                        tradeBASE.market +
                        ")",
                  },
                  {
                    name: ":dollar: "+tradeBASE.optionSide.toUpperCase()+" tokens",
                    value: parseFloat((amountShortLong).toFixed(3)),
                  },
                  {
                    name: ":dollar: Total:",
                    value: parseFloat((amountUSD).toFixed(3)) + " sUSD",
                  },
                  {
                    name: ":alarm_clock: Timestamp:",
                    value: new Date(tradeBASE.timestamp*1000),
                  }
              )
              .setColor("#0037ff");
          let channel =  await clientNewListings.channels
              .fetch("1164609160801964183");
          channel.send(message);

          let newRangeTradeMessage = tradeBASE.orderSide.toUpperCase()=="BUY" ? 'New BASE Ranged Market position bought\n' : 'New BASE Ranged Market position sold\n';
          var date = new Date(tradeBASE.timestamp*1000);

          newRangeTradeMessage = newRangeTradeMessage + 'Condition: '+marketMessage+'\n';
          let amountAMM = parseFloat((amountShortLong).toFixed(3));
          let paidAMM = parseFloat((amountUSD).toFixed(3));
          let potentialProfit = (amountAMM-paidAMM)>0.51? Math.round(amountAMM-paidAMM): amountAMM-paidAMM;
          newRangeTradeMessage = newRangeTradeMessage + 'Maturity date: '+new Date(rangedMarket.maturityDate*1000).toISOString().slice(0, 10)+'\n';
          newRangeTradeMessage = newRangeTradeMessage + 'Amount: '+parseFloat((amountShortLong).toFixed(3))+' '+tradeBASE.optionSide.toUpperCase()+' tokens\n';
          newRangeTradeMessage = newRangeTradeMessage + 'Paid: '+parseFloat((amountUSD).toFixed(3))+' sUSD\n';
          newRangeTradeMessage = newRangeTradeMessage + 'Potential profit: '+potentialProfit+' sUSD ('+calculateProfitPercentageTotal(paidAMM,amountAMM)+'%)\n';



          //let tweetV2PostTweetResult = await twitterClientAMMMarket.v2.tweet(newRangeTradeMessage);

        }
      writenBASETrades.push(tradeBASE.transactionHash);
      redisClient.lpush(BASEtradesKey, tradeBASE.transactionHash);
      console.log("###### amount for base trade is "+amountUSD);
      amountUSD = Math.trunc(amountUSD);
      }catch (e) {
        console.log("error in l2 trades "+e);
      }
    }
  }

}

async function  getMarketBASE(tradeL2) {

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
      "https://api.studio.thegraph.com/query/11948/thales-markets-base/version/latest",
      {
        method: "POST",
        body,
      }
  );

  const json = await response.json();
  const markets = json.data.markets;

  return markets[0];
}

async function  getRangedMarketBASE(tradeL2) {

  const body = JSON.stringify({
    query: `{rangedMarkets(where:{
    id: "${tradeL2.market}"
  }) {
    id
    timestamp
    currencyKey
    maturityDate
    expiryDate
    leftPrice
    rightPrice
    rightMarket{
    id
    strikePrice
      currencyKey
      maturityDate
      expiryDate
    }
    leftMarket{
      id
    strikePrice
      currencyKey
      maturityDate
      expiryDate
    }
    
  }}`,
    variables: null,
  });

  const response = await fetch(
      "https://api.studio.thegraph.com/query/11948/thales-markets-base/version/latest",
      {
        method: "POST",
        body,
      }
  );

  const json = await response.json();
  const markets = json.data.rangedMarkets;

  return markets[0];
}

async function chainedSpeedMarkets(speedMarketsContract,givenSpeedMarketType,speedDataMarketContract){

  const ammParams = await speedDataMarketContract.methods.getChainedSpeedMarketsAMMParameters('0x0000000000000000000000000000000000000000').call();
  const activeMarkets = await speedMarketsContract.methods.activeMarkets(0, ammParams.numActiveMarkets).call();
  for (const activeMarket of activeMarkets) {
    if(!writenChainedSpeedMarkets.includes(activeMarket)){

      let speedMarket = await speedDataMarketContract.methods.getChainedMarketsData(Array(activeMarket)).call();
      speedMarket = speedMarket [0];
      let directionNames = "";
      for (let i = 0; i < speedMarket.directions.length; i++) {
        let currentDirection = speedMarket.directions[i] == 0 ? "UP" : "DOWN";
        if(directionNames.length>1){
        directionNames = directionNames + ", " + currentDirection;
        } else {
          directionNames = currentDirection;
        }
    }
    let SPEED_MARKETS_QUOTE = 1.9;
    const payout = (speedMarket.buyinAmount / getDefaultDecimalsForNetwork (givenSpeedMarketType)) * SPEED_MARKETS_QUOTE ** speedMarket.directions.length;

    let size = (speedMarket.buyinAmount / getDefaultDecimalsForNetwork (givenSpeedMarketType));

    var message = new Discord.MessageEmbed()
        .addFields(
            {
              name: "New Chained Market Trade",
              value: "\u200b",
            },
            {
              name: ":link: Account",
              value: speedMarket.user,
            },
            {
              name: ":coin: Asset and initial strike price :",
              value: web3.utils.toAscii(speedMarket.asset).replace(/\0/g, '') + " $"+  Math.round(speedMarket.initialStrikePrice / 1e8)
            },
            {
              name: ":coin: Size:",
              value: Math.round(payout) + " "+directionNames,
            },{
              name: ":coin: Paid:",
              value: Math.round(size),
            },{
              name: ":alarm_clock: End time:",
              value: timeConverter(speedMarket.strikeTime)
            },
        )
        .setColor("#0037ff");
    if(givenSpeedMarketType == speedMarketType.OP){
      let speedMarketChannel = await clientNewListings.channels
          .fetch("1186705690820083903");
      speedMarketChannel.send(message);
    } else if(givenSpeedMarketType == speedMarketType.ARB){
      let speedMarketChannel = await clientNewListings.channels
          .fetch("1186705792620044419");
      speedMarketChannel.send(message);
    }if(givenSpeedMarketType == speedMarketType.BSC){
        let speedMarketChannel = await clientNewListings.channels
            .fetch("1139487508833513482");
        speedMarketChannel.send(message);
      }if(givenSpeedMarketType == speedMarketType.BASE){
        let speedMarketChannel = await clientNewListings.channels
            .fetch("1186705890934526053");
        speedMarketChannel.send(message);
      }if(givenSpeedMarketType == speedMarketType.POLYGON){
        let speedMarketChannel = await clientNewListings.channels
            .fetch("1186705981682499725");
        speedMarketChannel.send(message);
      }
      writenChainedSpeedMarkets.push(activeMarket);
      redisClient.lpush(chainedSpeedMarketsKey, activeMarket);

    }
  }
}

async function chainedSpeedResolvedMarkets(speedMarketsContract,givenSpeedMarketType,speedDataMarketContract){

  const ammParams = await speedDataMarketContract.methods.getChainedSpeedMarketsAMMParameters('0x0000000000000000000000000000000000000000').call();
  let index = ammParams.numMaturedMarkets < 20 ? ammParams.numMaturedMarkets : 20;
  const maturedMarkets = await speedMarketsContract.methods.maturedMarkets(ammParams.numMaturedMarkets - index, index).call();
  for (const maturedMarket of maturedMarkets) {
    if(!writenChainedMaturedMarkets.includes(maturedMarket)){
    try{
      let speedMarket = await speedDataMarketContract.methods.getChainedMarketsData(Array(maturedMarket)).call();
      speedMarket = speedMarket [0];
      let directionNames = "";
      for (let i = 0; i < speedMarket.directions.length; i++) {
        let currentDirection = speedMarket.directions[i] == 0 ? "UP" : "DOWN";
        if(directionNames.length>1){
        directionNames = directionNames + ", " + currentDirection;
        } else {
          directionNames = currentDirection;
        }
      }
      let SPEED_MARKETS_QUOTE = 1.9;
      const payout = (speedMarket.buyinAmount / getDefaultDecimalsForNetwork (givenSpeedMarketType)) * SPEED_MARKETS_QUOTE ** speedMarket.directions.length;

      let size = (speedMarket.buyinAmount / getDefaultDecimalsForNetwork (givenSpeedMarketType));

      var message = new Discord.MessageEmbed()
          .addFields(
              {
                name: "New Chained Resolved Speed Market Trade",
                value: "\u200b",
              },
              {
                name: ":link: Account",
                value: speedMarket.user,
              },
              {
                name: ":coin: Size:",
                value: payout + " "+directionNames,
              },{
                name: ":coin: Paid:",
                value: size,
              },{
                name: ":coin: Asset and final strike price :",
                value: web3.utils.toAscii(speedMarket.asset).replace(/\0/g, '') + " $"+  Math.round(speedMarket.strikePrices[speedMarket.strikePrices.length -1] / 1e8)
              },
              {
                name: ":coin: Final price:",
                value: " $"+Math.round(speedMarket.finalPrices[speedMarket.finalPrices.length -1] / 1e8),
              },{
                name: ":coin: User won:",
                value: speedMarket.isUserWinner,
              },{
                name: ":alarm_clock: End time:",
                value: timeConverter(speedMarket.strikeTime)
              },
          )
          .setColor("#0037ff");
      if(givenSpeedMarketType == speedMarketType.OP){
        let speedMarketChannel = await clientNewListings.channels
            .fetch("1186705745509613669");
        speedMarketChannel.send(message);
      } else if(givenSpeedMarketType == speedMarketType.ARB){
        let speedMarketChannel = await clientNewListings.channels
            .fetch("1186705833518698627");
        speedMarketChannel.send(message);
      }if(givenSpeedMarketType == speedMarketType.BSC){
        let speedMarketChannel = await clientNewListings.channels
            .fetch("1140924950438477834");
        speedMarketChannel.send(message);
      }if(givenSpeedMarketType == speedMarketType.BASE){
        let speedMarketChannel = await clientNewListings.channels
            .fetch("1186705890934526053");
        speedMarketChannel.send(message);
      }if(givenSpeedMarketType == speedMarketType.POLYGON){
        let speedMarketChannel = await clientNewListings.channels
            .fetch("1186706013093646346");
        speedMarketChannel.send(message);
      }
      writenChainedMaturedMarkets.push(maturedMarket);
      redisClient.lpush(chainedSpeedMaturedMarketsKey, maturedMarket);
    }catch (e) {
      console.log("problem with chained resolved market"+givenSpeedMarketType+" and the error is ",e);
    }
    }
  }
}
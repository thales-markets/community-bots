require("dotenv").config();
const Discord = require("discord.js");
const clientCountdown = new Discord.Client();
clientCountdown.login(process.env.BOT_TOKEN_COUNTDOWN);
var fs = require("fs");
const client = new Discord.Client();
let contentRaw = fs.readFileSync("content.json");
const axios = require("axios");
let answersContent = JSON.parse(contentRaw);
let qaMaps = new Map();
let contractRaw = fs.readFileSync("contracts/Synthetix.json");
const thalesData = require("thales-data");
const SYNTH_USD_MAINNET = "0x57ab1ec28d129707052df4df418d58a2d46d5f51";
const clientNewListings = new Discord.Client();
const clientETHBurned = new Discord.Client();
const clientCountdownChannel = new Discord.Client();
const Web3 = require("web3");
let contract = JSON.parse(contractRaw);
const web3 = new Web3(new Web3.providers.HttpProvider(process.env.INFURA_URL));
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
let mapSladeMM = new Map();
let mapAlmaMM = new Map();
let mapDeckardMM = new Map();
let mapMint = new Map();
let nonMMOrdersMap = new Map();
let setConcludedTradesPastHour = new Set();
answersContent.forEach((a) => {
  qaMaps.set(a.number, a.content);
});

client.login(process.env.BOT_TOKEN);

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
  client.guilds.cache.forEach(function (value, key) {
    try {
      if (value.name.toLowerCase().includes("thales")) {
        let roleToAssign = null;
        value.roles.fetch("912740968929841152").then((r) => {
          roleToAssign = r;
        });
        value.members
          .fetch("907585090815676486")
          .then((m) => {
            m.roles.add(roleToAssign);
          })
          .catch((e) => {
            console.log(memberObject.id);
          });
      }
    } catch (e) {
      console.log(e);
    }
  });
});

let allowedChannel = "912724043747192874";
client.on("message", async (msg) => {
  try {
    if (!msg.author.username.toLowerCase().includes("counselor")) {
      if (!(msg.channel.type == "dm")) {
        if (msg.content.toLowerCase().startsWith("!verify")) {
          if (allowedChannel.includes(msg.channel.id)) {
            console.log("correct channel");
          } else {
            msg.channel.send(
              "Please use " +
                msg.guild.channels.cache.get(allowedChannel).toString() +
                "!"
            );
          }
        }
      }
    }
  } catch (e) {
    console.log(e);
    msg.channel.send("Unknown error, ping the botmaster to look into it!");
  }
});

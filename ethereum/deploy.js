const HDWalletProvider = require("@truffle/hdwallet-provider");
const Web3 = require("web3");
const compiledFactory = require("./build/CampaignFactory.json");

const provider = new HDWalletProvider(
  "farm wise degree rival become super dice illegal light chat lens play",
  // remember to change this to your own phrase!
  //code new--
  "https://mainnet.infura.io/v3/c766628a0fbd486f813daaab41668bad"
  //--new code
  //  "https://rinkeby.infura.io/v3/70072b02a7a745c69878a29a52f1431e"
  // remember to change this to your own endpoint!
);
const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();

  console.log("Attempting to deploy from account :", accounts[0]);

  const result = await new web3.eth.Contract(compiledFactory.abi)
    .deploy({ data: compiledFactory.evm.bytecode.object })
    .send({ gas: "1400000", from: accounts[0] });

  console.log("Contract deployed to :", result.options.address);
  provider.engine.stop();
};
deploy();

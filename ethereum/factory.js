import web3 from "./web3";
//import compiled contract ABI
import CampaignFactory from "./build/CampaignFactory.json";

//use remix to create an instance of Contract
const instance = new web3.eth.Contract(
  CampaignFactory.abi,
  "0x74d6c5f4426DfCE08e4C5019B832C7c4f13c45bE"
);

export default instance;

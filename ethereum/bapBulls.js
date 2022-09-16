import web3 from "./web3";
//import compiled contract ABI
import BapBulls from "./build/BapBulls.json";

//use remix to create an instance of ERC721A
const instanceBulls = new web3.eth.Contract(
  BapBulls,
  "0x2Cf6BE9AaC1c7630d5A23af88c28275C70eb8819"
);

export default instanceBulls;

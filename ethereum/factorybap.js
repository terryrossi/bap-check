import web3 from "./web3";
//import compiled contract ABI
import BapFactory from "./build/BapFactory.json";

//use remix to create an instance of ERC721A
const instance = new web3.eth.Contract(
  BapFactory,
  "0x2Cf6BE9AaC1c7630d5A23af88c28275C70eb8819"
);

export default instance;

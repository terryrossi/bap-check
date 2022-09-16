import web3 from "./web3";
//import compiled contract ABI
import BapTeens from "./build/BapTeens.json";

//use remix to create an instance of ERC721A
const instanceTeens = new web3.eth.Contract(
  BapTeens,
  "0xcf099445347F0F006c19B90F1c1933eb9413682B"
);

export default instanceTeens;

const { ethers } = require("ethers");	
const { AddressesProvider } = require("@aave/protocol-js");
const lendingPool = require("./ABIs/LendingPoolAddressesProviderRegistry.json");


console.log("Calling different get methods of V2 LendingPoolAddressProvider ");
//var privateKey = 'b964d6724b8b4aabbd113cdd3cb139d142d2d43776d309bc74fc9eb692c7691a';
var provider = ethers.providers.getDefaultProvider('mainnet');
var contractAddress = '0x52D306e36E3B6B02c153d0266ff0f85d18BCD413';
let contract = new ethers.Contract(contractAddress,lendingPool,provider); 
//var wallet = new ethers.Wallet(privateKey,provider);

function test() {
		contract.getAddressesProvidersList().then((result) => {
		console.log("List of Address Providers: " + result);
	});
}
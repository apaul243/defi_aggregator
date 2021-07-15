const { ethers } = require("ethers");	
const { AddressesProvider } = require("@aave/protocol-js");
const lendingPool = require("./ABIs/lendingPool.json");


console.log("Calling different get methods of V2 LendingPoolAddressProvider ");
//var privateKey = 'b964d6724b8b4aabbd113cdd3cb139d142d2d43776d309bc74fc9eb692c7691a';
var provider = ethers.providers.getDefaultProvider('mainnet');
var contractAddress = '0xB53C1a33016B2DC2fF3653530bfF1848a515c8c5';
let contract = new ethers.Contract(contractAddress,lendingPool,provider); 
//var wallet = new ethers.Wallet(privateKey,provider);

contract.getMarketId().then((result) => {
    console.log("Name of the market: " + result);
});

contract.getLendingPool().then((result) => {
    console.log("Address of V2 Lending Pool: " + result);
});

contract.getLendingPoolConfigurator().then((result) => {
    console.log("Address of LendingPoolConfigurator: " + result);
});

contract.getLendingPoolCollateralManager().then((result) => {
    console.log("Address of LendingPoolCollateralManager: " + result);
});

contract.getPoolAdmin().then((result) => {
    console.log("Address of this lending pool's admin: " + result);
});

contract.getPriceOracle().then((result) => {
    console.log("Address of this lending pool's price oracle: " + result);
});


contract.getLendingRateOracle().then((result) => {
    console.log("Address of this lending pool's rate oracle: " + result);
});


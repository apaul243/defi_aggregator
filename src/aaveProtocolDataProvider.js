const { ethers } = require("ethers");	
const { AddressesProvider } = require("@aave/protocol-js");
const lendingPool = require("./ABIs/ProtocolDataProvider.json");


console.log("Calling different get methods of V2 Protocol Data Provider ");

var provider = ethers.providers.getDefaultProvider('mainnet');
var contractAddress = '0x057835Ad21a177dbdd3090bB1CAE03EaCF78Fc6d';
let contract = new ethers.Contract(contractAddress,lendingPool,provider);
var currencyArray = [];
var currency = function(symbol,addressCurr){
	this.symbol= symbol;
	this.addressCurr= addressCurr;
};	

// This Methods get the addresses of all regular tokens
/*
contract.getAllReservesTokens().then((result) => {
    for(let i=0; i< result.length; i++) {
		var str_arr = String(result[i]).split(',');
		currencyArray.push(new currency(str_arr[0],str_arr[1]));
		console.log("Symbol: " + currencyArray[i].symbol + " Address: " + currencyArray[i].addressCurr );
	}
});
*/
var acurrencyArray = [];
var acurrency = function(symbol,addressCurr){
	this.symbol= symbol;
	this.addressCurr= addressCurr;
};	

// This method gets the symbol and addresses of all aTokens
/*
contract.getAllATokens().then((result) => {
	for(let i=0; i< result.length; i++) {
		acurrencyArray.push(new acurrency(result[i].symbol,result[i].tokenAddress));
		console.log("Symbol: " + acurrencyArray[i].symbol + " Address: " + acurrencyArray[i].addressCurr );
	}
});
*/

contract.getReserveConfigurationData("0x514910771AF9Ca656af840dff83E8264EcF986CA").then((result) => {
	
	var noOfDecimals = parseInt(Number(result[0]._hex),10);
	console.log("No Of Decimals is: " + noOfDecimals);
	
	var loan2value = parseInt(Number(result[1]._hex),10);
	console.log("loan to value is: " + loan2value);
	
	var liqThreshold = parseInt(Number(result[2]._hex),10);
	console.log("The Liquidation Threshhold is: " + liqThreshold);
	
	var liqBonus = parseInt(Number(result[3]._hex),10);
	console.log("Liq Bonus is: " + liqBonus);
	
	var resFactor = parseInt(Number(result[4]._hex),10);
	console.log("Reserve Factor is: " + resFactor);
});
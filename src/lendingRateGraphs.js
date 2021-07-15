const axios = require('axios')



class lendObj{
	construcor(source,name,symbol,rate) {
			this.source = source;
			this.name = name;
			this.symbol = symbol;
			this.rate = rate;
		
	}
}

var arr1 = []

/*
axios.post('https://api.thegraph.com/subgraphs/name/aave/protocol-v2', {
  query: `
 {
  protocols(first: 5) {
    id
    pools {
      id
      lendingPool
      reserves(
        where: {
          symbol_not_contains:"Amm"
        }
      ) 
      {
        symbol
        name
		variableBorrowRate
		stableBorrowRate
      }
      }
    } 

}
  `
})
.then((res) => {
  for (const reserve of res.data.data.protocols[0].pools[1].reserves) {
    var name  = reserve.name
	var symbol = reserve.symbol
	var variableRate = reserve.variableBorrowRate/1000000000000000000000000
	var stableRate = reserve.stableBorrowRate/1000000000000000000000000
	//console.log("name: " + name + " ||    symbol: " + symbol + "   || variableRate: " + variableRate + " ||   stableRate:  " + stableRate)
	//var myObj = new lendObj("aave",name,symbol,stableRate)
	var myObj = {_source:"Aave",  _name: name,  _symbol: symbol, _rate: stableRate}
	arr1.push(myObj)
	
  }
 for (var i=0; i<arr1.length;i++) {
	console.log(arr1[i]) 
 }
 
 
})
.catch((error) => {
  console.error(error)
})
*/


axios.post('https://api.thegraph.com/subgraphs/name/graphprotocol/compound-v2', {
  query: `
{
  markets{
    borrowRate
    underlyingSymbol
	underlyingName
    collateralFactor
  }
}

  `
})
.then((res) => {
  for (const market of res.data.data.markets) {
    console.log(market)
  }

})
.catch((error) => {
  console.error(error)
})



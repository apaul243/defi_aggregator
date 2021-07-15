import React, {Component} from 'react'
import { ethers } from 'ethers'
import { AddressesProvider } from '@aave/protocol-js'
const lendingPool = require("./ABIs/lendingPool.json");

export default class Hello extends Component {
	
	constructor(props) {
		super(props)
		
		this.state = {
			marketName: 'What is it ?'	
		}	
		
	}
	fetchGreeting() {
		console.log("Hey there")
		var provider = ethers.providers.getDefaultProvider('mainnet')
		var contractAddress = '0xB53C1a33016B2DC2fF3653530bfF1848a515c8c5'
		let contract = new ethers.Contract(contractAddress,lendingPool,provider) 
	
		try {
			var data = contract.getMarketId()
			console.log('data: ', data)

		} catch (err) {
			console.log("Error: ", err)
		}
	}	
	
	render(){	
		return( 
		<div>
			<h1>{this.state.marketName}</h1>
			<button onClick={this.fetchGreeting.bind(this)}>Fetch Greeting</button>
		</div>	
		)
	}
}

//https://eth-ropsten.alchemyapi.io/v2/DocwjwpHlCPjhG8Kw8kyNVDM2eL1xTx8

require('@nomiclabs/hardhat-waffle');

module.exports = {

    solidity: '0.8.0',
    networks: {
        ropsten: {
            url:'https://eth-ropsten.alchemyapi.io/v2/DocwjwpHlCPjhG8Kw8kyNVDM2eL1xTx8',
            accounts:[ '653c9c53f20ac919109fc8b58c71dc77bed5cdbbe680616a30527993e59a10e2' ] 
        }
    }
}
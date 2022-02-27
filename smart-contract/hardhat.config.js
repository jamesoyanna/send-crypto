// 

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
     url: "https://eth-ropsten.alchemyapi.io/v2/6vyEy5Kfg3LIuAIEcW3ixVwUH7mtmDGQ",
     accounts: ["f0e93d08fe3cb9c4b5438eabdb4f148d15f2aebfb38d0d6a90911e9359a9a0fb"]
    }
  }
}
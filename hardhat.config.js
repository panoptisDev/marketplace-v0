require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");
require("hardhat-gas-reporter");

const fs = require("fs")
const privateKey = fs.readFileSync(".secret").toString();
const projectId = "3a61cDMhDrSjh-lbozYq1sd8lTlQ7e_z" /* Infura ETH testnet "31437ede3f054c538648b7b64d7a2754" */
const etherscanApiKey = "NPK2G58QQ2GPSCR6C2K6XVC84UHD37U2SB" /* ETH "FCF39BY6VT3QZUSHMDIZN7BH5XB62ZJIWU" */

module.exports = {
  solidity: {
    version: "0.8.4",
  },
  gasReporter: {
    enabled: true,
    currency: "USD",
    gasPrice: 30,
  },
  networks: {
    hardhat:{
      chainId: 1337 
    },
    mumbai: {
      url: `https://rpc-mumbai.matic.today`,
      accounts: [privateKey]
    },
    matic: {
      url: `https://polygon-mainnet.g.alchemy.com/v2/${projectId}`,
      accounts: [privateKey]
    },
    rinkeby: {
      url: `https://rinkeby.infura.io/v3/${projectId}`,
      accounts: [privateKey]
    },
  },

  etherscan: {
    apiKey: etherscanApiKey,
  },


};
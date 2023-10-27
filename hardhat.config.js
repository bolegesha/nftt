require("@nomicfoundation/hardhat-toolbox");
require("@nomiclabs/hardhat-etherscan");
require("hardhat-gas-reporter");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.18",
  networks: {
    //здесь указываем все сети, с которыми будем работать
    bnbtestnet: {
      url: "wss://base-goerli.publicnode.com", //RPC from my quicknode
      accounts: ["b85e5d80a09f4df699298200e835a79d8a7d4fbcf715702f675a3a8291896561"],
      chainId: 97,
    },
  },
  etherscan: {
    apiKey: "E695DEI5G9489C3K3GNBZRSCVZXKWI4CQ1", // your Etherscan API key
  },

};
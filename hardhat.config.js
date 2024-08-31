/** @type import('hardhat/config').HardhatUserConfig */
require("@nomiclabs/hardhat-ethers");
module.exports = {
  solidity: "0.8.18",
};
require("@nomiclabs/hardhat-waffle");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.18",
  networks:{
    hardhat: {},
    sepolia: {
      url: 'https://rpc.sepolia.org',
      accounts: [process.env.PRIVATE_KEY]
    },   
}
};

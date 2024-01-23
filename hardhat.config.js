require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    compilers: [
      {
        version: "0.8.19",
      },
      {
        version: "0.8.20",
        settings: {},
      },
    ],
  },
  networks: {
    localhost: {
      url: "http://0.0.0.0:3000/",
      chainId: 31337,
    },
  },
};

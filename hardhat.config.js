require('@nomiclabs/hardhat-waffle');
process.env.pk =
  'a7eb95917e55638d8f0767da4f520f355eb639be64a271eb04af3469194cc78c';
/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: '0.8.4',
  networks: {
    hardhat: {
      chainId: 1337,
    },
    mumbai: {
      url: 'https://rpc-mumbai.matic.today',
      accounts: [process.env.pk],
      gasPrice: 35000000000,
      saveDeployments: true,
    },
    // polygon: {
    //   url: "https://polygon-rpc.com/",
    //   accounts: [process.env.pk]
    // }
  },
};

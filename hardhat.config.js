require('@nomiclabs/hardhat-waffle');
const privateKey = '';

module.exports = {
  defaultNetwork: 'hardhat',
  networks: {
    hardhat: {
      chainId: 1337,
    },
    mumbai: {
      url: 'https://rpc-mumbai.maticvigil.com',
      accounts: [privateKey],
    },
    matic: {
      url: 'https://polygon-mumbai.g.alchemy.com/v2/qN6o7-VY9POhdovYTi9g3h_aUbur-EPC',
      accounts: [privateKey],
    },
  },
  solidity: {
    version: '0.8.4',
      paths: {
    artifacts: './src/artifacts',
  },
    settings: {
      optimizer: {
        enabled: true,
        runs: 1,
      },
    },
  },
};

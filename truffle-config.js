const HDWalletProvider = require('truffle-hdwallet-provider');
const KlaytnWalletProvider = require('truffle-hdwallet-provider-klaytn');

const mnemonic = 'hello hello';
//const privateKey = '<YOUR PRIVATE KEY HERE>';

const privateKey = '0x4ef813eead5df7974eef6e15e36f8611f9a888c0d01f69c9d0345c2807e73bae';

const infuraKey = '';
const solc = require('./solc.json');
module.exports = {
  plugins: ['solidity-coverage'],
  networks: {
    mainnet: {
      provider: function() {
        return new HDWalletProvider(mnemonic, `https://mainnet.infura.io/v3/${infurakey}`);
      },
      port: 8545,
      network_id: 1,
    },
    ropsten: {
      provider: function() {
        return new HDWalletProvider(mnemonic, `https://ropsten.infura.io/v3/${infuraKey}`);
      },
      port: 8545,
      network_id: '3',
      skipDryRun: true,
    },
    rinkeby: {
      provider: function() {
        return new HDWalletProvider(mnemonic, `https://rinkeby.infura.io/v3/${infuraKey}`);
      },
      port: 8545,
      network_id: '4',
      skipDryRun: true,
    },
    development: {
      host: 'localhost',
      port: 8545,
      network_id: '*',
    },
    coverage: {
      host: 'localhost',
      network_id: '*',
      port: 8555,
      gas: 0xfffffffffff,
      gasPrice: 0x01,
    },
    klaytn_testnet: {
      provider: () => new KlaytnWalletProvider(privateKey, "https://api.baobab.klaytn.net:8651"),
        network_id: '1001', //Klaytn baobab testnet's network id
        gas: '8500000',
        gasPrice: null
    },
    klaytn_mainnet: {
      provider: () => new KlaytnWalletProvider(privateKey, "https://api.cypress.klaytn.net:8651"),
        network_id: '8217', //Klaytn mainnet's network id
        gas: '8500000',
        gasPrice: null
    },
  },

  compilers: {
    solc:solc
  },
};

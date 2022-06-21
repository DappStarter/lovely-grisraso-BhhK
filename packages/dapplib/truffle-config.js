require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hockey knife off suggest name recipe situate common include argue swift gauge'; 
let testAccounts = [
"0x53f22d87363722f7e398b23fcea6ef99f2dd1ac683f40c43959e149c99a2dc5c",
"0x19475c640f81f0a1a7f1354f27c97d96687f7bf6dfac61d64ea9af1247f190f1",
"0x19ec50b1f00447a52777b4f05e42dd66445b51624cdd7fd3f2f55756de69f63a",
"0x39baadd0661b646c4141a6a41142c81394f1288f86f967a0a2bf3280fbe461c0",
"0xe66cf31e0a1e647c53a9ee99401c95ea825548a84ecd16dfdf07d697b9666428",
"0x7fbaf5df8183c696d86ccb399852c59284e4dbbfa0e6f319c39c6a94dbc5afce",
"0x81c4a37b04e8ad0a67d99951af9472e7d2fd14ba5a8e19a297679fe4130d274c",
"0x7a1f84e7c9cd42efd8f9c82cb622292880fcbc6eed9c176fbe2b13724acea421",
"0x447b0af9627ef61d7c46d3341075dbd34276af308bbe50978c0b3dd58282da6f",
"0xade73387dbc3d8112e623f0dfae687c793a3a0d6cc3da8f1f00848830def9366"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};


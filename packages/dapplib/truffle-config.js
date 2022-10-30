require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give clog orphan slab chase note predict uncle hockey kiwi off settle'; 
let testAccounts = [
"0x1a7cbbf396c8dd2ba3e4d46bcf2395de28b546e8e8dac3f1cb61bd891f90ac21",
"0xc8ff67422f7b250dc145b4e7277e6b52843ebd41295792ea45e9323ec8e12546",
"0x898930e30acbe1a12332b7cb5cd93ecbaa28cd6b15f0e64f71009f99054d8c33",
"0xbc2e712b9edcf396e3d9127d22521e8f42976eded95beed9ddc6fb7f25920f08",
"0x96d4cf2068d31503846bf4d59789d399cc45741f13c0015d9a8cf687a5957a31",
"0x92bf29716803cc0a5f9623738ac4e47a1f98876b9edb11f021e93db8dc087b30",
"0x0faf6559549475bafc250b82db5bf680f26fea8c657320fee8ddd47613470cc2",
"0x3265cae8914e364fac48ce75ba9ccc56197ab5e14b236d29760c8f516618c55f",
"0xa60ffd7fab88b1b335fbb65ace3e31869bd6149a693879388980f6595291cdfa",
"0x7eb2093d68ef491fbe9dede05744ca5d8230accb30451ea52e5b835284b49ce9"
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


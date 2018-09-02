const path = require('path');

module.exports = {
    server: {
        host: '127.0.0.1',
        port: '3000',
    },
    publicFolder: path.join(__dirname, '..', 'public'),
    languages: [
        {
            code: 'en',
            name: 'English'
        }
    ],
    nodeAddress: 'https://n000002.playmarket.io:3000',
    contracts: {
        main: {
            address: '0x857A6198520aFd1B6Cba74a9313A57B6F07743BD',
            abi: require(path.join(__dirname, 'abi', 'main.js'))
        }
    },
    tmpDir: path.join(__dirname, '..', 'data', 'tmp'),
    tmpDirApp: path.join(__dirname, '..', 'data', 'tmp', 'app'),
    tmpDirICO: path.join(__dirname, '..', 'data', 'tmp', 'ico'),
    ipfs: {
        repo: path.join(__dirname, '..', 'data', '.jsipfs'),
        config: {
            Addresses: {
                Swarm: [
                    "/ip4/0.0.0.0/tcp/4002",
                    "/ip4/127.0.0.1/tcp/4003/ws"
                ]
            },
            Bootstrap: [
                '/ip4/109.194.37.82/tcp/4002/ipfs/QmUwoEzrPSSPVAVKGQQk5vaugAcfEFsLHEhqH7R46Lw4Ya',
                '/ip4/138.197.186.17/tcp/4002/ipfs/QmQnjH4cbTMUiKDUt4RV6ySNfnBEbctwRZUdW1Ms6Aicsa'
            ]
        }
    }
};
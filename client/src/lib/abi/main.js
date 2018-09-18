module.exports = [{
    "constant": false,
    "inputs": [{"name": "adr", "type": "address"}, {"name": "sum", "type": "uint256"}],
    "name": "sendWei",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "constant": true,
    "inputs": [],
    "name": "adrDeveloperContract",
    "outputs": [{"name": "", "type": "address", "value": "0x15f86b968caa9f660ec076cab80ce228e1597dde"}],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": true,
    "inputs": [],
    "name": "procNode",
    "outputs": [{"name": "", "type": "uint256", "value": "1"}],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": true,
    "inputs": [],
    "name": "procDev",
    "outputs": [{"name": "", "type": "uint256", "value": "99"}],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": false,
    "inputs": [{"name": "idApp", "type": "uint256"}, {"name": "vote", "type": "uint256"}, {
        "name": "description",
        "type": "string"
    }, {"name": "txIndex", "type": "bytes32"}],
    "name": "pushFeedbackRating",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "constant": false,
    "inputs": [{"name": "_name", "type": "bytes32"}, {"name": "_info", "type": "bytes32"}],
    "name": "registrationDeveloper",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "constant": false,
    "inputs": [],
    "name": "makeDeposit",
    "outputs": [],
    "payable": true,
    "stateMutability": "payable",
    "type": "function"
}, {
    "constant": false,
    "inputs": [],
    "name": "takeDeposit",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "constant": false,
    "inputs": [],
    "name": "collectNode",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "constant": false,
    "inputs": [{"name": "_idApp", "type": "uint256"}, {"name": "_hash", "type": "string"}, {
        "name": "_hashTag",
        "type": "string"
    }],
    "name": "changeIcoHash",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "constant": false,
    "inputs": [{"name": "_name", "type": "string"}, {"name": "_symbol", "type": "string"}, {
        "name": "_multisigWallet",
        "type": "address"
    }, {"name": "_startsAt", "type": "uint256"}, {"name": "_totalInUSD", "type": "uint256"}, {
        "name": "_idApp",
        "type": "uint256"
    }],
    "name": "getTokensContract",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "constant": false,
    "inputs": [{"name": "_node", "type": "address"}, {"name": "_value", "type": "bool"}],
    "name": "confirmationNode",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "constant": false,
    "inputs": [{"name": "_idApp", "type": "uint256"}, {"name": "_publish", "type": "bool"}, {
        "name": "_dev",
        "type": "address"
    }],
    "name": "changePublishOwner",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "constant": false,
    "inputs": [{"name": "_proc", "type": "uint256"}],
    "name": "setProcDev",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "constant": true,
    "inputs": [],
    "name": "adrICOContract",
    "outputs": [{"name": "", "type": "address", "value": "0xa87b01b792e073fbe0b9d1cf322ee40268d43734"}],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": false,
    "inputs": [{"name": "_adrDeveloperContract", "type": "address"}],
    "name": "setDeveloperAdr",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "constant": false,
    "inputs": [{"name": "_hash", "type": "string"}, {"name": "_hashTag", "type": "string"}, {
        "name": "_ip",
        "type": "string"
    }, {"name": "_coordinates", "type": "string"}],
    "name": "registrationNode",
    "outputs": [],
    "payable": true,
    "stateMutability": "payable",
    "type": "function"
}, {
    "constant": false,
    "inputs": [{"name": "_developer", "type": "address"}, {"name": "_value", "type": "bool"}],
    "name": "confirmationDeveloper",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "constant": false,
    "inputs": [],
    "name": "acceptOwnership",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "constant": false,
    "inputs": [{"name": "_idApp", "type": "uint256"}, {"name": "_hash", "type": "string"}, {
        "name": "_hashTag",
        "type": "string"
    }],
    "name": "registrationApplicationICO",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "constant": false,
    "inputs": [],
    "name": "collectDeveloper",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "constant": true,
    "inputs": [],
    "name": "owner",
    "outputs": [{"name": "", "type": "address", "value": "0xa10e1b2255d3ec6d0fc379518c579a5f3caa9c42"}],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": false,
    "inputs": [{"name": "_idApp", "type": "uint256"}, {"name": "_adrNode", "type": "address"}],
    "name": "buyApp",
    "outputs": [],
    "payable": true,
    "stateMutability": "payable",
    "type": "function"
}, {
    "constant": false,
    "inputs": [{"name": "_adrDev", "type": "address"}, {"name": "_idApp", "type": "uint256"}, {
        "name": "_release",
        "type": "bool"
    }],
    "name": "setRelease",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "constant": true,
    "inputs": [],
    "name": "adrNodeContract",
    "outputs": [{"name": "", "type": "address", "value": "0x8c2c2f02a4898dbbdb4e41fc124aede14febe5fa"}],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": false,
    "inputs": [{"name": "_hash", "type": "string"}, {"name": "_hashTag", "type": "string"}, {
        "name": "_publish",
        "type": "bool"
    }, {"name": "_price", "type": "uint256"}],
    "name": "registrationApplication",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "constant": true,
    "inputs": [{"name": "_idApp", "type": "uint256"}, {"name": "_user", "type": "address"}],
    "name": "checkBuy",
    "outputs": [{"name": "success", "type": "bool", "value": false}],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": false,
    "inputs": [{"name": "_idApp", "type": "uint256"}, {"name": "_price", "type": "uint256"}],
    "name": "changePrice",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "constant": false,
    "inputs": [{"name": "_idApp", "type": "uint256"}, {"name": "_publish", "type": "bool"}],
    "name": "changePublish",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "constant": true,
    "inputs": [],
    "name": "adrApplicationContract",
    "outputs": [{"name": "", "type": "address", "value": "0xa4b4e29e639a94600d6541f757caa0d8c089f091"}],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": false,
    "inputs": [{"name": "_idApp", "type": "uint256"}, {"name": "_hash", "type": "string"}, {
        "name": "_hashTag",
        "type": "string"
    }],
    "name": "changeHash",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "constant": true,
    "inputs": [],
    "name": "deposit",
    "outputs": [{"name": "", "type": "uint256", "value": "100000000000000000000"}],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": false,
    "inputs": [{"name": "_name", "type": "bytes32"}, {"name": "_info", "type": "bytes32"}],
    "name": "changeDeveloperInfo",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "constant": true,
    "inputs": [],
    "name": "newOwner",
    "outputs": [{"name": "", "type": "address", "value": "0x0000000000000000000000000000000000000000"}],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": false,
    "inputs": [{"name": "_hash", "type": "string"}, {"name": "_hashTag", "type": "string"}, {
        "name": "_ip",
        "type": "string"
    }, {"name": "_coordinates", "type": "string"}],
    "name": "changeInfoNode",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "constant": false,
    "inputs": [{"name": "_adrApplicationContract", "type": "address"}],
    "name": "setApplicationAdr",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "constant": false,
    "inputs": [{"name": "_proc", "type": "uint256"}],
    "name": "setProcNode",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "constant": false,
    "inputs": [{"name": "_adrICOContract", "type": "address"}],
    "name": "setICOAdr",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "constant": false,
    "inputs": [{"name": "_adrNodeContract", "type": "address"}],
    "name": "setNodeAdr",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "constant": false,
    "inputs": [{"name": "_newOwner", "type": "address"}],
    "name": "transferOwnership",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "constant": false,
    "inputs": [{"name": "_deposit", "type": "uint256"}],
    "name": "setDeposit",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [{
        "name": "_adrDeveloperContract",
        "type": "address",
        "index": 0,
        "typeShort": "address",
        "bits": "",
        "displayName": "&thinsp;<span class=\"punctuation\">_</span>&thinsp;adr Developer Contract",
        "template": "elements_input_address",
        "value": "0x15f86b968caA9F660ec076cab80cE228e1597DDe"
    }, {
        "name": "_adrApplicationContract",
        "type": "address",
        "index": 1,
        "typeShort": "address",
        "bits": "",
        "displayName": "&thinsp;<span class=\"punctuation\">_</span>&thinsp;adr Application Contract",
        "template": "elements_input_address",
        "value": "0xA4b4E29E639A94600d6541f757CAa0D8c089F091"
    }, {
        "name": "_adrNodeContract",
        "type": "address",
        "index": 2,
        "typeShort": "address",
        "bits": "",
        "displayName": "&thinsp;<span class=\"punctuation\">_</span>&thinsp;adr Node Contract",
        "template": "elements_input_address",
        "value": "0x8c2c2F02a4898DBBDB4e41fc124AeDe14FEbe5Fa"
    }, {
        "name": "_adrICOContract",
        "type": "address",
        "index": 3,
        "typeShort": "address",
        "bits": "",
        "displayName": "&thinsp;<span class=\"punctuation\">_</span>&thinsp;adr I C O Contract",
        "template": "elements_input_address",
        "value": "0xa87B01b792e073fBe0B9d1cF322Ee40268d43734"
    }], "payable": false, "stateMutability": "nonpayable", "type": "constructor"
}, {
    "anonymous": false,
    "inputs": [{"indexed": false, "name": "adrDev", "type": "address"}],
    "name": "setDeveloperAdrEvent",
    "type": "event"
}, {
    "anonymous": false,
    "inputs": [{"indexed": false, "name": "adrApp", "type": "address"}],
    "name": "setApplicationAdrEvent",
    "type": "event"
}, {
    "anonymous": false,
    "inputs": [{"indexed": false, "name": "adrNode", "type": "address"}],
    "name": "setNodeAdrEvent",
    "type": "event"
}, {
    "anonymous": false,
    "inputs": [{"indexed": false, "name": "adrICO", "type": "address"}],
    "name": "setICOAdrEvent",
    "type": "event"
}, {
    "anonymous": false,
    "inputs": [{"indexed": false, "name": "idApp", "type": "uint256"}, {
        "indexed": false,
        "name": "hash",
        "type": "string"
    }, {"indexed": false, "name": "hashTag", "type": "string"}, {
        "indexed": false,
        "name": "publish",
        "type": "bool"
    }, {"indexed": false, "name": "price", "type": "uint256"}, {"indexed": false, "name": "adrDev", "type": "address"}],
    "name": "registrationApplicationEvent",
    "type": "event"
}, {
    "anonymous": false,
    "inputs": [{"indexed": false, "name": "idApp", "type": "uint256"}, {
        "indexed": false,
        "name": "hash",
        "type": "string"
    }, {"indexed": false, "name": "hashTag", "type": "string"}],
    "name": "changeHashEvent",
    "type": "event"
}, {
    "anonymous": false,
    "inputs": [{"indexed": false, "name": "idApp", "type": "uint256"}, {
        "indexed": false,
        "name": "publish",
        "type": "bool"
    }],
    "name": "changePublishEvent",
    "type": "event"
}, {
    "anonymous": false,
    "inputs": [{"indexed": false, "name": "idApp", "type": "uint256"}, {
        "indexed": false,
        "name": "price",
        "type": "uint256"
    }],
    "name": "changePriceEvent",
    "type": "event"
}, {
    "anonymous": false,
    "inputs": [{"indexed": true, "name": "user", "type": "address"}, {
        "indexed": true,
        "name": "developer",
        "type": "address"
    }, {"indexed": false, "name": "idApp", "type": "uint256"}, {
        "indexed": true,
        "name": "adrNode",
        "type": "address"
    }, {"indexed": false, "name": "price", "type": "uint256"}],
    "name": "buyAppEvent",
    "type": "event"
}, {
    "anonymous": false,
    "inputs": [{"indexed": false, "name": "idApp", "type": "uint256"}, {
        "indexed": false,
        "name": "hash",
        "type": "string"
    }, {"indexed": false, "name": "hashTag", "type": "string"}],
    "name": "registrationApplicationICOEvent",
    "type": "event"
}, {
    "anonymous": false,
    "inputs": [{"indexed": false, "name": "idApp", "type": "uint256"}, {
        "indexed": false,
        "name": "hash",
        "type": "string"
    }, {"indexed": false, "name": "hashTag", "type": "string"}],
    "name": "changeIcoHashEvent",
    "type": "event"
}, {
    "anonymous": false,
    "inputs": [{"indexed": true, "name": "developer", "type": "address"}, {
        "indexed": false,
        "name": "name",
        "type": "bytes32"
    }, {"indexed": false, "name": "info", "type": "bytes32"}],
    "name": "registrationDeveloperEvent",
    "type": "event"
}, {
    "anonymous": false,
    "inputs": [{"indexed": true, "name": "developer", "type": "address"}, {
        "indexed": false,
        "name": "name",
        "type": "bytes32"
    }, {"indexed": false, "name": "info", "type": "bytes32"}],
    "name": "changeDeveloperInfoEvent",
    "type": "event"
}, {
    "anonymous": false,
    "inputs": [{"indexed": false, "name": "adrDev", "type": "address"}, {
        "indexed": false,
        "name": "value",
        "type": "bool"
    }],
    "name": "confirmationDeveloperEvent",
    "type": "event"
}, {
    "anonymous": false,
    "inputs": [{"indexed": true, "name": "adrNode", "type": "address"}, {
        "indexed": false,
        "name": "confirmation",
        "type": "bool"
    }, {"indexed": false, "name": "hash", "type": "string"}, {
        "indexed": false,
        "name": "hashTag",
        "type": "string"
    }, {"indexed": false, "name": "deposit", "type": "uint256"}, {
        "indexed": false,
        "name": "ip",
        "type": "string"
    }, {"indexed": false, "name": "coordinates", "type": "string"}],
    "name": "registrationNodeEvent",
    "type": "event"
}, {
    "anonymous": false,
    "inputs": [{"indexed": false, "name": "adrNode", "type": "address"}, {
        "indexed": false,
        "name": "value",
        "type": "bool"
    }],
    "name": "confirmationNodeEvent",
    "type": "event"
}, {
    "anonymous": false,
    "inputs": [{"indexed": true, "name": "adrNode", "type": "address"}, {
        "indexed": false,
        "name": "deposit",
        "type": "uint256"
    }],
    "name": "makeDepositEvent",
    "type": "event"
}, {
    "anonymous": false,
    "inputs": [{"indexed": true, "name": "adrNode", "type": "address"}, {
        "indexed": false,
        "name": "deposit",
        "type": "uint256"
    }],
    "name": "takeDepositEvent",
    "type": "event"
}, {
    "anonymous": false,
    "inputs": [{"indexed": false, "name": "adrNode", "type": "address"}, {
        "indexed": false,
        "name": "hash",
        "type": "string"
    }, {"indexed": false, "name": "hashTag", "type": "string"}, {
        "indexed": false,
        "name": "ip",
        "type": "string"
    }, {"indexed": false, "name": "coordinates", "type": "string"}],
    "name": "changeInfoNodeEvent",
    "type": "event"
}, {
    "anonymous": false,
    "inputs": [{"indexed": false, "name": "voter", "type": "address"}, {
        "indexed": false,
        "name": "idApp",
        "type": "uint256"
    }, {"indexed": false, "name": "vote", "type": "uint256"}, {
        "indexed": false,
        "name": "description",
        "type": "string"
    }, {"indexed": false, "name": "txIndex", "type": "bytes32"}],
    "name": "newRating",
    "type": "event"
}, {
    "anonymous": false,
    "inputs": [{"indexed": false, "name": "dev", "type": "address"}, {
        "indexed": false,
        "name": "idApp",
        "type": "uint256"
    }, {"indexed": false, "name": "release", "type": "bool"}, {"indexed": false, "name": "ICO", "type": "address"}],
    "name": "releaseICOEvent",
    "type": "event"
}, {
    "anonymous": false,
    "inputs": [{"indexed": false, "name": "name", "type": "string"}, {
        "indexed": false,
        "name": "symbol",
        "type": "string"
    }, {"indexed": false, "name": "adrDev", "type": "address"}, {"indexed": false, "name": "idApp", "type": "uint256"}],
    "name": "newContractEvent",
    "type": "event"
}, {
    "anonymous": false,
    "inputs": [{"indexed": true, "name": "_from", "type": "address"}, {
        "indexed": true,
        "name": "_to",
        "type": "address"
    }],
    "name": "OwnershipTransferred",
    "type": "event"
}];

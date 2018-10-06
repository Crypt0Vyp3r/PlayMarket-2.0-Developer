module.exports = [
    {
        "constant": true,
        "inputs": [],
        "name": "getLastVersion",
        "outputs": [
            {
                "name": "PlayMarket",
                "type": "address"
            },
            {
                "name": "ICO",
                "type": "address"
            },
            {
                "name": "version",
                "type": "bytes32"
            },
            {
                "name": "endTime",
                "type": "uint256"
            },
            {
                "name": "number",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "",
                "type": "address"
            }
        ],
        "name": "Agents",
        "outputs": [
            {
                "name": "",
                "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [],
        "name": "acceptOwnership",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "_PlayMarket",
                "type": "address"
            },
            {
                "name": "_ICO",
                "type": "address"
            },
            {
                "name": "_version",
                "type": "bytes32"
            },
            {
                "name": "_endTime",
                "type": "uint256"
            }
        ],
        "name": "addVersion",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "versions",
        "outputs": [
            {
                "name": "PlayMarket",
                "type": "address"
            },
            {
                "name": "ICO",
                "type": "address"
            },
            {
                "name": "version",
                "type": "bytes32"
            },
            {
                "name": "endTime",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "owner",
        "outputs": [
            {
                "name": "",
                "type": "address"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "_version",
                "type": "bytes32"
            }
        ],
        "name": "getVersion",
        "outputs": [
            {
                "name": "PlayMarket",
                "type": "address"
            },
            {
                "name": "ICO",
                "type": "address"
            },
            {
                "name": "version",
                "type": "bytes32"
            },
            {
                "name": "endTime",
                "type": "uint256"
            },
            {
                "name": "number",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "defAgent",
        "outputs": [
            {
                "name": "",
                "type": "address"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "_PlayMarket",
                "type": "address"
            },
            {
                "name": "_ICO",
                "type": "address"
            },
            {
                "name": "_version",
                "type": "bytes32"
            },
            {
                "name": "_endTime",
                "type": "uint256"
            },
            {
                "name": "_i",
                "type": "uint256"
            }
        ],
        "name": "changeVersion",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "newOwner",
        "outputs": [
            {
                "name": "",
                "type": "address"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "_newOwner",
                "type": "address"
            }
        ],
        "name": "transferOwnership",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "_agent",
                "type": "address"
            },
            {
                "name": "_status",
                "type": "bool"
            }
        ],
        "name": "updateAgent",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "name": "_PlayMarket",
                "type": "address"
            },
            {
                "name": "_ICO",
                "type": "address"
            },
            {
                "name": "_version",
                "type": "bytes32"
            },
            {
                "name": "_endTime",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "name": "PlayMarket",
                "type": "address"
            },
            {
                "indexed": false,
                "name": "ICO",
                "type": "address"
            },
            {
                "indexed": false,
                "name": "version",
                "type": "bytes32"
            },
            {
                "indexed": false,
                "name": "endTime",
                "type": "uint256"
            },
            {
                "indexed": false,
                "name": "i",
                "type": "uint256"
            }
        ],
        "name": "addVersionLog",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "name": "PlayMarket",
                "type": "address"
            },
            {
                "indexed": false,
                "name": "ICO",
                "type": "address"
            },
            {
                "indexed": false,
                "name": "version",
                "type": "bytes32"
            },
            {
                "indexed": false,
                "name": "endTime",
                "type": "uint256"
            },
            {
                "indexed": false,
                "name": "i",
                "type": "uint256"
            }
        ],
        "name": "changeVersionLog",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "name": "version",
                "type": "bytes32"
            },
            {
                "indexed": false,
                "name": "i",
                "type": "uint256"
            }
        ],
        "name": "lastVersionLog",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "name": "_from",
                "type": "address"
            },
            {
                "indexed": true,
                "name": "_to",
                "type": "address"
            }
        ],
        "name": "OwnershipTransferred",
        "type": "event"
    }
];
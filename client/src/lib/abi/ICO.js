module.exports = [
    {
        "constant": true,
        "inputs": [],
        "name": "ICOList",
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
                "name": "_app",
                "type": "uint256"
            },
            {
                "name": "_name",
                "type": "string"
            },
            {
                "name": "_symbol",
                "type": "string"
            },
            {
                "name": "_startsAt",
                "type": "uint256"
            },
            {
                "name": "_numberOfPeriods",
                "type": "uint256"
            },
            {
                "name": "_durationOfPeriod",
                "type": "uint256"
            },
            {
                "name": "_targetInUSD",
                "type": "uint256"
            },
            {
                "name": "_hash",
                "type": "string"
            },
            {
                "name": "_hashType",
                "type": "uint32"
            }
        ],
        "name": "addAppICOInfo",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "version",
        "outputs": [
            {
                "name": "",
                "type": "bytes32"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "AppStorage",
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
                "name": "_contract",
                "type": "address"
            }
        ],
        "name": "setAppStorageContract",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
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
        "inputs": [],
        "name": "DevStorage",
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
                "name": "_contract",
                "type": "address"
            }
        ],
        "name": "setLogStorageContract",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "_dev",
                "type": "address"
            },
            {
                "name": "_app",
                "type": "uint256"
            },
            {
                "name": "_state",
                "type": "bool"
            }
        ],
        "name": "setConfirmationICO",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "_contract",
                "type": "address"
            }
        ],
        "name": "setICOListContract",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "_app",
                "type": "uint256"
            },
            {
                "name": "_hash",
                "type": "string"
            },
            {
                "name": "_hashType",
                "type": "uint32"
            }
        ],
        "name": "changeHashAppICO",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "_app",
                "type": "uint256"
            }
        ],
        "name": "delAppICO",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "_contract",
                "type": "address"
            }
        ],
        "name": "setDevStorageContract",
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
        "constant": true,
        "inputs": [],
        "name": "LogStorage",
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
        "constant": true,
        "inputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "ICOs",
        "outputs": [
            {
                "name": "name",
                "type": "string"
            },
            {
                "name": "symbol",
                "type": "string"
            },
            {
                "name": "startsAt",
                "type": "uint256"
            },
            {
                "name": "number",
                "type": "uint256"
            },
            {
                "name": "duration",
                "type": "uint256"
            },
            {
                "name": "targetInUSD",
                "type": "uint256"
            },
            {
                "name": "token",
                "type": "address"
            },
            {
                "name": "crowdsale",
                "type": "address"
            },
            {
                "name": "hash",
                "type": "string"
            },
            {
                "name": "hashType",
                "type": "uint32"
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
                "name": "_app",
                "type": "uint256"
            },
            {
                "name": "_multisigWallet",
                "type": "address"
            },
            {
                "name": "_CSID",
                "type": "uint256"
            },
            {
                "name": "_ATID",
                "type": "uint256"
            }
        ],
        "name": "addAppICO",
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
                "name": "_appStorage",
                "type": "address"
            },
            {
                "name": "_devStorage",
                "type": "address"
            },
            {
                "name": "_logStorage",
                "type": "address"
            },
            {
                "name": "_ICOList",
                "type": "address"
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
                "name": "_ICOList",
                "type": "address"
            }
        ],
        "name": "setICOListContractEvent",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "name": "_contract",
                "type": "address"
            }
        ],
        "name": "setAppStorageContractEvent",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "name": "_contract",
                "type": "address"
            }
        ],
        "name": "setDevStorageContractEvent",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "name": "_contract",
                "type": "address"
            }
        ],
        "name": "setLogStorageContractEvent",
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
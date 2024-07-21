import React, { useState } from 'react';
import Web3 from 'web3';

export const contractAddress = '0x3B729Fa5139BABf0fCF15e647B033b555694D547';
export const contractAbi = [
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [],
		"name": "admin",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "username",
				"type": "string"
			},
			{
				"internalType": "address",
				"name": "seller",
				"type": "address"
			}
		],
		"name": "buyKeyFromAnotherUser",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "username",
				"type": "string"
			}
		],
		"name": "buyNewKey",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "username",
				"type": "string"
			}
		],
		"name": "calculatePrice",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "username",
				"type": "string"
			}
		],
		"name": "checkIfHoldingKey",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "username",
				"type": "string"
			}
		],
		"name": "checkUsernameExists",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getBalance",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "username",
				"type": "string"
			}
		],
		"name": "getCreatorDetails",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			},
			{
				"components": [
					{
						"internalType": "string",
						"name": "title",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "description",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "videoURL",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "imageURL",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "date",
						"type": "uint256"
					}
				],
				"internalType": "struct unmuted.Video[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "username",
				"type": "string"
			}
		],
		"name": "getWalletAddressOfUser",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "hasProfile",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "username",
				"type": "string"
			}
		],
		"name": "listSellersAndPrices",
		"outputs": [
			{
				"internalType": "address[]",
				"name": "",
				"type": "address[]"
			},
			{
				"internalType": "uint256[]",
				"name": "",
				"type": "uint256[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "username",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "price",
				"type": "uint256"
			}
		],
		"name": "offerKeyForSale",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_creatorCommission",
				"type": "uint256"
			}
		],
		"name": "setCreatorCommission",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_multiplyingFactor",
				"type": "uint256"
			}
		],
		"name": "setMultiplyingFactor",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_platformCommission",
				"type": "uint256"
			}
		],
		"name": "setPlatformCommission",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "username",
				"type": "string"
			}
		],
		"name": "setProfile",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "x",
				"type": "uint256"
			}
		],
		"name": "sqrt",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "y",
				"type": "uint256"
			}
		],
		"stateMutability": "pure",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_title",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_description",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_videoURL",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_imageURL",
				"type": "string"
			}
		],
		"name": "uploadVideo",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "withdrawCommissions",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	}
];

const WalletConnection = () => {
  // usetstate for storing and retrieving wallet details
  const [address, setAddress] = useState("");
  const [balance, setBalance] = useState("");
  const [error, setError] = useState("");
  const [hasProfile, setHasProfile] = useState(null);

// Button handler button for handling a
	// request event for metamask
	const btnhandler = () => {
		if (window.ethereum) {
			window.ethereum
				.request({ method: "eth_requestAccounts" })
				.then((res) =>
						accountChangeHandler(res[0])
				);
		} else {
			alert("install metamask extension!!");
		}
	};

	// getbalance function for getting a balance in
	// a right format with help of ethers
	const getbalance = (address) => {
		// Requesting balance method
		window.ethereum
			.request({
				method: "eth_getBalance",
				params: [address, "latest"],
			})
			.then((balance) => {
				// Setting balance
				setBalance(parseInt(Number(balance)) / (10 ** 18));
		});
	};

	// Function for getting handling all events
	const accountChangeHandler = (account) => {
		// Setting an address data
		setAddress(account);

		// Setting a balance
		getbalance(account);
	};

	const checkProfile = async () => {
		if (!address) {
			setError('Please connect your MetaMask wallet.');
			return;
		}

		try {
			const web3 = new Web3(window.ethereum);
			const contract = new web3.eth.Contract(contractAbi, contractAddress);
			const result = await contract.methods.hasProfile().call({ from: address });
			setHasProfile(result);
			if (result === false) {
				const username = prompt('Enter your username for your profile: ');
				try {
					const result = await contract.methods.setProfile(username).send({ from: address });
				console.log(result);
				} catch (err) {
					console.log('Failed to set profile.');
				}
				
			}
		} catch (err) {
			setError('Failed to execute contract function.');
		}
	};

	return (
		<div className="App">
			{/* Calling all values which we have stored in usestate */}

				<strong>Address: </strong>
				{address}

					<strong>Balance: </strong>
					{balance}
					SYB
				<button
					onClick={btnhandler}
					variant="primary"
				>
					Connect Wallet
				</button>
				<button onClick={checkProfile}>Check Profile</button>
				{hasProfile !== null && (
					<p><strong>Has Profile:</strong> {hasProfile.toString()}</p>
				)}
			{error && <p>{error}</p>}
		</div>
	);
};

export default WalletConnection;

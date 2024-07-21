import React, { useState } from 'react';
import styled from 'styled-components';
import Web3 from 'web3';
import Header from './Header';
import Sidebar from './Sidebar';

const Layout = styled.div`
  display: grid;
  grid-template-areas: 
    "header header"
    "sidebar content";
  grid-template-rows: auto 1fr;
  grid-template-columns: 200px 1fr;
  height: 100vh;
  overflow: hidden;
`;

const HeaderWrapper = styled.div`
  grid-area: header;
  width: 100%;
  z-index: 1000;
`;

const SidebarWrapper = styled.div`
  grid-area: sidebar;
  height: calc(100vh - 60px); /* Adjust this value based on the height of your header */
  width: 200px; /* Width of the sidebar */
  background-color: #202020; /* Background color of the sidebar */
`;

const ContentWrapper = styled.div`
  grid-area: content;
  margin-left: 200px; /* Width of the sidebar */
  padding: 20px;
  background-color: #f1f1f1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const UploadContainer = styled.div`
  padding: 20px;
  max-width: 600px;
  margin: 0 auto;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Input = styled.input`
  display: block;
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 4px;
  border: 1px solid #ccc;
`;

const TextArea = styled.textarea`
  display: block;
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 4px;
  border: 1px solid #ccc;
`;

const Button = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  background-color: #2E8B57;
  color: white;

  &:hover {
    background-color: #276744;
  }
`;

const contractAddress = '0x3B729Fa5139BABf0fCF15e647B033b555694D547';
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

const VideoUpload = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [videoURL, setVideoURL] = useState('');
  const [imageURL, setImageURL] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const uploadVideo = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const web3 = new Web3(window.ethereum);
      const contract = new web3.eth.Contract(contractAbi, contractAddress);
      const accounts = await web3.eth.getAccounts();
      await contract.methods.uploadVideo(title, description, videoURL, imageURL).send({ from: accounts[0] });
      alert('Video uploaded successfully.');
    } catch (err) {
      setError('Failed to upload video.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout>
      <HeaderWrapper>
        <Header />
      </HeaderWrapper>
      <SidebarWrapper>
        <Sidebar />
      </SidebarWrapper>
      <ContentWrapper>
        <UploadContainer>
          <h2>Upload Video</h2>
          <form onSubmit={uploadVideo}>
            <Input
              type="text"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
            <TextArea
              placeholder="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
            <Input
              type="text"
              placeholder="Video URL"
              value={videoURL}
              onChange={(e) => setVideoURL(e.target.value)}
              required
            />
            <Input
              type="text"
              placeholder="Image URL"
              value={imageURL}
              onChange={(e) => setImageURL(e.target.value)}
              required
            />
            <Button type="submit" disabled={loading}>
              {loading ? 'Uploading...' : 'Upload Video'}
            </Button>
            {error && <p style={{ color: 'red' }}>{error}</p>}
          </form>
        </UploadContainer>
      </ContentWrapper>
    </Layout>
  );
};

export default VideoUpload;

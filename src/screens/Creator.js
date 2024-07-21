import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import detectEthereumProvider from '@metamask/detect-provider';
import Web3 from 'web3';
import {contractAddress, contractAbi} from '../WalletConnection';

const Creator = () => {
  const { username } = useParams();
  const [account, setAccount] = useState(null);
  const [error, setError] = useState('');
  const [result, setResult] = useState(null);

  useEffect(() => {
    const connectWallet = async () => {
      const provider = await detectEthereumProvider();

      if (provider) {
        try {
          await provider.request({ method: 'eth_requestAccounts' });
          const web3 = new Web3(provider);
          const accounts = await web3.eth.getAccounts();
          setAccount(accounts[0]);
        } catch (error) {
          setError('Failed to connect to MetaMask.');
        }
      } else {
        setError('MetaMask not detected. Please install MetaMask.');
      }
    };

    connectWallet();
  }, []);

  useEffect(() => {
    const callContractFunction = async () => {
      if (!account) {
        return;
      }

      try {
        const web3 = new Web3(window.ethereum);
        const contract = new web3.eth.Contract(contractAbi, contractAddress);
        const result = await contract.methods.getCreatorDetails(username).call({ from: account });
        const formattedResult = JSON.parse(JSON.stringify(result, (_, value) =>
            typeof value === 'bigint' ? value.toString() : value
          ));
  
        setResult(formattedResult);
      } catch (err) {
        setError('Failed to execute contract function.');
      }
    };

    callContractFunction();
  }, [account, username]);

  return (
    <div>
      <h2>Creator Profile for {username}</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {result && (
        <div>
          <p><strong>Result:</strong> 
          Number of Keys: {JSON.stringify(result["0"])}
          Trust Score: {JSON.stringify(result["1"])}
          Last Uploaded: {JSON.stringify(result["2"])}
          Videos: {JSON.stringify(result["3"])}
          
          </p>
        </div>
      )}
    </div>
  );
};

export default Creator;

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Web3 from 'web3';
import { contractAddress, contractAbi } from './WalletConnection';

const Video = () => {
    const { username, videoId } = useParams();
    const [account, setAccount] = useState(null);
    const [error, setError] = useState('');
    const [result, setResult] = useState(null);
    
    useEffect(() => {
        const connectWallet = async () => {
        if (window.ethereum) {
            try {
            await window.ethereum.request({ method: 'eth_requestAccounts' });
            const web3 = new Web3(window.ethereum);
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
            const result = await contract.methods.checkIfHoldingKey(username).call({ from: account });
            if (result) {
                const formattedResult = JSON.parse(JSON.stringify(result, (_, value) =>
                    typeof value === 'bigint' ? value.toString() : value
                ));
                setResult(formattedResult);
            }
        } catch (err) {
            setError('Failed to execute contract function.');
        }
        };
    
        callContractFunction();
    }, [account, username, videoId]);
    
    return (
        <div>
        <h2>Video Details</h2>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        {result && (
            <div>
                {console.log(result)}
            <p>Title: {result}</p>
            <p>Description: {result["1"]}</p>
        <video controls>
            <source src={result["2"]} type="video/mp4" />
        </video>
        <img src={result["3"]} alt="Thumbnail" />
            </div>
        )}
        </div>
    );
};

export default Video;

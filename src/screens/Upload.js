import React, { useState } from 'react';
import detectEthereumProvider from '@metamask/detect-provider';
import Web3 from 'web3';
import { contractAddress, contractAbi } from '../WalletConnection';

const Upload = () => {
  const [account, setAccount] = useState(null);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [videoURL, setVideoURL] = useState('');
  const [imageURL, setImageURL] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  useState(() => {
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!account) {
      setError('Please connect your MetaMask wallet.');
      return;
    }

    try {
      const web3 = new Web3(window.ethereum);
      const contract = new web3.eth.Contract(contractAbi, contractAddress);

      await contract.methods.uploadVideo(title, description, videoURL, imageURL).send({ from: account });

      setSuccess('Video uploaded successfully!');
    } catch (err) {
      setError('Failed to upload video.');
    }
  };

  return (
    <div>
      <h2>Upload Video</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {success && <p style={{ color: 'green' }}>{success}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
        </div>
        <div>
          <label>Description:</label>
          <textarea value={description} onChange={(e) => setDescription(e.target.value)} required />
        </div>
        <div>
          <label>Video URL:</label>
          <input type="url" value={videoURL} onChange={(e) => setVideoURL(e.target.value)} required />
        </div>
        <div>
          <label>Image URL:</label>
          <input type="url" value={imageURL} onChange={(e) => setImageURL(e.target.value)} required />
        </div>
        <button type="submit">Create Profile</button>
      </form>
    </div>
  );
};

export default Upload;

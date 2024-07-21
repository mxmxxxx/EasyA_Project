import React, { useState } from 'react';
import { web3Enable, web3Accounts } from '@polkadot/extension-dapp';
import styled from 'styled-components';

const Button = styled.button`
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  background-color: #2E8B57;
  color: white;
  margin: 5px;

  &:hover {
    background-color: #276744;
  }
`;

const WalletConnect = () => {
  const [account, setAccount] = useState(null);
  const [loading, setLoading] = useState(false);

  const connectWallet = async () => {
    setLoading(true);
    const extensions = await web3Enable('YourAppName');
    if (extensions.length === 0) {
      console.log('No extension found');
      setLoading(false);
      return;
    }

    const accounts = await web3Accounts();
    if (accounts.length === 0) {
      console.log('No account found');
      setLoading(false);
      return;
    }

    setAccount(accounts[0].address);
    setLoading(false);
  };

  return (
    <div>
      {account ? (
        <p>Connected: {account}</p>
      ) : (
        <Button onClick={connectWallet} disabled={loading}>
          {loading ? 'Connecting...' : 'Connect Wallet'}
        </Button>
      )}
    </div>
  );
};

export default WalletConnect;

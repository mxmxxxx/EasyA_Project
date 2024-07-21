import React, { useState, useEffect } from 'react';
import { web3Enable, web3Accounts } from '@polkadot/extension-dapp';
import styled from 'styled-components';

const ConnectButton = styled.button`
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
  const [error, setError] = useState(null);

  const connectWallet = async () => {
    setLoading(true);
    setError(null);

    try {
      const extensions = await web3Enable('YourAppName');
      if (extensions.length === 0) {
        throw new Error('No extension found');
      }

      const accounts = await web3Accounts();
      if (accounts.length === 0) {
        throw new Error('No account found');
      }

      setAccount(accounts[0].address);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // You can auto-connect here if desired
    // connectWallet();
  }, []);

  return (
    <div>
      {account ? (
        <p>Connected: {account}</p>
      ) : (
        <>
          <ConnectButton onClick={connectWallet} disabled={loading}>
            {loading ? 'Connecting...' : 'Connect Wallet'}
          </ConnectButton>
          {error && <p style={{ color: 'red' }}>{error}</p>}
        </>
      )}
    </div>
  );
};

export default WalletConnect;

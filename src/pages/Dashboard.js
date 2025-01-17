import React from 'react';
import useBlockchain from '../hooks/useBlockchain';

const Dashboard = () => {
  const { account, network, contract } = useBlockchain();

  return (
    <div style={styles.container}>
      <h1>Dashboard</h1>
      {account ? (
        <>
          <p>Connected Wallet: {account}</p>
          {network && <p>Network: {network.name}</p>}
          {contract ? (
            <p>Contract Address: {contract.address}</p>
          ) : (
            <p>Loading contract information...</p>
          )}
        </>
      ) : (
        <p>Please connect your wallet to view the dashboard.</p>
      )}
    </div>
  );
};

const styles = {
  container: {
    padding: '2rem',
    textAlign: 'center',
  },
};

export default Dashboard;

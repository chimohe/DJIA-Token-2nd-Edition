import React, { createContext, useState, useEffect } from 'react';
import { ethers } from 'ethers';

// Create the context
const BlockchainContext = createContext();

// Provider component
export const BlockchainProvider = ({ children }) => {
  const [account, setAccount] = useState(null); // User's wallet address
  const [provider, setProvider] = useState(null); // Ethers provider
  const [contract, setContract] = useState(null); // Smart contract instance
  const [network, setNetwork] = useState(null); // Current network info

  const contractAddress = "0xYourContractAddressHere"; // Replace with your deployed contract address
  const contractABI = [
    // Replace with your contract's ABI
    // Example: { "constant": true, "inputs": [], "name": "symbol", "outputs": [{"name":"","type":"string"}], "type": "function" }
  ];

  // Connect to the user's wallet
  const connectWallet = async () => {
    try {
      if (window.ethereum) {
        const provider = new ethers.BrowserProvider(window.ethereum);
        const accounts = await provider.send("eth_requestAccounts", []);
        const signer = provider.getSigner();

        setProvider(provider);
        setAccount(accounts[0]);
        setContract(new ethers.Contract(contractAddress, contractABI, signer));

        const network = await provider.getNetwork();
        setNetwork(network);
      } else {
        alert("MetaMask is required to use this application.");
      }
    } catch (error) {
      console.error("Error connecting wallet:", error);
    }
  };

  // Check if wallet is already connected
  useEffect(() => {
    const checkConnection = async () => {
      if (window.ethereum) {
        const provider = new ethers.BrowserProvider(window.ethereum);
        const accounts = await provider.listAccounts();
        if (accounts.length > 0) {
          setAccount(accounts[0]);
          const signer = provider.getSigner();
          setProvider(provider);
          setContract(new ethers.Contract(contractAddress, contractABI, signer));
          const network = await provider.getNetwork();
          setNetwork(network);
        }
      }
    };
    checkConnection();
  }, []);

  return (
    <BlockchainContext.Provider value={{ account, provider, contract, network, connectWallet }}>
      {children}
    </BlockchainContext.Provider>
  );
};

// Custom hook for easier access to context
export const useBlockchain = () => {
  const context = React.useContext(BlockchainContext);
  if (!context) {
    throw new Error("useBlockchain must be used within a BlockchainProvider");
  }
  return context;
};

export default BlockchainContext;

import { ethers } from "ethers";

const contractABI = [
  // Replace with your contract's ABI
  // Example: { "constant": true, "inputs": [], "name": "symbol", "outputs": [{"name":"","type":"string"}], "type": "function" }
];

/**
 * Initialize a blockchain contract instance
 * @param {string} contractAddress - The address of the deployed smart contract
 * @param {Object} signerOrProvider - Ethers signer or provider
 * @returns {Object} Contract instance
 */
export const getContractInstance = (contractAddress, signerOrProvider) => {
  try {
    return new ethers.Contract(contractAddress, contractABI, signerOrProvider);
  } catch (error) {
    console.error("Error initializing contract instance:", error);
    throw error;
  }
};

/**
 * Fetch the current DJIA Token price from the contract
 * @param {Object} contract - Contract instance
 * @returns {Promise<number>} Current DJIA Token price
 */
export const fetchTokenPrice = async (contract) => {
  try {
    const price = await contract.getPrice(); // Replace `getPrice` with the actual function in your contract
    return parseFloat(ethers.utils.formatUnits(price, 18)); // Assumes the token has 18 decimals
  } catch (error) {
    console.error("Error fetching token price:", error);
    throw error;
  }
};

/**
 * Send a transaction to buy DJIA Tokens
 * @param {Object} contract - Contract instance
 * @param {number} amount - Amount of tokens to buy
 * @param {Object} signer - Ethers signer instance
 * @returns {Promise<Object>} Transaction receipt
 */
export const buyTokens = async (contract, amount, signer) => {
  try {
    const transaction = await contract.buyTokens({
      value: ethers.utils.parseEther(amount.toString()), // Convert amount to wei
    });
    const receipt = await transaction.wait();
    return receipt;
  } catch (error) {
    console.error("Error buying tokens:", error);
    throw error;
  }
};

DJIA Token – README

Welcome to the DJIA Token project Second Edition! This platform tokenizes the Dow Jones Industrial Average (DJIA), enabling decentralized investment, real-time tracking, and dividend distribution through blockchain technology. Built with Solidity, React, Hardhat, and Chainlink, it bridges traditional finance with Web3 innovation.

Table of Contents
	1.	Overview
	2.	Features
	3.	File Structure
	4.	Prerequisites
	5.	Installation
	6.	Usage
	7.	Smart Contracts
	8.	Testing
	9.	Contributing
	10.	License

Overview

The DJIA Token platform allows users to invest in a blockchain-based representation of the DJIA index. It leverages oracles for real-time data and smart contracts for secure and transparent transactions.

Features
	•	Decentralized Investment: Tokenized representation of the DJIA index.
	•	Real-Time Price Updates: Chainlink-powered price feeds.
	•	Automated Dividends: Secure and efficient dividend distribution.
	•	Modern Frontend: React-based user-friendly interface.
	•	Scalable Architecture: Designed for future enhancements and multi-chain compatibility.

File Structure

📁 build/
📁 contracts/
📁 public/
📁 scripts/
📁 src/
📁 tests/
📄 package.json
📄 package-lock.json
📄 hardhat.config.js
📄 webpack.config.js
📄 .env
📄 .gitignore

	•	contracts/: Contains Solidity smart contracts for token and oracle functionality.
	•	src/: React frontend with reusable components, hooks, and services.
	•	scripts/: Deployment and oracle update scripts.
	•	tests/: Unit tests for smart contracts and app functionality.

Prerequisites

Ensure the following tools and accounts are set up:
	•	Node.js (v18 or later)
	•	npm (v9 or later)
	•	Hardhat (for smart contract development)
	•	MetaMask (to interact with the blockchain)
	•	Infura Account (for Goerli RPC URL)
	•	Etherscan API Key (optional, for verifying contracts)

Installation

Follow these steps to set up the project:
	1.	Clone the Repository:

git clone https://github.com/chimohe/DJIA-Token-2nd-Edition.git


	2.	Install Dependencies:

npm install


	3.	Set Up Environment Variables:
Create a .env file in the project root and add the following:

GOERLI_RPC_URL=https://goerli.infura.io/v3/YOUR_INFURA_PROJECT_ID
PRIVATE_KEY=YOUR_WALLET_PRIVATE_KEY
ETHERSCAN_API_KEY=YOUR_ETHERSCAN_API_KEY


	4.	Install Hardhat and Required Plugins:
Hardhat is included in the project dependencies, but you can install it globally if needed:

npm install --save-dev hardhat @nomicfoundation/hardhat-toolbox


	5.	Run Initial Setup:
Compile the contracts to ensure everything is ready:

npx hardhat compile

Usage

Start Development Server

Run the frontend React application locally:

npm start

Access the app at http://localhost:3000.

Deploy Smart Contracts

Deploy the DJIAToken and DJIAOracle contracts to the Goerli testnet:

npm run deploy

Build for Production

Create a production-ready build of the application:

npm run build

Smart Contracts

DJIAToken.sol
	•	ERC-20 token representing the DJIA index.
	•	Includes minting, burning, and dividend distribution functionalities.

DJIAOracle.sol
	•	Integrates with Chainlink for real-time DJIA price feeds.
	•	Ensures secure and accurate pricing updates.

Deployment scripts are located in scripts/deploy-contract.js.

Testing

Run Tests

Ensure all contracts are functioning as expected:

npx hardhat test

Key Test Cases
	•	Token minting, burning, and transfers.
	•	Oracle price updates and error handling.
	•	Dividend distribution mechanisms.

Contributing

We welcome contributions to enhance the DJIA Token platform! To contribute:
	1.	Fork the repository.
	2.	Create a new branch for your feature:

git checkout -b feature-name


	3.	Commit and push your changes:

git commit -m "Add feature description"
git push origin feature-name


	4.	Open a pull request for review.

License

This project is licensed under the MIT License. See the LICENSE file for more details.

Contact

For support or inquiries, email chimohe@gmail.com

Let me know if there’s anything else you’d like to adjust!

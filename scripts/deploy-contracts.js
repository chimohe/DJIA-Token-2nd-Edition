const hre = require("hardhat");

async function main() {
  // Deploy DJIAToken contract
  console.log("Deploying DJIAToken...");
  const DJIAToken = await hre.ethers.getContractFactory("DJIAToken");
  const djiaToken = await DJIAToken.deploy();
  await djiaToken.deployed();
  console.log(`DJIAToken deployed to: ${djiaToken.address}`);

  // Deploy DJIAOracle contract
  console.log("Deploying DJIAOracle...");
  const DJIAOracle = await hre.ethers.getContractFactory("DJIAOracle");
  const chainlinkPriceFeed = "0xYourChainlinkPriceFeedAddressHere"; // Replace with actual price feed address
  const djiaOracle = await DJIAOracle.deploy(chainlinkPriceFeed);
  await djiaOracle.deployed();
  console.log(`DJIAOracle deployed to: ${djiaOracle.address}`);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

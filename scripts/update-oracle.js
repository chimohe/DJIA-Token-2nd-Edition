const hre = require("hardhat");

async function main() {
  // Replace with your deployed DJIAOracle contract address
  const oracleAddress = "0xYourDeployedOracleAddressHere";

  console.log(`Connecting to DJIAOracle at ${oracleAddress}...`);

  const DJIAOracle = await hre.ethers.getContractFactory("DJIAOracle");
  const oracle = DJIAOracle.attach(oracleAddress);

  console.log("Fetching latest DJIA price...");
  const price = await oracle.getDJIAPrice();

  console.log(`Latest DJIA price: ${price.toString()}`);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

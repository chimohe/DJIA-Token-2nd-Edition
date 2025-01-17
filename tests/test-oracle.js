const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("DJIAOracle", function () {
  let DJIAOracle, djiaOracle, priceFeedMock, owner;

  beforeEach(async function () {
    const PriceFeedMock = await ethers.getContractFactory("MockV3Aggregator");
    priceFeedMock = await PriceFeedMock.deploy(8, 35000 * 10 ** 8); // Mock price: 35,000
    await priceFeedMock.deployed();

    DJIAOracle = await ethers.getContractFactory("DJIAOracle");
    [owner] = await ethers.getSigners();
    djiaOracle = await DJIAOracle.deploy(priceFeedMock.address);
    await djiaOracle.deployed();
  });

  it("Should fetch the correct DJIA price", async function () {
    const price = await djiaOracle.getDJIAPrice();
    expect(price).to.equal(35000 * 10 ** 8);
  });

  it("Should update the price when the price feed changes", async function () {
    await priceFeedMock.updateAnswer(40000 * 10 ** 8); // Update to 40,000
    const updatedPrice = await djiaOracle.getDJIAPrice();
    expect(updatedPrice).to.equal(40000 * 10 ** 8);
  });
});

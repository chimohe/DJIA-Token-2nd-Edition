const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("DJIAToken", function () {
  let DJIAToken, djiaToken, owner, addr1, addr2;

  beforeEach(async function () {
    DJIAToken = await ethers.getContractFactory("DJIAToken");
    [owner, addr1, addr2] = await ethers.getSigners();
    djiaToken = await DJIAToken.deploy();
    await djiaToken.deployed();
  });

  it("Should deploy with the correct initial supply", async function () {
    const totalSupply = await djiaToken.totalSupply();
    expect(totalSupply).to.equal(ethers.utils.parseEther("1000000")); // 1,000,000 tokens
  });

  it("Should allow owner to mint tokens", async function () {
    await djiaToken.mint(addr1.address, ethers.utils.parseEther("1000"));
    const balance = await djiaToken.balanceOf(addr1.address);
    expect(balance).to.equal(ethers.utils.parseEther("1000"));
  });

  it("Should prevent non-owner from minting tokens", async function () {
    await expect(
      djiaToken.connect(addr1).mint(addr2.address, ethers.utils.parseEther("1000"))
    ).to.be.revertedWith("Ownable: caller is not the owner");
  });

  it("Should allow token holders to burn tokens", async function () {
    await djiaToken.mint(addr1.address, ethers.utils.parseEther("500"));
    await djiaToken.connect(addr1).burn(ethers.utils.parseEther("200"));
    const balance = await djiaToken.balanceOf(addr1.address);
    expect(balance).to.equal(ethers.utils.parseEther("300"));
  });

  it("Should reflect token transfers correctly", async function () {
    await djiaToken.mint(addr1.address, ethers.utils.parseEther("1000"));
    await djiaToken.connect(addr1).transfer(addr2.address, ethers.utils.parseEther("500"));
    const balanceAddr1 = await djiaToken.balanceOf(addr1.address);
    const balanceAddr2 = await djiaToken.balanceOf(addr2.address);
    expect(balanceAddr1).to.equal(ethers.utils.parseEther("500"));
    expect(balanceAddr2).to.equal(ethers.utils.parseEther("500"));
  });
});

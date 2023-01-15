const { expect } = require("chai");

describe("Staking contract", function () {
    it("After deployment the contract balance should be equal to Zero", async function () {
    const [owner] = await ethers.getSigners();

    const Stake = await ethers.getContractFactory("Staking");

    const hardhatToken = await Stake.deploy("0x58C2123006b9003e899AbC8f5f30f0C96fB92179");

    const balance = await hardhatToken.balance();

    expect(balance).to.equal(0);
    });
});

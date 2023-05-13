require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.10",
  networks: {
    mumbai: {
      url: "https://polygon-mumbai.g.alchemy.com/v2/WQr9lk826V1vfE0vSBaPPbK6X9w2kJHd",
      accounts: ["505ec79edffade90cd3ebc2f451248e1d81b2a0ba536762616d14467b050fc98"],
    }
  }
};

task("accounts", "Prints the list of accounts", async () => {
  const accounts = await ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});


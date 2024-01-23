const { ethers } = require("hardhat");

async function main() {
  const INITIAL_SUPPLY = 100;
  const SNSToken = await ethers.deployContract("SNSToken", [INITIAL_SUPPLY]);
  await SNSToken.waitForDeployment();

  console.log("Contract deployed");
}

main()
  .then(() => process.exit(0))
  .catch(() => process.exit(1));

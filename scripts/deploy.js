const { ethers } = require("hardhat");

async function main() {
  const perc20 = await ethers.deployContract("PERC20Sample");
  await perc20.waitForDeployment();
  const deployedContract = await perc20.getAddress();

  console.log(`Your PERC20 Contract Address: ${deployedContract}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

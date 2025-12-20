import { ethers } from "hardhat";

async function main() {
  const baseURI = "ipfs://YOUR_BASE_URI/";
  
  const AccessPass = await ethers.deployContract("AccessPassNFT", [baseURI]);
  await AccessPass.waitForDeployment();

  console.log("Contract deployed at:", await AccessPass.getAddress());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

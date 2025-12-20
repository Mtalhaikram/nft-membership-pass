import { ethers } from "hardhat";

async function main() {
  const AccessPassNFT = await ethers.getContractFactory("AccessPassNFT");

  const contract = await AccessPassNFT.deploy(
    "ipfs://YOUR_BASE_URI/"
  );

  await contract.waitForDeployment();

  console.log(
    "✅ AccessPassNFT deployed to:",
    await contract.getAddress()
  );
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});

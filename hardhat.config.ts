// import { defineConfig } from "hardhat/config";

// export default defineConfig({
//   solidity: {
//     version: "0.8.28",
//   },
// });


import { HardhatUserConfig } from "hardhat/config";
import "dotenv/config";

const config: HardhatUserConfig = {
  solidity: "0.8.20",
  networks: {
    sepolia: {
      type: "http",
      url: process.env.SEPOLIA_RPC || "",
      accounts: process.env.PRIVATE_KEY ? [process.env.PRIVATE_KEY] : [],
    },
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY || "",
  },
};

export default config;




export const ACCESS_PASS_ADDRESS =
  "0xCc75C8D791C0F9fd68896976f95D56124177B911";

  export const ACCESS_PASS_ABI = [
    {
      inputs: [{ name: "user", type: "address" }],
      name: "isHolder",
      outputs: [{ type: "bool" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [{ name: "to", type: "address" }],
      name: "mint",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
  ];
  

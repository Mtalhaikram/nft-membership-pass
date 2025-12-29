# 🎫 NFT Membership Pass - X-Factor Access Pass

A decentralized Web3 application that uses NFT-based access control to gate premium content. Users must own an "X-Factor Access Pass" NFT to unlock exclusive features and content on the platform.

## 🌟 Features

- **NFT-Gated Access**: Only users holding the Access Pass NFT can view premium content
- **Modern Web3 Integration**: Seamless wallet connection using RainbowKit
- **Smart Contract**: ERC721-based NFT with enumerable functionality
- **Real-time Access Verification**: Automatically checks wallet ownership on-chain
- **Beautiful UI**: Modern, responsive design with Tailwind CSS and gradient effects
- **Minting Capability**: Owner can mint new access passes (max supply: 1000)

## 🏗️ Tech Stack

### Smart Contract
- **Solidity** ^0.8.20
- **Hardhat** - Development environment
- **OpenZeppelin Contracts** - Secure, audited smart contract libraries
- **TypeScript** - Type-safe development

### Frontend
- **Next.js 16** - React framework with App Router
- **React 19** - UI library
- **RainbowKit** - Wallet connection UI
- **Wagmi** - React hooks for Ethereum
- **Viem** - TypeScript Ethereum library
- **Tailwind CSS v4** - Utility-first styling
- **TypeScript** - Type safety

## 📁 Project Structure

```
nft-membership-pass/
├── contracts/                 # Smart contracts
│   └── AccessPassNFT.sol     # Main NFT contract
├── scripts/                   # Deployment scripts
│   └── deploy.ts             # Contract deployment
├── access-pass-frontend/      # Next.js frontend application
│   ├── app/
│   │   ├── components/
│   │   │   ├── Navbar.tsx    # Navigation component
│   │   │   └── PremiumContent.tsx  # Gated content
│   │   ├── page.tsx          # Main landing page
│   │   ├── layout.tsx        # Root layout
│   │   └── providers.tsx     # Web3 providers setup
│   └── src/
│       └── lib/
│           └── contract.ts   # Contract ABI and address
├── hardhat.config.ts          # Hardhat configuration
└── package.json              # Project dependencies
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- MetaMask or another Web3 wallet
- An Ethereum testnet account with test ETH (for deployment)

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/nft-membership-pass.git
cd nft-membership-pass
```

2. **Install root dependencies**
```bash
npm install
```

3. **Install frontend dependencies**
```bash
cd access-pass-frontend
npm install
cd ..
```

### Smart Contract Setup

1. **Compile the contract**
```bash
npx hardhat compile
```

2. **Deploy to testnet**
```bash
npx hardhat run scripts/deploy.ts --network sepolia
```

3. **Update frontend configuration**
After deployment, update the contract address in `access-pass-frontend/src/lib/contract.ts` with your deployed contract address.

### Frontend Setup

1. **Navigate to frontend directory**
```bash
cd access-pass-frontend
```

2. **Configure environment**
Create a `.env.local` file:
```env
NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID=your_project_id
```
Get your WalletConnect Project ID from [WalletConnect Cloud](https://cloud.walletconnect.com/)

3. **Run the development server**
```bash
npm run dev
```

4. **Open your browser**
Navigate to [http://localhost:3000](http://localhost:3000)

## 📝 Smart Contract Details

### AccessPassNFT.sol

The main smart contract implements ERC721 with the following features:

- **Name**: X-Factor Access Pass
- **Symbol**: XAP
- **Max Supply**: 1,000 NFTs
- **Owner Functions**:
  - `mintPass(address to)` - Mint a new access pass to an address
- **Public Functions**:
  - `isHolder(address user)` - Check if an address owns an access pass
  - All standard ERC721 functions (transfer, approve, etc.)

### Key Contract Features

```solidity
// Check if a user has access
function isHolder(address user) external view returns (bool) {
    return balanceOf(user) > 0;
}

// Mint new pass (owner only)
function mintPass(address to) external onlyOwner {
    require(totalSupply() < MAX_SUPPLY, "Max supply reached");
    uint256 tokenId = totalSupply() + 1;
    _safeMint(to, tokenId);
}
```

## 🎨 Frontend Features

### Main Components

1. **Landing Page** (`app/page.tsx`)
   - Wallet connection
   - NFT ownership verification
   - Access status display
   - Minting interface

2. **Premium Content** (`app/components/PremiumContent.tsx`)
   - Gated content visible only to NFT holders
   - Displays exclusive features

3. **Navigation** (`app/components/Navbar.tsx`)
   - Wallet connection button
   - User address display

### Access Control Flow

1. User connects wallet via RainbowKit
2. Frontend calls `isHolder()` function with user's address
3. If `true`, premium content is rendered
4. If `false`, user sees prompt to acquire NFT

## 🧪 Testing

```bash
# Run smart contract tests
npx hardhat test

# Run frontend tests
cd access-pass-frontend
npm test
```

## 🔐 Security Considerations

- Contract uses OpenZeppelin's audited implementations
- Owner-only minting prevents unauthorized NFT creation
- Max supply cap prevents inflation
- Frontend validates wallet connection before blockchain interactions

## 📦 Deployment

### Contract Deployment

1. Configure your network in `hardhat.config.ts`
2. Set up environment variables (private key, RPC URL)
3. Deploy using Hardhat:
```bash
npx hardhat run scripts/deploy.ts --network <network-name>
```

### Frontend Deployment

The Next.js app can be deployed to:
- **Vercel** (recommended)
- **Netlify**
- **AWS Amplify**
- Any Node.js hosting service

```bash
cd access-pass-frontend
npm run build
npm run start
```

## 🛠️ Development

### Available Scripts

**Root directory:**
- `npx hardhat compile` - Compile smart contracts
- `npx hardhat test` - Run contract tests
- `npx hardhat node` - Start local blockchain

**Frontend directory:**
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 📄 License

This project is licensed under the MIT License.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 💡 Use Cases

This NFT membership system can be adapted for:
- **Exclusive Content Platforms** - Premium articles, videos, courses
- **Private Communities** - Discord access, forums, member areas
- **SaaS Products** - Lifetime access passes, feature unlocks
- **Event Access** - Concert tickets, conference passes
- **Gaming** - In-game items, special abilities, exclusive maps
- **Subscription Services** - Token-based memberships

## 🔮 Future Enhancements

- [ ] Add metadata and IPFS integration
- [ ] Implement tiered access levels
- [ ] Add NFT marketplace integration
- [ ] Create admin dashboard for analytics
- [ ] Add rental/lending functionality
- [ ] Implement time-based access expiration
- [ ] Add multi-chain support

## 📧 Contact

For questions or support, please open an issue in the GitHub repository.

---

Built with ❤️ using Hardhat, Next.js, and RainbowKit

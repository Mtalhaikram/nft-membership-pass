# Security Policy

## 🔒 Security Considerations

This document outlines security best practices for working with this NFT Membership Pass project.

## ⚠️ CRITICAL: Before Making Repository Public

### DO NOT COMMIT These Files

The following files contain sensitive information and must NEVER be committed:

- ✅ **Already in .gitignore:**
  - `.env` - Environment variables
  - `.env.local` - Local environment configuration
  - `*.key` - Private key files
  - `*.pem` - Certificate files
  - `mnemonic.txt` - Wallet seed phrases
  - `private-key.txt` - Private keys
  - `secrets.json` - Secret configurations

### Pre-Publish Checklist

Before making your repository public, verify:

- [ ] No `.env` files are committed
- [ ] No private keys are in the codebase
- [ ] No API keys are hardcoded
- [ ] No wallet addresses with real funds are hardcoded
- [ ] `hardhat.config.ts` uses environment variables (✅ Already done)
- [ ] All sensitive data uses `process.env.*`
- [ ] Run `git log --all --full-history --source -- '*/.env*'` to check history

## 🔑 Required Environment Variables

### Root Directory (.env)

Create a `.env` file in the root directory with:

```env
# Blockchain RPC URL (get from Alchemy or Infura)
SEPOLIA_RPC=https://eth-sepolia.g.alchemy.com/v2/YOUR_API_KEY

# Private key (without 0x prefix)
# WARNING: Use a test wallet, never your main wallet
PRIVATE_KEY=your_private_key_here

# Etherscan API key (for contract verification)
ETHERSCAN_API_KEY=your_etherscan_api_key
```

### Frontend Directory (access-pass-frontend/.env.local)

Create a `.env.local` file in `access-pass-frontend/`:

```env
# WalletConnect Project ID
NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID=your_project_id
```

## 🛡️ Security Best Practices

### For Development

1. **Use Test Networks Only**
   - Develop on Sepolia, Goerli, or local Hardhat network
   - Never test with mainnet or real funds

2. **Separate Wallets**
   - Create a dedicated wallet for development
   - Never use your personal wallet's private key
   - Fund it with only small amounts of testnet ETH

3. **API Keys**
   - Use separate API keys for development vs production
   - Rotate keys regularly
   - Set usage limits on API providers

4. **Git History**
   - If you accidentally committed secrets, they remain in git history
   - Use `git filter-branch` or BFG Repo-Cleaner to remove them
   - Immediately rotate any exposed keys

### For Deployment

1. **Smart Contract Security**
   - Audit contract before mainnet deployment
   - Test thoroughly on testnet
   - Consider using multi-sig wallet for owner functions
   - Set reasonable gas limits

2. **Frontend Security**
   - Never expose private keys in frontend code
   - Validate all user inputs
   - Use HTTPS only
   - Implement rate limiting

3. **Environment Variables**
   - Use secure secret management (GitHub Secrets, AWS Secrets Manager)
   - Never log sensitive environment variables
   - Rotate credentials regularly

## 🔍 How to Check for Leaked Secrets

### Before First Push

```bash
# Check for sensitive files
git status

# Search for potential secrets
grep -r "PRIVATE_KEY\|private.*key\|API_KEY" --exclude-dir=node_modules .

# Check what will be committed
git diff --cached
```

### If You Accidentally Committed Secrets

1. **Immediately rotate all exposed credentials**
2. **Remove from git history:**

```bash
# Using BFG Repo-Cleaner (recommended)
bfg --delete-files .env

# Or using git filter-branch
git filter-branch --force --index-filter \
  "git rm --cached --ignore-unmatch .env" \
  --prune-empty --tag-name-filter cat -- --all

# Force push (only if repo is private or just created)
git push origin --force --all
```

3. **Verify removal:**
```bash
git log --all --full-history --source -- '*/.env*'
```

## 📋 Security Checklist for Public Release

- [ ] All sensitive files in `.gitignore`
- [ ] No hardcoded API keys or private keys
- [ ] Environment variables properly configured
- [ ] Test deployment on testnet works
- [ ] README includes setup instructions
- [ ] SECURITY.md is present (this file)
- [ ] Contract has been tested
- [ ] No personal information in code
- [ ] Git history is clean (no leaked secrets)
- [ ] Dependencies are up to date
- [ ] No TODO comments with sensitive info

## 🚨 Reporting a Vulnerability

If you discover a security vulnerability, please:

1. **DO NOT** open a public issue
2. Email the maintainer directly
3. Provide detailed information about the vulnerability
4. Allow reasonable time for a fix before public disclosure

## 📚 Additional Resources

- [OpenZeppelin Security Best Practices](https://docs.openzeppelin.com/contracts/4.x/api/security)
- [Ethereum Smart Contract Security Best Practices](https://consensys.github.io/smart-contract-best-practices/)
- [OWASP Top 10](https://owasp.org/www-project-top-ten/)
- [Git Secret Scanning Tools](https://github.com/features/security)

## 🔄 Regular Security Maintenance

- Update dependencies monthly: `npm audit`
- Review access permissions quarterly
- Rotate API keys every 6 months
- Review and update this security policy
- Monitor contract for unusual activity

---

**Remember**: Security is an ongoing process, not a one-time setup. Stay vigilant!


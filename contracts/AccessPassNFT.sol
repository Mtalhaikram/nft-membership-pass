// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract AccessPassNFT is ERC721Enumerable, Ownable {

    uint256 public constant MAX_SUPPLY = 1000;
    string private baseTokenURI;

    constructor(string memory baseURI_)
        ERC721("X-Factor Access Pass", "XAP")
        Ownable(msg.sender)
    {
        baseTokenURI = baseURI_;
    }

    function mintPass(address to) external onlyOwner {
        require(totalSupply() < MAX_SUPPLY, "Max supply reached");

        uint256 tokenId = totalSupply() + 1;
        _safeMint(to, tokenId);
    }

    function isHolder(address user) external view returns (bool) {
        return balanceOf(user) > 0;
    }

    function _baseURI() internal view override returns (string memory) {
        return baseTokenURI;
    }
}

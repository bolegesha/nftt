// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";

contract NFT is ERC721URIStorage, Ownable{
    constructor(address initialOwner) ERC721("NFT", "NFT") Ownable(initialOwner) {}

        function mint(
            address _to,
            uint256 _tokenID,
            string calldata _uri
        ) external onlyOwner {
            _mint(_to, _tokenID);
            _setTokenURI(_tokenID, _uri);
        }

}
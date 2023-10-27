const { ethers, upgrades } = require("hardhat");

async function main() {
  // Replace with your actual deployer address and NFT URI
  const deployerAddress = "0x22B330f2BBabed4E6aa0161b0d0673F448c27e24";
  const nftURI = "ipfs://QmTSiZirwHdErLvdeeLQtbwb7uhW6tzxJTTeMMhrBnZTFw";

  // Deploy the NFT contract
  const NFT = await ethers.getContractFactory("NFT");
  const nft = await upgrades.deployProxy(NFT, [deployerAddress], { initializer: "initialize" });
  await nft.deployed();

  console.log("NFT Contract deployed to:", nft.address);

  // Mint an NFT
  const tokenId = 1; // Set the desired token ID
  await nft.mint(deployerAddress, tokenId, nftURI);

  console.log("NFT minted with ID:", tokenId);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

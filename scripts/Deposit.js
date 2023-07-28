//import c from "contracts/examples/erc721-transfer/FxERC721RootTunnel.sol"// Import necessary packages and contracts
const { ethers } = require("hardhat");
const fxRootContractABI = require("../fxRootContractABI.json");
const tokenContractJSON = require("../artifacts/contracts/footballer.sol/footballer.json");
require("dotenv").config();
const tokenABI = tokenContractJSON.abi;

//Transfer ERC721A tokens to the Ethereum FxChain network
async function main() {
  // Set up connections to network and wallet
  const networkAddress =
    "https://eth-goerli.g.alchemy.com/v2/Bh22s-iYGmFwy-9Dq3New4jIpUES9xZt";
  const privateKey = process.env.PRIVATE_KEY;
  const provider = new ethers.providers.JsonRpcProvider(networkAddress);

  // Create a wallet instance
  const wallet = new ethers.Wallet(privateKey, provider);

  // Get the signer instance
  const [signer] = await ethers.getSigners();

  // Get ERC721A contract instance
  const NFT = await ethers.getContractFactory("footballer");
  const nft = await NFT.attach("0xeeF5b06411134a7836Aa89cb5a29baF622F97E3B");

  // Get FXRoot contract instance
  const fxRootAddress = "0xF9bc4a80464E48369303196645e876c8C7D972de";
  const fxRoot = await ethers.getContractAt(fxRootContractABI, fxRootAddress);

  // TokenIds to transfer
  const tokenIds = [1, 2, 3, 4, 5];

  // Approve the nfts for transfer
  const approveTx = await nft
    .connect(signer)
    .setApprovalForAll(fxRootAddress, true);
  await approveTx.wait();
  console.log("Approval confirmed");

  // Deposit the nfts to the FXRoot contracts
  for (let i = 0; i < tokenIds; i++) {
    const depositTx = await fxRoot
      .connect(signer)
      .deposit(nft.address, wallet.address, tokenIds[i], "0x6566");

    // Wait for the deposit to be confirmed
    await depositTx.wait();
  }

  console.log("Approved and deposited");

  // Test balanceOf
  const balance = await nft.balanceOf(wallet.address);

  // Print the balance of the wallet
  console.log(
    "NFT wallet balance",
    wallet.address,
    "is: ",
    balance.toString()
  );
}

// Call the main function and handle any errors
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
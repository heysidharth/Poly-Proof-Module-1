const hre = require("hardhat");
const tokenContractJSON = require("../artifacts/contracts/footballer.sol/footballer.json");

const tokenAddress = 
"0xeeF5b06411134a7836Aa89cb5a29baF622F97E3B"; // place your erc721A contract address here
const tokenABI = tokenContractJSON.abi;
const walletAddress = 
"0x14A6ADcD4B5219eb527E0a5F9Da20292c44690da"; // place your public address for your wallet here

async function main() {

    const token = await hre.ethers.getContractAt(tokenABI, tokenAddress);
    
    console.log("You now have: " + await token.balanceOf(walletAddress) + " tokens");
  }
  
  // We recommend this pattern to be able to use async/await everywhere
  // and properly handle errors.
  main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
# Poly-Proof-Module-1

The **Footballer** contract is an Ethereum-based smart contract that implements the ERC721A standard and allows the creation and management of (NFTs) tokens. NFTs are digital assets that represent ownership of unique items or pieces of content, and they have become popular in various applications, including digital art, collectibles, and gaming.
In this project, an NFT collection is to be deployed on the goerli network, Map the collection to Polygon, and Transfer assets to mumbai network using Polygon Bridge.

### Solidity Version

The contract is developed using Solidity version 0.8.9.

### ERC721A Import

The contract imports the `ERC721A` contract, which provides the implementation for the ERC721A standard.

### Contract Name and Symbol

```
contract footballer is ERC721A
```

The `footballer` contract extends the `ERC721A` contract and represents a collection of unique NFTs.

### Maximum Quantity of Tokens

```
uint256 public maxQuantity = 5;
```

The `maxQuantity` variable sets the maximum number of NFTs that can be minted within this collection. In this contract, the maximum limit is set to 5 tokens.

### Base URL for NFTs (IPFS Base URL)

```
string baseUrl = "https://gateway.pinata.cloud/ipfs/QmVrUvbb6U7XinqMF1KbBwAYW2dyuGfS8HqNvpReQZevH5/";
```

The `baseUrl` variable defines the base URL for the NFTs' metadata. This URL will be combined with the token ID to form the complete URL for accessing each NFT's metadata stored on the IPFS platform.


# Getting Started

### Prerequisites

Before you begin setting up and executing the project, make sure you have the following:

- DALLE 2, Midjourney, or Lexica for generating images, depending on the specific AI model chosen.
- An IPFS account and access to pinata.cloud or a similar service for storing the NFT images securely.
- Access to the Ethereum network to deploy the smart contract.
- Familiarity with the Polygon network and understanding of the token mapper tool.
- Hardhat framework installed to facilitate scripting and testing.

### Execution
downloading the entire repository which will give you access to other contents of the repository. Navigate to the Poly_Proof project directory, run:

npm install After installing the dependencies, run the test file by using the following command:
npx hardhat run scripts/deploy.js --network goerli
   - Execute the following command: `npx hardhat run scripts/deploy.js --network goerli`
   - MyNFT contract address: `   - Execute the following command: `npx hardhat run scripts/deploy.js --network goerli`
   - MyNFT contract address: `0xeeF5b06411134a7836Aa89cb5a29baF622F97E3B`
   -  **Map the NFT collection**: Optionally, you can map the NFT collection on the Polygon network using the token mapper tool. This step helps visualize and interact with the collection on the Polygon network.
   - Ethereum address: `0xeeF5b06411134a7836Aa89cb5a29baF622F97E3B`
   - Child Address on Polygon: `0x2ECDB6E900a9aaCDb5A72820d44104244d9CED47`
   - **Deposit NFTs to the Bridge**: Perform the required operations to deposit the NFTs to the FxPortal Bridge. This step facilitates the secure transfer of the NFTs from the Ethereum network to the Polygon Mumbai network.
- Execute the command: `npx hardhat run scripts/Deposit.js --network goerli`
- **Test balanceOf on Mumbai**: Finally, test the `balanceOf` function on the Polygon Mumbai network to verify the NFT balance of a specific address.
- Execute the command: `npx hardhat run scripts/getBalance.js --network mumbai`

# Author
Sidharth Samantaray
(@heysidharth)

# Walkthrough Video
- https://www.loom.com/share/4d7dd85600da45b6885dc6dff498321b

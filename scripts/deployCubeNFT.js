const hre = require("hardhat");

async function main() {

  const CubeNFT = await hre.ethers.getContractFactory("CubeNFT");
  const cubenft = await CubeNFT.deploy();

  await cubenft.deployed();

  console.log("CubeNFT deployed to:", cubenft.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

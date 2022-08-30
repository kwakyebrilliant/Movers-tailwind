const hre = require("hardhat");

async function main() {
  const [deployer] = await hre.ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);

  let txHash, txReceipt;

  const Mover = await hre.ethers.getContractFactory("Mover");
  const mover = await Mover.deploy();
  await mover.deployed();

  txHash = mover.deployTransaction.hash;
  txReceipt = await ethers.provider.waitForTransaction(txHash);
  let moverAddress = txReceipt.contractAddress;

  console.log("Mover contract address", moverAddress);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
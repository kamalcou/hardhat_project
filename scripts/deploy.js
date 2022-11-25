// scripts/deploy.js
async function main () {
  // We get the contract to deploy
  const Register = await ethers.getContractFactory('Register');
  console.log('Deploying Register...');
  const register = await Register.deploy();
  await register.deployed();
  console.log('Register deployed to:', register.address);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });

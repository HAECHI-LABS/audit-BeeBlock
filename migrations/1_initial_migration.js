
const Tokens = artifacts.require("Beeblock");

module.exports = async function(deployer) {
  await deployer.deploy(Tokens);
};

const Multi = artifacts.require("Wallet");

module.exports = function (deployer) {
  deployer.deploy(Multi, ['0x591fC54eDEDa125eD6c3339488eB9048b290AA95'], 2);
};

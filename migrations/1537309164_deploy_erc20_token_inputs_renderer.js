const ERC20TokenInputsRenderer = artifacts.require("ERC20TokenInputsRenderer");

module.exports = function (deployer) {
    deployer.deploy(ERC20TokenInputsRenderer);
};


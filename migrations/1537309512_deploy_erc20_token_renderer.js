const TotalSupplyWidgetRenderer = artifacts.require("TotalSupplyWidgetRenderer");
const TokenAddressWidgetRenderer = artifacts.require("TokenAddressWidgetRenderer");
const MaxMintableWidgetRenderer = artifacts.require("MaxMintableWidgetRenderer");
const MintTokensWidgetRenderer = artifacts.require("MintTokensWidgetRenderer");
const BurnTokensWidgetRenderer = artifacts.require("BurnTokensWidgetRenderer");
const PauseWidgetRenderer = artifacts.require("PauseWidgetRenderer");
const UnpauseWidgetRenderer = artifacts.require("UnpauseWidgetRenderer");
const MyBalanceWidgetRenderer = artifacts.require("MyBalanceWidgetRenderer");
const TransferWidgetRenderer = artifacts.require("TransferWidgetRenderer");
const ERC20TokenInputsRenderer = artifacts.require("ERC20TokenInputsRenderer");
const ERC20TokenRenderer = artifacts.require("ERC20TokenRenderer");

module.exports = function(deployer) {
    return deployer.then(async () => {
        let erc20TokenRenderer = await deployer.deploy(ERC20TokenRenderer);
        await Promise.all([
            await erc20TokenRenderer.setAdminWidgetRenderers([
                TotalSupplyWidgetRenderer.address,
                TokenAddressWidgetRenderer.address,
                MaxMintableWidgetRenderer.address,
                MintTokensWidgetRenderer.address,
                BurnTokensWidgetRenderer.address,
                PauseWidgetRenderer.address,
                UnpauseWidgetRenderer.address
            ]),
            await erc20TokenRenderer.setUserWidgetRenderers([
                MyBalanceWidgetRenderer.address,
                TransferWidgetRenderer.address,
                BurnTokensWidgetRenderer.address
            ]),
            await erc20TokenRenderer.setInputsRenderer(ERC20TokenInputsRenderer.address)
        ]);
    });
};

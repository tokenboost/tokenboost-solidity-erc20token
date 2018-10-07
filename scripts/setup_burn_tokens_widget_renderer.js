const BurnTokensWidgetRenderer = artifacts.require("BurnTokensWidgetRenderer");

module.exports = async function (callback) {
    console.log("Setting up BurnTokensWidgetRenderer...");
    try {
        let renderer = await BurnTokensWidgetRenderer.deployed();
        await Promise.all([
            await renderer.setResource("en", "burn_tokens", "Burn Tokens"),
            await renderer.setResource("en", "short_desc", "You can burn tokens you own."),
            await renderer.setResource("en", "long_desc", "Warning! Once you burn your tokens, you cannot revert it."),
            await renderer.setResource("en", "burnable_eth", "Burnable ETH"),
            await renderer.setResource("en", "amount", "Amount"),
            await renderer.setResource("en", "burn", "Burn"),
            await renderer.setResource("en", "burn_confirm", "Do you really want to burn tokens? You cannot revert it."),
            await renderer.setResource("ko", "burn_tokens", "토큰 소각"),
            await renderer.setResource("ko", "short_desc", "소유하고 있는 토큰을 소각할 수 있습니다."),
            await renderer.setResource("ko", "long_desc", "경고! 토큰을 소각하면 영구히 소멸됩니다."),
            await renderer.setResource("ko", "burnable_eth", "소각가능한 ETH"),
            await renderer.setResource("ko", "amount", "수량"),
            await renderer.setResource("ko", "burn", "소각하기"),
            await renderer.setResource("ko", "burn_confirm", "토큰을 소각하시겠습니까? 한번 소각된 토큰은 되찾을 수 없습니다.")
        ]);
        callback();
    } catch (e) {
        callback(e);
    }
};

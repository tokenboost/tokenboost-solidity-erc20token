const MaxMintableWidgetRenderer = artifacts.require("MaxMintableWidgetRenderer");

module.exports = async function (callback) {
    try {
        let renderer = await MaxMintableWidgetRenderer.deployed();
        await Promise.all([
            await renderer.setResource("en", "max_mintable", "Max Mintable"),
            await renderer.setResource("en", "short_desc", "You can set the maximum amount of token to mint."),
            await renderer.setResource("en", "long_desc", "If you set it to 0, there's no limit on how many tokens to be minted."),
            await renderer.setResource("en", "amount", "Amount"),
            await renderer.setResource("en", "update", "Update"),
            await renderer.setResource("en", "update_confirm", "Do you want to update the max mintable?"),
            await renderer.setResource("ko", "max_mintable", "최고 발행가능량"),
            await renderer.setResource("ko", "short_desc", "토큰을 최대 몇개까지 발행할지 설정할 수 있습니다."),
            await renderer.setResource("ko", "long_desc", "만약 0으로 설정하면 토큰 발행량의 제한이 없어집니다."),
            await renderer.setResource("ko", "amount", "수량"),
            await renderer.setResource("ko", "update", "업데이트"),
            await renderer.setResource("ko", "update_confirm", "최대 발행가능량을 업데이트하시겠습니까?"),
        ]);
        callback();
    } catch (e) {
        callback(e);
    }
};

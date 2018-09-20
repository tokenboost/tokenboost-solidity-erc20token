const TokenAddressWidgetRenderer = artifacts.require("TokenAddressWidgetRenderer");

module.exports = async function (callback) {
    try {
        let renderer = await TokenAddressWidgetRenderer.deployed();
        await Promise.all([
            await renderer.setResource("en", "token_address", "Token Address"),
            await renderer.setResource("en", "short_desc", "The address of the token's contract."),
            await renderer.setResource("en", "long_desc", "Every token has its own contract."),
            await renderer.setResource("ko", "token_address", "토큰 주소"),
            await renderer.setResource("ko", "short_desc", "토큰 계약의 주소를 표시합니다."),
            await renderer.setResource("ko", "long_desc", "모든 토큰은 고유의 계약을 가지고 있습니다."),
        ]);
        callback();
    } catch (e) {
        callback(e);
    }
};

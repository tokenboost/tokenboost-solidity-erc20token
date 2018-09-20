const MintTokensWidgetRenderer = artifacts.require("MintTokensWidgetRenderer");

module.exports = async function (callback) {
    try {
        let renderer = await MintTokensWidgetRenderer.deployed();
        await Promise.all([
            await renderer.setResource("en", "mint_tokens", "Mint Tokens"),
            await renderer.setResource("en", "short_desc", "You can mint new tokens."),
            await renderer.setResource("en", "long_desc", "The amount of minted tokens are added to the balance of a specific address you set."),
            await renderer.setResource("en", "mintable_eth", "Mintable ETH"),
            await renderer.setResource("en", "address", "Address"),
            await renderer.setResource("en", "amount", "Amount"),
            await renderer.setResource("en", "mint", "Mint"),
            await renderer.setResource("en", "mint_confirm", "Do you really want to mint tokens? You cannot revert it."),
            await renderer.setResource("ko", "mint_tokens", "토큰 추가 발행"),
            await renderer.setResource("ko", "short_desc", "토큰을 추가로 발행할 수 있습니다."),
            await renderer.setResource("ko", "long_desc", "지정한 특정 주소의 잔액에 새로 발행된 토큰의 양만큼 추가됩니다."),
            await renderer.setResource("ko", "mintable_eth", "추가 발행가능한 ETH"),
            await renderer.setResource("ko", "address", "주소"),
            await renderer.setResource("ko", "amount", "수량"),
            await renderer.setResource("ko", "mint", "추가 발행하기"),
            await renderer.setResource("ko", "mint_confirm", "토큰을 추가 발행하시겠습니까?"),
        ]);
        callback();
    } catch (e) {
        callback(e);
    }
};

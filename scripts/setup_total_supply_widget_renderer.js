const TotalSupplyWidgetRenderer = artifacts.require("TotalSupplyWidgetRenderer");

module.exports = async function (callback) {
    try {
        let renderer = await TotalSupplyWidgetRenderer.deployed();
        await Promise.all([
            await renderer.setResource("en", "total_supply", "Total Supply"),
            await renderer.setResource("en", "short_desc", "The total amount of tokens supplied."),
            await renderer.setResource("en", "long_desc", "Total supply is the sum of every holder's balance."),
            await renderer.setResource("ko", "total_supply", "총 공급량"),
            await renderer.setResource("ko", "short_desc", "공급된 총 토큰의 수량."),
            await renderer.setResource("ko", "long_desc", "총 공급량은 모든 토큰 보유자들의 잔액을 더한 수치입니다."),
        ]);
        callback();
    } catch (e) {
        callback(e);
    }
};

const MyBalanceWidgetRenderer = artifacts.require("MyBalanceWidgetRenderer");

module.exports = async function (callback) {
    console.log("Setting up MyBalanceWidgetRenderer...");
    try {
        let renderer = await MyBalanceWidgetRenderer.deployed();
        await Promise.all([
            await renderer.setResource("en", "my_balance", "My Balance"),
            await renderer.setResource("en", "short_desc", "The amount of tokens you have."),
            await renderer.setResource("en", "long_desc", "The amount of tokens you have."),
            await renderer.setResource("ko", "my_balance", "나의 잔액"),
            await renderer.setResource("ko", "short_desc", "소유하고 있는 토큰의 잔액을 나타냅니다."),
            await renderer.setResource("ko", "long_desc", "소유하고 있는 토큰의 잔액을 나타냅니다."),
        ]);
        callback();
    } catch (e) {
        callback(e);
    }
};

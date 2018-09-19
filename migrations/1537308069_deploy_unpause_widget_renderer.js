const UnpauseWidgetRenderer = artifacts.require("UnpauseWidgetRenderer");

module.exports = function(deployer) {
    return deployer.then(async () => {
        let renderer = await deployer.deploy(UnpauseWidgetRenderer);
        await Promise.all([
            await renderer.setResource("en", "unpause", "Unpause"),
            await renderer.setResource("en", "short_desc", "You can unpause the token to unfreeze all the assets."),
            await renderer.setResource("en", "long_desc", "When unpaused, anyone can transfer tokens."),
            await renderer.setResource("en", "unpause_confirm", "Do you want to unpause the token?"),
            await renderer.setResource("ko", "unpause", "거래 재개"),
            await renderer.setResource("ko", "short_desc", "토큰 거래를 재개 모든 자산 동결을 해제할 수 있습니다."),
            await renderer.setResource("ko", "long_desc", "거래 일시정지가 이뤄지면 누구나 토큰을 전송할 수 있게 됩니다."),
            await renderer.setResource("ko", "unpause_confirm", "토큰 거래를 재개하시겠습니까?"),
        ]);
    });
};


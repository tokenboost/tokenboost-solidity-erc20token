const PauseWidgetRenderer = artifacts.require("PauseWidgetRenderer");

module.exports = function(deployer) {
    return deployer.then(async () => {
        let renderer = await deployer.deploy(PauseWidgetRenderer);
        await Promise.all([
            await renderer.setResource("en", "pause", "Pause"),
            await renderer.setResource("en", "short_desc", "You can pause the token to freeze all the assets."),
            await renderer.setResource("en", "long_desc", "When paused, no one can transfer tokens."),
            await renderer.setResource("en", "pause_confirm", "Do you want to pause the token? You can unpause it later."),
            await renderer.setResource("ko", "pause", "거래 일시정지"),
            await renderer.setResource("ko", "short_desc", "토큰 거래를 일시정지시켜 모든 자산을 동결시킬 수 있습니다."),
            await renderer.setResource("ko", "long_desc", "거래 일시정지가 이뤄지면 아무도 토큰을 전송할 수 없게 됩니다."),
            await renderer.setResource("ko", "pause_confirm", "토큰 거래를 일시정지하시겠습니까? 나중에 재개할 수 있습니다."),
        ]);
    });
};


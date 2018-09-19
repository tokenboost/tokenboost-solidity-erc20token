const TransferWidgetRenderer = artifacts.require("TransferWidgetRenderer");

module.exports = function(deployer) {
    return deployer.then(async () => {
        let renderer = await deployer.deploy(TransferWidgetRenderer);
        await Promise.all([
            await renderer.setResource("en", "transfer", "Transfer"),
            await renderer.setResource("en", "short_desc", "You can send an amount of tokens to another address."),
            await renderer.setResource("en", "long_desc", "You can send an amount of tokens to another address."),
            await renderer.setResource("en", "receiver", "Receiver"),
            await renderer.setResource("en", "amount", "Amount"),
            await renderer.setResource("en", "transfer_confirm", "Do you want to transfer?"),
            await renderer.setResource("ko", "transfer", "전송하기"),
            await renderer.setResource("ko", "short_desc", "일정량의 토큰을 다른 주소로 전송할 수 있습니다."),
            await renderer.setResource("ko", "long_desc", "일정량의 토큰을 다른 주소로 전송할 수 있습니다."),
            await renderer.setResource("ko", "receiver", "받는이 주소"),
            await renderer.setResource("ko", "amount", "수량"),
            await renderer.setResource("ko", "transfer_confirm", "토큰을 전송하시겠습니까?"),
        ]);
    });
};

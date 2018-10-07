const ERC20TokenInputsRenderer = artifacts.require("ERC20TokenInputsRenderer");

module.exports = async function (callback) {
    console.log("Setting up ERC20TokenInputsRenderer...");
    try {
        let renderer = await ERC20TokenInputsRenderer.deployed();
        await Promise.all([
            await renderer.setResource("en", "name", "Name"),
            await renderer.setResource("en", "symbol", "Symbol"),
            await renderer.setResource("en", "decimals", "Decimals (18 recommended)"),
            await renderer.setResource("en", "initial_supply", "Initial Supply (initial balance of admin)"),
            await renderer.setResource("en", "mintable", "Mintable"),
            await renderer.setResource("en", "burnable", "Burnable"),
            await renderer.setResource("en", "pausable", "Pausable"),
            await renderer.setResource("en", "update", "Update"),
            await renderer.setResource("en", "update_confirm", "Do you want to update?"),
            await renderer.setResource("ko", "name", "이름"),
            await renderer.setResource("ko", "symbol", "심볼"),
            await renderer.setResource("ko", "decimals", "데시멀 (18 추천)"),
            await renderer.setResource("ko", "initial_supply", "초기 공급량 (관리자의 초기 잔액)"),
            await renderer.setResource("ko", "mintable", "추가 발행 가능"),
            await renderer.setResource("ko", "burnable", "소각 가능"),
            await renderer.setResource("ko", "pausable", "거래 일시정지 가능"),
            await renderer.setResource("ko", "update", "업데이트"),
            await renderer.setResource("ko", "update_confirm", "업데이트 하시겠습니까?"),
        ]);
        callback();
    } catch (e) {
        callback(e);
    }
};

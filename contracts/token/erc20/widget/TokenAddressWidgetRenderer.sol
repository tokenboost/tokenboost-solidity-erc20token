pragma solidity ^0.4.24;

import "./ERC20TokenWidgetRenderer.sol";
import "tokenboost-solidity/contracts/widget/Widgets.sol";
import "tokenboost-solidity/contracts/utils/StringUtils.sol";

contract TokenAddressWidgetRenderer is ERC20TokenWidgetRenderer {
    using Widgets for Widgets.Widget;
    using AddressUtils for address;
    using StringUtils for string;

    string public constant TOKEN_ADDRESS = "token_address";
    string public constant SHORT_DESC = "short_desc";
    string public constant LONG_DESC = "long_desc";

    function render(string _locale, ERC20Token _token) public view returns (string) {
        Elements.Element[] memory elements = new Elements.Element[](1);
        elements[0] = Elements.Element(
            true,
            TOKEN_ADDRESS,
            "address",
            resources[_locale][TOKEN_ADDRESS],
            address(_token).toString().quoted(),
            Actions.empty(),
            Tables.empty()
        );
        Widgets.Widget memory widget = Widgets.Widget(
            resources[_locale][TOKEN_ADDRESS],
            resources[_locale][SHORT_DESC],
            resources[_locale][LONG_DESC],
            4,
            elements
        );
        return widget.toJson();
    }
}

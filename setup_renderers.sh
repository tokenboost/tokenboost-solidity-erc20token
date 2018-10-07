#!/bin/bash

truffle exec scripts/setup_burn_tokens_widget_renderer.js --network $1 &&
truffle exec scripts/setup_erc20_token_inputs_renderer.js --network $1 &&
truffle exec scripts/setup_max_mintable_widget_renderer.js --network $1 &&
truffle exec scripts/setup_mint_tokens_widget_renderer.js --network $1 &&
truffle exec scripts/setup_my_balance_widget_renderer.js --network $1 &&
truffle exec scripts/setup_pause_widget_renderer.js --network $1 &&
truffle exec scripts/setup_token_address_widget_renderer.js --network $1 &&
truffle exec scripts/setup_total_supply_widget_renderer.js --network $1 &&
truffle exec scripts/setup_transfer_widget_renderer.js --network $1 &&
truffle exec scripts/setup_unpause_widget_renderer.js --network $1

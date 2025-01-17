// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract MockV3Aggregator {
    int256 private answer;
    uint8 private decimalsValue;

    constructor(uint8 _decimals, int256 _initialAnswer) {
        decimalsValue = _decimals;
        answer = _initialAnswer;
    }

    function latestRoundData()
        external
        view
        returns (
            uint80,
            int256,
            uint256,
            uint256,
            uint80
        )
    {
        return (0, answer, 0, 0, 0);
    }

    function decimals() external view returns (uint8) {
        return decimalsValue;
    }

    function updateAnswer(int256 _answer) external {
        answer = _answer;
    }
}

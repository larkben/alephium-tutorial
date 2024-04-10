pragma solidity ^0.8.0;

contract RalphTypes {
    struct ContractData {
        uint256 time;
        bool condition;
        bytes text;
        address owner;
        uint256[4] array;
    }

    ContractData public contractData;

    constructor(
        uint256 _time,
        bool _condition,
        bytes memory _text,
        address _owner,
        uint256[4] memory _array
    ) {
        contractData.time = _time;
        contractData.condition = _condition;
        contractData.text = _text;
        contractData.owner = _owner;
        contractData.array = _array;
    }

    function getTime() public view returns (uint256) {
        return contractData.time;
    }

    function getCondition() public view returns (bool) {
        return contractData.condition;
    }

    function getText() public view returns (bytes memory) {
        return contractData.text;
    }

    function getOwner() public view returns (address) {
        return contractData.owner;
    }

    function getArray() public view returns (uint256[4] memory) {
        return contractData.array;
    }
}
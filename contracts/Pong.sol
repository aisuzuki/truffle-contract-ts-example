pragma solidity 0.5.3;
pragma experimental ABIEncoderV2;

contract Pong {

    struct User {
        address id;
        string name;

        History[] histories;
    }

    struct History {
        uint256 date;
        string message;
    }



}
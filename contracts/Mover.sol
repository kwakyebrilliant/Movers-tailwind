// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "hardhat/console.sol";

contract Mover {

     mapping(uint256 => PropertyOwner) public idPropertyOwner;
      uint public propertyCount = 0;

      struct PropertyOwner {
      uint256 id;
      string ownername;
      Nested nested;
    }

    struct Nested {
      string propertylocation;
      string propertyspace;
      string propertyparkingspace;
      string propertybathroom;
    }

}
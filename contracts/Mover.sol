// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "hardhat/console.sol";

contract Mover {

     mapping(uint256 => PropertyOwner) public idPropertyOwner;
      uint public propertyCount = 0;

      struct PropertyOwner {
      uint256 id;
      string propertynumber;
      string ownername;
      Nested nested;
    }

    struct Nested {
      string propertylocation;
      string propertyspace;
      string propertyparkingspace;
      string propertybathroom;
      string propertybedroom;
      string propertycategory;
      string propertytype;
      string propertyduration;
      string hash;
      string document;
    }


    //add property
    function addProperty(PropertyOwner memory property_)
      public
      payable
      {
        require(bytes(property_.ownername).length > 0, 'Owner name is required');
        require(bytes(property_.nested.hash).length > 0, 'Image Hash is required');
         require(bytes(property_.nested.document).length > 0, 'Document is required');

        propertyCount++;
        PropertyOwner storage property = idPropertyOwner[propertyCount];

        property.id = propertyCount;
        property.propertynumber = property_.propertynumber;
        property.ownername = property_.ownername;
        property.nested.propertylocation = property_.nested.propertylocation;
        property.nested.propertyspace = property_.nested.propertyspace;
        property.nested.propertyparkingspace = property_.nested.propertyparkingspace;
        property.nested.propertybathroom = property_.nested.propertybathroom;
        property.nested.propertybedroom = property_.nested.propertybedroom;
        property.nested.propertycategory = property_.nested.propertycategory;
        property.nested.propertytype = property_.nested.propertytype;
        property.nested.propertyduration = property_.nested.propertyduration;
        property.nested.hash = property_.nested.hash;

    }


     //all properties
    function fetchPropertyOwner() public view returns (PropertyOwner[] memory) {
      uint itemCount = propertyCount;
      uint currentIndex = 0;
      PropertyOwner[]  memory items = new PropertyOwner[](itemCount);
       for (uint i = 0; i < itemCount; i++) {
          uint currentId = i + 1;
          PropertyOwner storage currentItem = idPropertyOwner[currentId];
          items[currentIndex] = currentItem;
          currentIndex += 1;
      }
      return items;
    }

}
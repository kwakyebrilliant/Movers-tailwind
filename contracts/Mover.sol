// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "hardhat/console.sol";

contract Mover {

     mapping(uint256 => PropertyOwner) public idPropertyOwner;
      uint public propertyCount = 0;
      uint public propertySold = 0;

       address payable propertyOwner;

      struct PropertyOwner {
      uint256 id;
      string propertynumber;
      string ownername;
      Nested nested;
    }

    struct Nested {
      string propertylocation;
      string propertydescription;
      string propertyspace;
      string propertyparkingspace;
      string propertybathroom;
      string propertybedroom;
      uint256 propertyprice;
      string propertycategory;
      string propertytype;
      string propertyduration;
      string hash;
      string supportimage1;
      string supportimage2;
      string document;
      address propertyOwner;
      address propertyBuyer;
    }


    //add property
    function addProperty(PropertyOwner memory property_)
      public
      payable
      {
        require(bytes(property_.ownername).length > 0, 'Owner name is required');
        require(bytes(property_.nested.hash).length > 0, 'Image Hash is required');
        require(bytes(property_.nested.supportimage1).length > 0, 'Support image1 is required');
        require(bytes(property_.nested.supportimage2).length > 0, 'Support image2 is required');
        require(bytes(property_.nested.document).length > 0, 'Document is required');

        propertyCount++;
        PropertyOwner storage property = idPropertyOwner[propertyCount];

        property.id = propertyCount;
        property.propertynumber = property_.propertynumber;
        property.ownername = property_.ownername;
        property.nested.propertylocation = property_.nested.propertylocation;
        property.nested.propertydescription = property_.nested.propertydescription;
        property.nested.propertyspace = property_.nested.propertyspace;
        property.nested.propertyparkingspace = property_.nested.propertyparkingspace;
        property.nested.propertybathroom = property_.nested.propertybathroom;
        property.nested.propertybedroom = property_.nested.propertybedroom;
        property.nested.propertyprice = property_.nested.propertyprice;
        property.nested.propertycategory = property_.nested.propertycategory;
        property.nested.propertytype = property_.nested.propertytype;
        property.nested.propertyduration = property_.nested.propertyduration;
        property.nested.hash = property_.nested.hash;
        property.nested.supportimage1 = property_.nested.supportimage1;
        property.nested.supportimage2 = property_.nested.supportimage2;
        property.nested.document = property_.nested.document;
        

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
 

    //Transfer ownership of property
    function transferProperty(uint256 id, uint256 propertyprice) public payable{
      address propertyBuyer = idPropertyOwner[id].nested.propertyBuyer;
      PropertyOwner storage _transfer = idPropertyOwner[id];
      _transfer.id = idPropertyOwner[id].id;
      _transfer.ownername = idPropertyOwner[id].ownername;
      _transfer.propertynumber = idPropertyOwner[id].propertynumber;
      _transfer.nested.propertylocation = idPropertyOwner[id].nested.propertylocation;
      _transfer.nested.propertydescription = idPropertyOwner[id].nested.propertydescription;
      _transfer.nested.propertyspace = idPropertyOwner[id].nested.propertyspace;
      _transfer.nested.propertyparkingspace = idPropertyOwner[id].nested.propertyparkingspace;
      _transfer.nested.propertybathroom = idPropertyOwner[id].nested.propertybathroom;
      _transfer.nested.propertybedroom = idPropertyOwner[id].nested.propertybedroom;
      _transfer.nested.propertyprice = idPropertyOwner[id].nested.propertyprice;
      _transfer.nested.propertycategory = idPropertyOwner[id].nested.propertycategory;
      _transfer.nested.propertytype = idPropertyOwner[id].nested.propertytype;
      _transfer.nested.propertyduration = idPropertyOwner[id].nested.propertyduration;
      _transfer.nested.hash = idPropertyOwner[id].nested.hash;
      _transfer.nested.supportimage1 = idPropertyOwner[id].nested.supportimage1;
      _transfer.nested.supportimage2 = idPropertyOwner[id].nested.supportimage2;
      _transfer.nested.document = idPropertyOwner[id].nested.document;
      idPropertyOwner[id].nested.propertyOwner = payable(msg.sender);
      idPropertyOwner[id].nested.propertyBuyer = payable(address(0));
      payable(propertyOwner).transfer(propertyprice);
      payable(propertyBuyer).transfer(msg.value);

    }

    //returns unsold properties
    function fetchUnsoldProperties() public view returns (PropertyOwner[] memory) {
      uint itemCount = propertyCount;
      uint unsoldItemCount = propertyCount - propertySold;
      uint currentIndex = 0;

      PropertyOwner[] memory items = new PropertyOwner[](unsoldItemCount);
      for (uint i = 0; i < itemCount; i++) {
        if (idPropertyOwner[i + 1].nested.propertyOwner == address(this)) {
          uint currentId = i + 1;
          PropertyOwner storage currentItem = idPropertyOwner[currentId];
          items[currentIndex] = currentItem;
          currentIndex += 1;
        }
      }
      return items;
    }

    //returns properties a user purchased
    function fetchMyProperties() public view returns (PropertyOwner[] memory) {
      uint totalItemCount = propertyCount;
      uint itemCount = 0;
      uint currentIndex = 0;

      for (uint i = 0; i < totalItemCount; i++) {
        if (idPropertyOwner[i + 1].nested.propertyOwner == msg.sender) {
          itemCount += 1;
        }
      }

      PropertyOwner[] memory items = new PropertyOwner[](itemCount);
      for (uint i = 0; i < totalItemCount; i++) {
        if (idPropertyOwner[i + 1].nested.propertyOwner == msg.sender) {
          uint currentId = i + 1;
          PropertyOwner storage currentItem = idPropertyOwner[currentId];
          items[currentIndex] = currentItem;
          currentIndex += 1;
        }
      }
      return items;
    }

}

// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "hardhat/console.sol";

contract Mover {

     mapping(uint256 => PropertyOwner) public idPropertyOwner;
      uint public propertyCount = 0;
      uint public propertySold = 0;
      address payable propertybuyer;

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
      address propertyseller;
      address propertybuyer;
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


  //  Transfers ownership of property
  function transferProperty(uint256 id) public payable {
    PropertyOwner storage propertyTransfer = idPropertyOwner[id];
    require(bytes(propertyTransfer.nested.hash).length > 0, 'Image Hash is required');
    require(propertyTransfer.nested.propertyprice > 0, "Please submit the asking price");
    propertyTransfer.nested.propertyseller =  idPropertyOwner[id].nested.propertyseller;
    propertyTransfer.nested.propertyprice = idPropertyOwner[id].nested.propertyprice;
    propertyTransfer.nested.propertylocation = idPropertyOwner[id].nested.propertylocation;
    propertyTransfer.nested.propertyduration = idPropertyOwner[id].nested.propertyduration;
    propertyTransfer.nested.propertyspace = idPropertyOwner[id].nested.propertyspace;
    propertyTransfer.nested.propertybedroom = idPropertyOwner[id].nested.propertybedroom;
    propertyTransfer.nested.propertybathroom = idPropertyOwner[id].nested.propertybathroom;
    propertyTransfer.nested.propertydescription = idPropertyOwner[id].nested.propertydescription;
    propertyTransfer.nested.document = idPropertyOwner[id].nested.document;
    idPropertyOwner[id].nested.propertybuyer = payable(msg.sender);
    idPropertyOwner[id].nested.propertyseller = payable(address(0));
    payable(propertybuyer).transfer(propertyTransfer.nested.propertyprice);
    payable(propertyTransfer.nested.propertyseller).transfer(msg.value);

  }

  //Returns all unsold properties
  function fetchUnsoldProperties() public view returns (PropertyOwner[] memory) {
    uint itemCount = propertyCount;
    uint unsoldItemCount = propertyCount - propertySold;
    uint currentIndex = 0;

    PropertyOwner[] memory items = new PropertyOwner[](unsoldItemCount);
     for (uint i = 0; i < itemCount; i++) {
        if (idPropertyOwner[i + 1].nested.propertybuyer == address(this)) {
          uint currentId = i + 1;
          PropertyOwner storage currentItem = idPropertyOwner[currentId];
          items[currentIndex] = currentItem;
          currentIndex += 1;
        }
      }
      return items;
    }


  // Returns only properties that a user has purchased
  function fetchMyProperties() public view returns (PropertyOwner[] memory) {
    uint totalItemCount = propertyCount;
    uint itemCount = 0;
    uint currentIndex = 0;

    for (uint i = 0; i < totalItemCount; i++) {
        if (idPropertyOwner[i + 1].nested.propertybuyer == msg.sender) {
          itemCount += 1;
        }
      }

       PropertyOwner[] memory properties = new PropertyOwner[](itemCount);
      for (uint i = 0; i < totalItemCount; i++) {
        if (idPropertyOwner[i + 1].nested.propertybuyer == msg.sender) {
          uint currentId = i + 1;
          PropertyOwner storage currentItem = idPropertyOwner[currentId];
          properties[currentIndex] = currentItem;
          currentIndex += 1;
        }
      }
      return properties;

  }

 

}
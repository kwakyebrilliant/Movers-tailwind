// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "hardhat/console.sol";

contract Sample {

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
      string propertydescription;
      string propertyspace;
      string propertyparkingspace;
      string propertybathroom;
      string propertybedroom;
      string propertyprice;
      string propertycategory;
      string propertytype;
      string propertyduration;
      string hash;
      string supportimage1;
      string supportimage2;
      string document;
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
 

  /* Returns only properties a user has listed */
    //will not need
    function fetchPropertiesListed() public view returns (PropertyOwner[] memory) {
      uint totalItemCount = _propertyIds.current();
      uint itemCount = 0;
      uint currentIndex = 0;

      for (uint i = 0; i < totalItemCount; i++) {
        if (idToPropertyOwner[i + 1].buyer == msg.sender) {
          itemCount += 1;
        }
      }

      PropertyOwner[] memory items = new PropertyOwner[](itemCount);
      for (uint i = 0; i < totalItemCount; i++) {
        if (idToPropertyOwner[i + 1].buyer == msg.sender) {
          uint currentId = i + 1;
          PropertyOwner storage currentItem = idToPropertyOwner[currentId];
          items[currentIndex] = currentItem;
          currentIndex += 1;
        }
      }
      return items;
    }

    /* allows someone to resell a property they have purchased */
    //will not need
    function resellToken(uint256 propertyId, uint256 price) public payable {
      require(idToPropertyOwner[propertyId].owner == msg.sender, "Only item owner can perform this operation");
      require(msg.value == listingPrice, "Price must be equal to listing price");
      idToPropertyOwner[propertyId].sold = false;
      idToPropertyOwner[propertyId].price = price;
      idToPropertyOwner[propertyId].buyer = payable(msg.sender);
      idToPropertyOwner[propertyId].owner = payable(address(this));
      _propertySold.decrement();

      _transfer(msg.sender, address(this), propertyId);
    }

    /* Updates the listing price of the contract */
    function updateListingPrice(uint _listingPrice) public payable {
      require(owner == msg.sender, "Only property owner can update listing price.");
      listingPrice = _listingPrice;
    }

    /* Returns the listing price of the contract */
    function getListingPrice() public view returns (uint256) {
      return listingPrice;
    }


}

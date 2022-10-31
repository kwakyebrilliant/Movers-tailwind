// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

import "hardhat/console.sol";

contract Mover is ERC721URIStorage {
    using Counters for Counters.Counter;
    Counters.Counter private _propertyIds;
    Counters.Counter private _propertySold;

    uint256 listingPrice = 0.025 ether;
    address payable owner;

    mapping(uint256 => PropertyOwner) private idToPropertyOwner;

    struct PropertyOwner {
      uint256 propertyId;
      address payable buyer;
      address payable owner;
      uint256 price;
      string propertylocation;
      string propertydescription;
      string propertycategory;
      string propertytype;
      string hash;
      string supportimage1;
      string supportimage2;
      bool sold;
    }

    event PropertyOwnerCreated (
      uint256 indexed propertyId,
      address buyer,
      address owner,
      uint256 price,
      string propertylocation,
      string propertydescription,
      string propertycategory,
      string propertytype,
      string hash,
      string supportimage1,
      string supportimage2,
      bool sold
    );

    constructor() ERC721("Metaverse Tokens", "METT") {
      owner = payable(msg.sender);
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


    /* Mints a property and lists it in the marketplace */
    function createProperty(
      string memory tokenURI, 
      uint256 price,
      string memory _propertylocation,
      string memory _propertydescription,
      string memory _propertycategory,
      string memory _propertytype,
      string memory _hash,
      string memory _supportimage1,
      string memory _supportimage2
      ) public payable returns (uint) {
      _propertyIds.increment();
      uint256 newpropertyId = _propertyIds.current();

      _mint(msg.sender, newpropertyId);
      _setTokenURI(newpropertyId, tokenURI);
      addProperty(newpropertyId, price, _propertylocation, _propertydescription, _propertycategory, _propertytype, _hash, _supportimage1, _supportimage2);
      return newpropertyId;
    }

    //add property
    function addProperty( 
      uint256 propertyId, 
      uint256 price,
      string memory _propertylocation,
      string memory _propertydescription,
      string memory _propertycategory,
      string memory _propertytype,
      string memory _hash,
      string memory _supportimage1,
      string memory _supportimage2
     ) private {
      require(price > 0, "Price must be at least 1 wei");
      require(msg.value == listingPrice, "Price must be equal to listing price");

      idToPropertyOwner[propertyId] =  PropertyOwner(
        propertyId,
        payable(msg.sender),
        payable(address(this)),
        price,
        _propertylocation,
        _propertydescription,
        _propertycategory,
        _propertytype,
        _hash,
        _supportimage1,
        _supportimage2,
        false
      );

      _transfer(msg.sender, address(this), propertyId);
    }


    /* Transfers ownership of the property, as well as funds between parties */
    function createPropertyTransfer(
      uint256 propertyId
      ) public payable {
        
      uint price = idToPropertyOwner[propertyId].price;
      address buyer = idToPropertyOwner[propertyId].buyer;
      require(msg.value == price, "Please submit the asking price in order to complete the purchase");
      idToPropertyOwner[propertyId].owner = payable(msg.sender);
      idToPropertyOwner[propertyId].sold = true;
      idToPropertyOwner[propertyId].buyer = payable(address(0));
      _propertySold.increment();
      _transfer(address(this), msg.sender, propertyId);
      payable(owner).transfer(listingPrice);
      payable(buyer).transfer(msg.value);
    }

    /* Returns all unsold properties */
    function fetchUnsoldProperties() public view returns (PropertyOwner[] memory) {
      uint itemCount = _propertyIds.current();
      uint unsoldItemCount = _propertyIds.current() - _propertySold.current();
      uint currentIndex = 0;

      PropertyOwner[] memory items = new PropertyOwner[](unsoldItemCount);
      for (uint i = 0; i < itemCount; i++) {
        if (idToPropertyOwner[i + 1].owner == address(this)) {
          uint currentId = i + 1;
          PropertyOwner storage currentItem = idToPropertyOwner[currentId];
          items[currentIndex] = currentItem;
          currentIndex += 1;
        }
      }
      return items;
    }

    /* Returns only properties that a user has purchased */
    function fetchMyProperties() public view returns (PropertyOwner[] memory) {
      uint totalItemCount = _propertyIds.current();
      uint itemCount = 0;
      uint currentIndex = 0;

      for (uint i = 0; i < totalItemCount; i++) {
        if (idToPropertyOwner[i + 1].owner == msg.sender) {
          itemCount += 1;
        }
      }

      PropertyOwner[] memory items = new PropertyOwner[](itemCount);
      for (uint i = 0; i < totalItemCount; i++) {
        if (idToPropertyOwner[i + 1].owner == msg.sender) {
          uint currentId = i + 1;
          PropertyOwner storage currentItem = idToPropertyOwner[currentId];
          items[currentIndex] = currentItem;
          currentIndex += 1;
        }
      }
      return items;
    }

}

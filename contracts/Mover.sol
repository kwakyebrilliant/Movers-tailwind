// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "hardhat/console.sol";

contract Mover {

     mapping(uint256 => PropertyOwner) public idPropertyOwner;
      uint public propertyCount = 0;
      uint256 public booksCount = 0;
      mapping(uint256 => BookSession) books;

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

    struct BookSession {
      uint256 id;
      address owner;
      string property;
      bool booked;
    }

    event AddBook (
      uint256 id,
      address owner,
      string property,
      bool booked
    );


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


    //add book
    function addBookSession(BookSession memory book_) public payable{
      // require(bytes(book_.owner).length > 0, 'Owner is required');
      require(msg.sender != address(0x0));

      booksCount++;
      propertyCount++;

      BookSession storage book = books[booksCount];

      book.id = booksCount;
      book.owner = payable(address(msg.sender));
      book.property = book_.property;
      book.booked = false;

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


    //my books
    function fetchMyBooks() public view returns (BookSession[] memory) {
      uint256 totalItemCount = booksCount;
      uint256 itemCount = 0;
      uint256 currentIndex = 0;

      for (uint256 i = 0; i < totalItemCount; i++) {
            if (books[i + 1].owner == msg.sender) {
                itemCount += 1;
            }
        }

        BookSession[] memory items = new BookSession[](itemCount);
        for (uint256 i = 0; i < totalItemCount; i++) {
            if (books[i + 1].owner == msg.sender) {
                uint256 currentId = i + 1;
                BookSession storage book = books[currentId];
                items[currentIndex] = book;
                currentIndex += 1;
            }
        }
        return items;
    }


    //all books
    function fetchBooks() public view returns (BookSession[] memory) {
        uint256 itemCount = booksCount;
        uint256 currentIndex = 0;
        BookSession[] memory items = new BookSession[](itemCount);
        for (uint256 i = 0; i < itemCount; i++) {
            uint256 currentId = i + 1;
            BookSession storage currentItem = books[currentId];
            items[currentIndex] = currentItem;
            currentIndex += 1;
        }
        return items;
    }

}
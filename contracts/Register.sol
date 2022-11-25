// SPDX-License-Identifier: MIT
pragma solidity 0.8.17;
 
contract Register {
    string private name;
   
    function getName() public view returns (string memory) {
        return name;
    }
 
    function setName(string memory _name) public {
        name = _name;
    }
}
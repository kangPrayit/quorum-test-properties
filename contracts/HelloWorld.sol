pragma solidity >=0.5.0 <0.7.0;

contract HelloWorld {
    string public message;

    constructor() public {
        message = "Hello Pray !";
    }

    function setMessage(string memory _message) public {
        message = _message;
    }

    function getMessage() public view returns (string memory _message) {
        return message;
    }
}

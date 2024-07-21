// SPDX-License-Identifier: Unlicensed
pragma solidity 0.8.17;

contract unmuted {
    // variables
    address public admin;
    uint256 noOfCreators;
    uint platformCommission = 5;
    uint creatorCommission = 5;
    uint multiplyingFactor = 10;

    mapping(string => address) usernameToWallet;
    mapping(address => string) walletToUsername;
    mapping(address => Creator) walletToCreator;
    mapping(string => bool) usernameTaken;

    constructor () {
        admin = msg.sender;
    }

    modifier onlyAdmin {
        require(msg.sender == admin, "Only admin is allowed to execute this function!");
        _;
    }

    // structs
    struct Creator {
        uint256 noOfKeys;
        mapping(address => bool) holdingKey;
        mapping(address => uint256) sellingKeyForPrice;
        address[] sellers;
        Video[] videos;
        uint lastUploaded;
        uint trustScore;
    }

    struct Video {
        string title;
        string description;
        string videoURL;
        string imageURL;
        uint date;
    }

    // functions
    function getCreator(string memory username) internal view returns(Creator storage) {
        address walletAddress = usernameToWallet[username];
        require(walletAddress != address(0), "User with that username is not found");
        Creator storage creator = walletToCreator[walletAddress];
        return creator;
    }

    function hasProfile() public view returns(bool) {
        string memory username = walletToUsername[msg.sender];
        if (bytes(username).length == 0) {
            return false;
        } else {
            return true;
        }
    }

    function checkUsernameExists(string memory username) public view returns(bool) {
        return usernameTaken[username];
    }

    function setProfile(string memory username) public {
        require(checkUsernameExists(username) == false, "This username already exists!");
        require(walletToCreator[msg.sender].noOfKeys == 0, "You can't create multiple profiles!");
        usernameToWallet[username] = msg.sender;
        walletToUsername[msg.sender] = username;
        usernameTaken[username] = true;
        noOfCreators += 1;
        Creator storage creator = walletToCreator[msg.sender];
        creator.noOfKeys = 1;
        creator.holdingKey[msg.sender] = true;
    }

    function getWalletAddressOfUser(string memory username) public view returns(address) {
        address result = usernameToWallet[username];
        require(result != address(0), "User not found");
        return result;
    }

    function getCreatorDetails(string memory username) public view returns(uint256, uint256, uint256, Video[] memory) {
        Creator storage creator = getCreator(username);
        return (creator.noOfKeys, creator.trustScore, creator.lastUploaded, creator.videos);
    }

    function checkIfHoldingKey(string memory username) public view returns(bool) {
        Creator storage creator = getCreator(username);
        if (creator.sellingKeyForPrice[msg.sender] != 0) {
            return true;
        } else {
            return creator.holdingKey[msg.sender];
        }
    }

    function sqrt(uint x) public pure returns (uint y) {
        uint z = (x + 1) / 2;
        y = x;
        while (z < y) {
            y = z;
            z = (x / z + z) / 2;
        }
    }

    function calculatePrice(string memory username) public view returns (uint) {
        Creator storage creator = getCreator(username);
        return sqrt(creator.noOfKeys) * multiplyingFactor;
    }

    //buying and selling NFTs functions
    function buyNewKey(string memory username) public payable {
        require(checkIfHoldingKey(username) == false, "You can't own multiple keys of this creator!");
        Creator storage creator = getCreator(username);
        uint price = calculatePrice(username);
        require(msg.value >= price, "You must pay the exact price or higher!");
        //send money to creator
        (bool sent, ) = usernameToWallet[username].call{value: msg.value * (100 - platformCommission) / 100}("");
        require(sent, "Failed to send Ether to seller");
        //send commissions to the smart contract
        (bool sent2, ) = admin.call{value: msg.value * platformCommission / 100}("");
        require(sent2, "Failed to send Ether to the smart contract");
        //add ownership of Key
        creator.noOfKeys += 1;
        creator.holdingKey[msg.sender] = true;
    }

    function buyKeyFromAnotherUser(string memory username, address seller) public payable {
        require(checkIfHoldingKey(username) == false, "You already own an Key of this creator!");
        Creator storage creator = getCreator(username);
        require(msg.value >= creator.sellingKeyForPrice[seller], "You must pay the exact price or higher!");
        require(creator.sellingKeyForPrice[seller] > 0, "That user is not selling their Key!");
        //send money to Key seller
        (bool sent, ) = seller.call{value: msg.value * (100 - platformCommission - creatorCommission) / 100}("");
        require(sent, "Failed to send Ether to seller");
        //send commissions to the smart contract
        (bool sent2, ) = admin.call{value: msg.value * platformCommission / 100}("");
        require(sent2, "Failed to send Ether to the smart contract");
        //send commissions to the creator
        (bool sent3, ) = usernameToWallet[username].call{value: msg.value * creatorCommission / 100}("");
        require(sent3, "Failed to send Ether to seller");
        //change ownership of the NFT
        creator.holdingKey[seller] = false;
        creator.holdingKey[msg.sender] = true;
        creator.sellingKeyForPrice[seller] = 0;
        for (uint i = 0; i < creator.sellers.length; i++) {
            if (creator.sellers[i] == seller) {
                delete creator.sellers[i];
            }
        }
    }

    function offerKeyForSale(string memory username, uint256 price) public {
        require(checkIfHoldingKey(username) == true, "You must own a Key of the creator first!");
        Creator storage creator = getCreator(username);
        creator.sellingKeyForPrice[msg.sender] = price;
        creator.sellers.push(msg.sender);
    }

    function listSellersAndPrices(string memory username) public view returns (address[] memory, uint[] memory) {
        Creator storage creator = getCreator(username);
        uint[] memory prices = new uint[](creator.sellers.length);
        for (uint i = 0; i < creator.sellers.length; i++) {
            address seller = creator.sellers[i];
            prices[i] = creator.sellingKeyForPrice[seller];
        }
        return (creator.sellers, prices);
    }

    function uploadVideo(string memory _title, string memory _description, string memory _videoURL, string memory _imageURL) public {
        Creator storage creator = walletToCreator[msg.sender];

        Video memory newVideo = Video({
            title: _title,
            description: _description,
            videoURL: _videoURL,
            imageURL: _imageURL,
            date: block.timestamp
        });

        creator.videos.push(newVideo);
        if (creator.lastUploaded < block.timestamp - 864000) {
            if (creator.trustScore != 0) {
                creator.trustScore -= 1;
            }
        } else {
            if (creator.trustScore != 10) {
                creator.trustScore += 1;
            }
        }
        creator.lastUploaded = block.timestamp;
    }

    //admin functions
    function getBalance() public view returns (uint) {
        return address(this).balance;
    }

    function withdrawCommissions() public onlyAdmin {
        payable(admin).transfer(address(this).balance);
    }

    function setPlatformCommission(uint _platformCommission) public onlyAdmin {
        platformCommission = _platformCommission;
    }

    function setCreatorCommission(uint _creatorCommission) public onlyAdmin {
        creatorCommission = _creatorCommission;
    }

    function setMultiplyingFactor(uint _multiplyingFactor) public onlyAdmin {
        multiplyingFactor = _multiplyingFactor;
    }
}
// Your sandbox code goes here!
// See ./examples/*.js for code exmaples
//jquery
const $ = require('jquery');



const { Web3 } = require('web3')
const rpcURL = 'https://mainnet.infura.io/v3/71e2bcf179724626a7f2bf59f47127f7' // Your RCkP URL goes here
//const web3 = new Web3(rpcURL)
const web3 = new Web3(rpcURL)
const address = '0x595DA774F280b830F59E95DA09a2BBEa543d145c' // Your account address goes here
//get balance

web3.eth.getBlockNumber().then(console.log);
web3.eth.getBalance(address).then(
    result => web3.utils.fromWei(result,"ether")
).then(console.log);


addressFrom = '0x595DA774F280b830F59E95DA09a2BBEa543d145c';
// 3. Create balances function
const balances = async () => {
    // 4. Fetch balance info
    const balanceFrom = web3.utils.fromWei(
        await web3.eth.getBalance(addressFrom),
        'ether'
    );

    console.log(`The balance of ${addressFrom} is: ${balanceFrom} DEV`);

};

// 5. Call balances function
console.log(balances());



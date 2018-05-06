const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');

// var message = 'I am user number 1';
// var hash = SHA256(message).toString();

// console.log(`Message: ${message}`);
// console.log(`Hashed: ${hash}`);

// var data = {
//     id: 1
// };
// var token = {
//     data,
//     hash: SHA256(JSON.stringify(data) + 'somesecret').toString()
// }

// // token.data.id = 5;
// // token.hash = SHA256(JSON.stringify(data)).toString();

// var resultHash = SHA256(JSON.stringify(token.data) + 'somesecret').toString();
// if(resultHash === token.hash) {
//     console.log('Data was not changed');
// } else {
//     console.log('Data was changed! Do NOT TRUST');
// }

// jwt.sign: takes the object and signs it meaning creates that hash and returns the token value
// jwt.verify: takes the token and secret and makes sure that the data was not manipulated

var data = {
    id: 10
}

var token = jwt.sign(data, 'abc123');
console.log(token);

var decoded  = jwt.verify(token, 'abc123')
console.log(decoded);






//OTP generation using Crypto
const crypto = require("crypto");

function generateOTP(length=6) {
    return crypto.randomInt(0, 10**length)
    //to convert num to string
    .toString().
    //to add 0
    padStart(length,'0');
}

console.log(generateOTP()); 
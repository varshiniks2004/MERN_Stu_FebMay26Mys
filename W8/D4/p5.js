//OTP generation using Crypto
const crypto = require("crypto");
const otpStore = {};

function generateOTP(userId){
    const otp = crypto.randomInt(100000,999999)
         .toString();
    otpStore[userId]={
        otp,
        expiresAt:Date.now()+10000,
        attempts:0
    };
    console.log("OTP:",otp);

}
function verifyOTP(userId,enteredOtp){
    const record = otpStore[userId];

    if (!record) {
        return "No OTP"; 
    }
    if(Date.now()>record.expiresAt) return "Expired";
    if(record.attempts>=3) return "Blocked";

    record.attempts++;
    return record.otp === String(enteredOtp)?"Valid":"Invalid";

}
generateOTP("user1");

const userEnteredotp = otpStore["user1"].otp;
setTimeout(()=>{

},1000);
console.log(verifyOTP("user1",userEnteredotp))
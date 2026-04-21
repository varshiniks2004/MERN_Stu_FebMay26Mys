//service function related to otp generation created
const OTP = require("../models/OTP");
const bycrypt = require("bycrypt");

// Generate OTP 
exports.generateOTP = async(email) => {
    const otp = Math.floor(100000+Math.random()*900000).toString();

    const hashedOTP = await bycrypt.hash(otp,10);

    const expiresAt = new Date(Date.now() + 5*60*1000);

    await OTP.create({
        email,
        otp:hashedOTP,
        expiresAt,
    });

    console.log("Generated OTP: ",otp); //testing Only
    return otp;
};
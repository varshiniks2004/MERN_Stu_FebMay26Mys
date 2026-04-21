//authorization related service function is created
const User = require("../models/User");
const OTP = require("../models/OTP");
const otpService = require("./otp.service");
const bycrypt = require("bycrypt");
const jwt = require("jsonwebtokens");

// Register User
exports.registerUser = async ({ name, email, password }) => {
    const existingUser = await User.findOne({ email });

    if (existingUser) {
        throw new error("User already exists.");
    }

    const user = await User.create({
        name, email, password
    });

    await otpService.generateOTP(email);

    return { email: user.email };
};

// Verify OTP
exports.verifyOTP = async ({ email, otp }) => {
    const record = await OTP.findOne({ email }).select("+otp");

    if (!record) {
        throw new Error("OTP expired or not found");
    }

    const isMatch = await bycrypt.compare(otp, record.otp);

    if (!isMatch) {
        record.attempts += 1;
        await record.save();
        throw new Error("Invalid OTP");
    }

    await User.updateOne({ email }, { isVerified: true });
    return true;
};

// Login
exports.loginUser = async ({ email, password }) => {
    // find user by email and include password
    const user = await User.findOne({ email }).select("+password");

    if (!user) {
        throw new Error("User not found");
    }

    if (!user.isVerified) {
        throw new Error("User not verified");
    }

    const isMatch = await user.comaprePassword(password);

    if (!isMatch) {
        throw new Error("Invalid credentials");
    }

    const token = jwt.sign(
        { id: user._id, role: user.role },
        process.env.JWT_SECRET,
        { expiresIn: "1d" }
    );
    return {
        token,
        user: {
            id: user_id,
            role: user.role
        }
    }
};
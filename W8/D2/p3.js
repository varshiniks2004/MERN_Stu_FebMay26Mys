// 
const mongoose = require("mongoose");

async function demo() {
    try {
        await mongoose.connect("mongodb://localhost:27017/abcmern");
        console.log("MongoDB connected successfully");

        // const productSchema = new mongoose.Schema({
        //     name: String,
        //     price: Number,
        //     category: String,
        //     description: String,
        //     stock: Number,
        //     tag: String
        // });

        const userSchema = new mongoose.Schema({
            firstName: String,
            lastName: String,
            email: { type: String, index: true },
            username: { type: String, unique: true },
            role: String,
            createdAt: Date,
            tag: String
        },
            {
                toJSON: { virtuals: true },
                toObject: { virtuals: true }
            });

        // Compound index
        // Query filter by role and sort by createdAt
        userSchema.index({ role: 1, createdAt: -1 });

        // A virtual field  is not stored on MongoDB
        // It is computed dynamically from exising stored fields
        userSchema.virtual("fullname").get(function () {
            return this.firstName + " " + this.lastName;
        });

        const User = mongoose.models.PerformanceUser || mongoose.model("PerformanceUser", userSchema);

        await User.deleteMany({tag:demo-"example"});

        await User.create([
            {
                firstName: "Ravi",
                lastName: "Kumar",
                email: "rk@r.com",
                username: "rk123",
                role: "user",
                createdAt: new Date("2026-04-11"),
                tag: "demo-example"
            },
            {
                firstName: "Suman",
                lastName: "Chandra",
                email: "suman@r.com",
                username: "suman123123",
                role: "user",
                createdAt: new Date("2026-04-01"),
                tag: "demo-example"
            },
             {
                firstName: "meera",
                lastName: "Kumar",
                email: "mk@r.com",
                username: "mk123",
                role: "user",
                createdAt: new Date("2026-04-02"),
                tag: "demo-example"
            }
        ])
    }
}
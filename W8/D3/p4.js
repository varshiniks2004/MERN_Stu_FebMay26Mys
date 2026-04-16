//Basics of embedding and referencing

const mongoose = require("mongoose");

async function main() {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/embrel");
        console.log("Connected to MongoDB");

        const orderSchema = new mongoose.Schema({
            product: String,
            price: Number
        });
        const userSchema = new mongoose.Schema({
            name: String,
            orders: [orderSchema]  //embedded document
        });
        const User = mongoose.model("User", userSchema);
        const embeddedUser = await User.create({
            name: "Veeru",
            orders: [
                { product: "Laptop", price: 50000 },
                { product: "Printer", price: 10000 },
                { product: "Projector", price: 70000 }
            ]
        });
        console.log("Users:\n");
        //console.log("Display All user products:",embeddedUser);
        console.log(await User.find());

        //Referencing 
        const userRefSchema = new mongoose.Schema({
            name: String,
        });

        const orderRefSchema = new mongoose.Schema({
            product: String,
            price: Number,
            user: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'UserRef'
            }
        });
        const UserRef = mongoose.model('UserRef', userRefSchema);
        const OrderRef = mongoose.model('OrderRef', orderRefSchema);

        const refUser = await UserRef.create({
            name: "varsh"
        });
        await OrderRef.create([
            {product:"Laptop", price:7000,user:refUser._id},
            {product:"phone",price:10000,user:refUser._id}
        ]);
        console.log("Referenced orders:");
        console.log(await OrderRef.find().lean());
        console.log(JSON.stringify(userSchema,null,2));
    }
    catch (error) {
        console.error("Error:", error.message);
    }
    finally {
        await mongoose.disconnect();
        console.log("Disconnected from DB.");
    }
}
main();
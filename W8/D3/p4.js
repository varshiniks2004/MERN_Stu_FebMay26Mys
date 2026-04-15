// Basics of Embedding anf referencing
const mongoose = require("mongoose");

async function main(){
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/embrel');
        console.log("Connected to MongoDB");

        const orderSchema = new mongoose.Schema({
            product:String,
            price:Number
        });

        // Inside of userSchema we are embedding orderSchema
        const userSchema = new mongoose.Schema({
            name:String,
            orders:[orderSchema] // Embedded document
        });

        const User = mongoose.model('User',userSchema);
        const embeddedUser = await User.create({
            name:"Varsh",
            orders:[
                {product:"Laptop",price:50000},{product:"Printer",price:10000},{product:"Projector",price:70000}
            ]
        })

        // fetch one user data 
        // console.log("User Created :",embeddedUser); 
        // fetches all the user data in user model
        const users=await User.find().lean();
        console.log(JSON.stringify(users,null,2));
        console.log("Users created:\n");
        console.log(await User.find());

        // Referencing 
        const userRefSchema = new mongoose.Schema({
            name:String
        });

        const orderRefSchema = new mongoose.Schema({
            product:String,
            price:Number,
            user:{
                type:mongoose.Schema.Types.ObjectId,
                ref:'UserRef'
            }
        });
        const UserRef = mongoose.model('UserRef',userRefSchema);
        const OrderRef = mongoose.model('OrderRef',orderRefSchema);

        const User1 = await UserRef.create({
            name:"Varsh"
        });

        const Order = await OrderRef.create(
            {product:"Phone",price:60000,user:refUser._id},
            {product:"Dyson hairSetting tool",price:50000,user:refUser._id},
            {product:"Airpods",price:20000,user:refUser._id}
        );

        console.log

    } catch (error) {
        console.log("Error:",error.message);
    }
    finally{
        await mongoose.disconnect();
        console.log("Disconnected from DB.");
    }
}
main();
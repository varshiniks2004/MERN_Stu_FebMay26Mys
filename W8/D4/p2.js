//Timestamp and Advanced queries
const mongoose = require("mongoose");

async function main() {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/datedb');
        console.log("MongoDB connected");

        const demoschema = new mongoose.Schema({
            name: String,
        },
            {
                timestamps: true
            }
        );
        const demo = mongoose.model("demo", demoschema);

        // await demo.deleteMany();
        // await demo.create([
        //     { name: "Inchara" },
        //     { name: "Chandu" },
        //     { name: "Veeru" },
        //     { name: "Lakshmi" },
        //     { name: "Bhagya" }
        // ]);
        const recent = await demo.find({
            createdAt:{
                $gt:new Date(Date.now()-1500000)
            }
        }).sort({ createdAt: -1 });
        console.log("Recent:",recent);
         
        
    }
    catch (error) {
        console.log("Error:", error.message);
    }
    finally{
        await mongoose.disconnect();
        console.log("db disconnected");
    }
}
main();
// this files does data bases connection 
const mongoose=require("mongoose");
const connectDB=async()=>{
    try{
        const conn=await mongoose.connect(process.env.MONGO_URI);
        console.log(`mongoDB connected:${conn.connection.host}`)
    }
    catch(error){
        console.log("DB connection failed:",error.message);
        process.exit(1);//0 terminate with success 1 terminates with error

    }
};
module.exports=connectDB;
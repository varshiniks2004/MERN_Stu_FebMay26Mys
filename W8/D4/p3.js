//TTL:time to live 
const mongoose=require("mongoose");
async function main(){
    try{
         await mongoose.connect('mongodb://127.0.0.1:27017/dateDB');
         console.log("MongoDB connected");
         const otpschema = new mongoose.Schema({
            code: String,
            createdAt:{
                type:Date,
                default:Date.now,
                expires:30 //30 sec


            
            }
         });
         const OTP=mongoose.model("OTP",otpschema);
         await OTP.deleteMany();
         await OTP.create({code:"123456"});
         console.log("OTP created");

        
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

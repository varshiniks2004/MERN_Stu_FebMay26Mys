//Date fundaments
const mongoose = require("mongoose");
async function main(){

    try{
        await mongoose.connect('mongodb://127.0.0.1:27017/dateDB')
        const schema=new mongoose.Schema({
            name:String,
            createdAt:{
                type:Date,
                default:Date.now
            }
        });
        const model=mongoose.model('DateFund,schema');
        await model.deleteMany();
        const doc=await model.create({
            name:"Test"
        });
    }
    catch(error){
        console.log("error",error.message);

    }
    finally{
                await mongoose.disconnect();
                console.log("Db disconnected");
            }
    }
main();
//validation and schema constraints//
const mongoose=require("mongoose");
const userSchema=new mongoose.Schema({
    name:{
        type:String,
        requires:true,
    },
    age:{type:Number,min:18},
    role:{type:String,
        enum:["admin","user","manager"]
    },
    email:{
        type:String,
        //+ atleast one occurence . multiple occurence
        match:/.+@.+\..+/
        //word@domainname.com.co.in/.org/.edu.in

    }

});
const User=mongoose.model("HookValidationUser",userSchema);
async function runValidationDemo(){
    // try{
    //     const invalidUser=new User({
    //         age:15,
    //         role:"guest",
    //         email:"notvalidemail"
    //     });
    //     await invalidUser.validate();


    }
     try{
        const invalidUser=new User({
            name:"varsh",
            age:19,
            role:"admin",
            email:"v@User.com"
        });
        await invalidUser.validate();
    }
    catch(error){
        console.log("validation errors found:");
        for(const fieldName in error.errors){
            console.log(fieldName+":",error.errors[fieldName].message);
        }
    }

runValidationDemo();


//
const mongoose=require("mongoose");
const bcrypt=require("bcrypt");
const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Name is required"],
        trim:true,
    },
     email:{
        type:String,
        required:[true,"email is required"],
        unique:true,//emaiil should me non reduandant data so we use unique
        lowercase:true,
        match:[/^\s+@\s+\.\s+$/,"Please use valid email"],
        index:true,
    },
     password:{
        type:String,
        required:[true,"password is required"],
        minlength:6,
        select:false,
    },
    role:{
        type:String,
        enum:["user","admin"],
        default:"user",

    },
    isVerified:{
        type:Boolean,
        default:false,
    },
},
{
    timestamps:true,
}
);
//hashing password before save
userSchema.pre("save",async function(){
    if(!this.isModified("password")){
        return;

    }
    try{
        const saltRounds=10;
        this.password=await bcrypt.hash(this.password,saltRounds);
    }
    catch(error){
        throw error;
    }

    

});
//compare password function
userSchema.methods.comparePassword=async function(enteredPassword){
return await bcrypt.compare(enteredPassword,this.password);
};
module.exports=mongoose.model("User",userSchema);
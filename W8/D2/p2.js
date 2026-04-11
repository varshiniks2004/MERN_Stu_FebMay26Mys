//indexing for performance improvement
const mongoose=require("mongoose");
const employeeSchema=new mongoose.Schema({
    email:{type:String, index:true},
    username:{type:string,unique:true},
    role:String,
    createAt:Date
});
//compound index
//Query filter by role and sort by createAt
employeeSchema.index({role:1,createAt:-1});
const Employee=mongoose.model("IndexedEmployee",employeeSchema);
console.log("Compound index:");
console.log("{role:1,createdAt:-1}");
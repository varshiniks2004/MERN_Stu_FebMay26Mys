//created showschema, model and exported model
const mongoose=require("mongoose");
const seatSchema=new mongoose.Schema({
    seatNumber:{
        type:String,
        required:true,

    },
    isBooked:{
        type:Boolean,
        default:false,
    },
},{id:false});
const showSchema=new mongoose.Schema({
    movieId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Movie",
        required:true,
        index:true,
    },
    date:{
        type:date,
        required:true,
        index:true,
    },
    time:{
        type:String,
        required:true,

    },
    totalSeats:{
        type:Number,
        required:true,

    },
    availableSeats:{
        type:Number,
        required:true,

    },
    seats:{
        type:[seatSchema],
        required:true,
    },
    isActive:{
        type:Boolean,
        default:true,
    },
},
    {
        timestamps:true,
    });
    //compound index:
    showSchema.index({movieId:1,date:1});
    //add validation
    showSchema.pre("save",function(next){
        if(this.availableSeats>this.totalSeats){
            return next(new Error("available seats cannot exceed total seats"));
        }
        next();
    });
    module.exports=mongoose.model("Show",showSchema);




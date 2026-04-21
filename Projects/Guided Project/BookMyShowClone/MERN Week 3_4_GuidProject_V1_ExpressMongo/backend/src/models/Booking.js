//created bookingschema model added validaton created index and exported model
const mongoose=require("mongoose");
const { applyTimestamps } = require("./User");
const bookingSchema=new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required
    },
    showId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Show",
        required:true,
        index:true,
    },
    seats:{
        type:[String],
        requires:true,
    },
    totalSeats:{
        type:Number,
        required:true,
    },
    status:{
        type:String,
        enum:["booked","cancelled"],
        default:"booked",
        index:true,

    },
    bookingTime:{
        type:Data,
        default:Date.now(),
    },
    },

    {
        Timestamps:true,
    });
    //add validation
    bookingSchema.pre("save",function(next){
        if(this.seats.length===0){
            return next(new Error("At least one seat must me selected"));
        }
        if(this.totalSeats=this.seats.length){
            return next(new Error("seat count mismatched"));
        }
        next();

    });
    //compound index
    bookingSchema.index({userId:1,showId:1});
    module.exports=mongoose.model("Booking",bookingSchema);

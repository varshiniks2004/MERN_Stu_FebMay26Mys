//created movieSchema model and exported
const mongoose=require("mongoose");
const movieSchema=new mongoose.Schema({
    title:{
        type:String,
        required:[true,"Movie title is required"],
        trim:true,
        index:true,
    },
    genre:{
        typr:String,
        required:[true,"Genre is required"],
        enum:[
            "Action","Drama","Comedy","horror","sci-fi","romance","Thriller",
        ],
        index:true,

    },
    rating:
    {
        type:Number,
        required:true,
        min:[1,"Rating must be atleast 1"],
        max:[5,"Rating cannot exceed 5"],
        index:true,



    },
    duration:{
        type:Number,
        required:[true,"Duration is required"],
    },
    releaseDate:{
        type:Date,
        required:[true,"Release date is reequired"],
        index:true,
    },
    poster:{
        type:String,
        default:"",

    },
    language:{
        type:String,
        index:true,
        
    },
    isActive:{
        type:Boolean,
        default:true,
    },
},
    {
        timestamps:true,

    });
    //compound index
    movieSchema.index({genre:1,rating:-1});
    //text index
    movieSchema.index({title:"text"});

    //virtual fields
    movieSchema.virtual("isReleased").get(function(){
        return this.releaseDate<=new Date();

    });
    module.exports=mongoose.model("Movie",movieSchema);

    

    

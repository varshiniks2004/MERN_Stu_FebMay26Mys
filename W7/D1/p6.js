//sending JSON
const express=require("express");
const app =express();
app.get("/api/status",function(req,res){
    // re.JSON automatically serailizes the object and sets json content type
    res.JSON({
        sucess:true,
        message:"express API is working"

    });

});
app.get("/api/error",function(req,res){
    // re.JSON automatically serailizes the object and sets json content type
    res.status(404).JSON({
        sucess:false,
        message:"req resource is not found"

    });

});
//sending JSON
const express=require("express");
const app =express();
app.get("/api/status",function(req,res){
    // re.JSON automatically serailizes the object and sets json content type
    res.json({
        sucess:true,
        message:"express API is working"

    });

});
app.get("/api/error",function(req,res){
    // re.JSON automatically serailizes the object and sets json content type
    res.status(404).json({
        sucess:false,
        message:"req resource is not found"

    });

});
app.listen(3000,function(){
    console.log("express server running at http://localhost:3000");
});

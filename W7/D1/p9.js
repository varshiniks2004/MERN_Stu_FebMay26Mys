//middleware chaining and error handling middleware 
const express=require("express");
const app =express();
//first middleware:ex authentication
//global middleware
app.use(function(req,res,next){
    console.log("request:",req.method,req.url);
    next();

});
app.use(function(req,res,next){
    req.requestSource="middleware-chain-example";
    next();
});
app.get("/ok",function(req,res){
    res.json({
        success:true,
        source:req.requestSource

    });
});
app.get("/fail",function(req,res,next){
    next(new Error("route failure"));
    
});
//error handling:global error handler
app.use(function(error,req,re,next){
    res.status(500).json({
        sucess:false,
        message:error.message
    });
});
app.listen(4000,function(){
    console.log("express server running at http://localhost:4000");
});
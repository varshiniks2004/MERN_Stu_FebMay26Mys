const express=require("express");
const app =express();
//global middleware runs for every request
app.use(function(req,res,next){
    console.log("global middleware",req.method,req.url);
    next();
});
app.get("/",function(req,res){
    res.send("home route");
});
app.get("/admin",function(req,res,next){
    console.log("route specific middleware for /admin");
    next();
},function(req,res){
    res.send("admin route reached.")
});
app.listen(4000,function(){
    console.log("express server running at http://localhost:4000");
});

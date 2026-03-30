//basic routing //
const express=require("express");
const app=express();
app.get("/",function(req,res){
    res.send("home route in express server")
});
app.get("/",function(req,res){
    res.send("about route in express server")
});
app.get("/",function(req,res){
    res.send("products route in express server")
});
app.listen(4000,function(){
    console.log("express server running at http://localhost:4000");
});
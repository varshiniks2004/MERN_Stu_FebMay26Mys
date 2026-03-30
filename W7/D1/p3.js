//handling different http methods in express
const express=require("express");
const app=express();
app.get("/users",function(req,res){
    res.send("returning all users");
});
//to create
app.post("/users",function(req,res){
    //res.status sets the http status code before sending the
    res.status(201).send("user created.");

});
app.listen(4000,function(){
    console.log("express server running at http://localhost:4000");
});
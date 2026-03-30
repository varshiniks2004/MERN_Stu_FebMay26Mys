//basics of expressjs-setup
//npm init -y
//npm install express
//import module of express
const express=require("express");
//calling express() creates main application object
//this object is used to register routes and middleware
const app=express();
//app.get()handles GET request for a specific path
app.get("/",function(req,res){
    //res.send sends a response body and ends the request automatically
    res.send("Hello from express server");
});
//listen is a function that starts server in a chosen port number
app.listen(4000,function(){
    console.log("express server running at http://localhost:4000");
});
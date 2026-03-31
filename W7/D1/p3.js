//handling different http methods in express
const express=require("express");
const app=express();
app.get("/users",function(req,res){
  
    res.status(200).json([{message:"sucess"},
        {id:1,name:"varsh"},
        {id:2,name:"varshi"},
        {id:3,name:"varshu"},

    ]);
});
    res.send("returning all users");

//to create
app.post("/users",function(req,res){
    //res.status sets the http status code before sending the
    res.status(200).send("user created.");

});
app.listen(4003,function(){
    console.log("express server running at http://localhost:4003");
});
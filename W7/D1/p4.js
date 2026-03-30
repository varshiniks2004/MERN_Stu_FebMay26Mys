//middleware usage in express
//middleware runs during the req res cycle
//middleware can inspect or change the request before
// a route responds
//next()passes control to the next step

const express=require("express");
const app =express();
//app.use registers middleware.
//this middleware runs for every incoming req
app.use(function(req,res,next){
    console.log("request received",req.method,req.url);
    next();

});
app.get("/",function(req,res){
    res.send("middleware executed before the route")
});
app.listen(4000,function(){
    console.log("express server running at http://localhost:4000");
});



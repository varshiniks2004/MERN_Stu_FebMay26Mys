//managing session with express-session
const express=require("express");
const session=require("express-session");
const app=express();
app.use(session({
    secret:"MySecretKey",
    resave:false,
    saveUninitialized:false,
    cookie:{
        maxAge:60*60*1000
    }
}));
app.get("/login",function(req,res){
    req.session.user={
        id:201,
        username:"varsh",
        role:"student"
    };
    res.send("session details stored after login");


});
app.get("/profile",function(req,res){
   if(!req.session.user){
    return res.status(401).json({
        success:false,
        message:"no active login session found"
    });
   }
   res.json({
    success:true,
    sessionUser:req.session.user
   });


});
app.listen(4000, function () {
    console.log("express demo server running at http://localhost:4000");
});

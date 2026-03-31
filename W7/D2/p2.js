//third party middleware
const express=require("express");
const morgan=require("morgan");
const cors=require("cors");
const app=express();

app.use(morgan("dev"));
app.use(cors());
app.get("/",function(req,res){
    res.json({
        message:"third party middleware executed before this response"
    });
});
app.listen(4001,function(){
    console.log("express server running at http://localhost:4001");
});
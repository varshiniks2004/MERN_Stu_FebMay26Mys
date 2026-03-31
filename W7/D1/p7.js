//built-in middleware
const express=require("express");
const app =express();
app.use(express.json());
//express.urlencoded()
app.use(express.urlencoded({extended:false}));
app.post("/api/users",function(req,res){
    res.status(201).json({
        success:true,
        parsedBody:req.body

    });
    
});
app.post("/form",function(req,res){
    res.json({
        success:true,
        formData:req.body

    });
    
});
app.listen(3000,function(){
    console.log("express server running at http://localhost:3000");
});
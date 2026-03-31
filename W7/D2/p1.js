//routing
//"/"base url
//"/api/users"
const express=require("express");
const app =express();
//"/api/users"/create/delete/update/:id
//router objects help organize route groups
const apiRouter=express.Router();
apiRouter.get("/users",function(req,res){
    res.json({
        route:"/api/users",
        message:"users route inside api router"
    });
});
apiRouter.get("/orders",function(req,res){
    res.json({
        route:"/api/orders",
        message:"orders route inside api router"
    });
});
//mounting the router under /api base path
app.use("/api",apiRouter);
app.listen(4000,function(){
    console.log("express server running at http://localhost:4000");
});
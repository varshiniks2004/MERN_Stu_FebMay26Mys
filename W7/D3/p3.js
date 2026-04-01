//handling async error with async await
const express = require("express");
const app = express();
function loadUserProfile(){
    return Promise.reject(new Error("user profile cant be loaded"));
}
app.get("/async-fail",async function(req,re,next){
    try{
        const profile=await loadUserProfile();
        res.json(profile);

    }
    catch(error){
        next(error);

    }
});
// Centralized error handling middleware
app.use(function (error, req, res, next) {
    return res.status(404).json({
        success: false,
        message: "async/await error handled centrally.",
        //originalMessage: error.message
    });
});

app.listen(4000, function () {
    console.log("Express server running at http://localhost:4000");
});
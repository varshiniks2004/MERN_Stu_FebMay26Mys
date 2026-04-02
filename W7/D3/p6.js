//JWT token generation example//
const jwt=require("jsonwebtoken");
const secretKey="monkey123";
const wrongsecretKey="donkey123";
function loginUser(email,password){
    if(email==="correct@email.com"&& password==="vp123"){
        const token=jwt.sign({
            userId:101,
            email:email,
            role:"student"
        },secretKey,{expiresIn:"1h"});
        return{
            success:true,
            token:token
        };
    }
    return{
            success:false,
            message:"invalid credentials"
        };

}
const loginResult=loginUser("correct@email.com","vp123");
console.log("login result",loginResult);
if(loginResult.success){
    try{
        const verifiedPayload=jwt.verify(loginResult.token,secretKey);
            console.log("verified payload",verifiedPayload);
    }
    catch(error){
    console.log("verification failed",error.message);
}
}
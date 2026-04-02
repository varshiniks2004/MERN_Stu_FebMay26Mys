//JWT fundamenyals:token gen and verify
const jwt=require("jsonwebtoken");
const secretKey="donkey123";
//payload holds small non sensitive data]
const payload={
    userId:101,
    role:"member"

};
const token=jwt.sign(payload,secretKey,{expiresIn:"1h"});
console.log("token generated sucessfully\n",token);
const tokenParts=token.split(".");
console.log("header section:",tokenParts[0]);
console.log("payload section:",tokenParts[1]);
console.log("signature section:",tokenParts[2]);
console.log("jwt part count :",tokenParts.length);
try{
    //jwt.verify() checks trust,signature and expiration
    const verifiedPayload=jwt.verify(token,secretKey);
    console.log("verified payload",verifiedPayload);
}
catch(error){
    console.log("verification failed",error.message);
}
const decodeWithoutVerification=jwt.decode(token);
console.log("decoded token:",decodeWithoutVerification);
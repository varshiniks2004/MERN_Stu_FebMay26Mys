// //throw errors
// function divide(a,b){
//     if(b===0){
//         throw new Error("cannot divide by zero");
//     }
// return a/b;
// }
// try{
//     console.log(divide(10,2));
//     console.log(divide(10,0));
// }
// catch(err){
//     console.log("caught:",err.message);
// }
//throw errors
function checkAge(age){
    if(age<=10){
        throw new Error("age must be 18 above");
    }
return age;
}
try{
    console.log(checkAge(10));
    //console.log(checkAge(20));
}
catch(err){
    console.log("caught:",err.message);
}
//create a custom error class
class ValidationError extends Error{
    constructor(message){
        super(message);
        this.name = "ValidationError";
    }
}
function CreateUser (name){
    if(!name){
        throw new ValidationError("Name is required");
    }
    console.log("hi,"+name+"Welcome");
    return{name};
}
try{
    console.log(CreateUser("Varsh"));
}
catch(err){
    console.log("caught:",err.message);
}
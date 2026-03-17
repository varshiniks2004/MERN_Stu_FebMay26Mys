//chaining promises with centralized error handling
function validateLogin(){
    return new Promise(function(resolve){
        setTimeout(function(){
            resolve("Login validation");
        },400);
    });
}
function fetchAccountData(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            const accountFound = false;
            if(accountFound){
                resolve("Account data loaded.")
            }else{
                reject("Account data could not be found");
            }
        },700);
    });
}
validateLogin()
.then(function(message){
    console.log(message);
    return fetchAccountData();
})
.then(function(accountMeassage){
    console.log(accountMeassage);
})
.catch(function(error){
    console.log("chain error",error);
    
}
)
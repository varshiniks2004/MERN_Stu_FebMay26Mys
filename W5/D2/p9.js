//promise states : pending,fulfilled,rejected
const fulfilledPromise = new Promise(function(resolve){
    console.log("fulfillpromise is pending");

    setTimeout(function(){
        resolve("fulfilledpromise is fullfilled")
    },1000);
    
});

const rejectedPromise = new Promise(function(resolve,reject){
    console.log("rejectedpromise is pending");
    setTimeout(function(){
        reject("rejectedpromise is rejected.");
    },1000);
    
});

fulfilledPromise.then(function(message){
    console.log(message);
});
rejectedPromise.catch(function(message){
    console.log(message);
});
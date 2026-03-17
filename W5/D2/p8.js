//Introduction to promises
console.log("Program started.");
function getWelcomeMessage(){
    return new Promise(function(resolve){
        setTimeout(()=>{
            resolve("Welcome to Promises");
        },1000);
    });
}
const messagePromise = getWelcomeMessage();

console.log("promise created Result not ready yet.");

messagePromise.then(function(message){
    console.log(message);
});

console.log("program continues while the promise is pending.");
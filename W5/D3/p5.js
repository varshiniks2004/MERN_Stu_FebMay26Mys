//An async function always returns a Promise
async function getStatusMessage(){
    return "Order is ready";
}
const result= getStatusMessage();
console.log("is this returned value a promise?",result instanceof Promise);
result.then(function(message){
    console.log("resolved value:",message);
});
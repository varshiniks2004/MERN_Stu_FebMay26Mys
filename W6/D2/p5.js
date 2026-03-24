//microtask and macrotask
console.log("1. Synchronous start.");
//promise.resolve(...)then(...) schedule a microtask
Promise.resolve().then(function(){
    console.log("3.Promise microtask executed.");
});
//setTimeout(...0) schedule task for a later time even with 0 delay it doesn't interrupt current sync code
setTimeout(()=>{
    console.log("4.Timer callback executed.");
},0);
console.log("2.Synchronous end.");
//set immediate vs setTimeout
console.log("scheduling setElement and setImmediate");
//callback timer
setTimeout(()=>{
    console.log("timer callback from settimeout");
},0);
//setImmediate callback
setImmediate(function(){
    console.log("setImmediate callback executed.");
});
console.log("Both callbacks are now waiting for the eventloop");
// Asynchronous approach of Noded.js

console.log("Step 1:Script started.");

setTimeout(()=>{

},1000);

setTimeout(function(){
    console.log("Step 3: Delayed callback finished.F2.");
    
},1000);
setTimeout(function(){
    console.log("Step 3: Delayed callback finished.F1.");
    
},3000);

console.log("step 2: Script did not stop while waiting");
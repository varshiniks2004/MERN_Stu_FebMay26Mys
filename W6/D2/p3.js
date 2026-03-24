//event loop with multiple async tasks
console.log("main script started");
//task 1
setTimeout(()=>{
    console.log("timer A started after 500ms");
},500);
//task 2
setTimeout(()=>{
    console.log("timer B finished after 100ms");
},100);
//task 3
setTimeout(()=>{
    console.log("timer C finished after 0ms,but still waits for async code to complete");
},0);
console.log("main script ended");
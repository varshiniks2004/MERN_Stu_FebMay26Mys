//logging
console.log("console logging");
console.log("warning message");
console.log("error message");
 let users=[
    {id:1,name:"varsh"},
    {id:1,name:"varshi"},
 ];
 console.log(users);
 console.table(users);
 //group the related logs
 console.group("grouped logs");
 console.log("log 1");
 console.log("log 2");
 console.log("log 3");
 console.groupEnd();

 //measure execution time
 console.time("loopTimer");
 for(let i=0;i<1000;i++){}
 console.timeEnd("loopTimer");



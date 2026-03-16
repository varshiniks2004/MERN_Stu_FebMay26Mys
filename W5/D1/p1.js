//intro to node js
const runtimeName="Node.js";
// console.log("intro to Node.js");
console.log(`${runtimeName}runs javascript outside the browser`);
const commonUsers=[
    "used for server side application","automation strips can be created"
];
//array structuring
console.log(commonUsers[0]);
console.log(commonUsers[1]);
commonUsers.forEach((commonUse,index) =>{
    console.log(`${index+1}.${commonUse}`)
});
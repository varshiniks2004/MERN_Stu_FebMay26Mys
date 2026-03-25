//introduction to node.js file system built-in module
const fs =require("fs");
const fsPromises=require("fs/promises");
//callback
console.log("type of fs.readfile:",typeof fs.readFile);
console.log("type of fs.writeFile:",typeof fs.writeFile);
//fs promises
console.log("type of fsPromises.readfile:",typeof fs.readFile);
console.log("type of fsPromises.writeFile:",typeof fs.writeFile);

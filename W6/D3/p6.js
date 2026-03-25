//Directory(folder)operations:mkdir,readdir and readdir/rm
const fs = require("fs");
const path = require("path");
const demoDir = path.join(__dirname, "demo-folder");
fs.mkdirSync(demoDir,{recursive:true});
fs.writeFileSync(path.join(demoDir,"file1.txt"),"file1 content");
fs.writeFileSync(path.join(demoDir,"file2.txt"),"file2 content");
//to check folder contents
const entries=fs.readdirSync(demoDir);
console.log("directory contents:",entries);
fs.rmSync(demoDir,{recursive:true,force:true});
console.log("Directory exists?",fs.existsSync(demoDir));
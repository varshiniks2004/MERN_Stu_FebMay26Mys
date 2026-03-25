//renaming deletind and checking the file existence
//
const fs=require("fs");
const path=require("path");
const OriginalPath = path.join(__dirname, "draft-report.txt");
const renamedPath = path.join(__dirname, "final-report.txt");
fs.writeFileSync(OriginalPath,"draft report content");
console.log("does draft-report.txt exists",fs.existsSync(OriginalPath));
//rename
fs.renameSync(OriginalPath,renamedPath);
console.log("does draft-report.txt exists",fs.existsSync(OriginalPath));
//
fs.unlinkSync(renamedPath);
console.log("does final  report text exists",fs.existsSync(OriginalPath));
//filter method
// let marks=[75,49,56,70,82,51,68];
// let passed=marks.filter(mark =>mark >=70);
// console.log(marks);
// console.log(passed);
let students = [
    {name:"arjun", mark:24},
    {name:"krishna", mark:28},
    {name:"varsh", mark:72},
];
 
console.log(students);

let passed = students
    .filter(student => student.mark >= 70).map(student => student.name);

console.log("passed students:", passed);

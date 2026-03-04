// JSON stringify parse
const employee ={
    id: 31088,
    name: "varsh",
    dep: "ECE",
    isActive: true
};
const jsonString=JSON.stringify(employee);
console.log(jsonString);
console.log(employee);
//JS parsing
const parsedObject=JSON.parse(jsonString);
console.log(parsedObject);
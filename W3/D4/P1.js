//arrays
console.log("Arrays");
//creating array
let emptyArray=[];
let numArray=[1,2,3,4];
let mixedArray=[42,"hello",true,null,{name:"Gola"},[5,6]];
console.log(emptyArray);
console.log(numArray);
console.log(mixedArray);
//using Constructer
let fruits=new Array("Apple","Mango");
console.log(fruits);
console.log("is fruits an array?",Array .isArray(fruits));
//push add
fruits.push("Grapes");
console.log(fruits);
//pop remove
fruits.pop();
console.log(fruits);
//unshift add at begining
fruits.unshift("cherry")
console.log(fruits);
//shift remove first element
fruits.shift();
console.log(fruits);


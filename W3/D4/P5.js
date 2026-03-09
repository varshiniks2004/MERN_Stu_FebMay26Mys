//reduce func or method
let num=[5,10,15];
let total=num.reduce((intermediateSum,current) =>intermediateSum+current,0);
console.log(total);
let average = total/num.length;
console.log("Average:", average);
//reduce to object  count by category
let items=["pen","pencil","pen","eraser"];
let count=items.reduce((a,b)=>{
    a[items]=(a[items]||0)+1;
    return a;

},{});
console.log("item count:",count);

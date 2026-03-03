//default parmeters
function product(a=1,b=1){
    return a*b;
}
console.log("product of 15 and 4",product(15,4));
console.log("product of 15",product(15));

//rest parameters
function sumOfAll(...Numbers){
    console.log(...Numbers);

}
sumOfAll(1,2,3);
sumOfAll(10);
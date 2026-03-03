//higher order function
//A function which takes another function as parameter or a function returns another function
function createMultiplier(factor){
    return function(number){
        return number*factor;
    }
}
let double=createMultiplier(2);
console.log(double(10));
let triple = createMultiplier(3);
console.log(triple(30));
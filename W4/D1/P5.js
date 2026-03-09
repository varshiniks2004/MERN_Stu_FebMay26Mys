//breakpoint
//inspect variable values
//view the call stack,step through code line by line
//evaluate expression in the console
//watch how variables change during execution,to find logical errors

function calculateTotal(prices){
    let total=0;
    for(let i=0;i<prices.length;i++){
        let price=prices[i];
        total+=price;
        debugger;
    }
    return total;
}
let cart=[100,250,150,1000,220];
console.log("total:",calculateTotal(cart));
console.log(document.body);
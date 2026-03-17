// callback nesting
console.log("startd nested callback flow");
console.log();

setTimeout(function(){
    console.log(2);
    
    setTimeout(function(){
        console.log(3);
        
        setTimeout(function(){
            console.log(4);
            
            setTimeout(function(){
                console.log("step4: shipment loaded");
                console.log("we are in call back hell!!!");
            },1000);
        },800);
    },600);
},400);
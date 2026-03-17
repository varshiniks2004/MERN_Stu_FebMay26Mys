// callback handling with named functions
function loaduser(next){
    setTimeout(function(){
        console.log("1 user load")
        next();
    },400);
}

function loadOrders(next){
    setTimeout(function(){
        console.log("2 orders loaded ");
        next();
    },400)
}
function loadPayment(next){
    setTimeout(function(){
        console.log("3 payment loaded");
        next();
    },400)
}
function loadShipment(){
    setTimeout(function(){
        console.log("4 shipment loaded");
        console.log("same flow but easier to read");
        
        
    },100)
}

loaduser(function(){
    loadOrders(function(){
        loadPayment(function(){
            loadShipment();
        },100);
    });
});
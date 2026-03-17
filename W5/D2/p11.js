// chaining promises with returned promises
function getorderId(){
    return new Promise(function(resolve){
        setTimeout(function(){
            resolve(501);
        },500);
    });
}
function getOrderDetails(orderId){
    return new Promise(function(resolve){
        setTimeout(function(){
            resolve({
                id:orderId,
                prodduct: "laptop",
                quantity:2
            });
        },700);
    });
}
getorderId()
.then(function(orderId){
    console.log("Order Id received: ",orderId);
    return getOrderDetails(orderId);
})
.then(function(OrderDetails){
    console.log("Order details loaded.");
    console.log("Prouct: ",OrderDetails.prodduct);
    console.log("Quantity: ",OrderDetails.quantity);       
});

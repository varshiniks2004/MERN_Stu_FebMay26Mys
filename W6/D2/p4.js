//usage of event emitter class
const EventEmitter =require("events");
//create new event emitter instance
//this object can publish events and allow listener to subscribe
const orderEmitter = new EventEmitter();
//register a listener for the orderplaced event.
//whenever the event is emitted the function will execute
orderEmitter.on("your order has been successfully placed",
    function(orderId){
        console.log("restaurant accepted order.",orderId);
    }
);

//emit the event with extra data
//listener receives the order id value

orderEmitter.once("orderPlaced",function(orderId,customerName,orderValue){
    console.log("hello",customerName);
    console.log("Bill Amount:",orderValue);
    console.log("waiting for restaurant to accept order.",orderId);
}
);
orderEmitter.on("orderPlaced",function(orderId,customerName){
    console.log("hello",customerName);

    console.log("restaurant  accepted the order",orderId);
}
);
orderEmitter.on("orderPlaced",function(orderId,customerName){
    console.log("hello",customerName);
    console.log("order placed",orderId);
}
);
orderEmitter.on("orderPlaced",function(orderId,customerName){
    console.log("hello",customerName);
    console.log("partner is assigning, ",orderId);
}
);
orderEmitter.on("orderPlaced",function(orderId,customerName){
    console.log("hello",customerName);
    console.log("ramesh is delivering your order");
}
);
orderEmitter.emit("orderPlaced","ORD-24030001","varsh",10000)
orderEmitter.emit("orderPlaced","ORD-24030001","varsh",10000)


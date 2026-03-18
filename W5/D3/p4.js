//Combing multiple promise based steps with async/await

function getOrderId(){
    return new Promise(function(resolve){
        setTimeout(function(){
            resolve({id:101,name:"Kiran"});
        },500);
    })
}
function getOrderDetails(orderId){
    return new Promise(function(resolve){
        setTimeout(function(){
            resolve({
                id:orderId,
                product:"laptop",
                quality:2
            })
        },700);
    })
}
async function showOrderSummary(){
    const orderId  = await getOrderDetails();
    console.log("order id:",orderId);

    const orderDetails = await getOrderDetails(orderId);
    console.log("product:",orderDetails.product);
    console.log("Quantity:",orderDetails.quality);
}
showOrderSummary();
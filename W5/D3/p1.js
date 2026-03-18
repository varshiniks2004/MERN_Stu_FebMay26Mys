//intro to asynch /await
function getMessage(){
    return new Promise(function(resolve){
        setTimeout(()=>{
            resolve("asynch/await makes promise based code easier to read");
        },1000);
    });
}
async function showMessage(){
    console.log("loading message...");
    const message=await getMessage();
    console.log(message);
}
showMessage();
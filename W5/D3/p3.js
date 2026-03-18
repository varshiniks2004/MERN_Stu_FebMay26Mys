//handling errors with try/catch
function loadCustomerProfile(){
    return new Promise(function(resolve,reject){
        const isServiceAvailable = true;
        if(isServiceAvailable){
            resolve("success! customer profile loaded");
        }
        else{
            reject("unsuccessfull!  customer profile is unavailable");
        }
    });
}
async function showCustomerProfile(){
    try{
        const message=loadCustomerProfile();
        console.log(message);

    }
    catch(error){
        console.error("Error:",error);
    }
    

}
showCustomerProfile();


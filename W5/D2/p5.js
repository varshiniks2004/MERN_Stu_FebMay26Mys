// callback error
function divideNumbers(a,b,callback){
    if(b==0){
        callback("cannot divide by zero");
        return;
    }
    const result = a/b;
    callback(null,result);
}
divideNumbers(10,2,function(error,result){
    if(error){
        console.log(error,"error");
        return;
    }
    console.log("result",result);
})
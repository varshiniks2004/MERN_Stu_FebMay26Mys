// basic call back variation 
// call back with no data
// call back which takes data from primary function
function runtask(callback){
    console.log("taskis is running");
    callback();
}
function runTaskWithResult(taskName,callback){
    console.log("processing task",taskName);
    callback("task"+taskName+"finished sucessfully");
}
function simple(){
    console.log("simple call back executed");
}
function detail (message){
    console.log(message)
}
runtask(simple);
runTaskWithResult("send monthly report",detail);
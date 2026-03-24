//handling the error event in eventemitter
const EventEmitter=require("events");
const fileEmitter=new EventEmitter();
//register an error listener
fileEmitter.on("error",function(errorMessage){
    console.log("emitter handler error",errorMessage);
});
//normal event listener:happy scenario
fileEmitter.on("fileProcessed",function(fileName){
    console.log("file processed sucessfully",fileName);
});
fileEmitter.emit("fileProcessed","report.csv");
fileEmitter.emit("error","File processing failed.");

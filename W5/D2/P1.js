// introduction to callback function
// call back function will execute after the primary function

function greetuser(name,callback){
    console.log("hello,"+name);
    callback();
}

function showCompletionMessage() {
    console.log("the greeting task is completed.");
}

greetuser("varshith",showCompletionMessage)
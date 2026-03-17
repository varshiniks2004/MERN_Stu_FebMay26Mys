// writeing custom call back function
function processStudent(name,score,callback){
    callback(name,score);
}
function showResult(name,score){
    if(score >= 70){
        console.log(name+" passed");
        console.log(score+" score");
        
    }
    else{
        console.log(name+"failed");
        
    }
}
function showGrade(name,score){
    if(score >= 85){
        console.log(name+"A");
    }
    else if(score >= 75){
        console.log(name+"failed");
        
    }
    else{
        console.log("try again");
    }
}
processStudent("varshith",98,showResult);
processStudent("varshith",96, showGrade);
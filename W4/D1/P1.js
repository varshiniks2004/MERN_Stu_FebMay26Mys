//try catch block(handles run time errors)
// try{
//     console.log("try to access undefined variable");
//     console.log(notDefined);
// }
// catch(err){
//     console.log("error caught",err.name,"-",err.message);
//     error.innerHTML="trying to access undefined variable";
// }
// console.log("program execution continues");
//json parsing error
let jsonText="{JSON}";
try{
    let data=JSON.parse(jsonText);
    console.log(data);
}
catch(err){
    console.log("JSON parse error",err.message);
}
try{
    let num =10;
    num();
}
catch(err){
    console.log("caught error:",err.name);
}

//function scope
function scope() {

    var insideVar = 10;
    let insidelet = 20;
    const insideconst=30;
    console.log(insideVar);
    console.log(insidelet);
    console.log(insideconst);

}
//scope();
// console.log(insideVar);
//     console.log(insidelet);
//     console.log(insideconst);
function varFunctionScoped(){
    if(true){
        var x=40;
        let y=50;

    }
    console.log("x:",x);
    console.log("y:",y);


}
varFunctionScoped();
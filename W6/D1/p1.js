//node js modules
const moduletitle="Nodejs module basics";
function describeModule(){
    console.log("this file is its own module");
    console.log("title",moduletitle);
    console.log("local values stay inside this file unless exported");
}
describeModule();//invoking function
const readline = require("readline");
const chalk = require("chalk");
const courses = require("../courses");
const { log } = require("console");
const {getEnrollement, processenrollAsync}=require("./enroll");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});


function main(){
    console.log(` 1. view all courses `);

    rl.question("",(prompt)=>{
        if(prompt == "1")
            courses.forEach((course,index)=>{
                console.log(` ${index+1}. ${course.title} - ${course.id}`);
                
            })
        
        return "function End"
    });
    console.log("Enroll in a course");
     rl.question("",(prompt)=>{
        if(prompt == "2")
            courses.forEach((course,index)=>{
                console.log(` ${index+1}. ${course.title} - ${course.id}`);
                
            })
        
        return "function End"
        })


    
}
main();
// Get element By Id
// console.log("Document Object:", document);
// console.log("Page title", document.title);

// const heading = document.getElementById("mainHeading");
// console.log("Heading text", heading.textContent);

// get elements by class name
const info = document.getElementsByClassName("info");
const run = document.getElementById("run");


// get Elements By Tag Name
const spanTag = document.getElementsByTagName("span");

run.addEventListener("click", function () {
    for (let i = 0; i < info.length; i++) {
        console.log(info[i].textContent);
        info[i].style.color = "blue";
    }
    for (let i = 0; i < spanTag.length; i++) {
        spanTag[i].style.backgroundColor = "lightgreen";
    }

//query selector returns th first elements
//matches css selector
const mainFirstHeading=document.querySelector(".mainHeading");
mainFirstHeading.style.color="blue"
});
//query selector all:returns all elements matching the selector
const task=document.querySelectorAll("task");
task.style.color="purple";
task. forEach(function(task){
    task.style.color="purple"
});

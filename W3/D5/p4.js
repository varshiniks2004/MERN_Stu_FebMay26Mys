//keyboard event:keydown
const input=document.getElementById("nameinput");
const display=document.getElementById("display");

input.addEventListener("keydown",function(event){
    console.log("key pressed:",event.key);
    display.textContent = "last text:"+event.key;
});
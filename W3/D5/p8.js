//Event delegation
const tasklist = document.getElementById("tasklist");
const addTask = document.getElementById("addTask");

tasklist.addEventListener("click",function(event){
    if(event.target.ClassList.contains("deletebtn")){
        console.log("Delete button clicked for: ",event.target.parentElement.textContent.trim()
    );
        event.target.parentElement.remove();
    }
});
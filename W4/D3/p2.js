const themeInput=document.getElementById("themeInput");
const output=document.getElementById("output");
document.getElementById("saveBtn").addEventListener("click",
    function(){
        localStorage.setItem("theme",themeInput.value);//input is given here
        localStorage.setItem("userName","varsh");
        localStorage.setItem("loggedIn","varsh");
        console.log("saved theme:",themeInput.value);
        output.textContent="successfully stored to localStorage";
        output.style.color="red";
}
    
);
document.getElementById("removeBtn").addEventListener("click",
    function(){
        localStorage.removeItem("loggedIn");
        output.textContent="removed 'loggedIn'";
        output.style.color="red";
}
    
);
document.getElementById("clearBtn").addEventListener("click", 
    function () {
    localStorage.clear();   
    output.textContent = "All localStorage cleared";
    output.style.color = "red";
});
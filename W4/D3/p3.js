const themeInput=document.getElementById("themeInput");
const output=document.getElementById("output");
document.getElementById("saveBtn").addEventListener("click",
    function(){
        sessionStorage.setItem("theme",themeInput.value);//input is given here
        sessionStorage.setItem("userName","varsh");
        sessionStorage.setItem("loggedIn","true");
        console.log("saved theme:",themeInput.value);
        output.textContent="successfully stored to sessionStorage";
        output.style.color="red";
}
    
);
document.getElementById("removeBtn").addEventListener("click",
    function(){
        sessionStorage.removeItem("loggedIn");
        output.textContent="removed 'loggedIn'";
        output.style.color="red";
}
    
);
document.getElementById("clearBtn").addEventListener("click", 
    function () {
    sessionStorage.clear();   
    output.textContent = "All sessionStorage cleared";
    output.style.color = "red";
});
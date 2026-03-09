const loginForm = document.getElementById("loginForm");
const username = document.getElementById("username");
const message = document.getElementById("message");

loginForm.addEventListener("submit",function(monkey){
    //stop page reload
    monkey.preventDefault();
    
    if (username.value.trim()===""){
        message.textContent="username is requred";
        console.log("Form blocked:no input for username");
        return;
    }
    message.textContent = "Form handled by JS for user",username.value;
    console.log("Form submitted with username",username.value);
});
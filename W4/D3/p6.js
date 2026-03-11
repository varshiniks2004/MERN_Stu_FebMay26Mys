const IntroBtn=document.getElementById("IntroBtn");
const output=document.getElementById("output");
IntroBtn.addEventListener("click",
    function(){
        output.textContent="sending request...";
        fetch("https://jsonplaceholder.typicode.com/posts/4")
        .then(function(response){
            return response.text();
        })

        .then(function(text){
            console.log("text response:",text);
            output.textContent=text;
        })
        .catch(function(error){
            output.textContent="unexpected fetch error:" + error.message;
        });

    });

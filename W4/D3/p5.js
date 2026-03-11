const IntroBtn=document.getElementById("IntroBtn");
const output=document.getElementById("output");
IntroBtn.addEventListener("click",
    function(){
        output.textContent="sending request...";
        fetch("https://jsonplaceholder.typicode.com/posts/4")
        .then(function(response){
            return response.json();
        })

        .then(function(data){
            console.log("raw response object:",data);
            // output.textContent="status:" + response.status +"\nOK:" +
            // response.ok;
            output.textContent=JSON.stringify(data,null,2);
        })
        .catch(function(error){
            output.textContent="unexpected fetch error:" + error.message;
        });

    }

);
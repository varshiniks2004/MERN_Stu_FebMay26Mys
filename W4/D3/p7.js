const existingPostBtn=document.getElementById("existingPostBtn");
const missingPostBtn=document.getElementById("missingPostBtn");
const statusOutput=document.getElementById("statusOutput");
function fetchPost(url){
    statusOutput.textContent="fetching from" +url;
    fetch(url)
    .then(function(response){
        if(!response.ok){
            throw new Error("Http error status code:"+response.status);
        }
        return response.json();
    })
    .then(function(data){
        statusOutput.textContent="success:"+JSON.stringify(data,null,3);
    })
    .catch(function(error){
        statusOutput.textContent="Error:"+error.message;
    });
}
existingPostBtn.addEventListener("click",
    function(){
        fetchPost("https://jsonplaceholder.typicode.com/posts/4");
    }
);
missingPostBtn.addEventListener("click",
    function(){
        fetchPost("https://jsonplaceholder.typicode.com/posts/4");
    }
);


const asyncfetchBtn=document.getElementById("asyncfetchBtn");
const postIdInput=document.getElementById("postIdInput");
const output=document.getElementById("output");
asyncfetchBtn.addEventListener("click",
    async function(){
        // output.textContent="loading user...";
            const id=postIdInput.value.trim();
            if(id===""){
                output.textContent="post ID is required.";
                return;
            }
            const numericId=Number(id);
              if(numericId >100){
                output.textContent="enter valid ID b/w 1 & 100.";
                return;
            }
            try{
                const response = await
                fetch("https://jsonplaceholder.typicode.com/posts/"+ numericId);
                if(!response.ok)throw new Error("HTTp error:"+response.status);
                const data=await response.json();
                output.textContent=JSON.stringify(data,null,2);
        }
        catch(error){
            output.textContent="Error:"+ error.message;
        }
    }
);


    

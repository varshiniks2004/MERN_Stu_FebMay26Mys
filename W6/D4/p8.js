//Parsing JSON request bodies
const http = require("http");
const {parse} = require("path");

const server = http.createServer(function(req,res){
    if(req.method === "POST" && req.url === "/api/users"){
        let body = "";

        req.on("data",function(chunk){
            body+=chunk.toString();
        });
        req.on("end",function(){
            try{
                const parsed = JSON.parse(body);
                //get:200,post:201
                res.writeHead(201,{"Content-Type":"application/json"});
                res.end(JSON.stringify({
                    success:true,
                    recived:parsed
                }));
            }
            catch(error){
                res.writeHead(400,{"Content-Type":"application/json"});
                res.end(JSON.stringify({
                    success:false,
                    recived:"Invalid JSON body"
                })); 
            }
        });
        return;
    }
    res.writeHead(404,{"Content-Type":"application/json"});
    res.end(JSON.stringify({success:false,message:"Route not found."}));
});
//curl -X POST http://localhost:4001/api/users -H "Content-Type:application/json" -d "{\"name\":\"varsh\",\"role\":\"admin\"}"
server.listen(4001,function(){
    console.log("Server is running at http://localhost:4001"); //localhost:4001 is the base URL
});
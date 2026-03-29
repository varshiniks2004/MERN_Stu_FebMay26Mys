//reading POST req body data
const http = require("http");
const server=http.createServer(function(req,res){
    if(req.url==="/submit"&& req.method==="POST"){
        let body=""
        //
        req.on("data",function(chunk){
            body+=chunk.toString();
        });
        
        //end executes when the full req body has been received
        req.on("end",function(){
        res.writeHead(200,{"content-type":"text/plain"});
        res.end("received req body data:"+body);
        });
        return;
    }
    res.writeHead(404,{"content-type":"text/plain"});
    res.end("route not found.");
});
server.listen(4005,function(){
    console.log("Server is running at http://localhost:4005");
})


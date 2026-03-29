//sending response in JSON format
const http = require("http");
const server=http.createServer(function(req,res){
    if(req.url==="/api/status"&& req.method==="GET"){
        const responseData={
            success:true,
            message:"API is  working",
        server:"NodeJS HTTP module"       
    };
    //json responses using application/json
    res.writeHead(200,{"content-type":"application/json"});
    //js object into string
    res.end(JSON.stringify(responseData));
    return;
}
    res.writeHead(404,{"content-type":"application/json"});
    res.end(JSON.stringify({success:false,message:"route not found"}));
});
server.listen(4006,function(){
    console.log("Server is running at http://localhost:4006");
});
     
// Creating a simple HTTP server

const http = require("http");

// createServer(): creates a HTTP server instance
// Accepts a callback with two important objects:
// 1. req : incoming request details
// 2. res : outgoing response control

const server = http.createServer(function(req,res){
    // writeHead() sets the response status code and headers
    res.writeHead(200,{"content-Type":"text/plain"}); 
    // end() sends the response body and closes the response
    res.end("method:"+req.method+"\nURL:"+req.url);
});

// listen() binds the server to a port and 
// starts accepting requests
server.listen(4002,function(){
    console.log("Server is running at http://localhost:4002");
})
//port no:
//0-1023:system ports
//1024-49151:"Registered ports"

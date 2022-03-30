const http = require("http");


const helloWorld = function(req, res) {
    res.writeHead(200);
    res.end("Hello world");
} 

const server = http.createServer(helloWorld);

server.listen(8080, function(){
    console.log("Server is listening on port  8080");
})

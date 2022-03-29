const http = require("http");


const hellowWrold = function(req, res) {
    req.writeHead(200);
    res.end("Hello world");
}

const server = http.createServer(hellowWrold);

server.listen(8080, "localhost", function(){
    console.log("Server is running on http://localhost:8080");
}); 
const http = require("http");


const helloWorld = function(req, res) {
    res.setHeader("Content-type", "application/json")
    res.writeHead(200);
    res.end("{'message':'json format message'}");
} 

const server = http.createServer(helloWorld);

server.listen(8080, function(){
    console.log("Server is listening on port  8080");
})

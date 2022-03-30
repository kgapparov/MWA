const http = require("http");


const helloWorld = function(req, res) {
    res.setHeader("Content-type", "text/html")
    res.writeHead(200);
    res.end("<HTML><body><H2>Hello world</H2></body></HTML>");
} 

const server = http.createServer(helloWorld);

server.listen(8080, function(){
    console.log("Server is listening on port  8080");
})

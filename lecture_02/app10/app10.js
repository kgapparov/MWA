const http = require("http");

const server = http.createServer();
const hellowWrold = function(req, res) {
    req.setHeader("Content-type", "text/html");
    req.writeHead(200);
    res.end("Hello world");
}


server.listen(8080, "localhost", function(){
    console.log("Server is running on http://localhost:8080");
}); 

const fs= require("fs");
const readIndexAndServe = function(req, res) {
    fs.readFile(__dirname + "\\index.html", function(err, buffer) {
    res.setHeader("Content-Type", "text/html");
    res.writeHead(200);
    res.end(buffer);
});
}

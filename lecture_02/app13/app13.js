const http = require("http");

const fs = require("fs");

const readIndexAndServer = function (req, res) {
    const buffer = fs.readFileSync(__dirname+"\/index.html");
    res.setHeader("Content-type", "text/html");
    res.writeHead(200);
    res.end(buffer);
}

const server = http.createServer(readIndexAndServer);

server.listen(8080, "localhost", function (){
    console.log("started");
})
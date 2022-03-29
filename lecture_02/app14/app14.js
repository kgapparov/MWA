const http = require("http");

const fs = require("fs");

const serverAllRequest = function (req, res) {
    switch (req.url) {
        case "/json" :
            res.setHeader("Content-type", "application/json");
            res.writeHead(200);
            res.end("{'nessage': 'hello world!'}");
            break;
        case "/":
            res.setHeader("Content-type", "text/html");
            res.writeHead(200);
            res.end(indexFileBuffer);
            break;
    }
}

const server = http.createServer(serverAllRequest);

server.listen(8080, "localhost", function (){
    console.log("started");
})
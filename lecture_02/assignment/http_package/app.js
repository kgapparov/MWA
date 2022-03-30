const fs = require("fs");
const http = require("http");
const path = require("path");
require("dotenv").config();

const port = process.env.PORT;
const message = process.env.MESSAGE;


const httpRequestHandler = function (req, res) {
    if (req.method == "POST") {
        res.setHeader("Content-type", "application/json");
        res.writeHead(200);
        res.end("{'message' : 'Hellow world from json format'}");
    } else { req.method == "GET"} {
       switch(req.url) {
           case "/index.html" :
           fs.readFile(path.join(__dirname , "index.html"), function (err, buffer) {
               res.setHeader("Contnet-type", "text/html");
               res.writeHead(200);
               res.end(buffer);
           });
           break;
           case "/page1.html" :
            fs.readFile(path.join(__dirname , "page1.html"), function (err, buffer) {
                res.setHeader("Contnet-type", "text/html");
                res.writeHead(200);
                res.end(buffer);
            });
           break;
           case "/page2.html" :
            fs.readFile(path.join(__dirname , "page2.html"), function (err, buffer) {
                res.setHeader("Contnet-type", "text/html");
                res.writeHead(200);
                res.end(buffer);
            });
           break;
           default:
            fs.readFile(path.join(__dirname , "index.html"), function (err, buffer) {
                res.setHeader("Contnet-type", "text/html");
                res.writeHead(200);
                res.end(buffer);
            });
       }
    }
}

const server = http.createServer(httpRequestHandler);

server.listen(port, function (){
    console.log(message + " "+ server.address().port);
})
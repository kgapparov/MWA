const http = require("http"); 
const fs = require("fs");
const path = require("path");
let indexFileBuffer;  
let statusCode; 
const readAndServer = function(req, res) {
        res.setHeader("Content-type", "applilcation/javascript");
        res.writeHead(statusCode);
        res.end(indexFileBuffer);
}

const server = http.createServer(readAndServer);

fs.readFile(path.join(__dirname, "app.js"), function(err, buffer) {
    if (err) {
        indexFileBuffer = "File not found";
        statusCode = 404; 
    } else {
        indexFileBuffer = buffer; 
        statusCode = 200; 
    }
    server.listen(8080, function(){
        console.log("Server started at port 8080");
    })
})

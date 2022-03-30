const http = require("http"); 
const fs = require("fs");
const path = require("path");
let indexFileBuffer;  
const readAndServer = function(req, res) {
        res.setHeader("Content-type", "applilcation/javascript");
        res.writeHead(200);
        res.end(indexFileBuffer);
}

const server = http.createServer(readAndServer);

fs.readFile(path.join(__dirname, "app.js"), function(err, buffer) {
    indexFileBuffer = buffer; 
    server.listen(8080, function(){
        console.log("Server started at port 8080");
    })
})

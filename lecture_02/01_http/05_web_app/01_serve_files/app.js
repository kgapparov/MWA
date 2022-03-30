const http = require("http"); 
const fs = require("fs");
const path = require("path");
const readAndServer = function(req, res) {
    fs.readFile(path.join(__dirname, "app.js"), function(err, buffer) {
        res.setHeader("Content-type", "applilcation/javascript");
        res.writeHead(200);
        res.end(buffer);
    })
}

const server = http.createServer(readAndServer);

server.listen(8080, function(){
    console.log("server started at port 8080");
})
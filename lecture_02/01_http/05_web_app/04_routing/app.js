const http = require("http"); 
const fs = require("fs");
const path = require("path");

const serveAllRequest = function(req, res) {
    switch (req.url) {
        case "/json" :
            res.setHeader("Content-type", "applilcation/json");
            res.writeHead(200);
            res.end("{'message' : 'json message'}");
            break;
        case "/index.html":
            let indexFileBuffer;  
            let statusCode; 
            fs.readSync(path.join(__dirname, "index.html"), function(err, buffer){
                if (err) {
                    indexFileBuffer = "File not Found";
                    statusCode = 404;
                } else {
                    indexFileBuffer = buffer; 
                    statusCode = 200;
                }
                res.setHeader("Content-type", "text/html");
                res.writeHead(statusCode);
                res.end(indexFileBuffer);
            });
            break;
    }
}

const server = http.createServer(serveAllRequest);

server.listen(8080, function(){
    console.log("Server started at port 8080");
});

const express = require("express");

const app = express();

app.set("port", 8080);

const server = app.listen(app.get("port"), function(){
    console.log("server started on port", server.address().port);
})
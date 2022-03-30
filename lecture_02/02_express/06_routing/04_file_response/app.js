const express = require("express");
const path = require("path");
require("dotenv").config();
const app = express();

app.get("/", function(req, res) {
    console.log("get recieved");
    res.status(200).sendFile(path.join(__dirname, "app.js"));
})
const server = app.listen(process.env.PORT, function(){
    console.log(process.env.LISTEN_TO_PORT_MESSAGE, server.address().port);
})
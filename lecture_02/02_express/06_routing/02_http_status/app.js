const express = require("express");
require("dotenv").config();
const app = express();

app.get("/", function(req, res) {
    console.log("get recieved");
    res.status(200).send("get recieved");
})
const server = app.listen(process.env.PORT, function(){
    console.log(process.env.LISTEN_TO_PORT_MESSAGE, server.address().port);
})
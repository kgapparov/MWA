const express = require("express");
const { appendFile } = require("fs");

const path = require("path");

require("dotenv").config();

const app = express();

app.get("/", function(req, res) {
    console.log("Get recieved");
    res.status(200).send("Recieved your GET request");
});

app.use("/najeeb", express.static(path.join(__dirname, "public")));

app.get("/json", function(req, res) {
    console.log("JSON Request recieved");
    res.status(200).json({"JSON DATA": true})
});

app.get("/file", function(req, res) {
    console.log("file Request recieved");
    res.status(200).sendFile(path.join(__dirname , "app.js"));
});


const server = app.listen(process.env.PORT, function(){
    console.log(process.env.LISTEN_TO_PORT_MSG+ server.address().port);
});

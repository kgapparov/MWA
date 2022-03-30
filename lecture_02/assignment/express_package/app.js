const express = require("express");
const path = require("path");
const fs = require("fs");
require("dotenv").config();

const app = express();
const requestHandler =  {
        indexHandler : function (req, res) {
            res.status(200).sendFile(path.join(__dirname , "index.html"));
        },
        page1Handler : function (req, res) {
            res.status(200).sendFile(path.join(__dirname , "page1.html"));
        },

        page2Handler: function (req, res) {
            res.status(200).sendFile(path.join(__dirname , "page2.html"));
        },
        jsonHandler: function (req, res) {
            res.status(200).json("{'message' : 'this is json response'}");
        }
    }

app.get("/index.html", requestHandler.indexHandler);
app.get("/page1.html", requestHandler.page1Handler);
app.get("/page2.html", requestHandler.page2Handler);
app.get("/*", requestHandler.indexHandler);
app.post("/*", requestHandler.jsonHandler);

const server = app.listen(process.env.PORT, function(){
    console.log(process.env.MESSAGE+ server.address().port);
});

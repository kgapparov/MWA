require("dotenv").config();
require("./api/data/db");
const express = require("express");
const route = require("./api/route/route");

const app = express();


app.use(function(req, res, next) {
    console.log(req.method, req.url);
    next();
})

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:4200");
  //res.header("Access-Control-Allow-Origin", "Origin, X-Requested-With, Content-type, Accept");
  res.header("Access-Control-Allow-Methods", "POST, GET, DELETE, PUT, PATCH");
  next(); 
})

app.use("/api", route);

const server = app.listen(process.env.PORT, function() {
    console.log(process.env.LISTEN_MESSAGE, server.address().port);
})
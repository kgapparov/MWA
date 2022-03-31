const express = require("express");
const app = express();
const router = require("./routes/index");
const path = require("path");
require("dotenv").config();

app.use(function(req, res, next){
    console.log(req.method, req.url);
    next();
})

app.use("/api", router);

app.use(express.static(path.join(__dirname , "public")));

const server = app.listen(process.env.PORT, function(){
    console.log("Server started at port " + server.address().port);
})
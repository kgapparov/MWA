const express = require("express");
const app = express();
const path = require("path");
const { nextTick } = require("process");
require("dotenv").config();

const router = require("./routes");
/**
 * 1. order matters
 * 2. nonterminating and terminating middlewares  
 * 3. nonterminating middlewares should be on top terminating on bottom 
 */
app.use("/public", function(req, res, next) {
    console.log(req.url, req.mehtod);
    next();
})

app.use("/public", express.static(path.join(__dirname, "public")));

app.use("/api", router);

app.get("/", function(req, res) {
    res.status(200).sendFile(path.join(__dirname, "public/index.html"));
})

const server = app.listen(process.env.PORT, function(){
    console.log(process.env.MESSAGE+ server.address().port);
});
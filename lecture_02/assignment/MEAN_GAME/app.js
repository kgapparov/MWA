const express = require("express");
const app = express();
const path = require("path");

app.use("/public", express.static(path.join(__dirname, "public")));

app.get("/", function(req, res) {
    res.status(200).sendFile(path.join(__dirname, "public/index.html"));
})

const server = app.listen(3000, function (){
    console.log("asdf");
})
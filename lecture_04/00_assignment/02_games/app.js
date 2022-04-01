require("dotenv").config();
require("./data/databaseconnection").open();
const routes = require("./routes/routes");
const express = require("express");
const { application } = require("express");
const app = express();

//logg all connections 
app.use(function (req, res, next) {
    console.log(req.method, req.url);
    next();
})

app.use(express.urlencoded({extended : true}));
app.use(express.json({type : "application/*+json"}));

app.use("/api", routes);

const server = app.listen(process.env.PORT, function(){
    console.log("Started to listen on port ", server.address().port);
})
const express = require("express");
require("dotenv").config();
const app = express();

const server = app.listen(process.env.PORT, function(){
    console.log("server started on port", server.address().port);
})
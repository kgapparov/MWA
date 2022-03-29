const express = require("express");

require("dotenv").config();

const app = express();


const server = app.listen(process.env.PORT, function(){
    console.log(process.env.LISTEN_TO_PORT_MSG+ server.address().port);
});

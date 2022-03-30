const express = require("express");

const route = express.Router();



route.route("/json")
    .get(function(req, res) {
        res.status(200).json("{'JSON Data':'GET'}");
    })
    .post(function(req, res) {
        res.status(200).json("{'JSON': 'POST'}");
    })

    module.exports=route; 
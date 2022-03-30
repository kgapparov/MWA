const express = require("express");

const route = express.Router();

const gamesController = require("../controllers/games.controllers")


route.route("/games")
    .get(gamesController.getAll)
    .post(function(req, res) {
        res.status(200).json("{'JSON': 'POST'}");
    })

    module.exports=route; 
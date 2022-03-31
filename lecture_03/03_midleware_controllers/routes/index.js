const express = require("express");

const route = express.Router();

const gamesController = require("../controllers/games.controllers")


route.route("/games")
    .get(gamesController.getAll)
    
    module.exports=route; 
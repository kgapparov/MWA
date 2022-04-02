const mongoose = require("mongoose");
require("dotenv").config();
const Game = mongoose.model(process.env.GAME_MODEL);

module.exports.getAll = function (req, res){
    let offset = 0; 
    let count = 5; 
    if (req.query && req.query.offset) {
        offset = parseInt(req.query.offset, 10);
    }
    if (req.query && req.query.count) {
        count = parseInt(req.query.count);
    }
    Game.find().skip(offset).limit(count).exec(function(err, games) {
        console.log("Found games", games.length);
        res.json(games);
    })
}


module.exports.getOne = function (req, res){
    const gameID = req.params.gameID;
    Game.findById(gameID).exec(function(err, game) {
        console.log("Found game", game);
        res.json(game);
    })
}
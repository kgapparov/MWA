const mongoose = require("mongoose")

const Game = mongoose.model(process.env.GAME_MODEL);


module.exports.getOne = function (req, res){
    const gameID = req.params.gameID;
    Game.findById(gameID).select("publisher").exec(function(err, game) {
        console.log("Found publisher", game.publisher, "for Game", game);
        res.status(200).json(game.publisher);
    })
}
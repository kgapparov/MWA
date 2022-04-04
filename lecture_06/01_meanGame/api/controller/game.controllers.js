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

module.exports.fullUpdateOne = function(req, res) {
    console.log("full update one game controller");
    const response = {
        status: 200,
        message : {}
    }
    const gameID = req.params.gameID;
    if (gameID) {
        Game.find(gameID).exec(function(err, game){
            if (game) {
                console.log("Find game");
                /**
                 * const gameSchema = mongoose.Schema({
    title: 
    {
        type: String,
        required: true
    }, 
    year : Number,
    rate: 
    {
        type: Number,
        min: 1,
        max: 5
    },
    price: Number,
    minPlayers: 
    {
        type: Number,
        min: 1, 
        max: 10
    },
    maxPlayers: 
    {
        type: Number,
        min: 1, 
        max: 10
    },
    minAge: Number,
    designers: [String],
    reviews : [reviewSchema], 
    publisher: publisherSchema
});

                 */
                game.title = req.body.title; 
                game.year = req.body.year; 
                game.rage = req.body.rate;
                game.price = req.body.price;
                game.minPlayers = req.body.minPlayers; 
                game.maxPlayers = req.body.maxPlayers; 
                game.minAge = req.body.minAge;
                game.publisher = req.body.publisher; 
                game.designers = [req.body.designers]; 
                game.save(function(err, savedGame) {
                    if (err) {
                        console.log("Error reading Games");
                        res.status(500).json(err);
                    } else {
                        console.log("Game updated");
                        res.status(200).json(savedGame);
                    }
                })
            }
        })
    }
}
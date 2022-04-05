const mongoose = require("mongoose");
require("dotenv").config();
const Game = mongoose.model(process.env.GAME_MODEL);

module.exports.getAll = function (req, res)
{
    const response = 
    {
        status: 200, 
        message : {}
    }
    let offset =  req.query.offset || 0; 
    let count = req.query.count || 5; 
    if (count > 10) 
    {
        response["status"] = 400
        response['message'] = {message : "count out of range, should be less than 10 and more than 0"};
    } 
    else 
        Game.find().skip(offset).limit(count).exec((err, games) => getCallback(err, games, res, response, "Games found :", 200));
    if (response["status"] != 200)
        res.status(response["status"]).json(response["message"]);
}


module.exports.getOne = function (req, res){
    const response = 
    {
        status: 200, 
        message : {}
    }
    const gameID = req.params.gameID;
    if (!mongoose.isValidObjectId(gameID)) 
    {
        response["status"] = 404; 
        response["message"] = {message : "Inalid gameID format"};
    } else {
        Game.findById(gameID).exec((err, games) => getCallback(err, games, res, response, "Game founded : ", 200));
    }
    if (response["status"] != 200) {
        res.status(response.status).json(response.message);
    }
}

module.exports.insertOne = function(req, res) {
    const response = 
    {
        status: 201, 
        message : {}
    }
    if (req.body && req.body.title) {
        let newGame = {
            title : req.body.title
        }
        if (req.body.year) {
            newGame["year"] = req.body.year;
        }
        if (req.body.rate) {
            newGame["rate"] = req.body.rate;
        }
        if (req.body.price) {
            newGame["price"] = req.body.price; 
        }
        if (req.body.minPlayers) {
            newGame["minPlayers"] = req.body.minPlayers; 
        }
        if (req.body.maxPlayers) {
            newGame["maxPlayers"] = req.body.maxPlayers; 
        }
        if (req.body.minAge) {
            newGame["minAge"] = req.body.minAge; 
        }
        if (req.body.designers) {
            newGame["designers"] = req.body.designers; 
        }
        if (req.body.reviews) {
            newGame["reviews"] = req.body.reviews; 
        }
        if (req.body.publisher) {
            newGame["publisher"] = req.body.publisher;
        }
        Game.insertOne(newGame).exec((err, game) => getCallback(err, game, res, response, "Game added : ", 201));
    } else {
        response["status"] = 404;
        response["message"] = {message : "Not all required fields provieded."}
    } 
    if (response["status"] != 201) {
        res.status(response["status"]).json(response["message"]);
    }
}

const getCallback = function (err, games, res, response, logString, statusCode) {
    if (err) 
    {
        response["status"] = 500
        response['message'] = {message : "Couldn't read data from db : " + err};
    } 
    else 
    {
        console.log( logString , (games.length || games));
        response.status = statusCode;
        response.message = games;
        res.status(response.status).json(response.message);
    }
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
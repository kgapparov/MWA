const req = require("express/lib/request");
const mongoose = require("mongoose");
const utils = require("./utils");
const callbackAndValidation = require("./callbacksAndValidations");
const Game = mongoose.model(process.env.GAME_MODEL);


module.exports.getOne = function (req, res){
    const gameID = req.params.gameID;
    const response  = { status : 400 , message: {}};
    if (callbackAndValidation.checkID(gameID, response)) {
        Game.findById(gameID).select("publisher")
        .then(game => utils.onSuccessMessageHandler(response, process.env.SECCESS_STATUS, game.publisher))
        .catch(err => utils.onErrorMessageHandler(response, process.env.INTERNAL_ERROR, err))
        .finally(()=> utils.responseRequest(response, res));
    } 
    
}

module.exports.addOne = function (req, res){
    const gameID = req.params.gameID;
    const response  = { status : 400 , message: {}};
    if (callbackAndValidation.checkID(gameID, response)) {
        Game.findById(gameID).select("publisher")
        .then(game=> addOnePublisherCallback (game, req, response))
        .then(utils.onSuccessMessageHandler(response, process.env.SUCCESSFULL_CREATED_STATUS, "Publisher addes successfully"))
        .catch(err => utils.onErrorMessageHandler(response, process.env.INTERNAL_ERROR, err))
        .finally(()=> utils.responseRequest(response, res))
    }
}

module.exports.fullUpdateOne = function (req, res){
    const gameID = req.params.gameID;
    const response  = { status : 400 , message: {}};
    if (callbackAndValidation.checkID(gameID, response)) {
        Game.findById(gameID).select("publisher")
        .then(game=> addOnePublisherCallback (game, req, response))
        .then(utils.onSuccessMessageHandler(response, process.env.SUCCESSFULL_CREATED_STATUS, "Publisher updated successfully"))
        .catch(err => utils.onErrorMessageHandler(response, process.env.INTERNAL_ERROR, err))
        .finally(()=> utils.responseRequest(response, res))
    }
}

module.exports.partialUpdateOne = function (req, res){
    const gameID = req.params.gameID;
    const response  = { status : 400 , message: {}};
    if (callbackAndValidation.checkID(gameID, response)) {
        Game.findById(gameID).select("publisher")
        .then(game=> partialUpdatePublisherCallback (game, req, response))
        .then(utils.onSuccessMessageHandler(response, process.env.SUCCESSFULL_CREATED_STATUS, "Publisher updated successfully"))
        .catch(err => utils.onErrorMessageHandler(response, process.env.INTERNAL_ERROR, err))
        .finally(()=> utils.responseRequest(response, res))
    }
}

module.exports.deleteOne = function (req, res){
    const gameID = req.params.gameID;
    const response  = { status : 400 , message: {}};
    if (callbackAndValidation.checkID(gameID, response)) {
        Game.findById(gameID).select("publisher")
        .then(()=> utils.onSuccessMessageHandler(response, process.env.SUCCESSFULL_CREATED_STATUS, "Succsesfully deleted"))
        .catch((err) => utils.onErrorMessageHandler(response, process.env.INTERNAL_ERROR, err))
        .finally(()=> utils.responseRequest(response, res));
    }
}

const addOnePublisherCallback = function( game, req, response) {
    let  newPublisher; 
    if (!req.body || ! req.body.name) {
        response["status"] = 400;
        response["message"] = "not all required fields provided"
    }
    if (req.body && req.body.name) {
        newPublisher  = {name : req.body.name};
        if (req.body.country)
            newPublisher["country"] = req.body.country
        if (req.body.established) 
            newPublisher["established"] = req.body.established;

        game.publisher = newPublisher;
    }
    game.save();
}


const partialUpdatePublisherCallback = function(game, req, response) {
    let newPublisher = game.publisher; 
    if (!req.body ) {
        response["status"] = 400;
        response["message"] = "not all required fields provided"
    }
    if (req.body) {
        newPublisher.name = req.body.name || newPublisher.name;
        newPublisher.country = req.body.country || newPublisher.country;
        newPublisher.established = req.body.established || newPublisher.established;
        newPublisher.location = req.body.location || newPublisher.location;
    }
    game.save(); 
}
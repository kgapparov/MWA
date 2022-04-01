const { ObjectId } = require("mongodb");
const db_connection = require("../data/databaseconnection");
require("dotenv").config();
module.exports.getAll = function (req, res) {
    let offset = req.query.offset ? parseInt(req.query.offset) : 0;
    let count = req.query.count ? parseInt(req.query.count) : 3;
    
    if (count > 10) count = 10; 

    const db = db_connection.get();
    db.collection(process.env.COLLECTION_NAME).find().skip(offset).limit(count).toArray(function(err, docs){
        if (err) {
            console.log(err);
            res.status(500);
            return;
        }
        console.log("found games", docs);
        res.status(200).json(docs);
    })
}


module.exports.addGame = function(req, res) {
    const db = db_connection.get();
    const newGame = {};
    console.log(req.query.title);
    if (req.query.title && req.query.price && req.query.minPlayerNumber && req.query.minAge) {
        newGame.title = req.query.title;
        newGame.price = parseFloat(req.query.price);
        newGame.minPlayerNumber = parseInt(req.query.minPlayerNumber);
        console.log(newGame.minPlayerNumber);
        if (newGame.minPlayerNumber < 1 || newGame.minPlayerNumber > 11) {
            res.status(400).send("range of minimum players  out of range 1< minRange > 11");
            return;
        }
        newGame.minAge = parseInt(req.query.minAge);
        if (newGame.minAge < 6 || newGame.minAge > 99) {
            res.status(400).send("range of minimum Age  out of range 6< minRange > 99");
            return;
        }
        db.collection(process.env.COLLECTION_NAME).insertOne(newGame);
        res.status(200).json(newGame);
        
    } else {
        res.status(400).send("Not all parameters exists in body");
        return;
    }
    
}

module.exports.deleteOne = function(req, res) {
    const db = db_connection.get();
    console.log("Delete method is perfoming");
    console.log(req.params.gameID);
    db.collection(process.env.COLLECTION_NAME).deleteOne({_id: ObjectId(req.params.gameID)}, function (err, game) {
        if (err) {
            console.log(err);
            res.status(400); 
            return;
        } else {
            console.log("game is deleted" , game);
            res.status(201).json(game);
        }
    })
}


module.exports.getOne = function(req, res) {
    const db = db_connection.get();
    console.log("Delete method is perfoming");
    if (req.params.gameID) {
        
        db.collection(process.env.COLLECTION_NAME).findOne({_id: ObjectId(req.params.gameID)}, function (err, game) {
            if (err) {
                console.log(err);
                res.status(400); 
                return;
            } else {
                console.log("game is deleted" , game);
                res.status(201).json(game);
            }
        })
    } else {
        console.log("Not included game id");
        res.status(400); 
        return;
    }
}

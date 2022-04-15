const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const utils = require("./utils");
const { response } = require("express");

module.exports.blank = function(req, res) {
    console.log(req.method, req.url);
    res.status(200).json("this is blank page");
}

module.exports.addUserOne = function(req, res) {
    const User = mongoose.model(process.env.USER_MODEL);

    const response = {
        status: 201, 
        message: {message: "init"}
    }
    if (utils.checkIfParamsExists(req, "username", "name", "password")) {
        _genSaltPromise(parseInt(process.env.BCRYPT_SALT_ROUNDS) || 10)
        .then((salt) => _hashPromise(req.body["password"], salt))
        .then((hash) => {
            const newUser = {
                username: req.body.username, 
                name: req.body.name, 
                password: hash
            }
            User.create(newUser)
        }) 
        .then((result) => utils.onSuccessMessageHandler(response, process.env.SUCCESSFULL_CREATED_STATUS, result))
        .catch((err)=> utils.onErrorMessageHandler(response, process.env.INTERNAL_ERROR, err))
        .finally(()=> utils.responseRequest(response, res));
    } else {
        res.status(process.env.INVALID_PARAMETER).json({message: process.env.INVALID_PARAMETER_MSG})
    }
}



const _genSaltPromise = function(round) {
    return new Promise((resolve, reject) => {
        bcrypt.genSalt(round, (err, salt) => {
            if (err) {
                console.log("salt generation function error")
                reject(err)
            } else {
                resolve (salt);
            }
        });
    });
}

const _hashPromise = function (password, salt) {
    return new Promise((resolve, reject) => {
        console.log(password);
        bcrypt.hash(password, salt, (err, hash) => {
            if (err) {
                console.log("hash generation function error")
                reject(err)
            } else {
                console.log("hash", hash);
                resolve(hash)
            }
        })
    })
}

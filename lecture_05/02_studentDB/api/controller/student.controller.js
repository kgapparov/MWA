require("dotenv").config();
require("../data/db");
const mongoose = require("mongoose");
const Students = mongoose.model(process.env.STUDENT_MODEL);

module.exports.getAll = function (req, res) {
    let offset = 0; 
    let count = 5; 
    if (req.query && req.query.offset) {
        offset = parseInt(req.query.offset, 10);
    }
    if (req.query && req.query.count) {
        count = parseInt(req.query.count);
    }
    Students.find().skip(offset).limit(count).exec(function (error, studnets){
        console.log("found students", studnets.length);
        res.json(studnets);
    })
}

module.exports.getOne = function (req, res) {
    const studentID = req.params.studentID; 

    if (studentID) {
        Students.findById(studentID).exec(function(err, student){
            if (err) {
                console.log("student no found");
                res.status(404);
            }
            console.log("found student", student);
            res.status(200).json(student);
        })
    } else {
        console.log("id is empty");
        res.status(400).json({message: 'No student ID'});
    }  
}
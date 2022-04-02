require("dotenv").config();
require("../data/db");
const mongoose = require("mongoose");
const Students = mongoose.model(process.env.STUDENT_MODEL);

module.exports.getAll = function (req, res) {
    console.log("Get all courses perfomed ");
    const studentID = req.params.studentID; 

    if (studentID) {
        Students.findById(studentID).select("courses").exec(function (err, courses){
            if (err) {
                console.log("student no found");
                res.status(404);
            }
            console.log("found courses", courses.length);
            res.status(200).json(courses);
        })
    } else {
        console.log("id is empty");
        res.status(400).json({message: 'No student ID'});
    }  
}

module.exports.getOne = function (req, res) {
    const studentID = req.params.studentID; 
    const courseID = req.params.courseID;
    console.log("courseid", courseID);
    if (studentID) {
        Students.findById(studentID).select("courses").exec(function (err, courses){
            if (err) {
                console.log("student no found");
                res.status(404);
            }
            console.log("found courses", courses[courseID]);
            res.status(200).json(courses[courseID]);
        })
    } else {
        console.log("id is empty");
        res.status(400).json({message: 'No student ID'});
    }  
}
require("dotenv").config();
const mongoose = require("mongoose");

const Courses = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    gpa : Number
});

const Student = mongoose.Schema({
    name: {
        type: String,
        required: true
    }, 
    gpa: Number,
    courses: [Courses]
});

mongoose.model(process.env.STUDENT_MODEL, Student, process.env.STUDENT_COLLECTION);

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Student = void 0;
var Student = /** @class */ (function () {
    function Student(id, name, gpa) {
        this.id = id;
        this.name = name;
        this.gpa = gpa;
    }
    Student.prototype.setGpa = function (gpa) {
        this.gpa = gpa;
    };
    Student.prototype.getGpa = function () { return this.gpa; };
    ;
    Student.prototype.getName = function () { return this.name; };
    Student.prototype.setName = function (name) { this.name = name; };
    return Student;
}());
exports.Student = Student;
var jack = new Student(1, "Jack", 3.0);
console.log(jack);

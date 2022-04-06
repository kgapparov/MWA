"use strict";
exports.__esModule = true;
exports.Toker = void 0;
function Toker(course, canProgram) {
    return function (constructor) {
        constructor.prototype.course = course;
        if (canProgram) {
            constructor.prototype.program = function () {
                console.log("I am programming");
            };
        }
    };
}
exports.Toker = Toker;

export function Toker(course: string, canProgram: boolean) {
    return function (constructor){
        constructor.prototype.course = course;
        if (canProgram) {
            constructor.prototype.program = function () {
                console.log ("I am programming");
            }
        }
    }
}
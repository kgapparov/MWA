class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    draw() {
        console.log("Drawing x ", this.x, " and y ", this.y);
    }
    get X() { return this.x; }
    ;
    set X(value) {
        if (value < 0)
            throw new Error("value cannot be less than zero");
        this.x = 10;
    }
}
let p = new Point(1, 2);
p.X = 10;
let a = p.X;
p.draw();
console.log(p.X, a);

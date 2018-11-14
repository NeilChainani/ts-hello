"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Point {
    constructor(_x, _y) {
        this._x = _x;
        this._y = _y;
    }
    draw() {
        console.log(`x: ${this._x} y: ${this._y}`);
    }
    get x() {
        return this._x;
    }
    set x(value) {
        if (value < 0)
            throw new Error("value vannot be less than 0");
        this._x = value;
    }
    getDistance(another) { }
}
exports.Point = Point;
//# sourceMappingURL=point.js.map
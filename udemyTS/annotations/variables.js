var apples = 5;
apples = 'hello';
apples = 10;
var speed = 'fast';
var hasName = true;
var nothingMuch = null;
var nothing = undefined;
// Built-in objects
var now = new Date();
// Array
var colors = ['red', 'green', 'blue'];
var myNumbers = [1, 2, 3];
var truths = [true, true, false];
// Classes
var Car = /** @class */ (function () {
    function Car() {
    }
    return Car;
}());
var car = new Car();
// Object literal
var point = {
    x: true,
    y: 20
};
// Function // With a function, you can type the argument and type the return value before the actual function declaration
var logNumber = function (i) {
    console.log(i);
};
// When to use annotations
// 1) Function that returns the 'any' type
var json = '{"x": 10, "y": 20}';
var coordinates = JSON.parse(json);
console.log(coordinates);

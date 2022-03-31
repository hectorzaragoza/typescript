var today = new Date();
// TS will autocomplete properties and methods belonging to the type
today.getMonth();
// Throw an error when you try and call something that doesn't belong to that type
today.askd;
var person = {
    age: 20
};
person.asdf;
person.age;
var Color = /** @class */ (function () {
    function Color() {
    }
    return Color;
}());
var red = new Color();
red.hue;
red.asdf;

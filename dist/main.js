var hello = "world"; // We can use var, let and const in TS just as in JS
hello = "foo"; // in TS, constants are really constants. In this case, hello is of type "world"
// If we define a variable with let, the type of hello would be string because we are allowing it to be reassigned.
var goodbye = "world"; // Type of goodbye is string and not "world"
goodbye = "hello"; // No error here
// You can't assign a value of a different type to a variable that has another type.
// FUNCTIONS
var getFullName = function (name, surname) {
    // Arrow functions work the same as in JS
    return name + surname;
};
console.log(getFullName("Hector", "Zaragoza")); // We want to write our functions safer, by this we mean specifying data types
// TS won't let us pass in anything other than strings because of the data type specification.
// You can also specify the type that a function will return.
// * It's SAFER TO SPECIFY TYPES because of the enforcement rules.
// INTERFACES
// Creating objects
var user = {
    name: "Hector",
    age: 34
};
// TS out of the box can understand our objects and read our properties and infer types.
var user2 = {
    name: "Jack"
};
var playerOne = {
    name: "Hector",
    age: 34,
    getMessage: function () {
        return "hello" + name;
    }
};
// By default, all properties defined in an interface are mandatory. But, you can add a "?" after the name and before the colon to make it optional.
// Interfaces give us the best autocomplete, when you want to access a property, it will list those available associated with that particular interface
console.log(playerOne.getMessage());
// Name your interfaces something different than classes
// Prefix your interfaces with I
// Suffix interface name with Interface
// TYPES AND UNIONS

const hello = "world" // We can use var, let and const in TS just as in JS
hello = "foo" // in TS, constants are really constants. In this case, hello is of type "world"

// If we define a variable with let, the type of hello would be string because we are allowing it to be reassigned.

let goodbye = "world" // Type of goodbye is string and not "world"
goodbye = "hello" // No error here

// You can't assign a value of a different type to a variable that has another type.

// FUNCTIONS
const getFullName = (name: string, surname: string): string => {
    // Arrow functions work the same as in JS
    return name + surname
}

console.log(getFullName("Hector", "Zaragoza")) // We want to write our functions safer, by this we mean specifying data types
// TS won't let us pass in anything other than strings because of the data type specification.
// You can also specify the type that a function will return.
// * It's SAFER TO SPECIFY TYPES because of the enforcement rules.

// INTERFACES
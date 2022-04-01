let apples: number = 5;
apples = 'hello'
apples = 10;

let speed: string = 'fast';
let hasName: boolean = true;
let nothingMuch: null = null;
let nothing: undefined = undefined;

// Built-in objects
let now: Date = new Date()

// Array
let colors: string[] = ['red', 'green', 'blue'];
let myNumbers: number[] = [1,2,3];
let truths: boolean[] = [true, true, false];

// Classes
class Car {

}

let car: Car = new Car();

// Object literal
let point: { x: number; y: number } = {
    x: true,
    y: 20
}

// Function // With a function, you can type the argument and type the return value before the actual function declaration
const logNumber: (i: number) => void  = (i: number) => {
    console.log(i)
};

// When to use annotations
// 1) Function that returns the 'any' type
const json = '{"x": 10, "y": 20}';
const coordinates = JSON.parse(json)
console.log(coordinates) // {x: 10, y: 20};
// JSON.parse returns values of the 'any' type because typescript cannot infer what the JSON.parse will return in terms of types
// It will be different based on what the input is for the JSON.parse...so it just defaults to "any"

// Fix the line above by typing coordinates
const coordinatesA: { x: number; y: number} = JSON.parse(json);
console.log(coordinatesA)
// Instead of showing "any" it now show sthe object literal typing.

// 2) When we declare a variable on one line and initialize it later
let words = ['red', 'green', 'blue']
// this would have type any because declaration and initialization are on separate lines
// let foundWord
// fix it by typing the declaration
let foundWord: boolean;

for(let i = 0; i < words.length; i++) {
    if(words[i] === 'green') {
        foundWord = true;
    } else {
        console.log(words[i])
    }
}

// 3) When type cannot be inferred correctly (Bad code example)
let number = [-10, -1, 12]
// following variable accepts either number or boolean and defaults to false
let numberAboveZero: number | boolean = false;

for (let i = 0; i < number.length; i++) {
    if (number[i] > 0) {
        numberAboveZero = number[i]
    }
}
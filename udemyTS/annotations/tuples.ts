// One object to represent one drink, the tuple would have properties for color, carbonation, sugar
// Key value nature of tuple is very informative given the keys describe properties of the object
const drink = {
    color: 'brown',
    carbonated: true,
    sugar: 40
}

// Alternative representation using a tuple
// The order inside of a tuple is very important
const pepsi = ['brown', true, 40];
pepsi[0] = 40;
pepsi[2] = 'brown'
// This breaks our data model

// This is a tuple representation because it enforces the types in the specific order delineated in the type declaration in the array-like structure
const pepsiA: [string, boolean, number] = ['brown', true, 40]
// To avoid having to repeat the type declaration, you can use a type alias
type Drink = [string, boolean, number]
// We can reuse this type alias to create many tuples efficiently
const pepsiB: Drink = ['green', true, 60]

// Why tuples?
const carSpecs: [number, number] = [400, 3354];
// This is clearly a tuple but we don't get any info into what these values represent because there are no keys.
// Let's rewrite this as an object
const carStats = {
    horsepower: 400,
    weight: 3354
}
// with Keys, we can see what we are describing with the values.
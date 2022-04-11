class ArrayOfNumbers {
    constructor(public collection: number[]) {}
    get(index: number): number {
        return this.collection[index]
    }
}

class ArrayOfStrings {
    constructor(public collection: string[]) {}
    get(index: number): string {
        return this.collection[index]
    }
}

// Generic class - like a function and its arguments. When you instantiate this class, you pass in the type!
class ArrayOfAnything<T> {
    constructor(public collection: T[]) {}
    get(index: number): T {
        return this.collection[index]
    }
}

new ArrayOfAnything<string>(['a', 'b', 'c'])
// Type inference, arr accepts an array of strings
const arr = new ArrayOfAnything(['a','b','1'])

// Example of generics with functions
function printStrings(arr: string[]): void {
    for(let i = 0; i < arr.length; i++) {
        console.log(arr[i])
    }
}

function printNumbers(arr: number[]): void {
    for(let i = 0; i < arr.length; i++) {
        console.log(arr[i])
    }
}

function printAnything<T>(arr: T[]): void {
    for(let i = 0; i < arr.length; i++) {
        console.log(arr[i])
    }
}

printAnything<string>(['a', 'b', 'c'])

// Generic Constraints
class Car {
    print() {
        console.log('I am a car.')
    }
}

class House {
    print() {
        console.log('I am a house.')
    }
}

interface Printable {
    print(): void
}
// Constraint, we promise that our type T will have something we define in the prop/methods
function printHousesOrCars<T extends Printable>(arr: T[]): void {
    for (let i = 0; i < arr.length; i++) {
        arr[i].print()
    }
}

printHousesOrCars([1,3,4])
printHousesOrCars<House>([new House(), new House()])
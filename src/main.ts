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
// Creating objects
const user1: {name: string; age: number} = {
    name: "Hector",
    age: 34
}
// TS out of the box can understand our objects and read our properties and infer types.
const user2: {name: string; age: number} = {
    name: "Jack",
}
// JS doesn't tell us that user2 is missing an age property
// But, we don't want to specify the properties and its type each time we create an object, so we should use Interfaces
// Interfaces in TS help us to describe entities.

interface Player {
    name: string;
    age: number;
    getMessage(): string
}

const playerOne: Player = {
    name: "Hector",
    age: 34,
    getMessage() {
        return "hello" + name;
    }
}
// By default, all properties defined in an interface are mandatory. But, you can add a "?" after the name and before the colon to make it optional.
// Interfaces give us the best autocomplete, when you want to access a property, it will list those available associated with that particular interface

console.log(playerOne.getMessage())
// Name your interfaces something different than classes
// Prefix your interfaces with I
// Suffix interface name with Interface

// TYPES AND UNIONS
// Union operator
let username: string = "alex"
// What if we want the prop to be either string or number
let pageName: string | number = "1"
// The pipe is called a union
let errorMessage: string | null = null
// Common use of union is to start with variables at null

// TYPE ALIASES in TS
type ID = string
type PopularTag = string
type MaybePopularTag = PopularTag | null // Combining Types and Unions

interface UserInterface {
    id: ID
    name: string
    surname: string
}

const PopularTags: PopularTag[] = ['dragon', 'coffee']

const dragonsTag: MaybePopularTag = "dragon"

let user: UserInterface | null = null

let someProp: string | number | null | undefined | string[] | object // Doing this is messy

// ANY - NEVER - VOID - UNKNOWN
// VOID KEYWORD
const doSomething = (): void => {
    console.log("doSomething")
}
// If you don't return something, the function returns void! You can specify void
// Void is a set of undefined and null
// Only use void to specify that you are not returning something from a function

// ANY KEYWORD is one of the worst
// Because it basically turns off support for Types, avoid using ANY at any cost.
// Any is not a solution but the start of bigger problems.

// NEVER KEYWORD
// A function with Never cannot have a reacheable end. A function with never will never end

// Unknown KEYWORD
let vAny: any = 10
let vUnknown: unknown = 10

let s1:  string = vAny
let s2: string = vUnknown as string// We cannot assign unknown directly to other types unless you specify unknown as that type via type assertion "as"
// console.log(vAny.foo())
// console.log(vUnknown.foo())

// Type assertion - convert one type to another
let pageNumber: string = '1'
let numericPageNumber: number = (pageNumber as unknown) as number

// WORKING WITH DOM
let page: any = "1"
let pageNumber1 = page as string // Type assertion

const someElement = document.querySelector(".foo") as HTMLInputElement
// TS doesn't know anything about our markup...
console.log('someElement', someElement.value)
// Element is the highest class in the hierarchy
// Do not convert someElement to any to try and bypass errors
someElement.addEventListener('blur', (event) => {
    const target = event.target as HTMLInputElement
    console.log('event', target.value)
})
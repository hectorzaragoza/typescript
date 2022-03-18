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

// interface UserInterface {
//     id: ID
//     name: string
//     surname: string
// }

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

// CLASSES in TS
// Classes are sugar to work with prototypes

// interface UserInterface {
//     getFullname(): string
// }
class User implements UserInterface {
    firstName: string
    lastName: string
    readonly unchangeableName: string
    static readonly maxAge = 50 // STatic properties are only available on superclass and not on subclasses

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName
        this.lastName = lastName
        this.unchangeableName = firstName
    }

    changeUnchangeableName(): void {
        this.unchangeableName = "foo"
    }

    // getFullName(): string {
    //     return this.firstName + ' ' + this.lastName
    // }
}

const userClass = new User("Hector", "Zaragoza") // userClass is of type User which is a class
console.log(userClass.getFullName()) // Things are public by default in TS
// You can use public, private, protected only exists within TS...so there are no checks on runtime with JS because of the transpilation process

// You can also use the keyword READONLY

// STATIC Properties
// Class inheritance

class Admin extends User {
    private editor: string
    setEditor(editor: string): void {
        this.editor = editor
    }
    getEditor(): string {
        return this.editor
    }
}

const admin = new Admin("foo", "bar")
console.log(admin.firstName)
console.log(admin.getEditor())

// Generics in TS
const addId = <T extends object>(obj: T) => {
    const id = Math.random().toString(16)
    return {
        ...obj,
        id
    }
}

interface UserInterface<T, V> {
    name: string;
    data: T;
    meta: V;
}

const userGeneric: UserInterface<{meta: string}, string> = {
    name: "Jack",
    data: {
        meta: "foo"
    },
    meta: "bar"
}

const userTwoGeneric: UserInterface<string[]> = {
    name: "John",
    data: ["foo", "bar"]
}

const result = addId<UserInterface>(user)
console.log("result", result)
// Explicit declarations are always better
// Generics for Interfaces
// With generics, you can pass in multiple data types

// ENUMS in TS
// enumerables, 
const statuses = {
    notStarted: 0,
    inProgress: 1,
    done: 2
}

console.log(statuses.inProgress)
// using enumerables now
enum Status {
    NotStarted,
    InProgress,
    Done
}

let notStartedStatus: Status = Status.NotStarted
notStartedStatus = Status.Done
// The values of the properties in an enum start at 0 and are assigned respectively
console.log(Status.InProgress)
// We can use enum as a value and data type
// You can assign values to the enum properties for example NotStarted = "not started"
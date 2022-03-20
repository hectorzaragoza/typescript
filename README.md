# Typescript

## Tech with Tim
- Enhanced version of JS. Strict Superset of JS. It behaves like a compiled language so you catch errors at compilation instead of at runtime.
- Interchangeable with JS. TS can be transpiled into native JS.
- TS builds on top of JS by adding INTERFACES, STATIC TYPES, and GENERICS and at runtime, compiles to JS because the browser can't run TS.

- Scales better.
- in TS, you have TYPE ENFORCEMENT
- STATIC TYPING and ENFORCEMENT is important because it makes catching errors easier at compile time instead of runtime as is the case with JS.

## Typescript in 100 Seconds
- Strict, typed superset of JS that has error handling at compile time as opposed to runtime as JS does.
- TS can also infer types like JS does (JS is a dynamically typed language) or you can explicitly declare types of variables or opt out of it and have default JS behavior.
- You can define your own custom types or Interfaces (look like classes)

## Typescript vs JavaScript by Ben Awad
Pros: 
- Compiler catches error
    Smaller feedback loop
    Makes refactoring easier
- autocompletion/autoimports
- you can gradually adopt it
- more companies are adopting it

*Typing avoids type coercion of JS.
*It shows error at compile (as you code in the file)
*TS works with VS Code very well. (You can add all missing imports)
*calling functions from imports, VS CODE will tell you the types of the arguments it expects
*ctrl + space will bring up the autocomplete menu which can save you time.
*It can require less time in referencing documentation.

Cons: 
- It takes time

## What is TypeScript with Harry Wolff
- Optional Static Typing superset of JS
- Great integration with VS Code

## Learn TypeScript - Full Course for Beginners from freeCodeCamp.org
- TS is the most popular static typing extension for JS.
- Two main reasons why TS is better than JS.
    1) Errors can be catched earlier than with JS. at Compile time (in the editor or console) as oppposed to at runtime
    2) Difficult to maintain or scale JS projects (TS helps us to work with entities and properties associated with that entity(user))
- Browser can't read TS so TS needs to be transpiled to JS to run in the browser.
- You have to think more about how you architect your application by thinking about how data types interact with each other.

### How to install TypeScript tools
- install nodeJS
- install TS, because you need CLI tools to transpile TS to JS
- npm i typscript, run tsc -v to see TS command line version
- VS Code has support for TS out of the box.
- need to run tsc tsfile.ts to transpile TS to JS. TS defaults to transpiling to ES3.
- you can transpile in watch mode: tsc tsfile.ts -w
- tsconfig.json allows us to configure TS
    Can provide some parameters through CLI tools
- with this, you can structure your source files and see ("watch") the output as you develop.

# TS on CC
- When we declare a variable with an initial value, the variable can never be reassigned a value of a different data type. (Type inference)
- Type Shapes, just like the type system knows what type to expect for a typed object, we also know the shape of the objects, namely, the properties and methods they have and don't have.
    - The compiler would let us know...
- You can allow a variable to be of type "any" which would allow it to be reassigned to a value of any type.
- If you don't assign a variable a value, it will be inferred to be of type "any".
- Use type annotation to explicitly declare types
- The tsconfig.json file is always placed in the root of your project and you can customize what rules you want the TypeScript compiler to enforce. 

### TS on CC Functions
- JS on its own allows for functions to be invoked with varying argument types
- TS function parameters may be given type annotations with the same syntax as variable declarations: a colon next to the name to ensure the parameters are of the correct type.
- To indicate that a parameter is intentionally optional, we add a "?" after its name. This tells TS that the parameter is allowed to be undefined and doesn't always have to be provided.
- If a parameter is assigned a default value, TS will infer the variable type to be the same as the default value's type.

function greet(name = "Anonymous") {
    ...
}

- TS can also infer the types of values returned by functions.
- Explicit Return types
- If you want to be explicit about what type a function returns, we can add an explicit type annotcation after its closing parenthesis.

function createGreeting(name?: string): string {
    ...
}

This function takes an optional argumant of type string and return a type string

- Even when a function doesn't return anything, it's still good habit to type things. In this case, a type of void for a function that doesn't return anything.

TS supports all of JS commenting syntax including // and /* */ but TS also has an extra one, called documentation comment, especially useful for documenting functions. What does it do, what are the @params and what does it return @returns:
- documentation comments is done via 
/**
* Returns the sum of two numbers
* 
* @param x - The first input number
* @param y - The second input number
* @returns The sum of 'x' and 'y'
*/
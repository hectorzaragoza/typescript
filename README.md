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

### Type Definitions
- 
const add = (a: number, b: number): number => {
    return a + b;
}
// TS just cares about type enforcement but not about the logic implementations
// Because you typed the argument, TS infers the type of the return value, if you don't type the return value of the function,
// TS defaults to type void for the return type
// But you can also type the return explicitly which will expect a return statement

// Annotations for Anonymous functions
function divide(a: number, b: number): number {
    return a / b;
}

const multiply = function(a: number, b: number): number {
    return a * b;
}

// Void and Never (void types don't return anything, but technically they can return null and undefined)
const logger = (message: string): void => {
    console.log(message);
}

const throwError = (message: string): never => {
    if(!message) {
        throw new Error(message)
    }
    return message;
}

const todaysWeather = {
    date: new Date(),
    weather: 'sunny'
}

const logWeather = ({date, weather} : {date: Date, weather: string}): void => {
    console.log(date)
    console.log(weather)
}

logWeather(todaysWeather)
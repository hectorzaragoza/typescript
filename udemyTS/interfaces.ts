// interface Vehicle {
interface Reportable {
    // name: string
    // year: number
    // broken: boolean
    // This defines a method for an interface that returns a string
    summary(): string
}

const oldCivic = {
    name: 'civic',
    year: 2000,
    broken: true,
    summary(): string {
        return `Name: ${this.name}`
    }
}

const drink = {
    color: 'brown',
    carbonated: true,
    sugar: 40,
    summary(): string {
        return `My drink has ${this.sugar} grams of sugar.`;
    }
}

// The following does not make use of an interface so code using this set of types would not be DRY because you'd have to repeat it.
// const printVehicle = (vehicle: { name: string; year: number; broken: boolean }): void => {
// Rewrite with the following interface implementation
const printSummary = (item: Reportable): void => {
    // console.log(`Name: ${vehicle.name}`)
    // console.log(`Year: ${vehicle.year}`)
    // console.log(`Broken? ${vehicle.broken}`)
    console.log(item.summary())
}

printSummary(oldCivic)
printSummary(drink)

// An interface is like a gatekeeper.
// Let's say you have a function that does something, but you only want the function to apply to objects that satisfy a condition, the interface is what defines the criteria
// for admission to be an argument for the function.
// When you define a function, you type its parameters, if you type it as an interface, then that function will be beholden,
// to the typed properties of the interface. Any argument passed to that function that expects a type of an interface, must
// satisfy the entry requirements.
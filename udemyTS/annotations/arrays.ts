const carMakers: string[] = ['ford', 'toyota', 'chevy']
// Type annotation for an array that only contains string values
const dates = [new Date(), new Date()];

const carsByMake: string[][] = [
    ['f150'],
    ['corolla'],
    ['camaro']
];

/**
 * TS can do type inference when extracting values from an array
 * TS can prevent us from adding incompatible values to the array
 * We can get help with 'map', 'forEach', 'reduce' functions
 * Flexible - arrays can still contain multiple different types
 */

// 1)
const car = carMakers[0]
const myCar = carMakers.pop()

// 2) 
carMakers.push(100);

// 3)
carMakers.map((car: string): string => {
    return car;
    // this car has an autocomplete of properties and methods belonging to string because of the return type of string
})

// Flexible types
const importantDates: (Date | string)[] = [new Date(), 'hello'];
importantDates.push('2013-10-10');
importantDates.push(new Date());
importantDates.push(100)

// When to use Typed Arrays: any time we need to represent a collection of records with some arbitrary sort order

// Bubble Sort - Algorithm
// class Sorter {
//     constructor(public collection: number[]) {
//     }

//     sort(): void {
//         const { length } = this.collection
//         for(let i = 0; i < length; i++) {
//             for(let j = 0; j < length - i - 1; j++) {
//                 if(this.collection[j] > this.collection[j + 1]) {
//                     const leftHand = this.collection[j]
//                     this.collection[j] = this.collection[j+1];
//                     this.collection[j+1] = leftHand
//                 }
//             }
//         }
//     }
// }

// const sorter = new Sorter([10,3,-5,0])
// sorter.sort();
// console.log(sorter.collection)


// BAD Solution to adapting our code to work with strings: using type guards
class Sorter {
    constructor(public collection: number[] | string) {
    }

    sort(): void {
        const { length } = this.collection
        
        for(let i = 0; i < length; i++) {
            for(let j = 0; j < length - i - 1; j++) {
                // If collection is an array of numbers, do this.
                // This block of code only works on arrays of numbers.
                // if(typeof this.collection === 'number') {
                // The type guard above can be rewritten as
                if(this.collection instanceof Array) {
                    if(this.collection[j] > this.collection[j + 1]) {
                        const leftHand = this.collection[j]
                        this.collection[j] = this.collection[j+1];
                        this.collection[j+1] = leftHand
                    }
                // } else {
                // This code block will only work on strings.
                // The else here is inferring type string because of the union declared in the allowed parameter types
                // Explicit way
                } if(typeof this.collection === 'string') {
                    this.collection.
                }


                // If collection is a string, do this instead:
                // Logic to compare and swap characters in a string
            }
        }
    }
}

const sorter = new Sorter([10,3,-5,0])
sorter.sort();
console.log(sorter.collection)
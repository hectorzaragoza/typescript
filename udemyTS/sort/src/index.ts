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
// Remember that our implementation of bubble sort has two actions: comparison and swapping.
// class Sorter {
//     constructor(public collection: number[] | string | LinkedList) {
//     }

//     sort(): void {
//         const { length } = this.collection
        
//         for(let i = 0; i < length; i++) {
//             for(let j = 0; j < length - i - 1; j++) {
//                 // If collection is a linked list, do this.
//                 if(this.collection instanceof LinkedList) {

//                 }
//                 // If collection is an array of numbers, do this.
//                 // This block of code only works on arrays of numbers.
//                 // if(typeof this.collection === 'number') {
//                 // The type guard above can be rewritten as
//                 if(this.collection instanceof Array) {
//                     if(this.collection[j] > this.collection[j + 1]) {
//                         const leftHand = this.collection[j]
//                         this.collection[j] = this.collection[j+1];
//                         this.collection[j+1] = leftHand
//                     }
//                 // } else {
//                 // This code block will only work on strings.
//                 // The else here is inferring type string because of the union declared in the allowed parameter types
//                 // Explicit way
//                 } if(typeof this.collection === 'string') {
//                     this.collection
//                 }


//                 // If collection is a string, do this instead:
//                 // Logic to compare and swap characters in a string
//             }
//         }
//     }
// }

import { Sorter } from "./Sorter";
import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollection } from "./CharactersCollection";
import { LinkedList } from "./LinkedList";

const numbersCollection = new NumbersCollection([100, 23, -34, 233324]) 
const charactersCollection = new CharactersCollection('Hector Zaragoza')
const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(4);
// // const lLsorter = new Sorter(linkedList)
// lLsorter.sort()
// linkedList.print()
// // const sorter = new Sorter(numbersCollection)
// // const stringSorter = new Sorter(charactersCollection)
// sorter.sort();
// stringSorter.sort()
// console.log(numbersCollection.data)
// console.log(charactersCollection.data)
numbersCollection.sort()
console.log(numbersCollection.data)
charactersCollection.sort()
console.log(charactersCollection.data)
linkedList.sort()
linkedList.print()
"use strict";
// Bubble Sort - Algorithm
// class Sorter {
//     constructor(public collection: number[]) {
//     }
Object.defineProperty(exports, "__esModule", { value: true });
const NumbersCollection_1 = require("./NumbersCollection");
const CharactersCollection_1 = require("./CharactersCollection");
const LinkedList_1 = require("./LinkedList");
const numbersCollection = new NumbersCollection_1.NumbersCollection([100, 23, -34, 233324]);
const charactersCollection = new CharactersCollection_1.CharactersCollection('Hector Zaragoza');
const linkedList = new LinkedList_1.LinkedList();
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
numbersCollection.sort();
console.log(numbersCollection.data);
charactersCollection.sort();
console.log(charactersCollection.data);
linkedList.sort();
linkedList.print();

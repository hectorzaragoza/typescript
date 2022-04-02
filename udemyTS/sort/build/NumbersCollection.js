"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NumbersCollection = void 0;
const Sorter_1 = require("./Sorter");
class NumbersCollection extends Sorter_1.Sorter {
    constructor(data) {
        super();
        this.data = data;
    }
    // To know the number of iterations we need to do, get the length of the data
    // length(): number {
    //     return this.data.length;
    // }
    // Instead of creating a length method, we can use a get method.
    // By adding the get keyword, we can treat the length method on NumberCollection class as a property instead of a function call
    // So, we could do instanceOfNumbersCollection.length instead of length()
    get length() {
        return this.data.length;
    }
    compare(leftIndex, rightIndex) {
        return this.data[leftIndex] > this.data[rightIndex];
    }
    swap(leftIndex, rightIndex) {
        const leftHand = this.data[leftIndex];
        this.data[leftIndex] = this.data[rightIndex];
        this.data[rightIndex] = leftHand;
    }
}
exports.NumbersCollection = NumbersCollection;

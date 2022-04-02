import { Sortable } from "./Sorter";
import { Sorter } from "./Sorter";

export class NumbersCollection extends Sorter {
    constructor(public data: number[]) {
        super()
    }

    // To know the number of iterations we need to do, get the length of the data
    // length(): number {
    //     return this.data.length;
    // }
    // Instead of creating a length method, we can use a get method.
    // By adding the get keyword, we can treat the length method on NumberCollection class as a property instead of a function call
    // So, we could do instanceOfNumbersCollection.length instead of length()
    get length(): number {
        return this.data.length
    }

    compare(leftIndex: number, rightIndex: number): boolean {
        return this.data[leftIndex] > this.data[rightIndex]
    }

    swap(leftIndex: number, rightIndex: number): void {
        const leftHand = this.data[leftIndex];
        this.data[leftIndex] = this.data[rightIndex];
        this.data[rightIndex] = leftHand;
    }
}
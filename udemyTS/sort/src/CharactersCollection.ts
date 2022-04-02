import { Sorter } from "./Sorter";

export class CharactersCollection extends Sorter {
    constructor(public data: string) {
        super()
    }

    get length(): number {
        return this.data.length
    }

    compare(leftIndex: number, rightIndex: number): boolean {
        return this.data[leftIndex].toLowerCase() > this.data[rightIndex].toLowerCase();
    }

    swap(leftIndex:number, rightIndex: number): void {
        // You could turn a string into an array of character elements to do a similar thing as in working with numbers
        const characters = this.data.split('')
        const leftHand = characters[leftIndex]
        characters[leftIndex] = characters[rightIndex]
        characters[rightIndex] = leftHand

        this.data = characters.join('')
    }    
}
// import { NumbersCollection } from "./NumbersCollection";
// We need instructions for classes to determine their eligibility to be used as arguments in the sort method.

// Because of the abstract class, we no longer need the interface.
// export interface Sortable {
//     length: number;
//     compare(leftIndex: number, rightIndex: number): boolean;
//     swap(leftIndex: number, rightIndex: number): void;
// }

export abstract class Sorter {
    // Define an abstract class and declare properties and methods that will eventually be fulfilled by the child classes that extend this class
    abstract compare(leftIndex: number, rightIndex: number): boolean
    abstract swap(leftIndex:number, rightIndex: number): void
    abstract length: number

    sort(): void {
        const { length } = this
        
        for(let i = 0; i < length; i++) {
            for(let j = 0; j < length - i - 1; j++) {
                if(this.compare(j, j + 1)) {
                    this.swap(j, j + 1)
                }
            }
        }
    }
}
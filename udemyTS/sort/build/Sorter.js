"use strict";
// import { NumbersCollection } from "./NumbersCollection";
// We need instructions for classes to determine their eligibility to be used as arguments in the sort method.
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sorter = void 0;
// Because of the abstract class, we no longer need the interface.
// export interface Sortable {
//     length: number;
//     compare(leftIndex: number, rightIndex: number): boolean;
//     swap(leftIndex: number, rightIndex: number): void;
// }
class Sorter {
    sort() {
        const { length } = this;
        for (let i = 0; i < length; i++) {
            for (let j = 0; j < length - i - 1; j++) {
                if (this.compare(j, j + 1)) {
                    this.swap(j, j + 1);
                }
            }
        }
    }
}
exports.Sorter = Sorter;

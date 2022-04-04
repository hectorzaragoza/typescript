"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CsvFileReader = void 0;
const fs_1 = __importDefault(require("fs"));
class CsvFileReader {
    constructor(filename) {
        this.filename = filename;
        this.data = [];
    }
    read() {
        this.data = fs_1.default.readFileSync(this.filename, {
            // The following line returns a string representing the content of the csv.
            encoding: 'utf-8'
            // Clean string: create two dimensional array where each nested array contains one match
        })
            .split('\n')
            .map((row) => {
            return row.split(',');
        })
            .map(this.mapRow);
    }
}
exports.CsvFileReader = CsvFileReader;

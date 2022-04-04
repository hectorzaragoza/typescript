import fs from 'fs'
import { dateStringToDate } from './utils'
import { MatchResult } from './MatchResult';

type MatchData = [
    Date,
    string,
    string,
    number,
    number,
    MatchResult,
    string
]

export class CsvFileReader {
    constructor(public filename:string) {}
    
    data: MatchData[] = [];

    read(): void {
        this.data = fs.readFileSync(this.filename, {
            // The following line returns a string representing the content of the csv.
            encoding: 'utf-8'
            // Clean string: create two dimensional array where each nested array contains one match
        })
        .split('\n')
        .map((row: string): string[] => {
            return row.split(',');
        })
        .map((row: string[]): MatchData => {
            return [
                dateStringToDate(row[0]),
                row[1],
                row[2],
                parseInt(row[3]),
                parseInt(row[4]),
                row[5] as MatchResult, // Through type assertion, TS will now know that the value of row[5] is either 'H', 'A', or 'D'.
                row[6]
            ]
        })
    }
}
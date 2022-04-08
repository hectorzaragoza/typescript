import fs from 'fs'

export class CsvFileReader {
    constructor(public filename:string) {}
    
    data: string[][] = [];

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
    }
}
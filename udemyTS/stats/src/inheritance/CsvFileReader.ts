import fs from 'fs'

export abstract class CsvFileReader<T> {
    constructor(public filename:string) {}
    abstract mapRow(row: string[]): T;
    
    data: T[] = [];

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
        .map(this.mapRow)
    }
}
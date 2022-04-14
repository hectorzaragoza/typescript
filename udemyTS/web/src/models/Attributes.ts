
export class Attributes<T> {
    constructor(private data: T) {}
    get(propName: string): string | number {
        return this.data[propName]
    }
    set(update: T): void {
        //update property values map to datas and will override them using Object.assign.
        Object.assign(this.data, update)
    }
}
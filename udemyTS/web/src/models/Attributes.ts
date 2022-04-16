export class Attributes<T> {
    constructor(private data: T) {}
    // You can only call get with a key of T
    get<K extends keyof T>(key: K): T[K] {
        return this.data[key]
    }
    set(update: T): void {
        //update property values map to datas and will override them using Object.assign.
        Object.assign(this.data, update)
    }
}


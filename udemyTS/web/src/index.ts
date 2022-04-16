import { User } from "./models/User";

const user = new User({name: 'new record', age: 0});

// A quick reminder on accessors
class Person {
    constructor(public firstName: string, public lastName: string) {}
    // get allows us to use a method on this class as a property rather than a method. So, no need for () when calling that property(method)
    get fullName(): string {
        return `${this.firstName} ${this.lastName}`
    }
}
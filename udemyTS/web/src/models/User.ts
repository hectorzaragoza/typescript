import axios, { AxiosResponse } from "axios"

interface UserProps {
    id?: number
    name?: string
    age?: number
}

// Type alias, empty function that has no arguments and no return value (Type annotation for a function)
type Callback = () => void

export class User {
    constructor(private data: UserProps) {}
    events: {[key: string]: Callback[]} = {}
    get(propName: string): string | number {
        return this.data[propName]
    }
    set(update: UserProps): void {
        //update property values map to datas and will override them using Object.assign.
        Object.assign(this.data, update)
    }
    // This is how you indicate that the type is a function that takes no argument and returns no value
    on(eventName: string, callback: Callback): void {
        const handlers = this.events[eventName] || []
        handlers.push(callback)
        this.events[eventName] = handlers
    }
    trigger(eventName: string): void {
        const handlers = this.events[eventName]
        if(!handlers || handlers.length === 0) return
        handlers.forEach(callback => {
            callback();
        })
    }

    fetch(): void {
        axios.get(`http://localhost:3000/users/${this.get('id')}}`)
            .then((response: AxiosResponse): void => {
                this.set(response.data)
            })
            .catch(err => {console.log(err)})
    }
    save(): void {
        const id = this.get('id')
        if(id) {
            axios.put(`http://localhost:3000/users/${id}`, this.data)
        }
        axios.post(`http://localhost:3000/users/`, this.data)
    }
}
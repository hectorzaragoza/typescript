import axios, { AxiosResponse } from "axios"

interface UserProps {
    id?: number
    name?: string
    age?: number
}



export class User {
    constructor(private data: UserProps) {}
    
    get(propName: string): string | number {
        return this.data[propName]
    }
    set(update: UserProps): void {
        //update property values map to datas and will override them using Object.assign.
        Object.assign(this.data, update)
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
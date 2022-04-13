import { Eventing } from './Eventing'
import { Sync } from './Sync'

export interface UserProps {
    id?: number
    name?: string
    age?: number
}

const rootUrl = 'http://localhost:3000/users'

export class User {
    constructor(private data: UserProps) {}

    public events: Eventing = new Eventing()
    public sync: Sync<UserProps> = new Sync<UserProps>(rootUrl);
    
    get(propName: string): string | number {
        return this.data[propName]
    }
    set(update: UserProps): void {
        //update property values map to datas and will override them using Object.assign.
        Object.assign(this.data, update)
    }

    
    
}
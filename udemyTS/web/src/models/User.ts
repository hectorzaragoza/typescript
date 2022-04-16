import { Eventing } from './Eventing'
import { Sync } from './Sync'
import { Attributes } from './Attributes'

type Callback = () => void

export interface UserProps {
    id?: number
    name?: string
    age?: number
}

const rootUrl = 'http://localhost:3000/users'

export class User {
    constructor(attrs: UserProps) {
    this.attributes = new Attributes<UserProps>(attrs);
    }
    public events: Eventing = new Eventing();
    public sync: Sync<UserProps> = new Sync<UserProps>(rootUrl);
    public attributes: Attributes<UserProps>

    on(eventName: string, callback: Callback): void {
        this.events.on(eventName, callback)
    }
}
// Type alias, empty function that has no arguments and no return value (Type annotation for a function)
type Callback = () => void

export class Eventing {
    events: {[key: string]: Callback[]} = {}
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
}
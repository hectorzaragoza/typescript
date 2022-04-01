class Vehicle {
    constructor(public color: string) {}
    // By putting in public before color, it assigns a variable color to the class blueprint, making it avaiable as a property to instances of that class
    // Lines 2 to 4 is the equivalent of writing
    /**
     * color: string
     * constructor(color: string) {
     *  this.color = color
     * }
     */

    // public drive(): void {
    //     console.log('Chugga Chugga')
    // }

    // private honk(): void {
    //     console.log('Beep')
    // }
    protected honk(): void {
        console.log('Beep')
    }
}

const vehicle = new Vehicle('silver')
// vehicle.honk()
console.log("vehicle instance color: ", vehicle.color)

class Car extends Vehicle {
    constructor(public wheels: number, color: string) {
        super(color)
    }
    private drive(): void {
        console.log('Vroom')
    }
    startDrivingProcess(): void {
        this.drive()
        this.honk()
    }
}

// const vehicle = new Vehicle();
// vehicle.drive()
// vehicle.honk()

const car = new Car(4, 'Black')
// car.startDrivingProcess()
// car.honk()



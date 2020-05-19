import { Builder } from "./builder";

export interface IVehicle {
    wheels: number
    windows: number
    engine: number
    price: number

    show(): void
}

export class Vehicle implements IVehicle {
    wheels: number = 0;
    windows: number = 0;
    engine: number = 0;
    price: number = 0;

    show() {
        console.log('vehicle build with :');
        if (this.wheels) console.log(' -', this.wheels, 'wheels')
        if (this.windows) console.log(' -', this.windows, 'windows')
        if (this.engine) console.log(' -', this.engine, 'h.p. engine')
        if (this.price) console.log(' -', this.price, '$')
    }
}

const motorcycle = new Builder().setEngine(750).setWheels(2).setPrice(9000);
const scooter = new Builder().setEngine(250).setWheels(2).setPrice(1000);
const car = new Builder().setEngine(550).setWheels(4).setWindows(6).setPrice(18000);

export {
    motorcycle,
    scooter,
    car
}
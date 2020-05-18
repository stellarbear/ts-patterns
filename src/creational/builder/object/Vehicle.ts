import { IVehicle } from "./IVehicle";

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
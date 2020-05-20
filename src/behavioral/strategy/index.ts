import { Car, DieselEngine, ElectroEngine } from "./strategy";

/*
STRATEGY:
Just inject interface implementation and swap on demand
*/

(() => {
    let cars: Car[] = [
        new Car(new DieselEngine()),
        new Car(new ElectroEngine())
    ];

    for (let car of cars) {
        console.log('------------')
        car.move();
    }
})()
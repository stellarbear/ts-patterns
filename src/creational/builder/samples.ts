import { Builder } from "./builder/Builder";

const motorcycle = new Builder().setEngine(750).setWheels(2).setPrice(9000);
const scooter = new Builder().setEngine(250).setWheels(2).setPrice(1000);
const car = new Builder().setEngine(550).setWheels(4).setWindows(6).setPrice(18000);

export {
    motorcycle,
    scooter,
    car
}
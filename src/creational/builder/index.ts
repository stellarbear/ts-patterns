import { motorcycle, scooter, car } from "./samples";

(() => {
    const vehicles = [
        motorcycle,
        scooter,
        car,
    ]

    for (let vehicle of vehicles) {
        vehicle.getResult().show();
    }
})()
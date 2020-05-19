import { motorcycle, scooter, car } from "./vehicle";

/*
BUILDER:
builder aims to simplify object construction through chaining method calls
there are two ways to implement this: 
1. outer builder class 
2. methods inside class that changes inner state
*/

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
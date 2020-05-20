import { Mediator } from "./mediator";
import { Developer, Customer, Tester } from "./sample";

/*
MEDIATOR:
Mediator has a reference to all units
Each unit has a reference to mediator
Each unit dispatch event to mediator with reference to itself
Mediator receive event and redispatch to desired unit
*/

(() => {
    let mediator = new Mediator();
    let units = [
        new Developer(mediator),
        new Customer(mediator),
        new Tester(mediator),
    ];
    mediator.setUnits(units);

    units[0].send('feature')
    units[1].send('bug')
    units[2].send('test')
})()
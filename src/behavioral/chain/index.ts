import { Chain } from "./chain";
import { Dog, Monkey, Squirrel } from "./sample";

/*
CHAIN OF RESPONSIBILITY:
Main idea is to build Chain class that can delegate processing to the next instance (if exists)
All chaining classes must subclass from it.
*/

(() => {
    const chain = new Chain();
    chain.setNext(new Dog()).setNext(new Monkey()).setNext(new Squirrel());

    const foods = ['nut', 'banana', 'coffee']
    for (let meal of foods) {
        console.log('--------');
        chain.handle(meal);
    }
})()
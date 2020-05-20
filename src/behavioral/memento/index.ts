import { Hero, CareTaker } from "./memento";

/*
MEMENTO:
Object that needs to be restored from time to time is injected with caretaker
Which is storing history of object states with the ability to push / pop
*/

(() => {
    let hero = new Hero(new CareTaker());

    hero.save();
    hero.info();
    hero.shoot();
    hero.shoot();
    hero.die();
    hero.info();
    hero.load();
    hero.info();
})()
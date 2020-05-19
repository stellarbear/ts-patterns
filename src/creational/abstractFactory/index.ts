import { Hero } from "./hero"
import { ElfFactory, OrcFactory } from "./factory"

/*
ABSTRACT FACTORY:
injected factory implementation provides two or more instances of classes that is logically related for future use
*/

(() => {
    const heroes = [
        new Hero(new ElfFactory()),
        new Hero(new ElfFactory()),
        new Hero(new ElfFactory()),
        new Hero(new OrcFactory()),
    ]

    for (let hero of heroes) {
        hero.stat()
    }
})()
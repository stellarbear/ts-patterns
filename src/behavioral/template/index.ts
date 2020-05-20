import { ADrinkTemplate, Tea, Coffee } from "./template"

/*
TEMPLATE:
Just an abstract class with overridden methods in subclasses
*/

(() => {
    const drinks: ADrinkTemplate[] = [
        new Tea(),
        new Coffee()
    ]

    for (let drink of drinks) {
        console.log('-------')
        drink.prepare()
    }
})()
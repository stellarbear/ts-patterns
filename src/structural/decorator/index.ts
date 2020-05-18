import { Milk } from "./extend1/Milk"
import { Expresso } from "./base/Expresso"
import { Sugar } from "./extend1/Sugar"
import { DarkRoast } from "./base/DarkRoast"
import { MegaCoupon } from "./extend2/MegaCoupon"

/*
DECORATOR:
Or so called smart proxy
The decorator pattern is a way to extend class / method functionality without modifying it's source code
Adapter is wrapping original class/interface through constructor and extends/implements it
*/

(() => {
    const orders = [
        new Milk(new Expresso()),
        new Sugar(new Milk(new DarkRoast())),
        new MegaCoupon(new DarkRoast()),
    ]

    for (let order of orders) {
        console.log('---------')
        console.log(order.description)
        console.log('for only', order.getPrice(), '$')
    }
})()
import { AChain } from "./chain";

export class Monkey extends AChain {
    handle(data: string) {
        if (data === 'banana') {
            console.log(`Monkey: I'll eat the ${data}.`)
        } else {
            console.log(`Monkey: Not in my taste.`)
            super.handle(data);
        }
    }
}
export class Squirrel extends AChain {
    handle(data: string) {
        if (data === 'nut') {
            console.log(`Squirrel: I'll eat the ${data}.`)
        } else {
            console.log(`Squirrel: Not in my taste.`)
            super.handle(data);
        }
    }
}
export class Dog extends AChain {
    handle(data: string) {
        if (data === 'meat') {
            console.log(`Dog: I'll eat the ${data}.`)
        } else {
            console.log(`Dog: Not in my taste.`)
            super.handle(data);
        }
    }
}
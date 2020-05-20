export interface IEngine {
    ignite(): void
}

export class DieselEngine implements IEngine {
    ignite = () => console.log("wrooom! khe! khe!")
}
export class ElectroEngine implements IEngine {
    ignite = () => console.log("ecological wroom!")
}

export class Car {
    constructor(private readonly engine: IEngine) { }
    move() {
        console.log('unlock car');
        this.engine.ignite()
        console.log('let\'s go!');
    }
}

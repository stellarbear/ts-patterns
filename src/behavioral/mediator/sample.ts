import { IMediator } from "./mediator";

export abstract class AUnit {
    constructor (protected readonly mediator: IMediator) {}
    send(event: string) {
        this.mediator.notify(this, event);
    }
    abstract notify(): void
}

export class Developer extends AUnit {
    constructor (mediator: IMediator) {
        super(mediator)
    }
    notify() {
        console.log('fixing bug')
    }
}

export class Tester extends AUnit {
    constructor (mediator: IMediator) {
        super(mediator)
    }
    notify() {
        console.log('testing feature')
    }
}

export class Customer extends AUnit {
    constructor (mediator: IMediator) {
        super(mediator)
    }
    notify() {
        console.log('enjoying ux')
    }
}
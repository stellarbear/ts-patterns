export interface IChain {
    handle(data: string): void
    setNext(c: IChain): IChain
}

export abstract class AChain implements IChain {
    next?: IChain;
    handle(data: string) {
        if (this.next) {
            this.next.handle(data);
        } else {
            console.log('nobody can process')
        }
    }
    setNext(next: IChain) {
        this.next = next;
        return next;
    }
}

export class Chain extends AChain {
    handle(data: string) {
        super.handle(data);
    }
}
import { IObserver } from "./observer";

export interface IObservable {
    AddObserver(o: IObserver): void
    RemoveObserver(o: IObserver): void
}

export abstract class AObservable implements IObservable {
    protected observers: IObserver[] = [];

    AddObserver(o: IObserver) {
        this.observers.push(o);
    }
    RemoveObserver(o: IObserver) {
        this.observers = this.observers.filter(e => e !== o)
    }

    notify() {
        for (let o of this.observers) {
            console.log('-------------------')
            o.update();
        }
    }
}

export class GitRepo extends AObservable {
    push(m: string) {
        this.notify()
    }
}
import { IRemote } from "./IRemote";
import { IDevice } from "../imlpementation/IDevice";

export class Remote implements IRemote {
    constructor(private readonly implementation: IDevice) { }

    turnOn(): void {
        if (!this.implementation.isEnabled()) {
            this.implementation.toggle();
        }
    }
    turnOff(): void {
        if (this.implementation.isEnabled()) {
            this.implementation.toggle();
        }
    }

}
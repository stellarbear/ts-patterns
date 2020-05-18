import { IDevice } from "./IDevice";

export class TV implements IDevice {
    enabled: boolean
    constructor() {
        this.enabled = false;
    }

    isEnabled(): boolean {
        console.log('TV: checking for power!')
        return this.enabled;
    }
    toggle(): void {
        console.log('TV: power is changing!')
        this.enabled = !this.enabled
    }
}
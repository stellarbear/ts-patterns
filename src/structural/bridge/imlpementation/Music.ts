import { IDevice } from "./IDevice";

export class Music implements IDevice{
    enabled: boolean
    constructor() {
        this.enabled = false;
    }
    
    isEnabled(): boolean {
        return this.enabled;
    }
    toggle(): void {
        if (this.enabled) {
            console.log('Music: downloading latest artists!')
            console.log('Music: merging albums!')
        } else {
            console.log('Music: discarding all data')
        }
        this.enabled = !this.enabled
    }
}
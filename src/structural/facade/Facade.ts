import { TV } from "./objects/TV";
import { Music } from "./objects/Music";
import { Light } from "./objects/Light";

export class Facade {
    constructor(
        private readonly tv: TV,
        private readonly music: Music,
        private readonly light: Light
    ) {}

    public On = () => {
        console.log('Booting: ..............')
        this.tv.On();
        this.music.Play();
        this.light.On()
    }
    public Off = () => {
        console.log('Shutting down: .......')
        this.tv.Off();
        this.music.Stop();
        this.light.Off()
    }
}
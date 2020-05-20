import { ICommand } from "./command"

export class TV {
    on = () => console.log('tv is on')
    off = () => console.log('tv is off')
}
export class Music {
    on = () => console.log('music is playing')
    off = () => console.log('music is off')
}
export class Light {
    shine = () => console.log('lights are on')
    darken = () => console.log('lights are off')
}

export class TVCommand implements ICommand{
    constructor(private readonly tv: TV) {}
    execute = () => this.tv.on()
    undo = () => this.tv.off()
}
export class MusicCommand implements ICommand{
    constructor(private readonly music: Music) {}
    execute = () => this.music.on()
    undo = () => this.music.off()
}
export class LightCommand implements ICommand{
    constructor(private readonly light: Light) {}
    execute = () => this.light.shine()
    undo = () => this.light.darken()
}
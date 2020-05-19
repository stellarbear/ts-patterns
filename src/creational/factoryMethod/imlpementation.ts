export interface IWindow {
    color: string
    style: string

    draw(): void
}

export class WindowsWindow implements IWindow {
    color = "blue"
    style = "win95"

    draw() {
        console.log('just basic', this.color, this.style, 'window')
    }
}
export class LinuxWindow implements IWindow {
    color = "grey"
    style = "gnome"

    draw() {
        console.log('just basic', this.color, this.style, 'window')
    }
}

export class MacWindow implements IWindow {
    color = "black"
    style = "leopard"

    draw() {
        console.log('fancy', this.color, this.style, 'window')
    }
}
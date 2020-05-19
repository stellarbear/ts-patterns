import { IWindow, WindowsWindow, LinuxWindow, MacWindow } from "./imlpementation"

export interface IWIndowDialog {
    create(): IWindow
}

export class WindowsOS implements IWIndowDialog {
    create() {
        return new WindowsWindow()
    }
}
export class LinuxOS implements IWIndowDialog {
    create() {
        return new LinuxWindow()
    }
}
export class MacOS implements IWIndowDialog {
    create() {
        return new MacWindow()
    }
}
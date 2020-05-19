import { IWIndowDialog, WindowsOS, LinuxOS, MacOS } from "./factory"

/*
FACTORY METHOD:
We give an interface for object creation, but the creation itself is delegated to subclasses
*/


(() => {
    const oses: IWIndowDialog[] = [
        new WindowsOS(),
        new LinuxOS(),
        new MacOS()
    ]

    for (let os of oses) {
        os.create().draw()
    }
})()
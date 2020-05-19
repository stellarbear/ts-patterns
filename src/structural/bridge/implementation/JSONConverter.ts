import { ILogConverter } from "./ILogConverter"

export class JSONConverter implements ILogConverter {
    constructor(private readonly data: any) { }

    convert() {
        return JSON.stringify(this.data)
    }
}
class B64Converter implements ILogConverter {
    constructor(private readonly data: any) { }

    convert() {
        return btoa(JSON.stringify(this.data))
    }
}
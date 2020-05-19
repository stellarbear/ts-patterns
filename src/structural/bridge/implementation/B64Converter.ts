import { ILogConverter } from "./ILogConverter"

export class B64Converter implements ILogConverter {
    constructor(private readonly data: any) { }

    convert() {
        return Buffer.from(JSON.stringify(this.data)).toString('base64');
    }
}
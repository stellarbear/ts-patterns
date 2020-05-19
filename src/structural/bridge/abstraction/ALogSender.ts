import { ILogConverter } from "../implementation/ILogConverter";
import { ILogSender } from "./ILogSender";

export abstract class ALogSender implements ILogSender {
    constructor(protected readonly converter: ILogConverter) {}
    abstract send(): void 
}
import { ALogSender } from "./ALogSender";
import { ILogConverter } from "../implementation/ILogConverter";

export class EmailSender extends ALogSender {
    constructor(converter: ILogConverter) {
        super(converter);
    }

    send(): void {
        console.log('getting gmail creds')
        const data = this.converter.convert();
        console.log('sending as email:', data);
    }
}
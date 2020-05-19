import { ALogSender } from "./ALogSender";
import { ILogConverter } from "../implementation/ILogConverter";

export class SlackSender extends ALogSender {
    constructor(converter: ILogConverter) {
        super(converter);
    }

    send(): void {
        console.log('getting slack channel id')
        const data = this.converter.convert();
        console.log('sending to slack:', data);
    }
}
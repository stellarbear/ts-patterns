import { ILogSender } from "./abstraction/ILogSender";
import { SlackSender } from "./abstraction/SlackSender";
import { JSONConverter } from "./implementation/JSONConverter";
import { B64Converter } from "./implementation/B64Converter";
import { EmailSender } from "./abstraction/EmailSender";

/*
BRIDGE:
Main idea is to separate abstraction from implementation during at the design stage.
Abstraction provides stable API that can safely be used in other code modules.
Implementation may change and these changes do not affect existing code 
- only implementation itself or abstraction methods insides
*/

(() => {
    const data = 'tiny fox jumps '
    const senders: ILogSender[] = [
        new SlackSender(new JSONConverter(data)),
        new SlackSender(new B64Converter(data)),
        new EmailSender(new B64Converter(data)),
    ];

    for (let sender of senders) {
        console.log('-------------------------')
        sender.send();
    }
})()
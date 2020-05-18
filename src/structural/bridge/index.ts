import { IRemote } from "./abstraction/IRemote";
import { Remote } from "./abstraction/Remote";
import { TV } from "./imlpementation/TV";
import { Music } from "./imlpementation/Music";

/*
BRIDGE:
Main idea is to separate abstraction from implementation during at the design stage.
Abstraction provides stable API that can safely be used in other code modules.
Implementation may change and these changes do not affect existing code 
- only implementation itself or abstraction methods insides
*/

(() => {
    const remotes: IRemote[] = [
        new Remote(new TV()),
        new Remote(new Music()),
    ];

    for (let remote of remotes) {
        console.log('-------------------------')
        remote.turnOn();
        remote.turnOff();
    }
})()
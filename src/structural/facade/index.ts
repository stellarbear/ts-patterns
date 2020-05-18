import { Facade } from "./Facade"
import { TV } from "./objects/TV";
import { Music } from "./objects/Music";
import { Light } from "./objects/Light";

/*
FACADE:
It is easy way to manage multiple classes through a simple API
*/

(() => {
    const facade = new Facade(
        new TV(),
        new Music(),
        new Light()
    );
    facade.On()
    facade.Off()
})()
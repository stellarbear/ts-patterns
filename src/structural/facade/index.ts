import { Facade } from "./Facade"
import { TV } from "./objects/tv";
import { Music } from "./objects/music";
import { Light } from "./objects/light";

(() => {
    const facade = new Facade(
        new TV(),
        new Music(),
        new Light()
    );
    facade.On()
    facade.Off()
})()
import { MacroCommand } from "./command"
import { TVCommand, TV, MusicCommand, Music, LightCommand, Light } from "./sample"

/*
COMMAND:
each command is a wrapper against it's receiver with command interface implementation
*/

(() => {
    const cTV = new TVCommand(new TV);
    const cMusic = new MusicCommand(new Music);
    const cLight = new LightCommand(new Light);


    let cc = new MacroCommand([cTV, cMusic, cLight]);
    console.log('----------------')
    cc.execute();
    console.log('----------------')
    cc.undo();
})()
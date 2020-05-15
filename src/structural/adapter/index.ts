import { IDuck } from "./duck/IDuck";
import { DuckMallard } from "./duck/DuckMallard";
import { DuckDecoy } from "./duck/DuckDecoy";
import { DuckAdapterTurkey } from "./DuckAdapterTurkey";
import { Turkey } from "./turkey/Turkey";

(() => {
    const ducks: IDuck[] = [
        new DuckMallard(),
        new DuckDecoy(),
        new DuckAdapterTurkey(new Turkey())
    ];

    for (let duck of ducks) {
        console.log('---------------')
        duck.Introduce();
        duck.Quack();
        duck.Fly()
    }
})()
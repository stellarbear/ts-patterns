import { IDuck } from "./duck/IDuck";
import { DuckMallard } from "./duck/DuckMallard";
import { DuckDecoy } from "./duck/DuckDecoy";
import { DuckAdapterTurkey } from "./DuckAdapterTurkey";
import { Turkey } from "./turkey/Turkey";

/*
ADAPTER:
If case we have two different interfaces by methods or their signatures, 
but logically they belong to the same family, we can treat them in the same way thanks to the adapter pattern
*/

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
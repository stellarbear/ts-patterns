import { LiquidState } from "./state";
import { Water } from "./context";

/*
STATE:
State refers to inner state
Context stands for object that is wrapped around state

State must have a reference to context (in order to change context state)
And context must supply state that is being changed with itself
*/

(() => {
    let water = new Water(new LiquidState());
    water.heat();
    water.heat();
    water.frost();
    water.frost();
    water.frost();
})()
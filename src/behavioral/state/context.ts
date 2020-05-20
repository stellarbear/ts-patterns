import { IState } from "./state";

export interface IContext {
    setState(state: IState): void
}

export interface IWater {
    frost(): void
    heat(): void
}

export class Water implements IWater, IContext {
    constructor(private state: IState) {
        this.state.setContext(this)
    }
    setState(state: IState) {
        this.state = state;
        this.state.setContext(this)
    }

    heat() {
        this.state.heat()
    }
    frost() {
        this.state.frost()
    }
}
import { IWater, IContext } from "./context";

export interface IState extends IWater {
    setContext(context: IContext): void
}

export abstract class AState implements IWater, IState {
    protected context?: IContext
    setContext(context: IContext) {
        this.context = context;
    }

    abstract frost(): void
    abstract heat(): void
}

export class GasState extends AState {
    heat(): void {
        console.log("heat > can't be any hotter");
    }
    frost(): void {
        console.log("frost > gas becomes water");
        this.context!.setState(new LiquidState())
    }
}
export class LiquidState extends AState {
    heat(): void {
        console.log("heat > water becomes gas");
        this.context!.setState(new GasState())
    }
    frost(): void {
        console.log("frost > water becomes solid");
        this.context!.setState(new CSolidState())
    }
}
export class CSolidState extends AState {
    heat(): void {
        console.log("heat > solid becomes water");
        this.context!.setState(new LiquidState())
    }
    frost(): void {
        console.log("frost > solid can not be any colder");
    }
}
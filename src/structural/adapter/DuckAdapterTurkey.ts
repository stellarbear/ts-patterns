import { IDuck } from "./duck/IDuck";
import { ITurkey } from "./turkey/ITurkey";

export class DuckAdapterTurkey implements IDuck {
    constructor(private turkey: ITurkey) { }
    public Introduce(): void {
        this.turkey.Introduce();
    }
    public Quack(): void {
        this.turkey.Squeak();
    }
    public Fly(): void {
        this.turkey.Jump();
    }

}
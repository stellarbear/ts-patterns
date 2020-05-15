import { IDuck } from "./IDuck";

export class DuckDecoy implements IDuck {
    public Introduce(): void {
        console.log("Beep! Beep! Beep! ...");
    }
    public Quack(): void {
        console.log("No quack either ...");
    }
    public Fly(): void {
        console.log("Nah, i'm not going to fly ...");
    }
}
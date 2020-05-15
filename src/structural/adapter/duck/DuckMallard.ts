import { IDuck } from "./IDuck";

export class DuckMallard implements IDuck{
    public Introduce(): void {
        console.log("Hello from Mallard duck!");
    }
    public Quack(): void {
        console.log("Mallard quack!");
    }
    public Fly(): void {
        console.log("I fly up high in the sky!");
    }
}
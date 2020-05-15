import { ITurkey } from "./ITurkey";

export class Turkey implements ITurkey {
    public Introduce(): void {
        console.log("Huh! No way!");
    }
    public Squeak(): void {
        console.log("Squeeeeak! Squeeeeak! Squeeeeak!");
    }
    public Jump(): void {
        console.log("Jump! Jump! Jump!");
    }
}
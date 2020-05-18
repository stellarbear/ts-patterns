export abstract class Component {
    constructor(protected readonly name: string) { }

    abstract func(depth: number): void;
}
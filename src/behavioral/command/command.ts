export interface ICommand {
    execute(): void
    undo(): void
}

export class MacroCommand implements ICommand {
    constructor(private readonly commands: ICommand[]) {}
    execute(): void {
        for (let c of this.commands) {
            c.execute()
        }
    }
    undo(): void {
        for (let c of this.commands) {
            c.undo()
        }
    }
}
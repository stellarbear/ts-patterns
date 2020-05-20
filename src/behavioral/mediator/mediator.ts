import { AUnit, Developer, Tester, Customer } from "./sample";

export interface IMediator {
    notify(sender: AUnit, event: string): void
}

export class Mediator implements IMediator {
    private units?: AUnit[]
    setUnits(units: AUnit[]) {
        this.units = units;
    }
    notify(sender: AUnit, event: string) {
        if (sender instanceof Developer && event === 'feature') {
            this.units?.find(u => u instanceof Tester)?.notify()
        }
        if (sender instanceof Tester && event === 'test') {
            this.units?.find(u => u instanceof Customer)?.notify()
        }
        if (sender instanceof Customer && event === 'bug') {
            this.units?.find(u => u instanceof Developer)?.notify()
        }
    }
}
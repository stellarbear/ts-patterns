import { IVisitor } from "./visitor";

export interface IVisitable {
    accept(v: IVisitor): void
}

export abstract class AAccount implements IVisitable {
    constructor(public readonly name: string) { }
    abstract accept(v: IVisitor): void
}

export class UserAccount extends AAccount {
    constructor(public readonly passport: string, name: string) {
        super(name);
    }
    accept(v: IVisitor): void {
        v.visitUser(this);
    }
}

export class CompanyAccount extends AAccount {
    constructor(public readonly location: string, name: string) {
        super(name);
    }
    accept(v: IVisitor): void {
        v.visitCompany(this);
    }
}

export class Bank implements IVisitable{
    constructor(private readonly accounts: AAccount[]) { }
    accept(v: IVisitor): void {
        for (let a of this.accounts) {
            a.accept(v);
        }
    }
}


import { CompanyAccount, UserAccount } from "./visitable"

export interface IVisitor {
    visitCompany(c: CompanyAccount): void
    visitUser(u: UserAccount): void
}

export class Info implements IVisitor {
    visitCompany(c: CompanyAccount): void {
        console.log('company account', c.name)
        console.log('location', c.location)
    }
    visitUser(u: UserAccount): void {
        console.log('user account', u.name)
        console.log('passport', u.passport)
    }

}
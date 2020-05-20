import { Bank, UserAccount, CompanyAccount } from "./visitable";
import { Info } from "./visitor";

/*
VISITOR:
Main idea is to extend classes that should be visited just a bit with Visitable interface with just one method: accept
Visitor interface must implement a method for each distinct class that should be visited

Of course this will not work if class has private methods and fields
*/

(() => { 
    let bank = new Bank([
        new UserAccount("426684810", "John"),
        new UserAccount("555648133", "Smit"),
        new CompanyAccount("RM CA", "Goggle")
    ])

    bank.accept(new Info());
})()
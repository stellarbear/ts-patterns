import { IFactory } from "./factory";

export class Hero {
    constructor(private readonly factory: IFactory) { }

    stat(){
        this.factory.createMovement().move()
        this.factory.createWeapon().hit()
    }
}
import { IItem } from "../base/IItem";

export abstract class ACondiment implements IItem {
    abstract _cost: number
    abstract _description: string
    constructor(private readonly item: IItem) { }

    getPrice(): number {
        return this._cost + this.item.getPrice()
    }

    get description(): string {
        return this.item.description + ', ' + this._description;
    }
}
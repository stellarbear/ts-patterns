import { IItem } from "../base/IItem";

export abstract class ACoupon implements IItem {
    abstract _discount: number;
    constructor(private readonly item: IItem) { }

    getPrice(): number {
        return this.item.getPrice() * (100 - this._discount) / 100;
    } 

    get description() {
        return this.item.description + ' with ' + this._discount + ' % discount';
    }
}
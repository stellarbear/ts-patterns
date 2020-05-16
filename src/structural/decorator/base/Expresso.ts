import { IItem } from "./IItem";

export class Expresso implements IItem {
    getPrice = () => 1.5;
    description: string = 'Well known expresso!';
}
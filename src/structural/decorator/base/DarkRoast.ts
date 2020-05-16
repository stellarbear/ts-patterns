import { IItem } from "./IItem";

export class DarkRoast implements IItem {
    getPrice = () => 2.0;
    description: string = 'Mmmm, dark-dark roast!';
}
import { IClonable } from "./IClonable";


export class Square implements IClonable {
    constructor (private x: number,
        private y: number) {}

    clone() {
        return new Square(this.x, this.y);
    }

    invert() {
        const temp = this.x;
        this.x = this.y;
        this.y = temp;
    }

    toString(){
        return `${this.x}-${this.y} square`;
    }
}
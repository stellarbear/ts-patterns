import { LinkedList } from "./iterable";

export interface IIterator<T> {
    hasNext(): boolean
    getNext(): T | undefined
}

export class ListIterator<T> implements IIterator<T> {
    constructor(private node?: LinkedList<T>) { }

    hasNext = () => this.node !== undefined
    getNext() {
        let val = this.node?.val;
        if (this.node) {
            this.node = this.node.next;
        }

        return val;
    }
}
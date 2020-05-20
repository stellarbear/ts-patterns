import { IIterator, ListIterator } from "./iterator";

export interface IIterable<T> {
    createIterator(): IIterator<T>
}

export class LinkedList<T> implements IIterable<T> {
    constructor(public val: T,
        public next?: LinkedList<T>,
    ) { }

    createIterator(): IIterator<T> {
        return new ListIterator<T>(this);
    }
}


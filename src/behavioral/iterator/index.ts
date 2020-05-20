import { LinkedList } from "./iterable"

/*
ITERATOR:
sequence must implement Iterable interface that return Iterator interface
*/

(() => {
    let root = new LinkedList(5, new LinkedList(7, new LinkedList(1, new LinkedList(4))));

    let iterator = root.createIterator();
    while(iterator.hasNext()) {
        console.log(iterator.getNext())
    }
})()
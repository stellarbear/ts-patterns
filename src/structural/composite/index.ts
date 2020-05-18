import { Composite } from "./composite"
import { Leaf } from "./Leaf"

/*
COMPOSITE:
Tree-like data structure.
From my point of view Leaf is redundant, because if we want to extend each leaf with new children, 
we will have to swap leaf class for composite with copying inner data
*/

(() => {
    let dir1 = new Composite('patterns')
    let dir11 = new Composite('structural')
    let dir12 = new Composite('creational')
    let dir13 = new Composite('behavioral')
    dir1.addBulk([dir11, dir12, dir13]);
    let f1dir11 = new Leaf('adapter')
    let f2dir11 = new Leaf('bridge')
    let f3dir11 = new Leaf('decorator')
    dir11.addBulk([f1dir11, f2dir11, f3dir11]);

    dir1.func(0);
})()
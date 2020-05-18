import { Component } from "./component";

export class Composite extends Component {
    children: Component[] = [];
    constructor(name: string) { 
        super(name);
    }

    add(c: Component) {
        this.children.push(c);
    }
    addBulk(list: Component[]) {
        for (let c of list) {
            this.add(c);
        }
    }
    remove(c: Component) {
        this.children = this.children.filter(e => e !== c);
    }
    getChild(i: number) {
        if (i < 0 || i >= this.children.length) {
            return null;
        }

        return this.children[i];
    }

    func(depth: number): void {
        console.log('|' + '-'.repeat(depth) + this.name)
        for (let c of this.children) {
            c.func(depth + 1);
        }
    }
}
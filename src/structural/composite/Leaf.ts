import { Component } from "./component";

export class Leaf extends Component {
    constructor(name: string) {
        super(name);
    }

    func(depth: number) {
        console.log('|' + '-'.repeat(depth) + this.name)
    }
}

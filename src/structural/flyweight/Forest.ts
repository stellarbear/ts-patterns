import { TreeFactory } from "./factory";
import { Tree } from "./shared";

class RenderedTree {
    constructor(
        private readonly type: Tree,
        private readonly x: number,
        private readonly y: number
    ) { }
}

export class Forest {
    constructor(
        private readonly fwf: TreeFactory,
        private readonly trees: RenderedTree[] = []
    ) { }

    addTree(name: string, x: number, y: number) {
        let tree = new RenderedTree(this.fwf.getTree(name), x, y);
        this.trees.push(tree);
    }

    count() {
        console.log('rendered trees:', this.trees.length)
        console.log('assets in memory:', this.fwf.count());
    }
}
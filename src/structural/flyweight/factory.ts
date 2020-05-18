import { TreeType, Tree } from "./shared";

export class TreeFactory {
    constructor(
        private readonly dictionary: Record<string, TreeType> = {},
        private readonly store: Record<string, Tree> = {},
    ) { }

    getTree(key: string) {
        if (key in this.store) {
            console.log('reusing existing instance')
            return this.store[key];
        } else {
            key = key in this.dictionary ? key : "default";

            console.log('creating new instance')
            const entry = new Tree(this.dictionary[key]);
            this.store[key] = entry;
        }

        return this.store[key];
    }

    count = () => Object.keys(this.store).length
}

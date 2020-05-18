import { TreeFactory } from "./factory";
import { Forest } from "./Forest";
import { TreeType } from "./shared";

/*
FLYWEIGHT:

*/

(() => {
    const treeTypes: Record<string, TreeType> = {
        "red maple": { color: "red", asset: "r_mapple.3ds" },
        "hackberry": { color: "green", asset: "hackberry.3ds" },
        "sugar maple": { color: "green", asset: "s_mapple.3ds" },
        "japanese zelkova": { color: "red", asset: "j_zelkova.3ds" },
        "amur corktree": { color: "green", asset: "a_cork_II.3ds" },
        "default": { color: "green", asset: "default_tree.3ds" },
    }

    const forest = new Forest(new TreeFactory(treeTypes));

    for (let key in treeTypes) {
        for (let i = 0; i < Math.floor((Math.random() * 10)); i++) {
            forest.addTree(key, Math.random(), Math.random())
        }
    }

    forest.count();
})()
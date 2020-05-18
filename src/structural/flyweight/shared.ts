export type TreeType = {
    asset: string
    color: string
}

export class Tree {
    constructor(
        private readonly type: TreeType
    ) {
        console.log(' - loading asset from local file:', type.asset)
        console.log(' - applying color filter:', type.color)
    }
}
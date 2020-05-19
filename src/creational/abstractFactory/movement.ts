export interface IMovement {
    move(): void;
}

export class ByAir implements IMovement {
    move() {
        console.log(`I'm flying!`)
    }
}
export class ByFoot implements IMovement {
    move() {
        console.log(`Top!Top!Top!`)
    }
}
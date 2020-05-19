export interface IWeapon {
    hit(): void;
}

export class Arbalet implements IWeapon {
    hit() {
        console.log('long distance shish!')
    }
}
export class Sword implements IWeapon {
    hit() {
        console.log('close combat bang! bang!')
    }
}
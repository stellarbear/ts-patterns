import { IMovement, ByAir, ByFoot } from "./movement"
import { IWeapon, Arbalet, Sword } from "./weapon"

export interface IFactory {
    createMovement(): IMovement
    createWeapon(): IWeapon
}

export class ElfFactory implements IFactory {
    createMovement = () => new ByAir()
    createWeapon = () => new Arbalet()
}
export class OrcFactory implements IFactory {
    createMovement = () => new ByFoot()
    createWeapon = () => new Sword()
}
import { IVehicle } from "../object/IVehicle";

export interface IBuilder {
    setWheels(n: number): IBuilder
    setWindows(n: number): IBuilder
    setEngine(n: number): IBuilder
    setPrice(n: number): IBuilder

    getResult(): IVehicle
}
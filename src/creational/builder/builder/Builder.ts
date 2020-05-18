import { IBuilder } from "./IBuilder";
import { IVehicle } from "../object/IVehicle";
import { Vehicle } from "../object/Vehicle";

export class Builder implements IBuilder {
    vehicle: IVehicle;
    constructor(vehicle?: IVehicle) {
        this.vehicle = vehicle ?? new Vehicle();
    }
    setWheels(n: number) {
        this.vehicle.wheels = n;
        return this;
    }
    setWindows(n: number) {
        this.vehicle.windows = n;
        return this;
    }
    setEngine(n: number) {
        this.vehicle.engine = n;
        return this;
    }
    setPrice(n: number) {
        this.vehicle.price = n;
        return this;
    }
    getResult = () => this.vehicle;
}
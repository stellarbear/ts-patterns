import { IRequest } from "./IRequest";

export class RealRequest implements IRequest {
    constructor(private readonly target: string) { }
    request(): void {
        console.log('Sending request to', this.target)
    }

}
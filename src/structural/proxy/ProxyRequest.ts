import { RealRequest } from "./RealRequest";
import { IRequest } from "./IRequest";

export class ProxyRequest implements IRequest {
    private instance?: RealRequest
    constructor(private readonly target: string) { }

    request(): void {

        if (this.checkAccess()) {
            const instance = this.getInstance();
            instance.request();

            console.log('request was sent:', new Date().getTime())
        } else {
            console.log('resource is unavailable')
            console.log('retrying ...')
            this.request();
        }
    }

    private getInstance = () => this.instance ?? new RealRequest(this.target)

    private checkAccess = () => Math.random() > 0.5
}

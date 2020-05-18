import { RealRequest } from "./RealRequest";
import { ProxyRequest } from "./ProxyRequest";

/*
PROXY:
It is quite similar to decorator, but the source class can be instantiated lazily (inside methods), when for the decorator the source class is instantiated outside (dynamic behavior)
*/

(() => {
    let real = new RealRequest("google.com");
    let proxied = new ProxyRequest("google.com");

    real.request();
    proxied.request();
})()
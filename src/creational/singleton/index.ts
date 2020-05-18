import { Singleton } from "./singleton"

(() => {
    let instance1 = Singleton.getInstance();
    let instance2 = Singleton.getInstance();

    console.log('instances are equal:', instance1 === instance2);
    console.log(instance1.getCount())
    console.log(instance2.getCount())
    console.log(Singleton.getInstance().getCount())
})()
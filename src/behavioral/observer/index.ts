import { GitRepo } from "./observable";
import { AWS, Travis } from "./observer";

/*
OBSERVER:
It quite simple pattern. Just attach some classes (observers) that share same interface 
and call sharable method on demand from observable class

Note: Rx is popular reactive framework for such behavior
*/

(() => {
    const repo = new GitRepo();
    repo.AddObserver(new AWS())
    repo.AddObserver(new Travis())

    repo.push('Initial commit!');
})()
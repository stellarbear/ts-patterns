export interface IObserver {
    update(): void
}

export class Travis implements IObserver {
    update(){
        console.log('pulling github repo')
        console.log('testing in case any tests exists')
    }
}
export class AWS implements IObserver {
    update(){
        console.log('pulling github repo')
        console.log('deploying to production')
    }
}
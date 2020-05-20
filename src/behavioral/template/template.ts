export abstract class ADrinkTemplate {
    addWater = () => console.log("adding water!");
    addDrink = () => console.log("adding drink!");
    boilWater = () => console.log("boiling water!");
    addSugar = () => console.log("sugaring!");
    prepare() {
        this.addWater();
        this.addDrink();
        this.boilWater();
        this.addSugar();
    }
}

export class Tea extends ADrinkTemplate{
    addDrink = () => console.log('adding tea flavors')
}
export class Coffee extends ADrinkTemplate{
    addDrink = () => console.log('adding cocoa beans')
    addSugar = () => console.log('no sugar!')
}
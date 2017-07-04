import { Spacecraft, ContainerShip } from "./base-ships";

export class MilleniumFlacon extends Spacecraft implements ContainerShip {
    cargoContainers: number;
    /**
     *
     */
    constructor() {
        super('hyperdrive')
        this.cargoContainers = 4
    }

    jumpIntoHyperspace(){
        let rnd:number = Math.random()
        
        if(rnd >= 0.5){
            super.jumpIntoHyperspace()
        }
        else {
            console.log('Failed to jump into hyperspace')
        }
    }
}

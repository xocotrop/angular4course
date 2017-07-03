class Spacecraft {

    constructor(public propulsor: string) { }

    jumpIntoHyperspace() {
        console.log(`Entering hyperspace with ${this.propulsor}`)
    }
}

let ship = new Spacecraft('hyperdrive')

ship.jumpIntoHyperspace()

class MilleniumFlacon extends Spacecraft implements ContainerShip{
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

let falcon = new MilleniumFlacon()
falcon.jumpIntoHyperspace()

interface ContainerShip {
    cargoContainers : number
}

let goodForTheJob = (ship: ContainerShip) => ship.cargoContainers > 2

console.log(`Is falcon good for the job? ${goodForTheJob(falcon) ? 'Yes' : 'No'}`)
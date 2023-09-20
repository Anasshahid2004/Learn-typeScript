class Car6 {
    constructor(color: string, location: string, win: string) {
        this.color = color;
        this.location = location;
        this.win = win;
    }
    readonly win: string;
    color: string;
    location: string;
    owner?: string;
    power(state: boolean) {
      if (state === true) {
            console.log("Starting engine.")
        } else {
            console.log("Shutting down engine.")
        }
    }
}

class Mercedes extends Car6 {
     alloyWheels = true;
     adjustableSuspenion = true;
}

let myCar = new Mercedes("Sliver","California","1A")

myCar.power(true)


export{}
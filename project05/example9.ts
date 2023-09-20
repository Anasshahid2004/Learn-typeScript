class Car9 {
    constructor(color: string, location: string, win: string | number) {
        this.color = color;
        this.location = location;
        this.win = win;
    }
    readonly win: string | number;
    color: string;
    location: string;
    owner?: string;
    power(state: boolean): string {
      if (state === true) {
            return"Starting engine."
        } else {
            return"Shutting down engine."
        }
    }
}

class Mercedes extends Car9 {
    constructor(
        color: string, 
        location: string, 
        win: number, 
        alloyWheels: boolean
        ) {
    super(color,location, win)
    this.alloyWheels = alloyWheels
    }
     alloyWheels: boolean;
     adjustableSuspenion = true;
     power(state: boolean): string {
        if (state === true) {
            console.log("Starting Mercedes engine");
            
              return"Starting Mercedes engine."
          } else {
              return"Shutting down Mercedes engine."
          }
      }
}

let myMercedes = new Mercedes("Sliver", "California",1,false);
let myCar = new Car9("Black", "Pakistan","1A");

myCar.power(true)


export{}
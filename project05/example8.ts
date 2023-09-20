class Car8 {
    constructor(color: string, location: string, win: string) {
        this.color = color;
        this.location = location;
        this.win = win;
    }
    readonly win: string;
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

class Mercedes extends Car8 {
    constructor(
        color: string, 
        location: string, 
        win: string, 
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

let myCar = new Mercedes("Sliver", "California","1A",true);

myCar.power(true)


export{}
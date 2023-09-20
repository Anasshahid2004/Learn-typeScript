class Car4 {
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

let myCar = new Car4("Black", "California","1A");
let bushraCar = new Car4("red", "Pakistan","1B");
let AlexanderCar = new Car4("Blue", "Macedonia","1C");

console.log(AlexanderCar.win)

AlexanderCar.win = "alexanderwin"

console.log(AlexanderCar.win);


export{}
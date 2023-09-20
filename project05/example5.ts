class Car5 {
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

let myCar = new Car5("Black", "California","1A");
let bushraCar = new Car5("red", "Pakistan","1B");

let alexanderCar: Car5;

alexanderCar = {
    win: "1C",
    color: "Red",
    location: "Macedonia",
    power() {}
}

export{}
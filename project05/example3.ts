class Car3 {
    constructor(color: string, location: string) {
        this.color = color
        this.location = location
    }
    color: string;
    location: string;
    power(state: boolean) {
      if (state === true) {
            console.log("Starting engine.")
        } else {
            console.log("Shutting down engine.")
        }
    }
}

let myCar = new Car3("Black", "California");
let bushraCar = new Car3("red", "Pakistan");
let AlexanderCar = new Car3("Blue", "Macedonia");

console.log(`Anas's car is ${myCar.color}`);
console.log(`Anas's car is ${myCar.location}`);
console.log(`Bushra's car is ${bushraCar.color}`);
console.log(`Bushra's car is ${bushraCar.location}`);
console.log(`Alexander's car is ${AlexanderCar.color}`);
console.log(`Alexander's car is in ${AlexanderCar.location}`);

export{}
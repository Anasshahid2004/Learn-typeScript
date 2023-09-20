"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Car4 {
    constructor(color, location, win) {
        this.color = color;
        this.location = location;
        this.win = win;
    }
    power(state) {
        if (state === true) {
            console.log("Starting engine.");
        }
        else {
            console.log("Shutting down engine.");
        }
    }
}
let myCar = new Car4("Black", "California", "1A");
let bushraCar = new Car4("red", "Pakistan", "1B");
let AlexanderCar = new Car4("Blue", "Macedonia", "1C");
console.log(AlexanderCar.win);
AlexanderCar.win = "alexanderwin";
console.log(AlexanderCar.win);

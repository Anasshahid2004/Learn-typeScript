"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Car5 {
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
let myCar = new Car5("Black", "California", "1A");
let bushraCar = new Car5("red", "Pakistan", "1B");
let alexanderCar;
alexanderCar = {
    win: "1C",
    color: "Red",
    location: "Macedonia",
    power() { }
};

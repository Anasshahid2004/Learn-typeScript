"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Car9 {
    constructor(color, location, win) {
        this.color = color;
        this.location = location;
        this.win = win;
    }
    power(state) {
        if (state === true) {
            return "Starting engine.";
        }
        else {
            return "Shutting down engine.";
        }
    }
}
class Mercedes extends Car9 {
    constructor(color, location, win, alloyWheels) {
        super(color, location, win);
        this.adjustableSuspenion = true;
        this.alloyWheels = alloyWheels;
    }
    power(state) {
        if (state === true) {
            console.log("Starting Mercedes engine");
            return "Starting Mercedes engine.";
        }
        else {
            return "Shutting down Mercedes engine.";
        }
    }
}
let myMercedes = new Mercedes("Sliver", "California", 1, false);
let myCar = new Car9("Black", "Pakistan", "1A");
myCar.power(true);

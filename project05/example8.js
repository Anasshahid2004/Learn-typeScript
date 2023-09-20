"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Car8 {
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
class Mercedes extends Car8 {
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
let myCar = new Mercedes("Sliver", "California", "1A", true);
myCar.power(true);

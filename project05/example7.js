"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Car7 {
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
class Mercedes extends Car7 {
    constructor(color, location, win, alloyWheels) {
        super(color, location, win);
        this.adjustableSuspenion = true;
        this.alloyWheels = alloyWheels;
    }
}
let myCar = new Mercedes("Sliver", "California", "1A", true);
myCar.power(true);

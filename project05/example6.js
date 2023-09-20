"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Car6 {
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
class Mercedes extends Car6 {
    constructor() {
        super(...arguments);
        this.alloyWheels = true;
        this.adjustableSuspenion = true;
    }
}
let myCar = new Mercedes("Sliver", "California", "1A");
myCar.power(true);

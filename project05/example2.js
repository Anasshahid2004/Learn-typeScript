"use strict";
class Car2 {
    constructor() {
        this.color = "Sliver";
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
let myCar = new Car2();
myCar.power(true);

"use strict";
let nickNames = ["Anas", "Alexander", "Alex", "Alexander the Great"];
let preference = [1, 2, 3, 4];
function logNames(greeting, ...nicknames) {
    for (const nickname of nicknames) {
        console.log(`${greeting} ${nicknames}`);
    }
}
logNames("Hello", ...nickNames);
logNames("Hello", ...preference);

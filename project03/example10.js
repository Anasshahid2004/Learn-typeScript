"use strict";
const nickNames = ["Alexander", "Alex", "Alexander the Great"];
function allNicknames(callback) {
    for (let i = 0; i < nickNames.length; i++) {
        console.log(callback(i));
    }
}
function getNameAt(index) {
    return `${nickNames[index]}`;
}
allNicknames(getNameAt);
function logNames(name) {
    return `${name}`;
}
allNicknames(logNames);

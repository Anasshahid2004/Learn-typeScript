"use strict";
function hello(name = "Alexender", ...nickNames) {
    console.log(`Hello ${name} aka ${nickNames}`);
}
hello("Aans", "Alexender", "Alex", "Alexender the Great");

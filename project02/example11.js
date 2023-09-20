"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const anas = Math.random() > 0.5
    ? { name: "Anas", age: 30, type: "Pakistan" }
    : {
        name: "Anas",
        age: 18,
        type: "Overseas",
        nickName: "Alexander",
    };
if (anas.type === "Pakistan") {
    console.log(`He's in Pakistan so we'll call him Anas${anas.name}.`);
}
else {
    console.log(`He's not in Pakistan so we'll call him${anas.nickName}`);
}

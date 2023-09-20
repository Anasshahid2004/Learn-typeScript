"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const poem = Math.random() > 0.5
    ? { name: "The Double Images", pages: 7 }
    : { name: "Her Kind", rhymes: true };
if ("pages" in poem) {
    poem.pages;
}
else {
    poem.rhymes;
}

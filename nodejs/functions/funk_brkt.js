"use strict";
var rand1 = Math.floor(10 + Math.random() * 9);
var rand2 = Math.floor(10 + Math.random() * 9);
var rand3 = Math.floor(10 + Math.random() * 9);
var rand4 = Math.floor(10 + Math.random() * 9);
//
console.log(rand1, rand2, rand3, rand4);
if (rand1 > rand2) {
    console.log(rand1, " > ", rand2);
}
else if (rand3 > rand4) {
    console.log(rand3, ">", rand4);
}

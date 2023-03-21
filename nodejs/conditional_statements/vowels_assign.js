"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let myString = "United Stats of America";
let myStrings = myString.toUpperCase();
//
console.log(myString);
for (let i = 0; i < myStrings.length; i++) {
    if (myStrings[i] === 'A' || myStrings[i] === "E" || myStrings[i] === "I" || myStrings[i] === "O" || myStrings[i] === "U") {
        console.log(myString[i] + " is Vowel");
    }
    else {
        if (myString[i] == ' ') {
            //
        }
        else {
            console.log(myString[i] + " is Consonant");
        }
    }
}

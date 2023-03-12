"use strict";
exports.__esModule = true;
var myString = "United Stats of America";
var myStrings = myString.toUpperCase();
//
console.log(myString);
for (var i = 0; i < myStrings.length; i++) {
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

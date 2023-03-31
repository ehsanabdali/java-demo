"use strict";
exports.__esModule = true;
// Stripping Names: Store a person’s name, and include some 
// whitespace characters at the beginning and end of the name. 
//
var myName = " \t\t Qaid-e-Azam \n \t\t ";
var myMessageNative = "Name with Spaces: ";
var myMessageStriped = "Name with stripped spaces: ";
console.log(myMessageNative + myName);
console.log(myMessageStriped + myName.trim());

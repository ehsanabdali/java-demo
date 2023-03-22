"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase
//
let myName = "Muhammad AbLullAh eHsAn kHaN";
let ttlCase = "";
console.log("Orignal Name Var: " + myName);
console.log("Lower case: " + myName.toLowerCase());
console.log("Upper Case: " + myName.toUpperCase());
// TitleCase
for (let i = 0; i < myName.length; i++) { // Run loop till last char of name
    if (i === 0 || myName[i - 1] === " ") { // Check if its is first chart of name or spaces
        ttlCase = ttlCase + myName[i].toUpperCase(); // Converts the first char of name to upper
    }
    else {
        ttlCase = ttlCase + myName[i].toLowerCase(); // Chane other char to lower case
    }
}
console.log("TitleCase: " + ttlCase);

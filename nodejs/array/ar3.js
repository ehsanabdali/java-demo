"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.clear();
console.warn("Hi");
console.table(90);
const ages = [3, 16, 18, 20, 40, 50];
console.log(ages.some(isAdults));
function isAdults(age) {
    return age > 20 && age < 50;
}
;

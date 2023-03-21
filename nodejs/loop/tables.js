"use strict";
//let tableX: number = 1;
//let tableY: number = 1;
let x = 2;
console.log();
console.log("Table of: ", x, "\t\tTable of: ", x + 1, "\t\tTable of: ", x + 2, "\t\tTable of: ", x + 3, "\t\tTable of: ", x + 4);
console.log("===============\t\t===============\t\t===============\t\t===============\t\t===============");
for (let y = 1; y <= 10; y++) {
    console.log(x, " x ", y, " = ", x * y, "\t\t", x + 1, " x ", y, " = ", (x + 1) * y, " \t", x + 2, " x ", y, " = ", (x + 2) * y, " \t", x + 3, " x ", y, " = ", (x + 4) * y, " \t", x + 4, " x ", y, " = ", (x + 4) * y);
}

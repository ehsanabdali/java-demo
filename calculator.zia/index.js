#! /usr/bin/env node
import { add } from "./add.js";
import inquirer from "inquirer";
const asnwers = await inquirer.prompt([
    {
        name: "num1",
        message: "Enter first number",
        type: "number"
    },
    {
        name: "num2",
        message: "Enter second number",
        type: "number"
    }
]);
const result = add(asnwers.num1, asnwers.num2);
console.log(result);
// Program
// Program
// Program
// Program
// Program
// Program
// Program
// Program
// const ans = add(3, 5);
// console.log(ans);
// console.log("hello")

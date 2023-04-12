#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import figlet from "figlet";
import {sum, sub, multiply, division,exponent,modulo, quit} from "./operations.js";
// Banner formation
const print = console.log;

const ClaCulator = async() =>{
    console.log(figlet.textSync("( Calculator )"));
    console.log("       ",chalk.yellow.underline("Programmed By: Ehsan"),"      ",chalk.yellowBright.underline("PIAIC59754/Q1"));
//
const Input = await inquirer.prompt(
    [
        {
            type: "number",
            name: "Num1",
            message: "Enter First Number: "
        },
        {
            type: "number",
            name: "Num2",
            message: "Enter Second Number: "
        },
        {
            type: "list",
            name: "operations",
            message: "Select Basic Operation: ",
            choices: ["+","-","*","/","mod","Expo","Quit"]
        }
    ]
);
//
if(Input.operations === "+") {const result = sum(Input.Num1,Input.Num2);console.log(chalk.bgBlue(`Result is: ${result}`));
}else if(Input.operations === "-"){const result = sub(Input.Num1,Input.Num2);console.log(chalk.bgBlue(`Result is: ${result}`));
}else if(Input.operations === "*"){const result = multiply(Input.Num1,Input.Num2);console.log(chalk.bgBlue(`Result is: ${result}`));
}else if(Input.operations === "/"){const result = division(Input.Num1,Input.Num2);console.log(chalk.bgBlue(`Result is: ${result}`));
}else if(Input.operations === "mod"){const result = exponent(Input.Num1,Input.Num2);console.log(chalk.bgBlue(`Result is: ${result}`));
}else if(Input.operations === "/"){const result = modulo(Input.Num1,Input.Num2);console.log(chalk.bgBlue(`Result is: ${result}`));
}else if(Input.operations === "Quit"){console.log(chalk.bgBlue("Thank you for using my Calculator.")); quit();}
};
ClaCulator();

const Control = async() => {
const konfirm = await inquirer.prompt(
    [
        {
            type: "confirm",
            name: "please",
            message: "More Calculation: "
        }
    ]

    );
while (konfirm.please != "n"){
ClaCulator();
};
};
/*------------------------------------------------------------------------------------
Program: calculator.ts
Function: Get three inputs 1. First Number 2. Second Number 3. Operator and
shows operation on the number na prompts for continue or not
-------------------------------------------------------------------------------------*/
import inquirer from "inquirer"; // inquirer module inlucded
import chalk from "chalk"; // chalk module included
console.log(chalk.bgBlue.red("C A L C U L A T O R"));
let inputChoice = {
    control: 'Y'
};
while (inputChoice.control == 'y' || inputChoice.control == 'Y') { // program will continue will input choice is other that y/Y
    let FirstNum = await inquirer.prompt([{
            name: "Num1",
            type: "number",
            message: "Enter fisrt number: "
        }
    ]);
    let SecondNum = await inquirer.prompt([{
            name: "Num2",
            type: "number",
            message: "Enter second number: "
        }
    ]);
    let Operator = await inquirer.prompt([{
            name: "Option",
            type: "string",
            message: "Enter Opetrator (+,-,*,/): "
        }
    ]);
    if (Operator.Option == '+') { // operation as per feeded operator
        console.log("Sum of " + FirstNum.Num1 + " and " + SecondNum.Num2 + " is: " + (FirstNum.Num1 + SecondNum.Num2));
    }
    else if (Operator.Option == '-') {
        console.log("Subtraction of " + FirstNum.Num1 + " and " + SecondNum.Num2 + " is: " + (FirstNum.Num1 - SecondNum.Num2));
    }
    else if (Operator.Option == '*') {
        console.log("Product of " + FirstNum.Num1 + " and " + SecondNum.Num2 + " is: " + (FirstNum.Num1 * SecondNum.Num2));
    }
    else if (Operator.Option == '/') {
        console.log(FirstNum.Num1 + " Divided by " + SecondNum.Num2 + " is: " + (FirstNum.Num1 / SecondNum.Num2));
    }
    else {
        console.log(chalk.red.bold("Not valid operator..."));
    }
    inputChoice = await inquirer.prompt([{
            name: "control",
            message: "More Calculations(y/n) : "
        }
    ]);
}

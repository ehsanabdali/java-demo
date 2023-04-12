// Program checks the input wheather it is Wovel or not
// it prints that the input letter it Wovel otherwise it 
// it is not Wovel.
//-------------------------------------------------------
import inquirer from "inquirer";
import chalk from "chalk";
//
let inputLetter = {
 letter: ''
}
while( inputLetter.letter !== '1'){

    inputLetter = await inquirer.prompt([{
        name: "letter",
        message: "Type any letter (1 to quit): "}
    ]);
    let toLowerInput:string = inputLetter.letter.toLowerCase();
if( toLowerInput == 'a' || toLowerInput == 'e'|| toLowerInput == 'i' || toLowerInput == 'o' ||  toLowerInput == 'u') {
console.log(`\"${inputLetter.letter}\" is a Wovel....`);
}
else{
    console.log(`\"${inputLetter.letter}\" is a Consonant....`);
}
}
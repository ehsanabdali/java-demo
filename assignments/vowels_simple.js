/*--------------------------------------------------------------------------
Program: Prints Wovel or Consonant letter status
Function: Check the String and print each leter status if it is Wovel or not
--------------------------------------------------------------------------*/
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
export {};

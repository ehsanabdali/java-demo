let myString: string = "United Stats of America";
let myStrings: string = myString.toUpperCase();
//
console.log(myString);
for (let i: number =0; i< myStrings.length; i++){
    if(myStrings[i] === 'A' || myStrings[i] === "E" || myStrings[i] === "I" || myStrings[i] === "O" || myStrings[i] === "U"){

        console.log(myString[i]+" is Vowel");

    } else{
        if(myString[i] == ' '){
//
        }else {
            console.log(myString[i]+" is Consonant");
        }
    }
}


export{}


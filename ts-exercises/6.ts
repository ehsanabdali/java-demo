// Stripping Names: Store a person’s name, and include some 
// whitespace characters at the beginning and end of the name. 
//
let myName:string = " \t\t Qaid-e-Azam \n \t\t ";
let myMessageNative:string = "Name with Spaces: ";
let myMessageStriped:string = "Name with stripped spaces: ";
console.log(myMessageNative+myName);
console.log(myMessageStriped+myName.trim());

export{}
"use strict";
// For loops
// const loop = () => {
//     for (let i=0; i<10; i++){
//         console.log("I Value is: ",i);
//     }
// }
// loop();
// const Students = ["ST1","ST2","ST3","ST4"];
// for(let i=0; i< Students.length; i++){
//     console.log(Students[i]);
// }
//============================
//
// const cleanCity = ["ISB","LHR","PSH","QTA","KHI"];
// for (let i=0; i<cleanCity.length;i++){
//     if("LHRs" === cleanCity[i]){
//         console.log("It is clean city");
//         break;
//     }
//     }
//     console.log("not found");
//==========================================
//Nested for loop
const fName = ["AA", "BB", "CC", "DD"];
const lName = ["XX", "YY", "ZZ"];
const fullName = [];
//
for (let i = 0; i < fName.length; i++) {
    for (let j = 0; j < lName.length; j++) {
        fullName.push(fName[i] + lName[j]);
    }
}
console.log(fullName);

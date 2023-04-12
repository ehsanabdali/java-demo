var pets:string[] = [];
pets[0] = "Cat0";
pets[1] = "Cat1";
pets[2] = "Cat2";
pets[3] = "Cat3";
pets[4] = "Cat4";
pets[5] = "Cat5";

var pets2:string[] = ["a","b","c"];
 
// console.log(pets);
// console.log(pets.splice(2, 0, "Dog1", "Dog2")); //Splice removes 0 item after second item and inserts Dog1 and Dog2
// console.log(pets);
// console.log(pets.slice(2, 4));  /*Slice does not remove any item rather make an 
//                                 rray of items after 2 till 4 like item 3rd to 4th in current status*/
// console.log(pets);
// for(const i of pets){
// console.log(i);
// };
// pets.forEach((element,index )=> {
//     console.log(element,index);
// });

//var allpets = pets.concat(pets2);
// console.log(allpets);
// for(const i of allpets){
//     console.log(i);

// };
// allpets.forEach(element,index) => {
//     console.log(element,index);    
// });   

/// Copy an arary
//method1

// const petsCopy = [...pets];
// console.log(petsCopy);
// //method2
// // const petsCopy2 = Array.from(pets);
// //method3
// pets.pop();

// const petsCopy3 = pets.slice();
// console.log(petsCopy3);

const Aliaspets = pets;
console.log(Aliaspets);
export{}
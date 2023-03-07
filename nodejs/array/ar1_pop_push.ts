// Array of 6 elements initialized
let frt=["Apple","Banana","Orange","Grapes","Strawbary","Peaches"];
console.log(frt); // print out array
frt.pop();  // last element popped
frt.pop();  // now last element is popped out too
console.log(frt); //print remaining elements of array
frt.push("Dates"); // inserted one fruit at end
//
console.log(frt.shift()); // First element of array removed
console.log(frt); //print remained elements of array
frt.unshift("Apples"); //Apple fruit inserted at first position
console.log(frt);  // print the array
console.log(frt.shift()); // shift() function returns the value
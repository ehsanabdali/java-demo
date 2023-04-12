// Array of 6 elements initialized
let frt=["Apple","Banana","Orange","Grapes","Strawbary","Peaches"];
console.log("print Arary frt:",frt); // print out array ["Apple","Banana","Orange","Grapes","Strawbary","Peaches"]
console.log("popped: ",frt.pop());  // last element popped and prints Peaches
console.log("again popped: ",frt.pop());  // now last element is popped out too and prints Strawbary
console.log("print array frt: ",frt); //print remaining elements of array ["Apple","Banana","Orange","Grapes"]
console.log("pushed dates : ",frt.push("Dates")); // inserted one fruit at end prints 5 (which shows total number of elements including Dates)
console.log("print index of Dates: ",frt.indexOf("Dates"));
console.log("pushed Watermelon: ",frt.push("Watermelon")); // inserted one fruit at end prints 5 (which is the lenght of array frt)
//
console.log("shift : ",frt.shift()); // First element of array removed
console.log("print array frt: ",frt); //print remained elements of array
console.log("unshfit Apples: ",frt.unshift("Apples")); //Apple fruit inserted at first position
console.log("print arrary frt: ",frt);  // print the array
console.log("shift: ",frt.shift()); // shift() function returns the value
console.log()
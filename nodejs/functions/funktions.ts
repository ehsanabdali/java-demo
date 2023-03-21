console.log("Arrow Functions:");
//
let sum1 = (x:number, y:number):number =>{
    return x+y;
}
let sum2=(a:number,b:number)=>a+b; //we can skip return

console.log(sum1(10,20)); //returns 30
console.log(sum2(10,20));
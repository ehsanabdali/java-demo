const sum = (num1:number, num2:number):number => { return num1+num2};
const sub = (num1:number, num2:number):number => { return num1-num2};
const multiply = (num1:number, num2:number):number => { return num1*num2};
const division = (num1:number, num2:number):number => { return num1/num2};
const exponent = (num1:number, num2:number):number => { return num1**num2};
const modulo = (num1:number, num2:number):number => { return num1%num2};
const quit = () => {};
export {sum, sub, multiply,division, exponent, modulo, quit};
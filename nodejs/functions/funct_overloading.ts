function add(a:number, b:number):number;
function add(a:string, b:string):string;
function add(a:any, b:any){
    return a+b;
};
console.log(add(8,5));
console.log(add("test1","test2"));

// Function overloading with optional parameters:

function Add(a:number, b:number):number;
function Add(a:number, b:number, c:number):number;
function Add(a:number, b:number, c?:number){
if(c) return a+b+c;
return a+b;
};
console.log(Add(1,3,4));
console.log(Add(1,3));

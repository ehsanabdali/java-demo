function getTotal(...numbers: number[]):number {
    let total=0;
    numbers.forEach((num)=> total +=num)
    return total;
};

console.log(getTotal(10,10,1));
console.log(getTotal(2,10,1,10,2,30,0));
console.log(getTotal(2,10,1,10,2,30,0));
var pets=[];
pets[0]="Hen1";
pets[1]="Hen6";
pets[2]="Hen5";
pets[3]="Hen4";
pets[4]="Hen3";
pets[5]="Hen2";
console.log(pets.length,":",pets);
console.log(pets.length,":",pets.sort());
console.log(pets.splice(2,1,"Dog1","Dog2"));
console.log(pets.length,":",pets);
console.log(pets.slice(2,1));
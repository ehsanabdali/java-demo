var pets = [];
pets[0] = "Cat";
pets[1] = "Dog";
pets[2] = "Hen1";
pets[3] = "Hen2";
pets[4] = "Hen3";
pets[5] = "Hen4";
console.log(pets);
pets.splice(2, 0, "Dog1", "Dog2");
console.log(pets);
console.log(pets.slice(2, 4));

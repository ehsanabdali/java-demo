function isEligible(personOBJ) {
    if (personOBJ.age >= 50) {
        console.log(personOBJ.age);
    }
    else {
        console.log("you are young...");
    }
}
var abdali = {
    name: "ehsan",
    age: 30
};
isEligible(abdali);

interface Person {
    name: string;
    age: number;
}

function isEligible(personOBJ: Person){
    if(personOBJ.age >= 50){
    console.log(personOBJ.age);
    }
    else{
        console.log("you are young...")
    }
    if(personOBJ.age >= 50?console.log(personOBJ.age):console.log("you are young"))
}

let  abdali = {
    name: "ehsan",
    age: 30
};

isEligible(abdali);
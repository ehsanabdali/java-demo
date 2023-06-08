let user = {
    fName: "Ehsan",
    lName: "Abdali",
    Address: "Nizab Block",
    gender: "Male",
    hobbies: ["reading","cricket","hockey","cycling"],
    age: 30,
    sbiling: {
        sisters: 2,
        brothers: 3,
        father: "live",
        mother: "live",
        foccupation: "job",
        moccupation: "house wife"
    },
    salary: (age:number) => (age < 40 ? 40000:50000)
}
console.log("cricket" in user.hobbies);
console.log(user.salary(user.age));
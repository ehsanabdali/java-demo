// Greetings: Start with the array you used in Exercise 11, but 
// instead of just printing each person’s name, print a message to them.
// The text of each message should be the same, but each message should 
// be personalized with the person’s name.
// -------------------------------------------------------------------------
var names = ["Ali", "Ahmad", "Ramzan", "Imran", "Adnan"];
for (var i = 0; i < names.length; i++) {
    console.log("Hi ".concat(names[i], ", did you attend the lecture today?"));
}

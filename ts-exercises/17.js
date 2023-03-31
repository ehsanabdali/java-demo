"use strict";
exports.__esModule = true;
/*--------------------------------------------------------------------------------------
    Shrinking Guest List: You just found out that your new dinner table won’t arrive in time
    for the dinner, and you have space for only two guests.
    • Start with your program from Exercise 16. Add a new line that prints a message saying
    that you can invite only two people for dinner.

    • Remove guests from your list one at a time until only two names remain in your list.
    Each time you pop a name from your list, print a message to that person letting them
    know you’re sorry you can’t invite them to dinner.

    • Print a message to each of the two people still on your list, letting them know they’re
    still invited.

    • Remove the last two names from your list, so you have an empty list. Print your list to
    make sure you actually have an empty list at the end of your program.
--------------------------------------------------------------------------------------*/
var GuestsList = ["Adnan Ali Khan", "Ahmed Yar Jang", "Khuda Baksh Rasool", "Ahmed Khan Junano"];
// Adding guest in the begining position of array
GuestsList.unshift("Ahmed Raza");
// Adding guest at the end of the array  
GuestsList.push("Imran Khan");
// calculating the middle index number of array
var midOfArray = Math.floor(GuestsList.length / 2);
// Adding guest in the mid of array
GuestsList.splice(midOfArray, 0, "Nawaz Sharif");
// storing current numbers of person
var j = GuestsList.length;
// sending message to overspaces persons
for (var i = 0; i < j - 2; i++) {
    console.log("Aslam-o-Alaikam Dear ".concat(GuestsList[i], ", I can invite only two people for dinner. I am sorry I cannot invite you to the dinner."));
    GuestsList.pop();
}
// sending message to lucky peoples
for (var i = 0; i < GuestsList.length; i++) {
    console.log("Aslam-o-Alaikam, Dear ".concat(GuestsList[i], ", you are still in my invitation list and you are cordially invited for dinner in PC Hotel, Lahore on Saturday 8 PM."));
}
// removing all two persons from the array    
GuestsList.splice(0, 2);
console.log(GuestsList);

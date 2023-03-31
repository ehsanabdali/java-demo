// Guest List: If you could invite anyone, living or deceased, to dinner, who 
// would you invite? Make a list that includes at least three people you’d like 
// to invite to dinner. Then use your list to print a message to each person, 
// inviting them to dinner.
//------------------------------------------------------------------------------//
var guestList = ["Adnan Ali Khan", "Ahmed Yar Jang", "Khuda Rasool", "Ahmed Khan Junano"];
for (var i = 0; i < guestList.length; i++) {
    console.log("Aslam o Alaikam Dear ".concat(guestList[i], ", \nyou are cordially invited for dinner in Lounge Haritage, Hotel One, Lahore on comming Saturady at sharp 8 PM."));
}

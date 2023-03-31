// Changing Guest List: You just heard that one of your guests can’t make the dinner,
// so you need to send out a new set of invitations. You’ll have to think of someone 
// else to invite.
//------------------------------------------------------------------------------------//

const GuestsList:string[] = ["Adnan Ali Khan" ,  "Ahmed Yar Jang" , "Khuda Baksh Rasool" , "Ahmed Khan Junano"];
let notAbleToCome:string = "Khuda Baksh Rasool"; // Guest not able to come
let AlternateGuest:string = "Muhammad Zia"; // Guest not able to come
let IdxOfAbsent:number = GuestsList.indexOf(notAbleToCome);  // Identify the index of absent person
GuestsList.splice(IdxOfAbsent,1,AlternateGuest); // Drop the Absent and insert new person
for (let i = 0; i < GuestsList.length; i++) {   //send invitation to new list of guests
console.log(`Aslam o Alaikam, Dear ${GuestsList[i]}, you are cordially invited for dinner in PC Hotel, Lahore on Saturday 8 PM.`);
}
console.log("Guest Cannot come: ",notAbleToCome);

export{};
/* 
-   More Guests: You just found a bigger dinner table, so now more space is available.
    Think of three more guests to invite to dinner.
-   Start with your program from Exercise 15. Add a print statement to the end of your
    program informing people that you found a bigger dinner table.
-   Add one new guest to the beginning of your array.
-   Add one new guest to the middle of your array. • Use append() to add one new guest 
    to the end of your list. • Print a new set of invitation messages, one for each person
    in your list
------------------------------------------------------------------------------------------------------*/
const GuestsList:string[] = ["Adnan Ali Khan" ,  "Ahmed Yar Jang" , "Khuda Baksh Rasool" , "Ahmed Khan Junano"];
GuestsList.unshift("Ahmed Raza");  // Adding guest in the begining position of array
GuestsList.push("Imran Khan");  // Adding guest at the end of the array
let midOfArray:number = Math.floor(GuestsList.length / 2); // calculating the middle index number of array
GuestsList.splice(midOfArray,0,"Nawaz Sharif"); // Adding guest in the mid of array
for (let i = 0; i < GuestsList.length; i++) {   //send invitation to new list of guests
    console.log(`Aslam o Alaikam, Dear ${GuestsList[i]}, you are cordially invited for dinner in PC Hotel, Lahore on Saturday 8 PM.`);
    }

    export{};
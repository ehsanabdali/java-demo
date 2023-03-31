// Your Own Array: Think of your favorite mode of transportation, such as a motorcycle 
// or a car, and make a list that stores several examples. Use your list to print a series
// of statements about these items, such as “I would like to own a Honda motorcycle.”
// CREATED: 12-03-23 TIME: 23:39 HR BY: Ehsan
//---------------------------------------------------------------------------------------------

const myFavTransport:string[] = ["Honda Civic RS" , "MG HS" , "Audi e-tron GT" , "KIA Sportage AWD"];
for (let i=0; i < myFavTransport.length; i++){
    console.log(`I have new \"${myFavTransport[i]}\" car.`);
}

export{};
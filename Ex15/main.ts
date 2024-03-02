let guestlist = ["Saad", "Shehzar", "Aieza", "Hania"];

let dontcome = guestlist[0];

console.log(dontcome, "nahin a skta");

guestlist.splice(0, 1, "Amir");

guestlist.forEach(guest => console.log(`Salam ${guest},would you like to dinner with me?`));
// Creating a Guest List Array
var guestlist = ["Saad", "Aieza", "Shehzar", "Hania"];
// Maiking variable for those guest who cant come 
var dontcome = guestlist[0];
// Print the name of guest who cant come
console.log(dontcome, "nahin a skta");
// Add or remove values of guest list Array
guestlist.splice(0, 1, "Amir");
// Message print for bigger table 
console.log("Good News ! we have found a bigger table for dinner.");
// Adding a new value at starting index of array
guestlist.unshift("Ali");
// Adding a new value at ending index of array
guestlist.push("Zain");
// Adding a new guest at meddle index of array
var middleindex = Math.floor(guestlist.length / 2);
// Adding a new guest of middle index of array 
guestlist.splice(middleindex, 0, "Usama");
// Print message updated list
console.log("Updated list of our guests");
// Sending a invitation message to our guests one by one with their names
guestlist.forEach(function (oneguest) { return console.log("Salam ".concat(oneguest, ", would you like to dinner with me? ")); });

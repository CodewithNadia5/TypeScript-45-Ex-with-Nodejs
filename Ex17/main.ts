// Creating a Guest List Array
let guestlist = ["Saad","Aieza", "Shehzar", "Hania"];

// Maiking variable for those guest who cant come 
let dontcome = guestlist[0];

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
let middleindex: number = Math.floor(guestlist.length / 2);

// Adding a new guest of middle index of array 
guestlist.splice(middleindex, 0, "Usama");

// Print message updated list
console.log("Updated list of our guests");

// Sending a invitation message to our guests one by one with their names
guestlist.forEach(oneguest => console.log(`Salam ${oneguest}, would you like to dinner with me? `));

// Inform that only two guests can be invited for dinner
console.log("unfortunaitly, the new dinner table want arrive on time, so i can only invite two guests todinner with me");

// using while.loop to remove guests from the array until only two names remain
while(guestlist.length > 2){
    let removedguest = guestlist.pop();
    console.log(`Sorry, ${removedguest} i cant invite you to dinner`);
}
// Sending a invitations to the last two guests on the list
console.log("invitations to the last two guests");
guestlist.forEach(lasttwo => console.log(`luckly ${lasttwo}, you are still invited to dinner`));

// Removing last two guest from the list
guestlist.pop();
guestlist.pop();


console.log("Empty List", guestlist);
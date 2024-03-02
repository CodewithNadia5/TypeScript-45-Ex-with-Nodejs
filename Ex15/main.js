var guestlist = ["Saad", "Shehzar", "Aieza", "Hania"];
var dontcome = guestlist[0];
console.log(dontcome, "nahin a skta");
guestlist.splice(0, 1, "Amir");
guestlist.forEach(function (guest) { return console.log("Salam ".concat(guest, ",would you like to dinner with me?")); });

function show_magicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
// Function to make magicians great through .map() it will modify array
function make_great(magicians) {
    return magicians.map(function (name) { return "The Great ".concat(name); });
}
// Define an array of magicians names
var magician_names = ["Harry Poter", "Saad", "Shehzar"];
// making a copy of orignal array through .Slice() function
var copy_magicians_names = magician_names.slice();
// Modify the copy of orignal array through .slice() function
var copy_great_magicians = make_great(copy_magicians_names);
// show both arrays orignal and copied
// Original
console.log("Original Array\n");
show_magicians(magician_names);
// Copied
console.log("\nCopied Array\n");
show_magicians(copy_great_magicians);

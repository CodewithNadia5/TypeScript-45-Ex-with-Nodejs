function show_magicians(magicians: string[]){
    magicians.forEach(name => console.log(name));
}


// Function to make magicians great through .map() it will modify array
function make_great(magicians: string[]){
    return magicians.map(name => `The Great ${name}`);
}

// Define an array of magicians names
let magician_names = ["Harry Poter", "Saad", "Shehzar"];

// making a copy of orignal array through .Slice() function

let copy_magicians_names = magician_names.slice()

// Modify the copy of orignal array through .slice() function
let copy_great_magicians = make_great(copy_magicians_names);

// show both arrays orignal and copied

// Original
console.log("Original Array\n")
show_magicians(magician_names);

// Copied
console.log("\nCopied Array\n")
show_magicians(copy_great_magicians);
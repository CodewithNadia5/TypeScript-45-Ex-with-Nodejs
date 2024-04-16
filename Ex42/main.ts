function show_magicians(magicians: string[]){
    magicians.forEach(name => console.log(name));
}


// Function to make magicians great through .map() it will modify array
function make_great(magicians: string[]){
    return magicians.map(name => `The Great ${name}`);
}

// Define an array of magicians names
let magician_names = ["Harry Poter", "Saad", "Shehzar"];

// Call make_great function to modify magicians names
let great_magicians = make_great(magician_names);

show_magicians(great_magicians)

console.log(great_magicians)


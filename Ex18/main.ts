// making a array of countries and print its orignal order
let Countriestovisit: String[] = ["China", "Denmark", "Bangladesh", "Australia"];
console.log("Orignal Order:", Countriestovisit);

// print the array in alphabatical order without modifying the actual array list
console.log("Alphabatical Order:", [...Countriestovisit].sort());

// show that the array is still in its orignal order
console.log("still in orignal order:", Countriestovisit);

// print the array in reverse without modifying the actual array list
console.log("Reverse Order:", [Countriestovisit].reverse());

// show that the array is still in its orignal order
console.log("still in orignal order:", Countriestovisit);

// we have changed the orignal array order now
console.log("Orignal Array Reversed:", Countriestovisit.reverse());

// print the array to show its back to its orignal order
console.log("Back to Orignal Order:", Countriestovisit.reverse());

// print the array to show that its order has been changed in alphabatical order now
console.log("Sorted in alphatical order:", Countriestovisit.sort());

// we have changed again the orignal array order now in reverse order again
console.log("Orignal Array Reversed again:", Countriestovisit.reverse());

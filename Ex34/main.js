// creating a array
var pizza = ["Chikan tikka", "Malai Cheese", "Fajita"];
//  using for_loop
for (var _i = 0, pizza_1 = pizza; _i < pizza_1.length; _i++) {
    var onePizza = pizza_1[_i];
    console.log("I Like ".concat(onePizza, " pizza"));
}
// print a message outside of the for_loop
console.log("Pizza is love");

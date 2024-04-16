// Define a function to creat a car object with optional options...
 function creat_car(manufacturer, model, ...options){
    //  Intialize a car object with manufacturer and model
    let car = {
        manufacturer: manufacturer,
        model: model,
    };

    // Add additional options to the car object
    options.forEach(option => {
        let [key, value] = option.split(":");
        car[key.trim()] = value.trim();
    });

    return car;
}

// Call the function to create a car object
let my_car = creat_car("Toyota", "Corrolla", "colour: Black", "Sunroof: True", "Year: 2024");

// print the variable to ensure all the information is stored correctly in the car object
console.log(my_car);
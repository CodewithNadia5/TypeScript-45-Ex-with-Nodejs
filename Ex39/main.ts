// Creating a function with parameters which return a value in string
function city_country(city: string, country: string) : string{
    return`${city} , ${country}`;
}

//  Calling a function and print the returned value

city_country("Karachi", "Pakistan");

console.log(city_country("Karachi", "Pakistan"));

console.log(city_country("Tokyo", "Japan"));

console.log(city_country("Berlin", "Germany"));

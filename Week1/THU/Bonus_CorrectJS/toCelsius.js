/**
 * converts temperatures from Fahrenheit to Celsius
 */
var toCelsius = function (f) {
    return (5/9) * (f-32);
}

console.log(toCelsius(57));

/** the keyword "return" in line 5 was missing. If a function needs to output a value, it has to have a return! */
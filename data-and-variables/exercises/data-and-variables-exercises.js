// Rounding function

let roundTwoDecimals = function(num){
    let num2 = Math.round(num * 100) / 100;
    return num2;
}

// Declare and assign the variables below

let shuttleName = "Determination";

let shuttleSpeedMph = 17500;

let distanceMarsKm = 225000000

let distanceMoonKm = 384400;

let milesPerKm = .621;

// Use console.log to print the 'typeof' each variable. Print one item per line.

console.log(typeof(shuttleName))

console.log(typeof(shuttleSpeedMph))

console.log(typeof(distanceMarsKm))

console.log(typeof(distanceMoonKm))

console.log(typeof(milesPerKm))

// Calculate a space mission below

let milesToMars = distanceMarsKm * milesPerKm;

let hoursToMars = milesToMars / shuttleSpeedMph;

let daysToMars = hoursToMars / 24;


// Print the results of the space mission calculations below

console.log(`${shuttleName} will take ${Math.round(daysToMars * 100) / 100} days to reach Mars.`)

// Calculate a trip to the moon below

let milesToMoon = distanceMoonKm * milesPerKm;

let hoursToMoon = milesToMoon / shuttleSpeedMph;

let daysToMoon = hoursToMoon / 24;

// Print the results of the trip to the moon below

console.log(`${shuttleName} will take ${roundTwoDecimals(daysToMoon)} days to reach the Moon.`)

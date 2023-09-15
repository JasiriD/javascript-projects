// Initialize Variables below
let date = `Monday 2019-03-18`;
let time = `10:05:34 PM`;
let astronautCount = 7;
let astronautStatus = `ready`;
let averageAstronautMassKg = 80.7;
let crewMassKg = astronautCount * averageAstronautMassKg;
let fuelMassKg = 760000;
let shuttleMassKg = 74842.31;
let totalMassKg = crewMassKg + fuelMassKg + shuttleMassKg;
let maxMass = 850000;
let fuelTempCelsius = -225;
let minimunFuelTemp = -300;
let maximumFuelTemp = -150;
let fuelLevel = `100%`;
let weatherStatus = `clear`;
preparedForLiftOff = true;



// add logic below to verify total number of astronauts for shuttle launch does not exceed 7

if(astronautCount > 7){
    preparedForLiftOff = false;
    console.log("This mission is overcrowded!");
}

// add logic below to verify all astronauts are ready

if(astronautStatus !== `ready`){
    preparedForLiftOff = false;
    console.log("The astroauts for this mission are not ready!");
}
// add logic below to verify the total mass does not exceed the maximum limit of 850000

if(totalMassKg > maxMass){
    preparedForLiftOff = false;
    console.log("The mass on this mission exceeds the maximum limit!");
}

// add logic below to verify the fuel temperature is within the appropriate range of -150 and -300

if(fuelTempCelsius < -300){
    preparedForLiftOff = false;
    console.log("The fuel for this mission is too cold!")
}

if(fuelTempCelsius > -150){
    preparedForLiftOff = false;
    console.log("The fuel for this mission is too hot!")
}

// add logic below to verify the fuel level is at 100%

if (fuelLevel < "100%"){
    preparedForLiftOff = false;
    console.log("The fuel for this mission is not at capacity!")
}

// add logic below to verify the weather status is clear

if(weatherStatus !== `clear`){
    preparedForLiftOff = false;
    console.log(`The weather for this mission is to incliment!`)
}
// Verify shuttle launch can proceed based on above conditions


if (astronautCount <= 7){
    if (astronautStatus === `ready`){
        if(totalMassKg <= maxMass){
            if(fuelTempCelsius <= -150 && fuelTempCelsius >= -300){
                if(fuelLevel === `100%`){
                    if(weatherStatus === `clear`){
                        console.log(`Shuttle is prepared for liftoff!\n`);
                    }
                }
            }
        }
    }
}
else{
    console.log(`I don't know what's wrong with the mission!`);
}
if(preparedForLgitiftOff = true){
    console.log(
        `All systems are a go! Initiating space shuttle launch sequence.\n
        -----------------------------------------------------------------------\n
        Date = ${date}\n
        Time = ${time}\n
        Astronaut Count = ${astronautCount}\n
        Crew Mass = ${crewMassKg} kg\n
        Fuel Mass = ${fuelMassKg} kg\n
        Shuttle Mass = ${shuttleMassKg} kg\n
        Total Mass = ${totalMassKg} kg\n
        Fuel Temperature = ${fuelTempCelsius} C\n
        Weather Status = ${weatherStatus}\n
        ------------------------------------------------------------------------\n
        \n
        Have a safe trip astronauts!`
    )
}


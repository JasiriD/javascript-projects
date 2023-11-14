// Code your orbitCircumference function here:
let distanceTravelled = 0;

function orbitCircumference(r){
  let C = 0;

  C = 2 * Math.PI * r;

  return C;
}

// Code your missionDuration function here:

function missionDuration(orbitsCompleted, orbitRadius = 2000, orbitSpeed = 28000){
  distanceTravelled = Math.round(orbitCircumference(orbitRadius) * orbitsCompleted * 100)/100;

  return Math.round((distanceTravelled/orbitSpeed)*100)/100;
}

// Copy/paste your selectRandomEntry function here:

function selectRandomEntry(array){
  let randomSelection = Math.floor(Math.random()*array.length);
  return array[randomSelection];
}

// Code your oxygenExpended function here:

function oxygenExpended(candidate, orbitsCompleted = 3, orbitRadius, orbitSpeed){
  let spacewalkTime = missionDuration(orbitsCompleted);

  let usedOxygen = Math.round(candidate.o2Used(spacewalkTime)*1000)/1000;

  return(`${candidate.name} will perform the spacewalk, which will last ${spacewalkTime} hours and
  require ${usedOxygen} kg of oxygen.`)
}


// Candidate data & crew array.
let candidateA = {
   'name':'Gordon Shumway',
   'species':'alf',
   'mass':90,
   'o2Used':function(hrs){return 0.035*hrs},
   'astronautID':414
 };
 let candidateB = {
   'name':'Lassie',
   'species':'dog',
   'mass':19.1,
   'o2Used':function(hrs){return 0.030*hrs},
   'astronautID':503
 };
 let candidateC = {
   'name':'Jonsey',
   'species':'cat',
   'mass':3.6,
   'o2Used':function(hrs){return 0.022*hrs},
   'astronautID':796
 };
 let candidateD = {
   'name':'Paddington',
   'species':'bear',
   'mass':31.8,
   'o2Used':function(hrs){return 0.047*hrs},
   'astronautID':291
 };
 let candidateE = {
   'name':'Pete',
   'species':'tortoise',
   'mass':417,
   'o2Used':function(hrs){return 0.010*hrs},
   'astronautID':599
 };
 let candidateF = {
   'name':'Hugs',
   'species':'ball python',
   'mass':2.3,
   'o2Used':function(hrs){return 0.018*hrs},
   'astronautID':890
 };
  
 let crew = [candidateA,candidateC,candidateE];
 
 missionDuration(5);

 console.log(`The mission will travel ${distanceTravelled} km around the planet and it will take
  ${missionDuration(5)} hours to complete.`)

  console.log(oxygenExpended(candidateF));
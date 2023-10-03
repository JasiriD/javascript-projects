// Code your selectRandomEntry function here:

let crew = [];

function selectRandomEntry(array){
  let randomSelection = Math.floor(Math.random()*array.length);
  return array[randomSelection];
}

let selectedAnimals = [];

function select3Animals(){
  while(selectedAnimals.length < 3){
    let currentSelectedAnimal = selectRandomEntry(idNumbers);
    if(selectedAnimals.includes(currentSelectedAnimal)){
    }
    else{
      selectedAnimals[selectedAnimals.length] = currentSelectedAnimal
    }
  }  
}
// Code your buildCrewArray function here:

function buildCrewArray(array1, array2){

for(i2 = 0; i2 < array1.length; i2++){
  for(i = 0; i < array2.length; i++){
    if(array2[i].astronautID === array1[i2]){
    crew[i2] = (array2[i].name);
    }
  }
}
  return crew;
}



let idNumbers = [291, 414, 503, 599, 796, 890];


// Here are the candidates and the 'animals' array:
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

let animals = [candidateA,candidateB,candidateC,candidateD,candidateE,candidateF];

// Code your template literal and console.log statements:

select3Animals();

buildCrewArray(selectedAnimals, animals);

console.log(`${crew[0]}, ${crew[1]}, and ${crew[2]} are going to space!`);

// LECTURE: Values and Variables
const country = "Canada";
const continent = "North America";
let population = 38;
console.log(country);
console.log(continent);
console.log(population);

// LECTURE: Data Types
const isIsland = false;
let language;
console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof langugae);

// LECTURE: let, const and var
language = "English";

// LECTURE: Basic Operators
console.log(population/2);
population++;
console.log(population);

let finlandPopulation = 6;
console.log(population > finlandPopulation);

let averagePopulation = 33;
console.log(population < averagePopulation);

const description = country + " is in " + continent + ", and its " + population + " million people speak " + language + ".";
console.log(description);

// LECTURE: Strings and Template Literals
const descriptionNew = `${country} is in ${continent}, and its ${population} million people speak ${language}.`
console.log(descriptionNew);

// LECTURE: Taking Decisions: if / else Statements
let populationDifference;
if (population > averagePopulation) {
  console.log(`${country}'s population is above average.`)
} else {
  populationDifference = averagePopulation - population;
  console.log(`${country}'s population is ${populationDifference} million below average.`)
}

// LECTURE: Type Conversion and Coercion
// + triggers conversion to strings, - triggers conversions to numbers
console.log('9' - '5'); // 4
console.log('19' - '13' + '17'); // 617
console.log('19' - '13' + 17); // 23
console.log('123' < 57); // false?
console.log(5 + 6 + '4' + 9 - 4 - 2); // 1143

// LECTURE: Equality Operators: == vs. ===
// == is loose equality and performs type coercion (18 == '18' = true)
// === is strict equality and no type coercion so (18 === '18' = false)

// const numNeighbours = Number(prompt("How many neighbouring countries does your country have?"));

// if (numNeighbours === 1) {
//   console.log("Only 1 border!")
// } else if (numNeighbours > 1) {
//   console.log("More than 1 border!")
// } else {
//   console.log("No borders");
// }

// LECTURE: Logical Operators
if (language === "English" && population < 50 && !isIsland) {
  console.log(`${country} is perfect to live in!`)
} else {
  console.log(`You'll need to find another country.`)
}

// LECTURE: The switch Statement
const day = 'thursday';

switch(day) {
  case 'monday':
    console.log("Planning my week");
    console.log('Go to coding meetup');
    break;
  case 'tuesday':
    console.log("Prep for class");
    break;
  case 'wednesday':
  case 'thursday':
    console.log("Attending classes");
    break;
  case 'saturday':
  case 'sunday':
    console.log("Enjoy the weekend!");
    break;
  default:
    console.log("Not a valid day");
}

const spokenLanguage = 'chinese';

switch (spokenLanguage) {
  case 'chinese':
  case 'mandarin':
    console.log("Most number of native speakers")
    break;
  case 'spanish':
    console.log("2nd place in number of native speakers")
    break;
  case 'english':
    console.log("3rd place")
    break;
  case 'hindi':
    console.log("4th place")
    break;
  case 'arabic':
    console.log("5th most spoken language")
    break;
  default: 
    console.log("Cool language too")
}

// LECTURE: The Conditional (Ternary) Operator

population > 33 ? console.log(`${country}'s population is above average.`) : console.log(`${country}'s population is below average.`);
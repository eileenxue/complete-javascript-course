'use strict';

// LECTURE: Functions
function describeCountry (country, population, capitalCity) {
  return `${country} has ${population} million people and its capital city is ${capitalCity}.`;
}

const canada = describeCountry('Canada', 38, 'Ottawa');
const usa = describeCountry('USA', 332, 'Washington DC');
const japan = describeCountry('Japan', 14, 'Tokyo');

console.log(canada, usa, japan);

// LECTURE: Function Declarations vs. Expressions
// Function declaration
function percentageOfWorld1 (population) {
  return population/7900*100;
}

const canadaPop = percentageOfWorld1(38)
const usaPop = percentageOfWorld1(332)
const japanPop = percentageOfWorld1(14)
console.log(canadaPop, usaPop, japanPop)

// Function expression
const percentageOfWorld2 = function (population) {
  return population/7900*100;
}

const canadaPop2 = percentageOfWorld2(38)
const usaPop2 = percentageOfWorld2(332)
const japanPop2 = percentageOfWorld2(14)
console.log(canadaPop2, usaPop2, japanPop2)


// LECTURE: Arrow Functions
const percentageOfWorld3 = population => population/7900*100;
const canadaPop3 = percentageOfWorld3(38)
console.log(canadaPop3);

// LECTURE: Functions Calling Other Functions
function describePopulation (country, population) {
  const percentage = percentageOfWorld1(population);
  return `${country} has ${population} million people, which is about ${percentage} of the world.`
}

console.log(describePopulation('Canada', 38));

// LECTURE: Introduction to Arrays
const populations = [35, 26, 11, 101];
console.log(populations.length === 4)

const percentages = [percentageOfWorld1(populations[0]), percentageOfWorld1(populations[1]), percentageOfWorld1(populations[2]), percentageOfWorld1(populations[3])];
console.log(percentages);

// LECTURE: Basic Array Operations (Methods)
const neighbours = ['USA', 'Canada'];
neighbours.push('Utopia');
neighbours.pop();
console.log(neighbours)

if(!neighbours.includes('Germany')) console.log('Probably not a central European country.');

const indexOfUSA = neighbours.indexOf('USA');

neighbours[indexOfUSA] = 'United States of America';
console.log(neighbours);

// LECTURE: Introduction to Objects
const myCountry = {
  country: 'Canada',
  capital: 'Ottawa',
  languages: ['English', 'French'],
  population: 38,
  neighbours: ['USA'],
  describe: function () {
    return `${this.country} has ${this.population} million ${this.languages[0]} and ${this.languages[1]} speaking people, ${this.neighbours.length} neighbouring country and a capital city called ${this.capital}.`;
  },
  checkIsland: function () {
    return this.isIsland = this.neighbours.length > 0 ? true : false;
  }
}

console.log(myCountry);

// LECTURE: Dot vs. Bracket Notation
console.log(`${myCountry.country} has ${myCountry.population} million ${myCountry.languages[0]} and ${myCountry.languages[1]} speaking people, ${myCountry.neighbours.length} neighbouring country and a capital city called ${myCountry.capital}.`);

console.log(myCountry.population = myCountry.population + 2);
console.log(myCountry.population = myCountry['population'] - 2);

// LECTURE: Object Methods
console.log(myCountry.describe());

console.log(myCountry.checkIsland());
console.log(myCountry.isIsland);

// LECTURE: Iteration: The for Loop
// for (let voter = 1; voter <= 50; voter++){
//   console.log(`Voter number ${voter} is currently voting.`)
// }

// LECTURE: Looping Arrays, Breaking and Continuing
// const populations = [35, 26, 11, 101];
const percentages2 = [];

for (let i = 0; i < populations.length; i++) {
  percentages2.push(percentageOfWorld1(populations[i]));
}

console.log(percentages2);

// LECTURE: Looping Backwards and Loops in Loops
const listOfNeighbours = [['Canada', 'Mexico'], ['Spain'], ['Norway', 'Sweden','Russia']];

for (let i = 0; i < listOfNeighbours.length; i++) {
  // console.log(listOfNeighbours[i])
  for (let j = 0; j < listOfNeighbours[i].length; j++) {
    console.log(`Neighbour: ${listOfNeighbours[i][j]}`)
  }
}

// LECTURE: The while Loop
const percentages3 = [];
let num = 0;
while (num < populations.length) {
  percentages3.push(percentageOfWorld1(populations[num]));
  num++
}

console.log(percentages3)


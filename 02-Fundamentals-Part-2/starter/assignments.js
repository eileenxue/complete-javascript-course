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


// LECTURE: Basic Array Operations (Methods)


// LECTURE: Introduction to Objects


// LECTURE: Dot vs. Bracket Notation


// LECTURE: Object Methods


// LECTURE: Iteration: The for Loop


// LECTURE: Looping Arrays, Breaking and Continuing


// LECTURE: Looping Backwards and Loops in Loops


// LECTURE: The while Loop



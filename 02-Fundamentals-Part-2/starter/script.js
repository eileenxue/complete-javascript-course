'use strict';

// Functions
// function fruitProcessor(apples, oranges) {
//   console.log(apples, oranges);
//   const juice = `Juice with ${apples} apples and ${oranges} oranges.`
//   return juice;
// }

// will only return the console log message
// fruitProcessor(5, 0); 

// store the return value
// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice)

// function declaration (can be called before it's declared through hoisting)
function calcAge1(birthyear) {
  return 2022 - birthyear;
}
const age1 = calcAge1(1992);

// function expression (better practice for orderly code with anonymous functions)
const calcAge2 = function (birthyear) {
  return 2022 - birthyear;
}
const age2 = calcAge2(1992);

console.log(age1, age2);

// arrow functions
// difference between the earlier two: does not get access to "this" keyword
// can be used for one-liner functions where no curly braces needed and the return is implicit
// when there are one parameter, don't need brackets
const calcAge3 = birthyear => 2022 - birthyear;
const age3 = calcAge3(1992);
console.log(age3);

// when more things need to be declared, then need to have {} and return keyword
const yearsUntilRetirement = (birthyear, firstName) => {
  const age = 2022 - birthyear;
  const retirement = 65 - age;
  // return retirement;
  return `${firstName} retires in ${retirement} years.`;
}
console.log(yearsUntilRetirement(1992, 'Kelly'));
console.log(yearsUntilRetirement(1979, 'Bob'));

// Call back functions

function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);

  const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges.`
  return juice;
}

console.log(fruitProcessor(4, 3));

// Methods for Arrays
const friends = ['Bubbles', 'Buttercup', 'Blossom'];

// .push adds to the end of the array
friends.push('Michael');
console.log(friends);

// .unshift adds to the beginning of the array
friends.unshift('Nala');
console.log(friends);

// .pop removes the last element and the return value is the element that was removed
const popped = friends.pop();
console.log("You removed your friend:", popped);
console.log(friends);

// .shift removes the first element
friends.shift();
console.log(friends);

// .indexOf to get the index # of the element, and -1 if it doesn't exist
console.log(friends.indexOf('Blossom'));
console.log(friends.indexOf('Faker'));

// .includes will return a boolean to determine if the element exist in the array
console.log(friends.includes('Bubbles'));
console.log(friends.includes('Nobody'));


// FOR LOOPS
// Three conditions of where it starts, how long it'll run, and how it increases.
for (let rep = 1; rep <= 10; rep++) {
  console.log(`Lifting weights repetition ${rep} 🏋️‍♀️`);
}

const personArray = [
  'Michelle',
  'Smith',
  1990,
  'teacher',
  ['Bobby','Sarah','David'],
  true
];

const types = [];

for (let i = 0; i < personArray.length; i++) {
  console.log(personArray[i], typeof personArray[i]);

  // types[i] = typeof personArray[i];
  types.push(typeof personArray[i]);
}

console.log(types);

const years = [1957, 1987, 1990, 2015];
const ages = [];

for (let i = 0; i < years.length; i++) {
  ages.push(2022 - years[i])
}

console.log(ages);

// Example of continue
console.log(`---STRINGS ONLY---`)
for (let i = 0; i < personArray.length; i++) {
  // if the typeof is not a string, skip it and go to the next iteration
  if (typeof personArray[i] !== 'string') continue;
  console.log(personArray[i], typeof personArray[i]);
}

// Example of break
console.log(`---BREAK AT THE FIRST NUMBER---`)
for (let i = 0; i < personArray.length; i++) {
  // if the typeof is a number, terminate and exit the function immediately
  if (typeof personArray[i] === 'number') break;
  console.log(personArray[i], typeof personArray[i]);
}

// Looping backwards
for (let i = personArray.length -1; i >= 0; i--) {
  console.log(personArray[i]);
}

// Looping within loops
for (let exercise = 1; exercise <= 3; exercise++){
  console.log(`===Starting exercise ${exercise}===`)
  for (let rep = 1; rep < 6; rep++){
    console.log(`Lifting weights ${rep} 🏋️‍♀️`)
  }
}

// WHILE LOOP
// Can only specify one condition of how long it runs inside the brackets, the other two conditions are specified elsewhere.
// It's more flexible and doesn't need a counter.
let rep = 1;
while (rep <= 10) {
  console.log(`Lifting weight repition ${rep}`)
  rep++
}

let dice = Math.trunc(Math.random() * 6) + 1;
// console.log(dice)

while (dice !== 6) {
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) console.log(`Loop about to end...`)
}
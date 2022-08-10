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
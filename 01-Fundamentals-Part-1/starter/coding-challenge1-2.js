/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg and height in meter).
Your tasks:
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both versions)
3. Create a Boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.

Test data:
Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95m tall.
Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76m tall.
*/

const markWeight = 78;
const markHeight = 1.69;
const markBMI = markWeight / (markHeight * markHeight);
console.log(markBMI);

const johnWeight = 92;
const johnHeight = 1.95;
const johnBMI = johnWeight / (johnHeight * johnHeight);
console.log(johnBMI);

const markHigherBMI = markBMI > johnBMI;
console.log(markHigherBMI);

// Challenge #2

if (markBMI > johnBMI) {
  console.log(`Mark's BMI (${markBMI}) is higher than John's (${johnBMI}).`)
} else {
  console.log(`John's BMI (${johnBMI}) is higher than Mark's (${markBMI}).`)
}
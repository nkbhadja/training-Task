'use strict';

// Activating Strict Mode
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('I can drive :D');

// const interface = 'Audio';
// const private = 534;

// Functions
function logger() {
  console.log('My name is Jonas');
}

// calling / running / invoking function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

const num = Number('23');


// Function Declarations vs. Expressions

// Function declaration
function calcAge1(birthYeah) {
  return 2037 - birthYeah;
}
const age1 = calcAge1(1991);

// Function expression
const calcAge2 = function (birthYeah) {
  return 2037 - birthYeah;
}
const age2 = calcAge2(1991);

console.log(age1, age2);


// Arrow functions

const calcAge3 = birthYeah => 2037 - birthYeah;
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYeah, firstName) => {
  const age = 2037 - birthYeah;
  const retirement = 65 - age;
  // return retirement;
  return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement(1991, 'Jonas')); console.log(yearsUntilRetirement(1980, 'Bob'));


// Functions Calling Other Functions
function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);

  const juice = `Juice with ${applePieces} piece of apple and ${orangePieces} pieces of orange.`;
  return juice;
}
console.log(fruitProcessor(2, 3));


// Reviewing Functions
const calcAge = function (birthYeah) {
  return 2037 - birthYeah;
}

const yearsUntilRetirements = function (birthYeah, firstName) {
  const age = calcAge(birthYeah);
  const retirement = 65 - age;

  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years`);
    return retirement;
  } else {
    console.log(`${firstName} has already retired 🎉`);
    return -1;
  }
}

console.log(yearsUntilRetirements(1991, 'Jonas'));
console.log(yearsUntilRetirements(1950, 'Mike'));


// Coding Challenge #1


const calcAverage = (a, b, c) => (a + b + c) / 3;
console.log(calcAverage(3, 4, 5));

// Test 1
let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);
console.log(scoreDolphins, scoreKoalas);

const checkWinner = function (avgDolphins, avgKoalas) {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(`Dolphins win 🏆 (${avgDolphins} vs. ${avgKoalas})`);
  } else if (avgKoalas >= 2 * avgDolphins) {
    console.log(`Koalas win 🏆 (${avgKoalas} vs. ${avgDolphins})`);
  } else {
    console.log('No team wins...');
  }
}
checkWinner(scoreDolphins, scoreKoalas);

checkWinner(576, 111);

// Test 2
scoreDolphins = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);
console.log(scoreDolphins, scoreKoalas);
checkWinner(scoreDolphins, scoreKoalas);


// Introduction to Arrays
const friend1 = 'Michael';
const friend2 = 'Steven';
const friend3 = 'Peter';

const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends);

const y = new Array(1991, 1984, 2008, 2020);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = 'Jay';
console.log(friends);
// friends = ['Bob', 'Alice']

const firstName = 'Jonas';
const jonas = [firstName, 'Schmedtmann', 2037 - 1991, 'teacher', friends];
console.log(jonas);
console.log(jonas.length);

// Exercise
const calcAge4 = function (birthYeah) {
  return 2037 - birthYeah;
}
const years = [1990, 1967, 2002, 2010, 2018];

const age4 = calcAge4(years[0]);
const age5 = calcAge4(years[1]);
const age6 = calcAge4(years[years.length - 1]);
console.log(age4, age5, age6);

const ages = [calcAge4(years[0]), calcAge4(years[1]), calcAge4(years[years.length - 1])];
console.log(ages);


// Basic Array Operations (Methods)
const friends1 = ['Michael', 'Steven', 'Peter'];

// Add elements
const newLength = friends1.push('Jay');
console.log(friends1);
console.log(newLength);

friends1.unshift('John');
console.log(friends1);

// Remove elements
friends1.pop(); // Last
const popped = friends1.pop();
console.log(popped);
console.log(friends1);

friends1.shift(); // First
console.log(friends1);

console.log(friends1.indexOf('Steven'));
console.log(friends1.indexOf('Bob'));

friends1.push(23);
console.log(friends1.includes('Steven'));
console.log(friends1.includes('Bob'));
console.log(friends1.includes(23));

if (friends1.includes('Steven')) {
  console.log('You have a friend called Steven');
}


const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}
// const calcTip = bill => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log(bills, tips, totals);


// Introduction to Objects
const jonasArray = [
  'Jonas',
  'Schmedtmann',
  2037 - 1991,
  'teacher',
  ['Michael', 'Peter', 'Steven']
];




// Dot vs. Bracket Notation
const jonas2 = {
  firstName: 'Jonas',
  lastName: 'Schmedtmann',
  age: 2037 - 1991,
  job: 'teacher',
  friends: ['Michael', 'Peter', 'Steven']
};
console.log(jonas2);

console.log(jonas2.lastName);
console.log(jonas2['lastName']);

const nameKey = 'Name';
console.log(jonas2['first' + nameKey]);
console.log(jonas2['last' + nameKey]);

// console.log(jonas2.'last' + nameKey)

const interestedIn = prompt('What do you want to know about Jonas? Choose between firstName, lastName, age, job, and friends');

if (jonas2[interestedIn]) {
  console.log(jonas2[interestedIn]);
} else {
  console.log('Wrong request! Choose between firstName, lastName, age, job, and friends');
}

jonas2.location = 'Portugal';
jonas2['twitter'] = '@jonasschmedtman';
console.log(jonas2);


// "Jonas has 3 friends, and his best friend is called Michael"
console.log(`${jonas2.firstName} has ${jonas2.friends.length} friends, and his best friend is called ${jonas2.friends[0]}`);


// Object Methods

const jonas3 = {
  firstName: 'Jonas',
  lastName: 'Schmedtmann',
  birthYeah: 1991,
  job: 'teacher',
  friends: ['Michael', 'Peter', 'Steven'],
  hasDriversLicense: true,

  // calcAge: function (birthYeah) {
  //   return 2037 - birthYeah;
  // }

  // calcAge: function () {
  //   // console.log(this);
  //   return 2037 - this.birthYeah;
  // }

  calcAge5: function () {
    this.age = 2037 - this.birthYeah;
    return this.age;
  },

  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge5()}-year old ${jonas3.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license.`
  }
};

console.log(jonas3.calcAge5());

console.log(jonas3.age);
console.log(jonas3.age);
console.log(jonas3.age);


// "Jonas3 is a 46-year old teacher, and he has a driver's license"
console.log(jonas3.getSummary());


// Coding Challenge #3


const mark = {
  fullName: 'Mark Miller',
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  }
};

const john = {
  fullName: 'John Smith',
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  }
};

mark.calcBMI();
john.calcBMI();

console.log(mark.bmi, john.bmi);

// "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!"

if (mark.bmi > john.bmi) {
  console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s BMI (${john.bmi})`)
} else if (john.bmi > mark.bmi) {
  console.log(`${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s BMI (${mark.bmi})`)
}


// Iteration: The for Loop

console.log('Lifting weights repetition 1 🏋️‍♀️');
console.log('Lifting weights repetition 2 🏋️‍♀️');
console.log('Lifting weights repetition 3 🏋️‍♀️');
console.log('Lifting weights repetition 4 🏋️‍♀️');
console.log('Lifting weights repetition 5 🏋️‍♀️');
console.log('Lifting weights repetition 6 🏋️‍♀️');
console.log('Lifting weights repetition 7 🏋️‍♀️');
console.log('Lifting weights repetition 8 🏋️‍♀️');
console.log('Lifting weights repetition 9 🏋️‍♀️');
console.log('Lifting weights repetition 10 🏋️‍♀️');

// for loop keeps running while condition is TRUE
for (let rep = 1; rep <= 30; rep++) {
  console.log(`Lifting weights repetition ${rep} 🏋️‍♀️`);
}


///////////////////////////////////////
// Looping Arrays, Breaking and Continuing
const jonas4 = [
  'Jonas',
  'Schmedtmann',
  2037 - 1991,
  'teacher',
  ['Michael', 'Peter', 'Steven'],
  true
];
const types = [];

// console.log(jonas4[0])
// console.log(jonas4[1])
// ...
// console.log(jonas4[4])
// jonas4[5] does NOT exist

for (let i = 0; i < jonas4.length; i++) {
  // Reading from jonas4 array
  console.log(jonas4[i], typeof jonas4[i]);

  // Filling types array
  // types[i] = typeof jonas4[i];
  types.push(typeof jonas4[i]);
}

console.log(types);

const years1 = [1991, 2007, 1969, 2020];
const ages7 = [];

for (let i = 0; i < years1.length; i++) {
  ages7.push(2037 - years1[i]);
}
console.log(ages7);

// continue and break
console.log('--- ONLY STRINGS ---')
for (let i = 0; i < jonas4.length; i++) {
  if (typeof jonas4[i] !== 'string') continue;

  console.log(jonas4[i], typeof jonas4[i]);
}

console.log('--- BREAK WITH NUMBER ---')
for (let i = 0; i < jonas4.length; i++) {
  if (typeof jonas4[i] === 'number') break;

  console.log(jonas4[i], typeof jonas4[i]);
}


// Looping Backwards and Loops in Loops
const jonas5 = [
  'Jonas',
  'Schmedtmann',
  2037 - 1991,
  'teacher',
  ['Michael', 'Peter', 'Steven'],
  true
];

// 0, 1, ..., 4
// 4, 3, ..., 0

for (let i = jonas5.length - 1; i >= 0; i--) {
  console.log(i, jonas5[i]);
}

for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`-------- Starting exercise ${exercise}`);

  for (let rep = 1; rep < 6; rep++) {
    console.log(`Exercise ${exercise}: Lifting weight repetition ${rep} 🏋️‍♀️`);
  }
}

// The while Loop
for (let rep = 1; rep <= 10; rep++) {
  console.log(`Lifting weights repetition ${rep} 🏋️‍♀️`);
}

let rep = 1;
while (rep <= 10) {
  // console.log(`WHILE: Lifting weights repetition ${rep} 🏋️‍♀️`);
  rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) console.log('Loop is about to end...');
}

// Coding Challenge #4


const calcTip1 = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}
const bills1 = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips1 = [];
const totals1 = [];

for (let i = 0; i < bills1.length; i++) {
  const tip = calcTip1(bills1[i]);
  tips1.push(tip);
  totals.push(tip + bills1[i]);
}
console.log(bills1, tips1, totals1);

const calcAverage1 = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    // sum = sum + arr[i];
    sum += arr[i];
  }
  return sum / arr.length;
}
console.log(calcAverage1([2, 3, 7]));
console.log(calcAverage1(totals));
console.log(calcAverage1(tips));


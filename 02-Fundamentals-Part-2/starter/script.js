'use strict';

/* The following examples show how strict mode catches extra errors.
let hasDriversLicense = false;
const passTest = true;
if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log(`I can drive.`);
const interface = 'Test'
const private = 'Test'
*/

//Functions
function logger() {
    console.log(`My name is Jonas`);
}
logger(); // calling/running/invoking
logger();
logger();

function cutFruitPieces(fruit) {
    return fruit * 4;
}

//Functions calling other functions

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    const juice = `Juice with ${applePieces} apples and ${orangePieces} oranges.`;
    return juice;
}
const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);


//Declared
function calcAge1(birthYear) {
    return 2037 - birthYear
}
const age1 = calcAge1(1991);
console.log(age1);

//Anonymus - Function Expression
const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
}

const age2 = calcAge2(1991);
console.log(age1, age2);

//Arrow - Function expression
const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetire = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    return `${firstName} retires in ${retirement} years.`;
}

console.log(yearsUntilRetire(1991, 'Bob'));
console.log(yearsUntilRetire(1995, 'Jill'));

//Arrays
const friends = ['Tim', 'Matt', 'Tom'];
console.log(friends);

const yearList = new Array[1991, 1992, 1993];
console.log(yearList);
console.log(yearList[0]);
console.log(yearList.length);
console.log(yearList[yearList.length - 1]);

//Can store arrays within arrays
const testList = [friends, 21, 'Test', 42 - 1, `Test 2`];

//Running functions on arrays
const ageList = calcAge1(yearList[0]); //one item.

//Appending arrays.
friends.push('Jay');
//Adding elements to start/index 0
friends.unshift('Bob');
//Remove last element.
friends.pop();
//Remove First element.
friends.shift();
//Search for index location
friends.indexOf('Tom');
//Includes - Returns true/false
friends.includes('Tom');

//Objects
const michael = {
    firstName: 'Michael',
    lastName: 'Dobbs',
    age: '27',
    job: 'IT Specialist',
    friends: ['Logan', 'Rick', 'Connor']
}
console.log(michael)

//Retrieving object 
console.log(michael.lastName);
console.log(michael['lastName']); //This version allows for expressions to be entered. Example below.

//We can retrieve firstName and lastName with expressions.
const nameKey = 'Name';
console.log(michael['first' + nameKey]);
console.log(michael['last' + nameKey]);

const interestedIn = prompt('What do you want to know about Michael? (Choose firstName, lastName, age, job, and friends)')

if (michael[interestedIn]) {
    console.log(michael[interestedIn]);
} else {
    console.log(`Wrong Request! (Choose firstName, lastName, age, job, and friends)`);
}

michael.location = 'America';
michael['website'] = 'meetmichaeldobbs.com';
console.log(michael);

//Challenge! Write the following. Michael has 3 friends. His best friend is called Logan.

console.log(`${michael.firstName} has ${michael.friends.length} friends. His best friend is called ${michael.friends[0]}.`);

//Object Methods
const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    birthYear: 1991,
    job: 'Teacher',
    friends: ['Michael', 'Peter', 'Steven'],
    hasDriversLicense: true,

    calcAge: function (birthYear) {
        return 2037 - birthYear;
    },

    calcAge2: function () {
        console.log(this)
        return 2037 - this.birthYear
    },

    calcAndStore: function () {
        this.age = 2037 - this.birthYear;
        return this.age;
    },

    getSummary: function () {
        return `${this.firstName} is a ${this.calcAge2()}-year old ${this.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license.`;
    }
}

//Calling the object methods
console.log(jonas.calcAge(1991));
console.log(jonas['calcAge'](1991));

//Using 'this' keyword.
console.log(jonas.calcAge2());
console.log(jonas.calcAndStore());


//Challenge! Write the following:
//"Jonas is a 46-year old teacher, and he has a drivers license.""
console.log(jonas.getSummary());
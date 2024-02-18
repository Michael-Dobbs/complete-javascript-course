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